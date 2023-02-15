import { __ } from "@wordpress/i18n";
import {
	RangeControl,
	__experimentalUnitControl as UnitControl,
	Disabled,
	ToggleControl,
	PanelBody,
	BaseControl,
} from "@wordpress/components";
import { camelCase, has } from "lodash";
import grid from "./grid";
import units from "./units";

// check if value is a valid width
const validWidth = (value) => value !== undefined && value !== "";

// check if value is a valid height
const validHeight = (value) => value !== undefined && value !== "";

// returns attributes name
const attrName = (attr, attrPrefix = "") => camelCase(`${attrPrefix}-${attr}`);

// returns width attribute with breakpoints
const widthAttribute = ({
	attrPrefix = "",
	breakpoints = false,
	defaultValue = undefined,
	type = "string",
} = {}) =>
	grid.attributes({
		attrName: attrName("width", attrPrefix),
		breakpoints,
		breakpointsBehavior: false,
		defaultValue,
		type,
	});

// returns height attribute with breakpoints
const heightAttribute = ({
	attrPrefix = "",
	breakpoints = false,
	defaultValue = undefined,
	type = "string",
} = {}) =>
	grid.attributes({
		attrName: attrName("height", attrPrefix),
		breakpoints,
		breakpointBehavior: false,
		defaultValue,
		type,
	});

// returns auto-height attribute with breakpoints
const autoHeightAttribute = ({
	attrPrefix = "",
	breakpoints = false,
	defaultValue = false,
} = {}) =>
	grid.attributes({
		attrName: attrName("auto-height", attrPrefix),
		breakpoints,
		breakpointBehavior: false,
		defaultValue,
		type: "boolean",
	});

// returns width and height attributes
export const attributes = ({
	attrPrefix = "",
	breakpoints = false,
	breakpointsBehaviorAttrPrefix = undefined,
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
				breakpoints,
				defaultValue: widthDefaultValue,
				type: widthType,
		  })
		: {}),
	...(heightAttr
		? heightAttribute({
				attrPrefix,
				breakpoints,
				defaultValue: heightDefaultValue,
				type: heightType,
		  })
		: {}),
	...(autoHeightAttr
		? autoHeightAttribute({
				attrPrefix,
				breakpoints,
				defaultValue: autoHeightDefaultValue,
		  })
		: {}),
	...(breakpoints
		? grid.breakpointsBehaviorAttribute(
				breakpointsBehaviorAttrPrefix
					? breakpointsBehaviorAttrPrefix
					: `${attrPrefix}-size`
		  )
		: {}),
});

// return width block attribute control
const widthControl = ({
	props,
	breakpoint,
	breakpointsBehaviorAttrPrefix = undefined,
	attrPrefix = "",
	label = __("Width", "beer-blocks"),
	type = "string",
	minWidth = 0,
	maxWidth = 500,
}) => {
	const widthAttrName = attrName("width", attrPrefix);
	const breakpointsBehaviorAttrName = camelCase(
		`${
			breakpointsBehaviorAttrPrefix
				? breakpointsBehaviorAttrPrefix
				: `${attrPrefix}-size`
		}-breakpoints-behavior`
	);

	const {
		attributes: {
			[widthAttrName]: width,
			[breakpointsBehaviorAttrName]: breakpointsBehavior = undefined,
		},
		setAttributes,
	} = props;

	if (
		breakpointsBehavior &&
		breakpointsBehavior[breakpoint] === grid.sameBehavior
	) {
		return null;
	}

	const nextBreakpoints = breakpointsBehavior
		? grid.getNextBreakpoints(breakpoint, breakpointsBehavior)
		: undefined;

	const change = (newWidth) =>
		setAttributes({
			[widthAttrName]:
				nextBreakpoints !== undefined
					? {
							...width,
							[breakpoint]: newWidth,
							...(nextBreakpoints.length > 0
								? Object.fromEntries(
										nextBreakpoints.map((nextBreakpoint) => [
											nextBreakpoint,
											newWidth,
										])
								  )
								: {}),
					  }
					: newWidth,
		});

	const unitChange = () => {};

	return (
		<BaseControl label={label}>
			{type === "number" ? (
				<RangeControl
					value={breakpointsBehavior !== undefined ? width[breakpoint] : width}
					onChange={change}
					min={minWidth}
					max={maxWidth}
					step={1}
				/>
			) : (
				<UnitControl
					value={breakpointsBehavior !== undefined ? width[breakpoint] : width}
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
	breakpointsBehaviorAttrPrefix = undefined,
	attrPrefix = "",
	label = __("Height", "beer-blocks"),
	type = "string",
	minHeight = 0,
	maxHeight = 100,
	autoHeightLabel = __("Set auto height", "beer-blocks"),
}) => {
	const heightAttrName = attrName("height", attrPrefix);
	const autoHeightAttrName = attrName("auto-height", attrPrefix);
	const breakpointsBehaviorAttrName = camelCase(
		`${
			breakpointsBehaviorAttrPrefix
				? breakpointsBehaviorAttrPrefix
				: `${attrPrefix}-size`
		}-breakpoints-behavior`
	);

	const {
		attributes: {
			[heightAttrName]: height,
			[autoHeightAttrName]: autoHeight = undefined,
			[breakpointsBehaviorAttrName]: breakpointsBehavior = undefined,
		},
		setAttributes,
	} = props;

	if (
		breakpointsBehavior &&
		breakpointsBehavior[breakpoint] === grid.sameBehavior
	) {
		return null;
	}

	const nextBreakpoints = breakpointsBehavior
		? grid.getNextBreakpoints(breakpoint, breakpointsBehavior)
		: undefined;

	const change = (newHeight) =>
		setAttributes({
			[heightAttrName]:
				nextBreakpoints !== undefined
					? {
							...height,
							[breakpoint]: newHeight,
							...(nextBreakpoints.length > 0
								? Object.fromEntries(
										nextBreakpoints.map((nextBreakpoint) => [
											nextBreakpoint,
											newHeight,
										])
								  )
								: {}),
					  }
					: newHeight,
		});

	const unitChange = () => {};

	const autoHeightControlChange = () =>
		setAttributes({
			[autoHeightAttrName]:
				nextBreakpoints !== undefined
					? {
							...autoHeight,
							[breakpoint]: !autoHeight[breakpoint],
							...(nextBreakpoints.length > 0
								? Object.fromEntries(
										nextBreakpoints.map((nextBreakpoint) => [
											nextBreakpoint,
											!autoHeight[breakpoint],
										])
								  )
								: {}),
					  }
					: !autoHeight,
		});

	const autoHeightControl =
		autoHeight !== undefined ? (
			<ToggleControl
				label={autoHeightLabel}
				checked={
					breakpointsBehavior !== undefined
						? autoHeight[breakpoint]
						: autoHeight
				}
				onChange={autoHeightControlChange}
			/>
		) : null;

	const heightControl =
		type === "number" ? (
			<BaseControl label={label}>
				<RangeControl
					value={
						breakpointsBehavior !== undefined ? height[breakpoint] : height
					}
					onChange={change}
					min={minHeight}
					max={maxHeight}
					step={1}
				/>
			</BaseControl>
		) : (
			<BaseControl label={label}>
				<UnitControl
					value={
						breakpointsBehavior !== undefined ? height[breakpoint] : height
					}
					onChange={change}
					onUnitChange={unitChange}
					units={units}
				/>
			</BaseControl>
		);

	let disableHeightControl = false;

	if (autoHeight !== undefined) {
		disableHeightControl = has(autoHeight, breakpoint)
			? autoHeight[breakpoint]
			: autoHeight;
	}

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
	breakpoints = false,
	breakpointsBehaviorAttrPrefix = undefined,
	attrPrefix = "",
	widthControlLabel = __("Width", "beer-blocks"),
	heightControlLabel = __("Height", "beer-blocks"),
	autoHeightLabel = __("Set auto height", "beer-blocks"),
	widthType = "string",
	heightType = "string",
	minWidth = 0,
	maxWidth = 500,
	minHeight = 0,
	maxHeight = 100,
	panelBody = true,
	title = __("Size", "beer-blocks"),
	initialOpen = false,
}) => {
	const { attributes } = props;
	const widthAttrName = attrName("width", attrPrefix);
	const heightAttrName = attrName("height", attrPrefix);
	const affectedAttrs = [widthAttrName, heightAttrName].filter((attr) =>
		has(attributes[attr], attr)
	);

	const getInnerControls = (breakpoint = false) => (
		<>
			{has(attributes, widthAttrName) &&
				widthControl({
					props,
					breakpoint,
					breakpointsBehaviorAttrPrefix,
					attrPrefix,
					label: widthControlLabel,
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
					label: heightControlLabel,
					type: heightType,
					minHeight,
					maxHeight,
					autoHeightLabel,
				})}
		</>
	);

	if (has(attributes, widthAttrName) || has(attributes, heightAttrName)) {
		const innerControls = breakpoints
			? grid.getBreakpointsTabs((breakpoint) => (
					<>
						{grid.getBreakpointsBehaviorControl({
							props,
							attrPrefix: breakpointsBehaviorAttrPrefix
								? breakpointsBehaviorAttrPrefix
								: `${attrPrefix}-size`,
							breakpoint,
							affectedAttrs,
						})}

						{getInnerControls(breakpoint)}
					</>
			  ))
			: getInnerControls();

		return panelBody ? (
			<PanelBody title={title} initialOpen={initialOpen}>
				{innerControls}
			</PanelBody>
		) : (
			innerControls
		);
	}

	return null;
};

// returns width css vars for style html attribute
export const widthCssVars = (props, blockName, attrPrefix = "") => {
	const attrWidth = attrName("width", attrPrefix);
	const { attributes } = props;

	if (!has(attributes, attrWidth)) {
		return {};
	}

	const { [attrWidth]: width } = attributes;

	return Object.fromEntries(
		grid.breakpoints
			.map((breakpoint) => [
				`--wp-beer-blocks-${blockName}-${attrWidth}${
					breakpoint !== "xs" ? `-${breakpoint}` : ""
				}`,
				typeof width[breakpoint] === "number"
					? `${width[breakpoint]}px`
					: width[breakpoint],
			])
			.filter((cssVar) => validWidth(cssVar[1]))
	);
};

// returns height css vars for style html attribute
export const heightCssVars = (props, blockName, attrPrefix = "") => {
	const attrHeight = attrName("height", attrPrefix);
	const attrAutoHeight = attrName("auto-height", attrPrefix);
	const { attributes } = props;

	if (!has(attributes, attrHeight)) {
		return {};
	}

	const { [attrHeight]: height, [attrAutoHeight]: autoHeight = undefined } =
		attributes;

	return Object.fromEntries(
		grid.breakpoints
			.map((breakpoint) => [
				`--wp-beer-blocks-${blockName}-${attrHeight}${
					breakpoint !== "xs" ? `-${breakpoint}` : ""
				}`,
				autoHeight && autoHeight[breakpoint]
					? "auto"
					: typeof height[breakpoint] === "number"
					? `${height[breakpoint]}px`
					: height[breakpoint],
			])
			.filter((cssVar) => validHeight(cssVar[1]))
	);
};

// returns width and height css vars
export const cssVars = (props, blockName, attrPrefix = "") => ({
	...widthCssVars(props, blockName, attrPrefix),
	...heightCssVars(props, blockName, attrPrefix),
});

// returns width styles
export const widthStyles = (props, attrPrefix = "") => {
	const attrWidth = attrName("width", attrPrefix);
	const { attributes } = props;

	if (!has(attributes, attrWidth)) {
		return {};
	}

	const { [attrWidth]: width } = attributes;

	return validWidth(width) ? { width } : {};
};

// returns height styles
export const heightStyles = (props, attrPrefix = "") => {
	const attrHeight = attrName("height", attrPrefix);
	const attrAutoHeight = attrName("auto-height", attrPrefix);
	const { attributes } = props;

	if (!has(attributes, attrHeight)) {
		return {};
	}

	const { [attrHeight]: height, [attrAutoHeight]: autoHeight = undefined } =
		attributes;

	return autoHeight
		? { height: "auto" }
		: validHeight(height)
		? { height }
		: {};
};

// returns width and height styles
export const styles = (props, attrPrefix = "") => ({
	...widthStyles(props, attrPrefix),
	...heightStyles(props, attrPrefix),
});

export default {
	attributes,
	controls,
	widthCssVars,
	heightCssVars,
	cssVars,
	widthStyles,
	heightStyles,
	styles,
};
