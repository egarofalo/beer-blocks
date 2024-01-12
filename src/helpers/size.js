import { __ } from "@wordpress/i18n";
import {
	RangeControl,
	__experimentalUnitControl as UnitControl,
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

// returns minWidth attribute with breakpoints
const minWidthAttribute = ({
	attrPrefix = "",
	type = "string",
	breakpointsBehavior = false,
	defaultValue = undefined,
} = {}) =>
	grid.attributes({
		attrName: camelCase(`${attrPrefix}-min-width`),
		breakpoints: true,
		breakpointsBehavior,
		defaultValue,
		type,
	});

// returns maxWidth attribute with breakpoints
const maxWidthAttribute = ({
	attrPrefix = "",
	type = "string",
	breakpointsBehavior = false,
	defaultValue = undefined,
} = {}) =>
	grid.attributes({
		attrName: camelCase(`${attrPrefix}-max-width`),
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

// returns minHeight attribute with breakpoints
const minHeightAttribute = ({
	attrPrefix = "",
	type = "string",
	breakpointsBehavior = false,
	defaultValue = undefined,
} = {}) =>
	grid.attributes({
		attrName: camelCase(`${attrPrefix}-min-height`),
		breakpoints: true,
		breakpointsBehavior,
		defaultValue,
		type,
	});

// returns maxHeight attribute with breakpoints
const maxHeightAttribute = ({
	attrPrefix = "",
	type = "string",
	breakpointsBehavior = false,
	defaultValue = undefined,
} = {}) =>
	grid.attributes({
		attrName: camelCase(`${attrPrefix}-max-height`),
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
	minWidthAttr = false,
	minWidthType = "string",
	minWidthDefaultValue = undefined,
	maxWidthAttr = false,
	maxWidthType = "string",
	maxWidthDefaultValue = undefined,
	heightAttr = true,
	heightDefaultValue = undefined,
	heightType = "string",
	minHeightAttr = false,
	minHeightDefaultValue = undefined,
	minHeightType = "string",
	maxHeightAttr = false,
	maxHeightDefaultValue = undefined,
	maxHeightType = "string",
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
	...(minWidthAttr
		? minWidthAttribute({
				attrPrefix,
				defaultValue: minWidthDefaultValue,
				type: minWidthType,
		  })
		: {}),
	...(maxWidthAttr
		? maxWidthAttribute({
				attrPrefix,
				defaultValue: maxWidthDefaultValue,
				type: maxWidthType,
		  })
		: {}),
	...(heightAttr
		? heightAttribute({
				attrPrefix,
				defaultValue: heightDefaultValue,
				type: heightType,
		  })
		: {}),
	...(minHeightAttr
		? minHeightAttribute({
				attrPrefix,
				defaultValue: minHeightDefaultValue,
				type: minHeightType,
		  })
		: {}),
	...(maxHeightAttr
		? maxHeightAttribute({
				attrPrefix,
				defaultValue: maxHeightDefaultValue,
				type: maxHeightType,
		  })
		: {}),
	...(heightAttr && autoHeightAttr
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
	minWidthLabel = sprintf(
		__("Min width (%s)", "beer-blocks"),
		breakpoint.toUpperCase()
	),
	maxWidthLabel = sprintf(
		__("Max width (%s)", "beer-blocks"),
		breakpoint.toUpperCase()
	),
}) => {
	const { setAttributes, attributes } = props;
	const widthAttrName = camelCase(`${attrPrefix}-width`);
	const minWidthAttrName = camelCase(`${attrPrefix}-min-width`);
	const maxWidthAttrName = camelCase(`${attrPrefix}-max-width`);
	const breakpointsBehaviorAttrName = camelCase(
		`${breakpointsBehaviorAttrPrefix}-breakpoints-behavior`
	);

	const {
		[widthAttrName]: widthAttr = undefined,
		[minWidthAttrName]: minWidthAttr = undefined,
		[maxWidthAttrName]: maxWidthAttr = undefined,
		[breakpointsBehaviorAttrName]: breakpointsBehavior,
	} = attributes;

	if (breakpointsBehavior[breakpoint] === grid.sameBehavior) {
		return null;
	}

	const widthChange = (newWidth) =>
		setAttributes({
			[widthAttrName]: {
				...widthAttr,
				[breakpoint]: newWidth,
			},
		});

	const minWidthChange = (newMinWidth) =>
		setAttributes({
			[minWidthAttrName]: {
				...minWidthAttr,
				[breakpoint]: newMinWidth,
			},
		});

	const maxWidthChange = (newMaxWidth) =>
		setAttributes({
			[maxWidthAttrName]: {
				...maxWidthAttr,
				[breakpoint]: newMaxWidth,
			},
		});

	const unitChange = (attr, attrName) =>
		setAttributes({
			[attrName]: {
				...attr,
				[breakpoint]: undefined,
			},
		});

	const widthControl = widthAttr ? (
		<BaseControl label={label}>
			{type === "number" ? (
				<RangeControl
					value={widthAttr[breakpoint]}
					onChange={widthChange}
					min={minWidth}
					max={maxWidth}
					step={1}
				/>
			) : (
				<UnitControl
					value={widthAttr[breakpoint]}
					onChange={widthChange}
					onUnitChange={() => unitChange(widthAttrName)}
					units={units}
				/>
			)}
		</BaseControl>
	) : null;

	const minWidthControl = minWidthAttr ? (
		<BaseControl label={minWidthLabel}>
			{type === "number" ? (
				<RangeControl
					value={minWidthAttr[breakpoint]}
					onChange={minWidthChange}
					min={minWidth}
					max={maxWidth}
					step={1}
				/>
			) : (
				<UnitControl
					value={minWidthAttr[breakpoint]}
					onChange={minWidthChange}
					onUnitChange={() => unitChange(minWidthAttrName)}
					units={units}
				/>
			)}
		</BaseControl>
	) : null;

	const maxWidthControl = maxWidthAttr ? (
		<BaseControl label={maxWidthLabel}>
			{type === "number" ? (
				<RangeControl
					value={maxWidthAttr[breakpoint]}
					onChange={maxWidthChange}
					min={minWidth}
					max={maxWidth}
					step={1}
				/>
			) : (
				<UnitControl
					value={maxWidthAttr[breakpoint]}
					onChange={maxWidthChange}
					onUnitChange={() => unitChange(maxWidthAttrName)}
					units={units}
				/>
			)}
		</BaseControl>
	) : null;

	return (
		<>
			{widthControl}
			{minWidthControl}
			{maxWidthControl}
		</>
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
	minHeightLabel = sprintf(
		__("Min height (%s)", "beer-blocks"),
		breakpoint.toUpperCase()
	),
	maxHeightLabel = sprintf(
		__("Max height (%s)", "beer-blocks"),
		breakpoint.toUpperCase()
	),
	autoHeightLabel = sprintf(
		__("Auto height (%s)", "beer-blocks"),
		breakpoint.toUpperCase()
	),
}) => {
	const { setAttributes, attributes } = props;
	const heightAttrName = camelCase(`${attrPrefix}-height`);
	const minHeightAttrName = camelCase(`${attrPrefix}-min-height`);
	const maxHeightAttrName = camelCase(`${attrPrefix}-max-height`);
	const autoHeightAttrName = camelCase(`${attrPrefix}-auto-height`);
	const breakpointsBehaviorAttrName = camelCase(
		`${breakpointsBehaviorAttrPrefix}-breakpoints-behavior`
	);

	const {
		[heightAttrName]: heightAttr = undefined,
		[minHeightAttrName]: minHeightAttr = undefined,
		[maxHeightAttrName]: maxHeightAttr = undefined,
		[autoHeightAttrName]: autoHeightAttr = undefined,
		[breakpointsBehaviorAttrName]: breakpointsBehavior,
	} = attributes;

	if (breakpointsBehavior[breakpoint] === grid.sameBehavior) {
		return null;
	}

	const heightChange = (newHeight) =>
		setAttributes({
			[heightAttrName]: {
				...heightAttr,
				[breakpoint]: newHeight,
			},
		});

	const minHeightChange = (newMinHeight) =>
		setAttributes({
			[minHeightAttrName]: {
				...minHeightAttr,
				[breakpoint]: newMinHeight,
			},
		});

	const maxHeightChange = (newMaxHeight) =>
		setAttributes({
			[maxHeightAttrName]: {
				...maxHeightAttr,
				[breakpoint]: newMaxHeight,
			},
		});

	const autoHeightChange = () =>
		setAttributes({
			[autoHeightAttrName]: {
				...autoHeightAttr,
				[breakpoint]: !autoHeightAttr[breakpoint],
			},
		});

	const unitChange = (attrName) =>
		setAttributes({
			[attrName]: {
				...attr,
				[breakpoint]: undefined,
			},
		});

	const heightControl = heightAttr ? (
		type === "number" ? (
			<BaseControl label={label}>
				<RangeControl
					value={heightAttr[breakpoint]}
					onChange={heightChange}
					min={minHeight}
					max={maxHeight}
					step={1}
				/>
			</BaseControl>
		) : (
			<BaseControl label={label}>
				<UnitControl
					value={heightAttr[breakpoint]}
					onChange={heightChange}
					onUnitChange={() => unitChange(heightAttrName)}
					units={units}
				/>
			</BaseControl>
		)
	) : null;

	const minHeightControl = minHeightAttr ? (
		type === "number" ? (
			<BaseControl label={minHeightLabel}>
				<RangeControl
					value={minHeightAttr[breakpoint]}
					onChange={minHeightChange}
					min={minHeight}
					max={maxHeight}
					step={1}
				/>
			</BaseControl>
		) : (
			<BaseControl label={minHeightLabel}>
				<UnitControl
					value={minHeightAttr[breakpoint]}
					onChange={minHeightChange}
					onUnitChange={() => unitChange(minHeightAttrName)}
					units={units}
				/>
			</BaseControl>
		)
	) : null;

	const maxHeightControl = maxHeightAttr ? (
		type === "number" ? (
			<BaseControl label={maxHeightLabel}>
				<RangeControl
					value={maxHeightAttr[breakpoint]}
					onChange={maxHeightChange}
					min={minHeight}
					max={maxHeight}
					step={1}
				/>
			</BaseControl>
		) : (
			<BaseControl label={maxHeightLabel}>
				<UnitControl
					value={maxHeightAttr[breakpoint]}
					onChange={maxHeightChange}
					onUnitChange={() => unitChange(maxHeightAttrName)}
					units={units}
				/>
			</BaseControl>
		)
	) : null;

	const autoHeightControl =
		heightAttr && autoHeightAttr ? (
			<ToggleControl
				label={autoHeightLabel}
				checked={autoHeightAttr[breakpoint]}
				onChange={autoHeightChange}
			/>
		) : null;

	const disableHeightControl =
		autoHeightAttr !== undefined && autoHeightAttr[breakpoint];

	return (
		<>
			{!disableHeightControl && heightControl}
			{minHeightControl}
			{maxHeightControl}
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
	minWidthControlLabel = (breakpoint) =>
		sprintf(__("Min width (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	maxWidthControlLabel = (breakpoint) =>
		sprintf(__("Max width (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	heightControlLabel = (breakpoint) =>
		sprintf(__("Height (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	minHeightControlLabel = (breakpoint) =>
		sprintf(__("Min height (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	maxHeightControlLabel = (breakpoint) =>
		sprintf(__("Max height (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	autoHeightControlLabel = (breakpoint) =>
		sprintf(__("Auto height (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	widthType = "string",
	heightType = "string",
	minWidth = 0,
	maxWidth = 500,
	minHeight = 0,
	maxHeight = 100,
	beforePanelBody = (breakpoint) => null,
	afterPanelBody = (breakpoint) => null,
}) => {
	const { attributes } = props;
	const widthAttrName = camelCase(`${attrPrefix}-width`);
	const minWidthAttrName = camelCase(`${attrPrefix}-min-width`);
	const maxWidthAttrName = camelCase(`${attrPrefix}-max-width`);
	const heightAttrName = camelCase(`${attrPrefix}-height`);
	const minHeightAttrName = camelCase(`${attrPrefix}-min-height`);
	const maxHeightAttrName = camelCase(`${attrPrefix}-max-height`);
	const autoHeightAttrName = camelCase(`${attrPrefix}-auto-height`);
	const breakpointsBehaviorAttrPrefix = `${attrPrefix}-size`;
	const affectedAttrs = [
		widthAttrName,
		minWidthAttrName,
		maxWidthAttrName,
		heightAttrName,
		minHeightAttrName,
		maxHeightAttrName,
		autoHeightAttrName,
	].filter((attr) => has(attributes, attr));

	if (affectedAttrs.length > 0) {
		const breakpointsTabs = grid.getBreakpointsTabs((breakpoint) => (
			<>
				{grid.getBreakpointsBehaviorControl({
					props,
					attrPrefix: breakpointsBehaviorAttrPrefix,
					breakpoint,
					affectedAttrs,
				})}

				{beforePanelBody(breakpoint)}

				{widthControl({
					props,
					breakpoint,
					breakpointsBehaviorAttrPrefix,
					attrPrefix,
					label: widthControlLabel(breakpoint),
					type: widthType,
					minWidth,
					maxWidth,
					minWidthLabel: minWidthControlLabel(breakpoint),
					maxWidthLabel: maxWidthControlLabel(breakpoint),
				})}

				{heightControl({
					props,
					breakpoint,
					breakpointsBehaviorAttrPrefix,
					attrPrefix,
					label: heightControlLabel(breakpoint),
					type: heightType,
					minHeight,
					maxHeight,
					minHeightLabel: minHeightControlLabel(breakpoint),
					maxHeightLabel: maxHeightControlLabel(breakpoint),
					autoHeightLabel: autoHeightControlLabel(breakpoint),
				})}

				{afterPanelBody(breakpoint)}
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
	const widthAttrName = camelCase(`${attrPrefix}-width`);
	const minWidthAttrName = camelCase(`${attrPrefix}-min-width`);
	const maxWidthAttrName = camelCase(`${attrPrefix}-max-width`);
	const {
		attributes: {
			[widthAttrName]: width = undefined,
			[minWidthAttrName]: minWidth = undefined,
			[maxWidthAttrName]: maxWidth = undefined,
		},
	} = props;

	return Object.fromEntries(
		[
			...(width
				? grid.breakpoints.map((breakpoint) => [
						`--wp-beer-blocks-${blockName}-${widthAttrName}-${breakpoint}`,
						typeof width[breakpoint] === "number"
							? `${width[breakpoint]}px`
							: width[breakpoint],
				  ])
				: []),
			...(minWidth
				? grid.breakpoints.map((breakpoint) => [
						`--wp-beer-blocks-${blockName}-${minWidthAttrName}-${breakpoint}`,
						typeof minWidth[breakpoint] === "number"
							? `${minWidth[breakpoint]}px`
							: minWidth[breakpoint],
				  ])
				: []),
			...(maxWidth
				? grid.breakpoints.map((breakpoint) => [
						`--wp-beer-blocks-${blockName}-${maxWidthAttrName}-${breakpoint}`,
						typeof maxWidth[breakpoint] === "number"
							? `${maxWidth[breakpoint]}px`
							: maxWidth[breakpoint],
				  ])
				: []),
		].filter((cssVar) => validWidth(cssVar[1]))
	);
};

// returns css classes that enable width rule
export const widthCssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	const widthAttrName = camelCase(`${attrPrefix}-width`);
	const minWidthAttrName = camelCase(`${attrPrefix}-min-width`);
	const maxWidthAttrName = camelCase(`${attrPrefix}-max-width`);
	const {
		attributes: {
			[widthAttrName]: width = undefined,
			[minWidthAttrName]: minWidth = undefined,
			[maxWidthAttrName]: maxWidth = undefined,
		},
	} = props;

	const widthClasses = [
		...(width
			? grid.breakpoints.map((breakpoint) =>
					validWidth(get(width, breakpoint))
						? `wp-beer-blocks-has-width-${breakpoint}-rule`
						: false
			  )
			: []),
		...(minWidth
			? grid.breakpoints.map((breakpoint) =>
					validWidth(get(minWidth, breakpoint))
						? `wp-beer-blocks-has-min-width-${breakpoint}-rule`
						: false
			  )
			: []),
		...(maxWidth
			? grid.breakpoints.map((breakpoint) =>
					validWidth(get(maxWidth, breakpoint))
						? `wp-beer-blocks-has-max-width-${breakpoint}-rule`
						: false
			  )
			: []),
	].filter((cssClass) => cssClass);

	const widthClass =
		widthClasses.length > 0
			? `${addWhitespaceBefore && " "}${widthClasses.join(" ")}`
			: "";

	return widthClass.trimEnd();
};

// returns height css vars for style html attribute
export const heightCssVars = (props, blockName, attrPrefix = "") => {
	const heightAttrName = camelCase(`${attrPrefix}-height`);
	const minHeightAttrName = camelCase(`${attrPrefix}-min-height`);
	const maxHeightAttrName = camelCase(`${attrPrefix}-max-height`);
	const autoHeightAttrName = camelCase(`${attrPrefix}-auto-height`);
	const {
		attributes: {
			[heightAttrName]: height = undefined,
			[minHeightAttrName]: minHeight = undefined,
			[maxHeightAttrName]: maxHeight = undefined,
			[autoHeightAttrName]: autoHeight = undefined,
		},
	} = props;

	return Object.fromEntries(
		[
			...(height
				? grid.breakpoints.map((breakpoint) => [
						`--wp-beer-blocks-${blockName}-${heightAttrName}-${breakpoint}`,
						autoHeight && autoHeight[breakpoint]
							? "auto"
							: typeof height[breakpoint] === "number"
							? `${height[breakpoint]}px`
							: height[breakpoint],
				  ])
				: []),
			...(minHeight
				? grid.breakpoints.map((breakpoint) => [
						`--wp-beer-blocks-${blockName}-${minHeightAttrName}-${breakpoint}`,
						typeof minHeight[breakpoint] === "number"
							? `${minHeight[breakpoint]}px`
							: minHeight[breakpoint],
				  ])
				: []),
			...(maxHeight
				? grid.breakpoints.map((breakpoint) => [
						`--wp-beer-blocks-${blockName}-${maxHeightAttrName}-${breakpoint}`,
						typeof maxHeight[breakpoint] === "number"
							? `${maxHeight[breakpoint]}px`
							: maxHeight[breakpoint],
				  ])
				: []),
		].filter((cssVar) => validHeight(cssVar[1]))
	);
};

// returns css classes that enable height rule
export const heightCssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	const heightAttrName = camelCase(`${attrPrefix}-height`);
	const minHeightAttrName = camelCase(`${attrPrefix}-min-height`);
	const maxHeightAttrName = camelCase(`${attrPrefix}-max-height`);
	const autoHeightAttrName = camelCase(`${attrPrefix}-auto-height`);
	const {
		attributes: {
			[heightAttrName]: height = undefined,
			[minHeightAttrName]: minHeight = undefined,
			[maxHeightAttrName]: maxHeight = undefined,
			[autoHeightAttrName]: autoHeight = undefined,
		},
	} = props;

	const heightClasses = [
		...(height
			? grid.breakpoints.map((breakpoint) =>
					validHeight(get(height, breakpoint)) || get(autoHeight, breakpoint)
						? `wp-beer-blocks-has-height-${breakpoint}-rule`
						: false
			  )
			: []),
		...(minHeight !== undefined
			? grid.breakpoints.map((breakpoint) =>
					validHeight(get(minHeight, breakpoint))
						? `wp-beer-blocks-has-min-height-${breakpoint}-rule`
						: false
			  )
			: []),
		...(maxHeight !== undefined
			? grid.breakpoints.map((breakpoint) =>
					validHeight(get(maxHeight, breakpoint))
						? `wp-beer-blocks-has-max-height-${breakpoint}-rule`
						: false
			  )
			: []),
	].filter((cssClass) => cssClass);

	const heightClass =
		heightClasses.length > 0
			? `${addWhitespaceBefore && " "}${heightClasses.join(" ")}`
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
