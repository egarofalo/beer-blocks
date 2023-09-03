import { __ } from "@wordpress/i18n";
import {
	RangeControl,
	__experimentalUnitControl as UnitControl,
	Disabled,
	ToggleControl,
	PanelBody,
	BaseControl,
} from "@wordpress/components";
import { camelCase, has, get } from "lodash";
import grid from "./grid";
import units from "./units";

// check if value is a valid width
const validWidth = (value) => value !== undefined && value !== "";

// check if value is a valid height
const validHeight = (value) => value !== undefined && value !== "";

// returns width attribute with breakpoints
const widthAttribute = ({
	attrPrefix = "",
	type = "string",
	breakpointsBehavior = false,
	defaultValue = undefined,
} = {}) =>
	grid.attributes({
		attrName: camelCase(`${attrPrefix}-width`),
		breakpoints: true,
		breakpointsBehavior,
		defaultValue,
		type,
	});

// returns height attribute with breakpoints
const heightAttribute = ({
	attrPrefix = "",
	type = "string",
	breakpointsBehavior = false,
	defaultValue = undefined,
} = {}) =>
	grid.attributes({
		attrName: camelCase(`${attrPrefix}-height`),
		breakpoints: true,
		breakpointsBehavior,
		defaultValue,
		type,
	});

// returns auto-height attribute with breakpoints
const autoHeightAttribute = ({
	attrPrefix = "",
	breakpointsBehavior = false,
	defaultValue = false,
} = {}) =>
	grid.attributes({
		attrName: camelCase(`${attrPrefix}-"auto-height"`),
		breakpoints: true,
		breakpointsBehavior,
		defaultValue,
		type: "boolean",
	});

// returns width and height attributes
export const attributes = ({
	attrPrefix = "",
	widthAttr = true,
	widthDefaultValue = undefined,
	widthType = "string",
	heightAttr = true,
	heightDefaultValue = undefined,
	heightType = "string",
	autoHeightAttr = true,
	autoHeightDefaultValue = false,
} = {}) => ({
	...(widthAttr
		? widthAttribute({
				attrPrefix,
				defaultValue: widthDefaultValue,
				type: widthType,
		  })
		: {}),
	...(heightAttr
		? heightAttribute({
				attrPrefix,
				defaultValue: heightDefaultValue,
				type: heightType,
		  })
		: {}),
	...(autoHeightAttr
		? autoHeightAttribute({
				attrPrefix,
				defaultValue: autoHeightDefaultValue,
		  })
		: {}),
	...grid.breakpointsBehaviorAttribute(`${attrPrefix}-size`),
});

// return width block attribute control
const widthControl = ({
	props,
	breakpoint,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = "",
	label = sprintf(__("Width (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	type = "string",
	minWidth = 0,
	maxWidth = 500,
}) => {
	const attrName = camelCase(`${attrPrefix}-width`);
	const breakpointsBehaviorAttrName = camelCase(
		`${breakpointsBehaviorAttrPrefix}-breakpoints-behavior`
	);

	const {
		setAttributes,
		attributes: {
			[attrName]: width,
			[breakpointsBehaviorAttrName]: breakpointsBehavior,
		},
	} = props;

	if (breakpointsBehavior[breakpoint] === grid.sameBehavior) {
		return null;
	}

	const change = (newWidth) =>
		setAttributes({
			[attrName]: {
				...width,
				[breakpoint]: newWidth,
			},
		});

	const unitChange = () => {};

	return (
		<BaseControl label={label}>
			{type === "number" ? (
				<RangeControl
					value={width[breakpoint]}
					onChange={change}
					min={minWidth}
					max={maxWidth}
					step={1}
				/>
			) : (
				<UnitControl
					value={width[breakpoint]}
					onChange={change}
					onUnitChange={unitChange}
					units={units}
				/>
			)}
		</BaseControl>
	);
};

// return height attribute control
const heightControl = ({
	props,
	breakpoint,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = "",
	label = sprintf(__("Height (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	type = "string",
	minHeight = 0,
	maxHeight = 100,
	autoHeightLabel = sprintf(
		__("Auto height (%s)", "beer-blocks"),
		breakpoint.toUpperCase()
	),
}) => {
	const attrName = camelCase(`${attrPrefix}-height`);
	const autoHeightAttrName = camelCase(`${attrPrefix}-auto-height`);
	const breakpointsBehaviorAttrName = camelCase(
		`${breakpointsBehaviorAttrPrefix}-breakpoints-behavior`
	);

	const {
		setAttributes,
		attributes: {
			[attrName]: height,
			[autoHeightAttrName]: autoHeight = undefined,
			[breakpointsBehaviorAttrName]: breakpointsBehavior,
		},
	} = props;

	if (breakpointsBehavior[breakpoint] === grid.sameBehavior) {
		return null;
	}

	const change = (newHeight) =>
		setAttributes({
			[attrName]: {
				...height,
				[breakpoint]: newHeight,
			},
		});

	const unitChange = () => {};

	const autoHeightControlChange = () =>
		setAttributes({
			[autoHeightAttrName]: {
				...autoHeight,
				[breakpoint]: !autoHeight[breakpoint],
			},
		});

	const autoHeightControl =
		autoHeight !== undefined ? (
			<ToggleControl
				label={autoHeightLabel}
				checked={autoHeight[breakpoint]}
				onChange={autoHeightControlChange}
			/>
		) : null;

	const heightControl =
		type === "number" ? (
			<BaseControl label={label}>
				<RangeControl
					value={height[breakpoint]}
					onChange={change}
					min={minHeight}
					max={maxHeight}
					step={1}
				/>
			</BaseControl>
		) : (
			<BaseControl label={label}>
				<UnitControl
					value={height[breakpoint]}
					onChange={change}
					onUnitChange={unitChange}
					units={units}
				/>
			</BaseControl>
		);

	const disableHeightControl =
		autoHeight !== undefined && autoHeight[breakpoint];

	return (
		<>
			{disableHeightControl ? (
				<Disabled>{heightControl}</Disabled>
			) : (
				heightControl
			)}
			{autoHeightControl}
		</>
	);
};

// returns controls for width and height attributes with breakpoints
export const controls = ({
	props,
	initialOpen = false,
	attrPrefix = "",
	panelBody = true,
	title = __("Size", "beer-blocks"),
	widthControlLabel = (breakpoint) =>
		sprintf(__("Width (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	heightControlLabel = (breakpoint) =>
		sprintf(__("Height (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	autoHeightControlLabel = (breakpoint) =>
		sprintf(__("Auto height (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	widthType = "string",
	heightType = "string",
	minWidth = 0,
	maxWidth = 500,
	minHeight = 0,
	maxHeight = 100,
}) => {
	const { attributes } = props;
	const widthAttrName = camelCase(`${attrPrefix}-width`);
	const heightAttrName = camelCase(`${attrPrefix}-height`);
	const breakpointsBehaviorAttrPrefix = `${attrPrefix}-size`;
	const affectedAttrs = [widthAttrName, heightAttrName].filter((attr) =>
		has(attributes, attr)
	);

	if (affectedAttrs.length > 0) {
		const breakpointsTabs = grid.getBreakpointsTabs((breakpoint) => (
			<>
				{grid.getBreakpointsBehaviorControl({
					props,
					attrPrefix: breakpointsBehaviorAttrPrefix,
					breakpoint,
					affectedAttrs,
				})}

				{has(attributes, widthAttrName) &&
					widthControl({
						props,
						breakpoint,
						breakpointsBehaviorAttrPrefix,
						attrPrefix,
						label: widthControlLabel(breakpoint),
						type: widthType,
						minWidth,
						maxWidth,
					})}

				{has(attributes, heightAttrName) &&
					heightControl({
						props,
						breakpoint,
						breakpointsBehaviorAttrPrefix,
						attrPrefix,
						label: heightControlLabel(breakpoint),
						type: heightType,
						minHeight,
						maxHeight,
						autoHeightLabel: autoHeightControlLabel(breakpoint),
					})}
			</>
		));

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

// returns width css vars for style html attribute
export const widthCssVars = (props, blockName, attrPrefix = "") => {
	const attrName = camelCase(`${attrPrefix}-width`);
	const {
		attributes: { [attrName]: width = undefined },
	} = props;

	return width
		? Object.fromEntries(
				grid.breakpoints
					.map((breakpoint) => [
						`--wp-beer-blocks-${blockName}-${attrName}-${breakpoint}`,
						typeof width[breakpoint] === "number"
							? `${width[breakpoint]}px`
							: width[breakpoint],
					])
					.filter((cssVar) => validWidth(cssVar[1]))
		  )
		: {};
};

// returns css classes that enable width rule
export const widthCssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	const attrName = camelCase(`${attrPrefix}-width`);
	const {
		attributes: { [attrName]: width = undefined },
	} = props;

	const widthClasses = () =>
		grid.breakpoints
			.map((breakpoint) =>
				validWidth(get(width, breakpoint))
					? `wp-beer-blocks-has-width-${breakpoint}-rule`
					: false
			)
			.filter((cssClass) => cssClass);

	const widthClass = width
		? `${addWhitespaceBefore && " "}${widthClasses().join(" ")}`
		: "";

	return widthClass.trimEnd();
};

// returns height css vars for style html attribute
export const heightCssVars = (props, blockName, attrPrefix = "") => {
	const attrName = camelCase(`${attrPrefix}-height`);
	const autoHeightAttrName = camelCase(`${attrPrefix}-auto-height`);
	const {
		attributes: {
			[attrName]: height = undefined,
			[autoHeightAttrName]: autoHeight = undefined,
		},
	} = props;

	return height
		? Object.fromEntries(
				grid.breakpoints
					.map((breakpoint) => [
						`--wp-beer-blocks-${blockName}-${attrName}-${breakpoint}`,
						autoHeight && autoHeight[breakpoint]
							? "auto"
							: typeof height[breakpoint] === "number"
							? `${height[breakpoint]}px`
							: height[breakpoint],
					])
					.filter((cssVar) => validHeight(cssVar[1]))
		  )
		: {};
};

// returns css classes that enable height rule
export const heightCssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	const heightAttrName = camelCase(`${attrPrefix}-height`);
	const {
		attributes: { [heightAttrName]: height = undefined },
	} = props;

	const heightClasses = () =>
		grid.breakpoints
			.map((breakpoint) =>
				validHeight(get(height, breakpoint))
					? `wp-beer-blocks-has-height-${breakpoint}-rule`
					: false
			)
			.filter((cssClass) => cssClass);

	const heightClass = height
		? `${addWhitespaceBefore && " "}${heightClasses().join(" ")}`
		: "";

	return heightClass.trimEnd();
};

// returns width and height css vars
export const cssVars = (props, blockName, attrPrefix = "") => ({
	...widthCssVars(props, blockName, attrPrefix),
	...heightCssVars(props, blockName, attrPrefix),
});

// returns css classes that enable the rules used in this helper
export const cssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	const classes = `${widthCssClasses(props, attrPrefix)}${heightCssClasses(
		props,
		attrPrefix
	)}`.trimStart();

	return `${addWhitespaceBefore ? " " : ""}${classes}`.trimEnd();
};

export default {
	attributes,
	controls,
	cssVars,
	widthCssVars,
	heightCssVars,
	cssClasses,
	widthCssClasses,
	heightCssClasses,
};
