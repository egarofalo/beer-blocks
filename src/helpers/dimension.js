import { sprintf, __ } from "@wordpress/i18n";
import {
	RangeControl,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { camelCase } from "lodash";
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
		attrName: camelCase(`${attrPrefix}-width`),
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
}) => {
	const attrName = camelCase(`${attrPrefix}-width`);
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
		/>
	) : (
		<UnitControl
			label={label}
			value={width}
			onChange={change}
			onUnitChange={unitChange}
			units={units}
		/>
	);
};

// return width breakpoints block attribute control
export const widthBreakpointsControl = ({
	props,
	breakpoint,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = "",
	label = sprintf(__("Width (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	onChange = undefined,
	onUnitChange = undefined,
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

	const nextBreakpoints = grid.getNextBreakpoints(
		breakpoint,
		breakpointsBehavior
	);

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
		/>
	) : (
		<UnitControl
			label={label}
			value={width[breakpoint]}
			onChange={change}
			onUnitChange={unitChange}
			units={units}
		/>
	);
};

// return width css vars for style html attribute
export const widthCssVars = ({ props, blockName = "", attrPrefix = "" }) => {
	const attrName = camelCase(`${attrPrefix}-width`);

	const {
		attributes: { [attrName]: width },
	} = props;

	return Object.fromEntries(
		grid.breakpoints
			.map((breakpoint) => [
				`--wp-beer-blocks-${blockName}-${attrName}${
					breakpoint !== "xs" ? `-${breakpoint}` : ""
				}`,
				typeof width[breakpoint] === "number"
					? `${width[breakpoint]}px`
					: width[breakpoint],
			])
			.filter((cssVar) => cssVar[1] !== "")
	);
};

// return height block attributes with breakpoints
export const heightAttribute = ({
	attrPrefix = "",
	breakpoints = false,
	breakpointBehavior = false,
	defaultValue = undefined,
	type = "string",
}) =>
	utils.attributes({
		attrName: camelCase(`${attrPrefix}-height`),
		breakpoints,
		breakpointBehavior,
		defaultValue,
		type,
	});

// return height block attribute control
export const heightControl = ({
	props,
	attrPrefix = "",
	label = __("Height", "beer-blocks"),
	onChange = undefined,
	onUnitChange = undefined,
	type = "string",
	minHeight = 0,
	maxHeight = 100,
}) => {
	const attrName = camelCase(`${attrPrefix}-height`);
	const {
		setAttributes,
		attributes: { [attrName]: height },
	} = props;

	const change =
		typeof onChange === "function"
			? onChange
			: (newHeight) => setAttributes({ [attrName]: newHeight });

	const unitChange =
		typeof onUnitChange === "function" ? onUnitChange : () => {};

	return type === "number" ? (
		<RangeControl
			label={label}
			value={width}
			onChange={change}
			min={minHeight}
			max={maxHeight}
			step={1}
		/>
	) : (
		<UnitControl
			label={label}
			value={width}
			onChange={change}
			onUnitChange={unitChange}
			units={units}
		/>
	);
};

// return height breakpoints block attribute control
export const heightBreakpointsControl = ({
	props,
	breakpoint,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = "",
	label = sprintf(__("Height (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	minHeight = 0,
	maxHeight = 100,
	type = "number",
	onChange = undefined,
	onUnitChange = undefined,
}) => {
	const attrName = camelCase(`${attrPrefix}-height`);
	const breakpointsBehaviorAttrName = camelCase(
		`${breakpointsBehaviorAttrPrefix}-breakpoints-behavior`
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

	const nextBreakpoints = grid.getNextBreakpoints(
		breakpoint,
		breakpointsBehavior
	);

	const change =
		onChange === undefined
			? (newHeight) =>
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
					})
			: onChange;

	const unitChange =
		onUnitChange === undefined ? (newUnit) => {} : onUnitChange;

	return type === "number" ? (
		<RangeControl
			label={label}
			value={height[breakpoint]}
			onChange={change}
			min={minHeight}
			max={maxHeight}
			step={1}
		/>
	) : (
		<UnitControl
			label={label}
			value={height[breakpoint]}
			onChange={change}
			onUnitChange={unitChange}
			units={units}
		/>
	);
};

// return height css vars for style html attribute
export const heightCssVars = ({ props, blockName = "", attrPrefix = "" }) => {
	const attrName = camelCase(`${attrPrefix}-height`);
	const {
		attributes: { [attrName]: height },
	} = props;

	return Object.fromEntries(
		grid.breakpoints
			.map((breakpoint) => [
				`--wp-beer-blocks-${blockName}-${attrName}${
					breakpoint !== "xs" ? `-${breakpoint}` : ""
				}`,
				typeof height[breakpoint] === "number"
					? `${height[breakpoint]}px`
					: height[breakpoint],
			])
			.filter((cssVar) => cssVar[1] !== "")
	);
};

// returns width and height attributes
export const attributes = ({
	attrPrefix = "",
	breakpoints = false,
	breakpointsBehaviorAttrPrefix = "dimension",
	widthType = "string",
	heightType = "string",
	defaultWidth = undefined,
	defaultHeight = undefined,
} = {}) => ({
	...widthAttribute({
		attrPrefix,
		breakpoints,
		breakpointsBehavior: false,
		type: widthType,
		defaultValue: defaultWidth,
	}),
	...heightAttribute({
		attrPrefix,
		breakpoints,
		breakpointsBehavior: false,
		type: heightType,
		defaultValue: defaultHeight,
	}),
	...(breakpoints
		? grid.breakpointsBehaviorAttribute(breakpointsBehaviorAttrPrefix)
		: {}),
});

// returns controls for width and height attributes with breakpoints
export const breakpointsControls = ({
	props,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = "dimension",
	widthControlLabel = (breakpoint) =>
		sprintf(__("Width (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	heightControlLabel = (breakpoint) =>
		sprintf(__("Height (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	widthType = "string",
	heightType = "string",
	minWidth = 0,
	maxWidth = 500,
	minHeight = 0,
	maxHeight = 100,
	contentsBeforeWidthControl = (breakpoint) => null,
	contentsAfterWidthControl = (breakpoint) => null,
	contentsBeforeHeightControl = (breakpoint) => null,
	contentsAfterHeightControl = (breakpoint) => null,
}) => {
	const attrWidth = camelCase(`${attrPrefix}-width`);
	const attrHeight = camelCase(`${attrPrefix}-height`);
	const affectedAttrs = [attrWidth, attrHeight].filter(
		(attr) => typeof props.attributes[attr] !== "undefined"
	);
	const { [attrWidth]: width, [attrHeight]: height } = props.attributes;

	return grid.getBreakpointsTabs((breakpoint) => (
		<>
			{grid.getBreakpointsBehaviorControl({
				props,
				attrPrefix: breakpointsBehaviorAttrPrefix,
				breakpoint,
				affectedAttrs,
			})}

			{contentsBeforeWidthControl(breakpoint)}
			{typeof width !== "undefined" && (
				<div style={{ marginBottom: "20px" }}>
					{widthBreakpointsControl({
						props,
						breakpoint,
						attrPrefix,
						breakpointsBehaviorAttrPrefix,
						label: widthControlLabel(breakpoint),
						type: widthType,
						minWidth,
						maxWidth,
					})}
				</div>
			)}
			{contentsAfterWidthControl(breakpoint)}

			{contentsBeforeHeightControl(breakpoint)}
			{typeof height !== "undefined" &&
				heightBreakpointsControl({
					props,
					breakpoint,
					attrPrefix,
					breakpointsBehaviorAttrPrefix,
					label: heightControlLabel(breakpoint),
					type: heightType,
					minHeight,
					maxHeight,
				})}
			{contentsAfterHeightControl(breakpoint)}
		</>
	));
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
	attributes,
	breakpointsControls,
};
