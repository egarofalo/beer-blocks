import { sprintf, __ } from "@wordpress/i18n";
import {
	RangeControl,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { camelCase as loCamelCase, get as loGet } from "lodash";
import grid from "./grid";
import utils from "./utils";
import units from "./units";

// return width block attributes with breakpoints
export const widthAttribute = ({
	attrPrefix = "",
	breakpoints = false,
	breakpointsBehavior = false,
	defaultValue = undefined,
	type = "string",
}) =>
	utils.attributes({
		attrName: loCamelCase(`${attrPrefix}-width`),
		breakpoints,
		breakpointsBehavior,
		defaultValue,
		type,
	});

// return width block attribute control
export const widthControl = ({
	props,
	attrPrefix = "",
	label = __("Width", "beer-blocks"),
	onChange = undefined,
	onUnitChange = undefined,
	type = "string",
	minWidth = 0,
	maxWidth = 500,
	style = {},
}) => {
	const attrName = loCamelCase(`${attrPrefix}-width`);
	const {
		setAttributes,
		attributes: { [attrName]: width },
	} = props;

	const change =
		typeof onChange === "function"
			? onChange
			: (newWidth) => setAttributes({ [attrName]: newWidth });

	const unitChange =
		typeof onUnitChange === "function" ? onUnitChange : () => {};

	return type === "number" ? (
		<RangeControl
			label={label}
			value={width}
			onChange={change}
			min={minWidth}
			max={maxWidth}
			step={1}
			style={style}
		/>
	) : (
		<UnitControl
			label={label}
			value={width}
			onChange={change}
			onUnitChange={unitChange}
			units={units}
			style={style}
		/>
	);
};

// return width breakpoints block attribute control
export const widthBreakpointsControl = ({
	props,
	breakpoint,
	attrPrefix = "",
	attrBreakpointsBehaviorName = "",
	label = sprintf(__("Width (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	onChange = undefined,
	onUnitChange = undefined,
	type = "string",
	minWidth = 0,
	maxWidth = 500,
	style = {},
}) => {
	const attrName = loCamelCase(`${attrPrefix}-width`);
	const breakpointsBehaviorAttrName = loCamelCase(
		`${attrBreakpointsBehaviorName}-breakpoints-behavior`
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

	let nextBreakpoints = grid.getNextBreakpoints(breakpoint);
	const differentBehaviorIndex = nextBreakpoints.findIndex(
		(breakpoint) => breakpointsBehavior[breakpoint] === grid.differentBehavior
	);

	if (differentBehaviorIndex > -1) {
		nextBreakpoints = nextBreakpoints.slice(0, differentBehaviorIndex);
	}

	const change =
		typeof onChange === "function"
			? onChange
			: (newWidth) =>
					setAttributes({
						[attrName]: {
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
						},
					});

	const unitChange =
		typeof onUnitChange === "function" ? onUnitChange : () => {};

	return type === "number" ? (
		<RangeControl
			label={label}
			value={width[breakpoint]}
			onChange={change}
			min={minWidth}
			max={maxWidth}
			step={1}
			style={style}
		/>
	) : (
		<UnitControl
			label={label}
			value={width[breakpoint]}
			onChange={change}
			onUnitChange={unitChange}
			units={units}
			style={style}
		/>
	);
};

// return width css vars for style html attribute
export const widthCssVars = ({
	props,
	blockName = "",
	attrPrefix = "",
	breakpoints = false,
}) => {
	const attrName = loCamelCase(`${attrPrefix}-width`);
	const {
		attributes: { [attrName]: width },
	} = props;

	return breakpoints
		? Object.fromEntries(
				grid.breakpoints.map((breakpoint) => [
					`--wp-beer-blocks-${blockName}-${attrName}-${breakpoint}`,
					typeof width[breakpoint] === "number"
						? `${width[breakpoint]}px`
						: width[breakpoint],
				])
		  )
		: {
				[`--wp-beer-blocks-${blockName}-${attrName}`]:
					typeof width === "number" ? `${width}px` : width,
		  };
};

// return height block attributes with breakpoints
export const heightAttribute = ({
	attrPrefix = "",
	breakpoints = false,
	breakpointBehavior = false,
	defaultValue = undefined,
}) =>
	utils.attributes({
		attrName: loCamelCase(`${attrPrefix}-height`),
		breakpoints,
		breakpointBehavior,
		defaultValue,
		type: "number",
	});

// return height block attribute control
export const heightControl = ({
	props,
	attrPrefix = "",
	label = __("Height", "beer-blocks"),
	onChange = undefined,
	minHeight = 0,
	maxHeight = 100,
	style = {},
}) => {
	const attrName = loCamelCase(`${attrPrefix}-height`);
	const {
		setAttributes,
		attributes: { [attrName]: height },
	} = props;

	const change =
		typeof onChange === "function"
			? onChange
			: (height) => setAttributes({ [attrName]: height });

	return (
		<RangeControl
			label={label}
			value={height}
			onChange={change}
			min={minHeight}
			max={maxHeight}
			step={1}
			style={style}
		/>
	);
};

// return height breakpoints block attribute control
export const heightBreakpointsControl = ({
	props,
	breakpoint,
	attrPrefix = "",
	attrBreakpointsBehaviorName = "",
	label = sprintf(__("Height (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	onChange = undefined,
	minHeight = 0,
	maxHeight = 100,
	style = {},
}) => {
	const attrName = loCamelCase(`${attrPrefix}-height`);
	const breakpointsBehaviorAttrName = loCamelCase(
		`${attrBreakpointsBehaviorName}-breakpoints-behavior`
	);

	const {
		setAttributes,
		attributes: {
			[attrName]: height,
			[breakpointsBehaviorAttrName]: breakpointsBehavior,
		},
	} = props;

	if (breakpointsBehavior[breakpoint] === grid.sameBehavior) {
		return null;
	}

	let nextBreakpoints = grid.getNextBreakpoints(breakpoint);
	const differentBehaviorIndex = nextBreakpoints.findIndex(
		(breakpoint) => breakpointsBehavior[breakpoint] === grid.differentBehavior
	);

	if (differentBehaviorIndex > -1) {
		nextBreakpoints = nextBreakpoints.slice(0, differentBehaviorIndex);
	}

	const change =
		typeof onChange === "function"
			? onChange
			: (newHeight) =>
					setAttributes({
						[attrName]: {
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
						},
					});

	return (
		<RangeControl
			label={label}
			value={height[breakpoint]}
			onChange={change}
			min={minHeight}
			max={maxHeight}
			step={1}
			style={style}
		/>
	);
};

// return height css vars for style html attribute
export const heightCssVars = ({
	props,
	blockName = "",
	attrPrefix = "",
	breakpoints = false,
}) => {
	const attrName = loCamelCase(`${attrPrefix}-height`);
	const {
		attributes: { [attrName]: height },
	} = props;

	return breakpoints
		? Object.fromEntries(
				grid.breakpoints.map((breakpoint) => [
					`--wp-beer-blocks-${blockName}-${attrName}-${breakpoint}`,
					typeof height[breakpoint] === "number"
						? `${height[breakpoint]}px`
						: height[breakpoint],
				])
		  )
		: {
				[`--wp-beer-blocks-${blockName}-${attrName}`]:
					typeof height === "number" ? `${height}px` : height,
		  };
};

export default {
	widthAttribute,
	widthControl,
	widthBreakpointsControl,
	widthCssVars,
	heightAttribute,
	heightControl,
	heightBreakpointsControl,
	heightCssVars,
};
