import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { camelCase, isEmpty, capitalize, has, isString } from "lodash";
import grid from "./grid";

const defaultUnits = [
	{ value: "px", label: "PX" },
	{ value: "em", label: "EM" },
	{ value: "rem", label: "REM" },
];

const getDefaultValue = (defaultValue, side) => {
	let spacing = undefined;

	if (has(defaultValue, side)) {
		spacing = defaultValue[side];
	} else if (isString(defaultValue)) {
		spacing = defaultValue;
	}

	return [side, spacing];
};

// returns block padding attributes
export const paddingAttribute = ({
	attrPrefix = "",
	paddingSides = ["top", "right", "bottom", "left"],
	defaultPadding = undefined,
	breakpoints = false,
	breakpointsBehavior = false,
} = {}) => {
	if (isEmpty(paddingSides)) {
		return {};
	}

	const paddingAttribute = Object.fromEntries(
		paddingSides.map((side) => getDefaultValue(defaultPadding, side))
	);

	return grid.attributes({
		attrName: camelCase(`${attrPrefix}-padding`),
		breakpoints,
		breakpointsBehavior,
		defaultValue: paddingAttribute,
		type: "object",
	});
};

// returns padding attributes controls
export const paddingControl = ({
	props,
	attrPrefix = "",
	defaultPadding = undefined,
}) => {
	const attrName = camelCase(`${attrPrefix}-padding`);

	const {
		setAttributes,
		attributes: { [attrName]: padding },
	} = props;

	if (isEmpty(padding)) {
		return null;
	}

	const sides = Object.keys(padding);
	const defaultValues = Object.fromEntries(
		sides.map((side) => getDefaultValue(defaultPadding, side))
	);

	return (
		<BoxControl
			label={__("Padding", "beer-blocks")}
			allowReset={true}
			resetValues={defaultValues}
			units={defaultUnits}
			values={padding}
			onChange={(nextValues) => setAttributes({ [attrName]: nextValues })}
			sides={sides}
		/>
	);
};

// returns controls for padding attributes with breakpoints
export const paddingBreakpointsControl = ({
	props,
	breakpoint,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = "",
	label = sprintf(__("Padding (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	defaultPadding = undefined,
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

	const sides = Object.keys(
		Object.entries(padding).filter((value) => value[0] === breakpoint)[0][1]
	);
	const defaultValue = Object.fromEntries(
		sides.map((side) => getDefaultValue(defaultPadding, side))
	);

	if (breakpointsBehavior[breakpoint] === grid.sameBehavior) {
		return null;
	}

	const nextBreakpoints = grid.getNextBreakpoints(
		breakpoint,
		breakpointsBehavior
	);

	const change = (newPadding) =>
		setAttributes({
			[attrName]: {
				...padding,
				[breakpoint]: newPadding,
				...(nextBreakpoints.length > 0
					? Object.fromEntries(
							nextBreakpoints.map((nextBreakpoint) => [
								nextBreakpoint,
								newPadding,
							])
					  )
					: {}),
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

// return padding inline styles
export const paddingStyles = (props, attrPrefix = "") => {
	const attrName = camelCase(`${attrPrefix}-padding`);

	const {
		attributes: {
			[attrName]: padding = {
				top: undefined,
				right: undefined,
				bottom: undefined,
				left: undefined,
			},
		},
	} = props;

	const { top, right, bottom, left } = padding;

	return {
		...(top ? { paddingTop: top } : {}),
		...(right ? { paddingRight: right } : {}),
		...(bottom ? { paddingBottom: bottom } : {}),
		...(left ? { paddingLeft: left } : {}),
	};
};

// returns padding css vars for style html attribute
export const paddingCssVars = (props, blockName, attrPrefix = "") => {
	const attrName = camelCase(`${attrPrefix}-padding`);
	const {
		attributes: { [attrName]: padding },
	} = props;

	const paddingSideVars = (side) =>
		Object.fromEntries(
			grid.breakpoints
				.map((breakpoint) => [
					`--wp-beer-blocks-${blockName}-${attrName + capitalize(side)}${
						breakpoint !== "xs" ? `-${breakpoint}` : ""
					}`,
					padding[breakpoint][side],
				])
				.filter((cssVar) => cssVar[1] !== "")
		);

	return {
		...paddingSideVars("top"),
		...paddingSideVars("right"),
		...paddingSideVars("bottom"),
		...paddingSideVars("left"),
	};
};

// returns block margin attributes
export const marginAttribute = ({
	attrPrefix = "",
	marginSides = ["top", "right", "bottom", "left"],
	defaultMargin = undefined,
	breakpoints = false,
	breakpointsBehavior = false,
} = {}) => {
	if (isEmpty(marginSides)) {
		return {};
	}

	const marginAttribute = Object.fromEntries(
		marginSides.map((side) => getDefaultValue(defaultMargin, side))
	);

	return grid.attributes({
		attrName: camelCase(`${attrPrefix}-margin`),
		breakpoints,
		breakpointsBehavior,
		defaultValue: marginAttribute,
		type: "object",
	});
};

// returns margin attributes controls
export const marginControl = ({
	props,
	attrPrefix = "",
	defaultMargin = undefined,
}) => {
	const attrName = camelCase(`${attrPrefix}-margin`);
	const {
		setAttributes,
		attributes: { [attrName]: margin },
	} = props;

	if (isEmpty(margin)) {
		return null;
	}

	const sides = Object.keys(margin);
	const defaultValues = Object.fromEntries(
		sides.map((side) => getDefaultValue(defaultMargin, side))
	);

	return (
		<BoxControl
			label={__("Margin", "beer-blocks")}
			allowReset={true}
			resetValues={defaultValues}
			units={defaultUnits}
			values={margin}
			onChange={(nextValues) => setAttributes({ [attrName]: nextValues })}
			sides={sides}
		/>
	);
};

// returns controls for margin attributes with breakpoints
export const marginBreakpointsControl = ({
	props,
	breakpoint,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = "",
	label = sprintf(__("Margin (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	defaultMargin = undefined,
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

	const sides = Object.keys(
		Object.entries(margin).filter((value) => value[0] === breakpoint)[0][1]
	);

	const defaultValue = Object.fromEntries(
		sides.map((side) => getDefaultValue(defaultMargin, side))
	);

	if (breakpointsBehavior[breakpoint] === grid.sameBehavior) {
		return null;
	}

	const nextBreakpoints = grid.getNextBreakpoints(
		breakpoint,
		breakpointsBehavior
	);

	const change = (newMargin) =>
		setAttributes({
			[attrName]: {
				...margin,
				[breakpoint]: newMargin,
				...(nextBreakpoints.length > 0
					? Object.fromEntries(
							nextBreakpoints.map((nextBreakpoint) => [
								nextBreakpoint,
								newMargin,
							])
					  )
					: {}),
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

// returns margin inline styles
export const marginStyles = (props, attrPrefix = "") => {
	const attrName = camelCase(`${attrPrefix}-margin`);

	const {
		attributes: {
			[attrName]: margin = {
				top: undefined,
				right: undefined,
				bottom: undefined,
				left: undefined,
			},
		},
	} = props;

	const { top, right, bottom, left } = margin;

	return {
		...(top ? { marginTop: top } : {}),
		...(right ? { marginRight: right } : {}),
		...(bottom ? { marginBottom: bottom } : {}),
		...(left ? { marginLeft: left } : {}),
	};
};

// returns margin css vars for style html attribute
export const marginCssVars = (props, blockName, attrPrefix = "") => {
	const attrName = camelCase(`${attrPrefix}-margin`);
	const {
		attributes: { [attrName]: margin },
	} = props;

	const marginSideVars = (side) =>
		Object.fromEntries(
			grid.breakpoints
				.map((breakpoint) => [
					`--wp-beer-blocks-${blockName}-${attrName + capitalize(side)}${
						breakpoint !== "xs" ? `-${breakpoint}` : ""
					}`,
					margin[breakpoint][side],
				])
				.filter((cssVar) => cssVar[1] !== "")
		);

	return {
		...marginSideVars("top"),
		...marginSideVars("right"),
		...marginSideVars("bottom"),
		...marginSideVars("left"),
	};
};

// returns padding and margin attributes
export const attributes = ({
	attrPrefix = "",
	paddingSides = ["top", "right", "bottom", "left"],
	marginSides = ["top", "right", "bottom", "left"],
	defaultPadding = undefined,
	defaultMargin = undefined,
	breakpoints = false,
	breakpointsBehaviorAttrPrefix = "spacing",
} = {}) => ({
	...paddingAttribute({
		attrPrefix,
		paddingSides,
		defaultPadding,
		breakpoints,
		breakpointsBehavior: false,
	}),
	...marginAttribute({
		attrPrefix,
		marginSides,
		defaultMargin,
		breakpoints,
		breakpointsBehavior: false,
	}),
	...(breakpoints
		? grid.breakpointsBehaviorAttribute(breakpointsBehaviorAttrPrefix)
		: {}),
});

// returns margin and padding controls
export const innerControls = (props, attrPrefix = "") => (
	<>
		{paddingControl({ props, attrPrefix })}
		{marginControl({ props, attrPrefix })}
	</>
);

// returns margin and padding controls wrapped into a PanelBody component
export const controls = ({
	props,
	initialOpen = false,
	attrPrefix = "",
	panelBody = true,
	title = __("Spacing", "beer-blocks"),
}) =>
	panelBody ? (
		<PanelBody title={title} initialOpen={initialOpen}>
			{innerControls(props, attrPrefix)}
		</PanelBody>
	) : (
		innerControls(props, attrPrefix)
	);

// returns controls for margin and padding attributes with breakpoints
export const breakpointsControls = ({
	props,
	initialOpen = false,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = "spacing",
	panelBody = true,
	title = __("Spacing", "beer-blocks"),
	paddingControlLabel = (breakpoint) =>
		sprintf(__("Padding (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	marginControlLabel = (breakpoint) =>
		sprintf(__("Margin (%s)", "beer-blocks"), breakpoint.toUpperCase()),
}) => {
	const attrPadding = camelCase(`${attrPrefix}-padding`);
	const attrMargin = camelCase(`${attrPrefix}-margin`);
	const affectedAttrs = [attrPadding, attrMargin].filter(
		(attr) => typeof props.attributes[attr] !== "undefined"
	);
	const { [attrPadding]: padding, [attrMargin]: margin } = props.attributes;

	const result = (
		<>
			{grid.getBreakpointsTabs((breakpoint) => (
				<>
					{grid.getBreakpointsBehaviorControl({
						props,
						attrPrefix: breakpointsBehaviorAttrPrefix,
						breakpoint,
						affectedAttrs,
					})}

					{typeof padding !== "undefined" &&
						paddingBreakpointsControl({
							props,
							breakpoint,
							attrPrefix,
							breakpointsBehaviorAttrPrefix,
							label: paddingControlLabel(breakpoint),
						})}

					{typeof margin !== "undefined" &&
						marginBreakpointsControl({
							props,
							breakpoint,
							attrPrefix,
							breakpointsBehaviorAttrPrefix,
							label: marginControlLabel(breakpoint),
						})}
				</>
			))}
		</>
	);

	return panelBody ? (
		<PanelBody title={title} initialOpen={initialOpen}>
			{result}
		</PanelBody>
	) : (
		result
	);
};

// returns margin and padding inline styles
export const styles = (props, attrPrefix = "") => ({
	...paddingStyles(props, attrPrefix),
	...marginStyles(props, attrPrefix),
});

export default {
	paddingAttribute,
	paddingControl,
	paddingBreakpointsControl,
	paddingStyles,
	paddingCssVars,
	marginAttribute,
	marginControl,
	marginBreakpointsControl,
	marginStyles,
	marginCssVars,
	attributes,
	innerControls,
	controls,
	breakpointsControls,
	styles,
};
