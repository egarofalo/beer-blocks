import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	ToggleControl,
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { camelCase, isEmpty, capitalize, get, has } from "lodash";
import grid from "./grid";

const defaultUnits = [
	{ value: "px", label: "PX" },
	{ value: "em", label: "EM" },
	{ value: "rem", label: "REM" },
];

// check if value is a valid padding
const validPadding = (value) => value !== undefined && value !== "";

// check if value is a valid margin
const validMargin = (value) => value !== undefined && value !== "";

// returns block padding attributes
const paddingAttribute = ({
	attrPrefix = "",
	paddingSides = ["top", "right", "bottom", "left"],
	breakpointsBehavior = false,
} = {}) => {
	if (isEmpty(paddingSides)) {
		return {};
	}

	const paddingAttribute = Object.fromEntries(
		paddingSides.map((side) => [side, undefined])
	);

	return grid.attributes({
		attrName: camelCase(`${attrPrefix}-padding`),
		breakpoints: true,
		breakpointsBehavior,
		defaultValue: paddingAttribute,
		type: "object",
	});
};

// returns block margin attributes
const marginAttribute = ({
	attrPrefix = "",
	marginSides = ["top", "right", "bottom", "left"],
	breakpointsBehavior = false,
} = {}) => {
	if (isEmpty(marginSides)) {
		return {};
	}

	const marginAttribute = Object.fromEntries(
		marginSides.map((side) => [side, undefined])
	);

	return grid.attributes({
		attrName: camelCase(`${attrPrefix}-margin`),
		breakpoints: true,
		breakpointsBehavior,
		defaultValue: marginAttribute,
		type: "object",
	});
};

// returns block horizontal centering attributes
const horizontalCenteringAttribute = ({
	attrPrefix = "",
	breakpointsBehavior = false,
} = {}) =>
	grid.attributes({
		attrName: camelCase(`${attrPrefix}-mx-auto`),
		breakpoints: true,
		breakpointsBehavior,
		defaultValue: false,
		type: "object",
	});

// returns padding and margin attributes
export const attributes = ({
	attrPrefix = "",
	paddingSides = ["top", "right", "bottom", "left"],
	marginSides = ["top", "right", "bottom", "left"],
	horizontalCenteringAttr = false,
} = {}) => ({
	...paddingAttribute({
		attrPrefix,
		paddingSides,
	}),
	...marginAttribute({
		attrPrefix,
		marginSides,
	}),
	...(horizontalCenteringAttr
		? horizontalCenteringAttribute({ attrPrefix })
		: {}),
	...grid.breakpointsBehaviorAttribute(`${attrPrefix}-spacing`),
});

// returns controls for padding attributes with breakpoints
const paddingControl = ({
	props,
	breakpoint,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = "",
	label = sprintf(__("Padding (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	sides = ["top", "right", "bottom", "left"],
}) => {
	const attrName = camelCase(`${attrPrefix}-padding`);
	const breakpointsBehaviorAttrName = camelCase(
		`${breakpointsBehaviorAttrPrefix}-breakpoints-behavior`
	);

	const {
		setAttributes,
		attributes: {
			[attrName]: padding,
			[breakpointsBehaviorAttrName]: breakpointsBehavior,
		},
	} = props;

	if (isEmpty(sides) || breakpointsBehavior[breakpoint] === grid.sameBehavior) {
		return null;
	}

	const defaultValue = Object.fromEntries(
		sides.map((side) => [side, undefined])
	);

	const change = (newPadding) =>
		setAttributes({
			[attrName]: {
				...padding,
				[breakpoint]: {
					...defaultValue,
					...newPadding,
				},
			},
		});

	return (
		<BoxControl
			label={label}
			allowReset
			resetValues={defaultValue}
			units={defaultUnits}
			values={padding[breakpoint]}
			onChange={change}
			sides={sides}
		/>
	);
};

// returns controls for margin attributes with breakpoints
const marginControl = ({
	props,
	breakpoint,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = "",
	label = sprintf(__("Margin (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	sides = ["top", "right", "bottom", "left"],
}) => {
	const attrName = camelCase(`${attrPrefix}-margin`);
	const breakpointsBehaviorAttrName = camelCase(
		`${breakpointsBehaviorAttrPrefix}-breakpoints-behavior`
	);

	const {
		setAttributes,
		attributes: {
			[attrName]: margin,
			[breakpointsBehaviorAttrName]: breakpointsBehavior,
		},
	} = props;

	if (isEmpty(sides) || breakpointsBehavior[breakpoint] === grid.sameBehavior) {
		return null;
	}

	const defaultValue = Object.fromEntries(
		sides.map((side) => [side, undefined])
	);

	const change = (newMargin) =>
		setAttributes({
			[attrName]: {
				...margin,
				[breakpoint]: {
					...defaultValue,
					...newMargin,
				},
			},
		});

	return (
		<BoxControl
			label={label}
			allowReset
			resetValues={defaultValue}
			units={defaultUnits}
			values={margin[breakpoint]}
			onChange={change}
			sides={sides}
		/>
	);
};

// returns horizontal centering control
const horizontalCenteringControl = ({
	props,
	breakpoint,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = "",
	label = sprintf(
		__("Enable horizontal centering (%s)", "beer-blocks"),
		breakpoint.toUpperCase()
	),
}) => {
	const attrName = camelCase(`${attrPrefix}-mx-auto`);
	const breakpointsBehaviorAttrName = camelCase(
		`${breakpointsBehaviorAttrPrefix}-breakpoints-behavior`
	);

	const {
		setAttributes,
		attributes: {
			[attrName]: mxAuto,
			[breakpointsBehaviorAttrName]: breakpointsBehavior,
		},
	} = props;

	if (breakpointsBehavior[breakpoint] === grid.sameBehavior) {
		return null;
	}

	const change = () =>
		setAttributes({
			[attrName]: {
				...mxAuto,
				[breakpoint]: !mxAuto[breakpoint],
			},
		});

	return (
		<ToggleControl
			label={label}
			checked={mxAuto[breakpoint]}
			onChange={change}
		/>
	);
};

// returns controls for margin and padding attributes with breakpoints
export const controls = ({
	props,
	initialOpen = false,
	attrPrefix = "",
	panelBody = true,
	title = __("Spacing", "beer-blocks"),
	paddingControlLabel = (breakpoint) =>
		sprintf(__("Padding (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	marginControlLabel = (breakpoint) =>
		sprintf(__("Margin (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	horizontalCenteringControlLabel = (breakpoint) =>
		sprintf(
			__("Enable horizontal centering (%s)", "beer-blocks"),
			breakpoint.toUpperCase()
		),
	paddingSides = ["top", "right", "bottom", "left"],
	marginSides = ["top", "right", "bottom", "left"],
}) => {
	const { attributes } = props;
	const paddingAttrName = camelCase(`${attrPrefix}-padding`);
	const marginAttrName = camelCase(`${attrPrefix}-margin`);
	const mxAutoAttrName = camelCase(`${attrPrefix}-mx-auto`);
	const breakpointsBehaviorAttrPrefix = `${attrPrefix}-spacing`;
	const affectedAttrs = [
		paddingAttrName,
		marginAttrName,
		mxAutoAttrName,
	].filter((attr) => has(attributes, attr));

	if (affectedAttrs.length > 0) {
		const breakpointsTabs = (
			<>
				{grid.getBreakpointsTabs((breakpoint) => (
					<>
						{grid.getBreakpointsBehaviorControl({
							props,
							attrPrefix: breakpointsBehaviorAttrPrefix,
							breakpoint,
							affectedAttrs,
						})}

						{has(attributes, paddingAttrName) &&
							paddingControl({
								props,
								breakpoint,
								attrPrefix,
								breakpointsBehaviorAttrPrefix,
								label: paddingControlLabel(breakpoint),
								sides: paddingSides,
							})}

						{has(attributes, marginAttrName) &&
							marginControl({
								props,
								breakpoint,
								attrPrefix,
								breakpointsBehaviorAttrPrefix,
								label: marginControlLabel(breakpoint),
								sides: marginSides,
							})}

						{has(attributes, mxAutoAttrName) &&
							horizontalCenteringControl({
								props,
								breakpoint,
								attrPrefix,
								breakpointsBehaviorAttrPrefix,
								label: horizontalCenteringControlLabel(breakpoint),
							})}
					</>
				))}
			</>
		);

		return panelBody ? (
			<PanelBody title={title} initialOpen={initialOpen}>
				{breakpointsTabs}
			</PanelBody>
		) : (
			breakpointsTabs
		);
	}

	return null;
};

// returns padding css vars for style html attribute
export const paddingCssVars = (props, blockName, attrPrefix = "") => {
	const attrName = camelCase(`${attrPrefix}-padding`);
	const {
		attributes: { [attrName]: padding = undefined },
	} = props;

	const paddingSideVars = (side) =>
		Object.fromEntries(
			grid.breakpoints
				.map((breakpoint) => [
					`--wp-beer-blocks-${blockName}-${
						attrName + capitalize(side)
					}-${breakpoint}`,
					get(padding, `${breakpoint}.${side}`),
				])
				.filter((cssVar) => validPadding(cssVar[1]))
		);

	return padding
		? {
				...paddingSideVars("top"),
				...paddingSideVars("right"),
				...paddingSideVars("bottom"),
				...paddingSideVars("left"),
		  }
		: {};
};

// returns css classes that enable padding rule
export const paddingCssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	const attrName = camelCase(`${attrPrefix}-padding`);
	const {
		attributes: { [attrName]: padding = undefined },
	} = props;

	const paddingSideClasses = (side) =>
		grid.breakpoints
			.map((breakpoint) =>
				validPadding(get(padding, `${breakpoint}.${side}`))
					? `wp-beer-blocks-has-padding-${side}-${breakpoint}-rule`
					: false
			)
			.filter((cssClass) => cssClass);

	const paddingClass = padding
		? `${addWhitespaceBefore ? " " : ""}${[
				...paddingSideClasses("top"),
				...paddingSideClasses("right"),
				...paddingSideClasses("bottom"),
				...paddingSideClasses("left"),
		  ].join(" ")}`
		: "";

	return paddingClass.trimEnd();
};

// returns margin css vars for style html attribute
export const marginCssVars = (props, blockName, attrPrefix = "") => {
	const attrName = camelCase(`${attrPrefix}-margin`);
	const {
		attributes: { [attrName]: margin = undefined },
	} = props;

	const marginSideVars = (side) =>
		Object.fromEntries(
			grid.breakpoints
				.map((breakpoint) => [
					`--wp-beer-blocks-${blockName}-${
						attrName + capitalize(side)
					}-${breakpoint}`,
					get(margin, `${breakpoint}.${side}`),
				])
				.filter((cssVar) => validMargin(cssVar[1]))
		);

	return margin
		? {
				...marginSideVars("top"),
				...marginSideVars("right"),
				...marginSideVars("bottom"),
				...marginSideVars("left"),
		  }
		: {};
};

// returns css classes that enable margin rule
export const marginCssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	const attrName = camelCase(`${attrPrefix}-margin`);
	const mxAutoAttrName = camelCase(`${attrPrefix}-mx-auto`);
	const {
		attributes: {
			[attrName]: margin = undefined,
			[mxAutoAttrName]: mxAuto = undefined,
		},
	} = props;

	const marginSideClasses = (side) =>
		grid.breakpoints
			.map((breakpoint) =>
				validMargin(get(margin, `${breakpoint}.${side}`))
					? `wp-beer-blocks-has-margin-${side}-${breakpoint}-rule`
					: false
			)
			.filter((cssClass) => cssClass);

	const mxAutoClasses = () =>
		grid.breakpoints
			.map((breakpoint) =>
				get(mxAuto, breakpoint)
					? `mx${breakpoint !== "xs" ? `-${breakpoint}` : ""}-auto`
					: false
			)
			.filter((cssClass) => cssClass);

	const marginClass = margin
		? `${addWhitespaceBefore ? " " : ""}${[
				...marginSideClasses("top"),
				...marginSideClasses("right"),
				...marginSideClasses("bottom"),
				...marginSideClasses("left"),
				...mxAutoClasses(),
		  ].join(" ")}`
		: "";

	return marginClass.trimEnd();
};

// returns css vars for all spacing attributes
export const cssVars = (props, blockName, attrPrefix = "") => ({
	...paddingCssVars(props, blockName, attrPrefix),
	...marginCssVars(props, blockName, attrPrefix),
});

// returns css classes that enable the rules used in this helper
export const cssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	const classes = `${paddingCssClasses(props, attrPrefix)}${marginCssClasses(
		props,
		attrPrefix
	)}`.trimStart();

	return `${addWhitespaceBefore ? " " : ""}${classes}`.trimEnd();
};

export default {
	attributes,
	controls,
	paddingCssVars,
	marginCssVars,
	cssVars,
	paddingCssClasses,
	marginCssClasses,
	cssClasses,
};
