import { useEffect } from "react";
import { __, sprintf } from "@wordpress/i18n";
import {
	PanelBody,
	__experimentalUnitControl as UnitControl,
	__experimentalDivider as Divider,
	BaseControl,
	RangeControl,
} from "@wordpress/components";
import Select from "react-select";
import googleFonts from "./google-fonts.json";
import safeFonts from "./safe-fonts.json";
import { has as loHas, camelCase, kebabCase } from "lodash";
import utils from "./utils";
import grid from "./grid";
import { only as unitsOnly } from "./units";

// Font families list
export const fontFamilies = [...safeFonts, ...googleFonts];

export const defaultUnits = [
	{ value: "px", label: "PX" },
	{ value: "em", label: "EM" },
	{ value: "rem", label: "REM" },
];

// returns font size block attributes
export const fontSizeAttribute = () => ({
	type: "string",
	default: "",
});

// returns font size block attribute with breakpoints
export const fontSizeBreakpointsAttribute = ({
	attrPrefix = "",
	breakpoints = false,
	breakpointsBehavior = false,
	defaultValue = undefined,
	type = "string",
}) =>
	utils.attributes({
		attrName: camelCase(`${attrPrefix}-font-size`),
		breakpoints,
		breakpointsBehavior,
		defaultValue,
		type,
	});

// returns font size block attribute controls
export const fontSizeControl = (props, fontSizeAttr = "fontSize") => {
	const {
		setAttributes,
		attributes: { [fontSizeAttr]: fontSize },
	} = props;

	return (
		<BaseControl>
			<UnitControl
				label={__("Font Size (%s)", "beer-blocks")}
				value={fontSize}
				onChange={(fontSize) => setAttributes({ [fontSizeAttr]: fontSize })}
				onUnitChange={(fontSizeUnit) =>
					setAttributes({
						[fontSizeAttr]: "",
					})
				}
				units={defaultUnits}
			/>
		</BaseControl>
	);
};

// returns controls for font size attribute with breakpoints
export const fontSizeBreakpointsControl = ({
	props,
	breakpoint,
	attrPrefix = "",
	attrBreakpointsBehaviorPrefix = "",
	label = sprintf(
		__("Font size (%s)", "beer-blocks"),
		breakpoint.toUpperCase()
	),
	onChange = undefined,
	onUnitChange = undefined,
	type = "string",
	minFontSize = 0,
	maxFontSize = 100,
	style = {},
}) => {
	const attrName = camelCase(`${attrPrefix}-font-size`);
	const attrBreakpointsBehaviorName = camelCase(
		`${attrBreakpointsBehaviorPrefix}-breakpoints-behavior`
	);

	const {
		setAttributes,
		attributes: {
			[attrName]: fontSize,
			[attrBreakpointsBehaviorName]: breakpointsBehavior,
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
			: (newFontSize) =>
					setAttributes({
						[attrName]: {
							...fontSize,
							[breakpoint]: newFontSize,
							...(nextBreakpoints.length > 0
								? Object.fromEntries(
										nextBreakpoints.map((nextBreakpoint) => [
											nextBreakpoint,
											newFontSize,
										])
								  )
								: {}),
						},
					});

	const unitChange =
		typeof onUnitChange === "function"
			? onUnitChange
			: (newUnit) => {
					setAttributes({
						[attrName]: {
							...fontSize,
							[breakpoint]: "",
							...(nextBreakpoints.length > 0
								? Object.fromEntries(
										nextBreakpoints.map((nextBreakpoint) => [
											nextBreakpoint,
											"",
										])
								  )
								: {}),
						},
					});
			  };

	return (
		<div style={style}>
			{type === "number" ? (
				<RangeControl
					label={label}
					value={fontSize[breakpoint]}
					onChange={change}
					min={minFontSize}
					max={maxFontSize}
					step={1}
					style={style}
					allowReset
				/>
			) : (
				<UnitControl
					label={label}
					value={fontSize[breakpoint]}
					onChange={change}
					onUnitChange={unitChange}
					units={unitsOnly(["px", "rem", "em"])}
					style={style}
				/>
			)}
		</div>
	);
};

// returns font size inline styles
export const fontSizeStyles = (props, attrPrefix = "") => {
	const {
		attributes: { [camelCase(`${attrPrefix}-font-size`)]: fontSize },
	} = props;

	return fontSize ? { fontSize } : {};
};
// returns font size css vars for style html attribute
export const fontSizeCssVars = ({
	props,
	blockName = "",
	attrPrefix = "",
	breakpoints = false,
}) => {
	const attrName = camelCase(`${attrPrefix}-font-size`);
	const {
		attributes: { [attrName]: fontSize },
	} = props;

	return breakpoints
		? Object.fromEntries(
				grid.breakpoints
					.map((breakpoint) => {
						let result = [
							`--wp-beer-blocks-${blockName}-${attrName}-${breakpoint}`,
						];

						if (!fontSize[breakpoint]) {
							result.push(null);
						} else if (typeof fontSize[breakpoint] === "number") {
							result.push(`${fontSize[breakpoint]}px`);
						} else {
							result.push(fontSize[breakpoint]);
						}

						return result;
					})
					.filter((item) => item[1] !== null)
		  )
		: fontSize
		? {
				[`--wp-beer-blocks-${blockName}-${attrName}`]:
					typeof fontSize === "number" ? `${fontSize}px` : fontSize,
		  }
		: {};
};

// returns font family block attributes
export const fontFamilyAttribute = () => ({
	type: "string",
	default: "",
});

const addGoogleFontToHead = (fontFamily) => {
	if (!fontFamily) {
		return;
	}

	const fontFamilyObj = fontFamilies.find(
		(fontObject) => fontFamily === fontObject.family
	);

	if (!fontFamilyObj || fontFamilyObj.is_safe) {
		return;
	}

	const nameAttr = `beer-blocks-google-fonts-css-${kebabCase(fontFamily)}`;
	let link = document.querySelector(`link[name=${nameAttr}]`);

	if (link) {
		return;
	}

	link = document.createElement("link");
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("name", nameAttr);
	link.setAttribute("media", "all");
	link.setAttribute(
		"href",
		`https://fonts.googleapis.com/css?family=${
			fontFamily.replace(/\s+/g, "+") +
			(loHas(fontFamilyObj, "variants")
				? `:${fontFamilyObj.variants.join(",")}`
				: "")
		}`
	);
	document.head.appendChild(link);
};

// returns font family block attributes controls
export const fontFamilyControl = (props, attrName = "fontFamily") => {
	const {
		attributes: { [attrName]: fontFamily },
		setAttributes,
	} = props;

	useEffect(() => {
		addGoogleFontToHead(fontFamily);
	}, []);

	return (
		<>
			<BaseControl
				label={__("Font Families:", "beer-blocks")}
				help={__("Choose a font family.", "beer-blocks")}
			>
				<Select
					options={fontFamilies.map(({ family, variants }) => ({
						value: {
							family,
							variants,
						},
						label: family,
					}))}
					isClearable={true}
					isMulti={false}
					noOptionsMessage={() => __("No font family options", "beer-blocks")}
					placeholder={__("Select...", "beer-blocks")}
					onChange={(selectedOption) => {
						if (selectedOption) {
							addGoogleFontToHead(selectedOption.value.family);

							setAttributes({
								[attrName]: selectedOption.value.family,
							});
						} else {
							setAttributes({ [attrName]: "" });
						}
					}}
					value={
						fontFamily
							? {
									label: fontFamily,
									value: fontFamilies.find(
										(font) => font.family === fontFamily
									),
							  }
							: null
					}
				/>
			</BaseControl>
		</>
	);
};

// returns font family inline styles
export const fontFamilyStyles = (props, attrPrefix = "") => {
	const {
		attributes: { [camelCase(`${attrPrefix}-font-family`)]: fontFamily },
	} = props;

	return fontFamily ? { fontFamily } : {};
};

export const fontWeightAttribute = () => ({
	type: "number",
	default: "",
});

// returns font weight block attributes
export const fontWeightControl = (props, attrName = "fontWeight") => {
	const {
		setAttributes,
		attributes: { [attrName]: fontWeight },
	} = props;

	return (
		<BaseControl label={__("Font Weight", "beer-blocks")}>
			<RangeControl
				value={fontWeight}
				onChange={(fontWeight) => setAttributes({ [attrName]: fontWeight })}
				min={100}
				max={900}
				step={100}
				allowReset
			/>
		</BaseControl>
	);
};

// returns font weight inline styles
export const fontWeightStyles = (props, attrPrefix = "") => {
	const {
		attributes: { [camelCase(`${attrPrefix}-font-weight`)]: fontWeight },
	} = props;

	return fontWeight ? { fontWeight } : {};
};

// returns line height block attributes
export const lineHeightAttribute = () => ({
	type: "number",
	default: "",
});

// returns line height block attribute with breakpoints
export const lineHeightBreakpointsAttribute = ({
	attrPrefix = "",
	breakpoints = false,
	breakpointsBehavior = false,
	defaultValue = undefined,
}) =>
	utils.attributes({
		attrName: camelCase(`${attrPrefix}-line-height`),
		breakpoints,
		breakpointsBehavior,
		defaultValue,
		type: "number",
	});

// returns line height block attribute controls
export const lineHeightControl = (props, attrName = "lineHeight") => {
	const {
		setAttributes,
		attributes: { [attrName]: lineHeight },
	} = props;

	return (
		<BaseControl label={__("Line Height", "beer-blocks")}>
			<RangeControl
				value={lineHeight}
				onChange={(lineHeight) => setAttributes({ [attrName]: lineHeight })}
				min={1}
				max={5}
				step={0.1}
				allowReset
			/>
		</BaseControl>
	);
};

// returns controls for line height attribute with breakpoints
export const lineHeightBreakpointsControl = ({
	props,
	breakpoint,
	attrPrefix = "",
	attrBreakpointsBehaviorPrefix = "",
	label = sprintf(
		__("Line height (%s)", "beer-blocks"),
		breakpoint.toUpperCase()
	),
	onChange = undefined,
	minLineHeight = 1,
	maxLineHeight = 5,
	style = {},
}) => {
	const attrName = camelCase(`${attrPrefix}-line-height`);
	const attrBreakpointsBehaviorName = camelCase(
		`${attrBreakpointsBehaviorPrefix}-breakpoints-behavior`
	);

	const {
		setAttributes,
		attributes: {
			[attrName]: lineHeight,
			[attrBreakpointsBehaviorName]: breakpointsBehavior,
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
			: (newLineHeight) =>
					setAttributes({
						[attrName]: {
							...lineHeight,
							[breakpoint]: newLineHeight,
							...(nextBreakpoints.length > 0
								? Object.fromEntries(
										nextBreakpoints.map((nextBreakpoint) => [
											nextBreakpoint,
											newLineHeight,
										])
								  )
								: {}),
						},
					});

	return (
		<div style={style}>
			<RangeControl
				label={label}
				value={lineHeight[breakpoint]}
				onChange={change}
				min={minLineHeight}
				max={maxLineHeight}
				step={0.1}
				allowReset
			/>
		</div>
	);
};

// returns line height inline styles
export const lineHeightStyles = (lineHeight) =>
	lineHeight
		? {
				lineHeight:
					typeof lineHeight === "number" ? `${lineHeight * 100}%` : lineHeight,
		  }
		: {};

// returns line height css vars for style html attribute
export const lineHeightCssVars = ({
	props,
	blockName = "",
	attrPrefix = "",
	breakpoints = false,
}) => {
	const attrName = camelCase(`${attrPrefix}-line-height`);
	const {
		attributes: { [attrName]: lineHeight },
	} = props;

	return breakpoints
		? Object.fromEntries(
				grid.breakpoints
					.map((breakpoint) => {
						let result = [
							`--wp-beer-blocks-${blockName}-${attrName}-${breakpoint}`,
						];

						if (!lineHeight[breakpoint]) {
							result.push(null);
						} else if (typeof lineHeight[breakpoint] === "number") {
							result.push(`${lineHeight[breakpoint] * 100}%`);
						} else {
							result.push(lineHeight[breakpoint]);
						}

						return result;
					})
					.filter((item) => item[1] !== null)
		  )
		: lineHeight
		? {
				[`--wp-beer-blocks-${blockName}-${attrName}`]:
					typeof lineHeight === "number" ? `${lineHeight * 100}%` : lineHeight,
		  }
		: {};
};

// returns typography block attributes
export const attributes = ({
	attrPrefix = "",
	fontSize = "",
	fontFamily = "",
	fontWeight = "",
	lineHeight = "",
	breakpoints = false,
	attrBreakpointsBehaviorPrefix = "font",
	includeFontFamilyAttr = true,
	includeFontWeightAttr = true,
} = {}) => ({
	...utils.attributes({
		attrName: camelCase(`${attrPrefix}-font-size`),
		breakpoints,
		breakpointsBehavior: false,
		defaultValue: fontSize,
		type: "string",
	}),
	...utils.attributes({
		attrName: camelCase(`${attrPrefix}-line-height`),
		breakpoints,
		breakpointsBehavior: false,
		defaultValue: lineHeight,
		type: "number",
	}),
	...(breakpoints
		? grid.breakpointsBehaviorAttribute(attrBreakpointsBehaviorPrefix)
		: {}),
	...(includeFontFamilyAttr
		? {
				[camelCase(`${attrPrefix}-font-family`)]: {
					type: "string",
					default: fontFamily,
				},
		  }
		: {}),
	...(includeFontWeightAttr
		? {
				[camelCase(`${attrPrefix}-font-weight`)]: {
					type: "number",
					default: fontWeight,
				},
		  }
		: {}),
});

// returns typography controls optionally with panel body container
export const controls = ({
	props,
	initialOpen = false,
	attrPrefix = "",
	panelBody = true,
	title = __("Typography", "beer-blocks"),
}) => {
	const attrFontSize = camelCase(`${attrPrefix}-font-size`);
	const attrLineHeight = camelCase(`${attrPrefix}-line-height`);
	const attrFontFamily = camelCase(`${attrPrefix}-font-family`);
	const attrFontWeight = camelCase(`${attrPrefix}-font-weight`);

	const result = (
		<>
			{fontSizeControl(props, attrFontSize)}
			{lineHeightControl(props, attrLineHeight)}
			{fontFamilyControl(props, attrFontFamily)}
			{fontWeightControl(props, attrFontWeight)}
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

// returns controls for typography attributes with breakpoints
export const breakpointsControls = ({
	props,
	initialOpen = false,
	attrPrefix = "",
	attrBreakpointsBehaviorPrefix = "font",
	panelBody = true,
	title = __("Typography", "beer-blocks"),
	fontSizeControlLabel = (breakpoint) =>
		sprintf(__("Font size (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	lineHeightControlLabel = (breakpoint) =>
		sprintf(__("Line height (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	includeFontFamilyControl = true,
	includeFontWeightControl = true,
}) => {
	const attrFontSize = camelCase(`${attrPrefix}-font-size`);
	const attrLineHeight = camelCase(`${attrPrefix}-line-height`);
	const attrFontFamily = camelCase(`${attrPrefix}-font-family`);
	const attrFontWeight = camelCase(`${attrPrefix}-font-weight`);

	const result = (
		<>
			{grid.getBreakpointsTabs((breakpoint) => (
				<>
					{grid.getBreakpointsBehaviorControl({
						props,
						attrPrefix: attrBreakpointsBehaviorPrefix,
						breakpoint,
						affectedAttrs: [attrFontSize, attrLineHeight],
					})}

					{fontSizeBreakpointsControl({
						breakpoint,
						props,
						attrPrefix,
						attrBreakpointsBehaviorPrefix,
						style: { marginBottom: "15px" },
						label: fontSizeControlLabel(breakpoint),
					})}

					{lineHeightBreakpointsControl({
						props,
						breakpoint,
						attrPrefix,
						attrBreakpointsBehaviorPrefix,
						label: lineHeightControlLabel(breakpoint),
					})}
				</>
			))}

			{includeFontFamilyControl || includeFontWeightControl ? (
				<Divider />
			) : null}

			{includeFontFamilyControl && fontFamilyControl(props, attrFontFamily)}
			{includeFontWeightControl && fontWeightControl(props, attrFontWeight)}
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

export default {
	defaultUnits,
	fontFamilies,
	fontFamilyAttribute,
	fontFamilyControl,
	fontFamilyStyles,
	fontSizeAttribute,
	fontSizeBreakpointsAttribute,
	fontSizeControl,
	fontSizeBreakpointsControl,
	fontSizeStyles,
	fontSizeCssVars,
	fontWeightAttribute,
	fontWeightControl,
	fontWeightStyles,
	lineHeightAttribute,
	lineHeightBreakpointsAttribute,
	lineHeightControl,
	lineHeightBreakpointsControl,
	lineHeightStyles,
	lineHeightCssVars,
	attributes,
	controls,
	breakpointsControls,
};
