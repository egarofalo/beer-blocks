import { __, sprintf } from "@wordpress/i18n";
import {
	PanelBody,
	__experimentalUnitControl as UnitControl,
	BaseControl,
	RangeControl,
	TextControl,
} from "@wordpress/components";
import ReactHtmlParser from "react-html-parser";
import { camelCase } from "lodash";

export const defaultUnits = [
	{ value: "px", label: "PX" },
	{ value: "em", label: "EM" },
	{ value: "rem", label: "REM" },
];

export const fontSizeUnitAttribute = () => ({
	type: "string",
	default: "px",
});

export const fontSizeAttribute = () => ({
	type: "string",
	default: "",
});

export const fontSizeControl = (
	props,
	fontSizeAttr = "fontSize",
	fontSizeUnitAttr = "fontSizeUnit"
) => {
	const {
		setAttributes,
		attributes: { [fontSizeUnitAttr]: fontSizeUnit, [fontSizeAttr]: fontSize },
	} = props;

	return (
		<BaseControl>
			<UnitControl
				label={sprintf(__("Font Size (%s)", "beer-blocks"), fontSizeUnit)}
				value={fontSize}
				onChange={(fontSize) => setAttributes({ [fontSizeAttr]: fontSize })}
				onUnitChange={(fontSizeUnit) =>
					setAttributes({
						[fontSizeUnitAttr]: fontSizeUnit,
						[fontSizeAttr]: "",
					})
				}
				units={defaultUnits}
			/>
		</BaseControl>
	);
};

export const fontSizeStyles = (fontSize) => (fontSize ? { fontSize } : {});

export const fontFamilyAttribute = () => ({
	type: "string",
	default: "",
});

export const fontFamilyControl = (props, attrName = "fontFamily") => {
	const {
		setAttributes,
		attributes: { [attrName]: fontFamily },
	} = props;

	return (
		<TextControl
			label={__("Font Family", "beer-blocks")}
			help={ReactHtmlParser(
				__(
					"Type here the css <b><i>font-family</i></b> property value.",
					"beer-blocks"
				)
			)}
			value={fontFamily}
			onChange={(value) =>
				setAttributes({
					[attrName]: value,
				})
			}
		/>
	);
};

export const fontFamilyStyles = (fontFamily) =>
	fontFamily ? { fontFamily } : {};

export const fontWeightAttribute = () => ({
	type: "number",
	default: "",
});

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

export const fontWeightStyles = (fontWeight) =>
	fontWeight ? { fontWeight } : {};

export const lineHeightAttribute = () => ({
	type: "number",
	default: "",
});

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
				max={10}
				step={0.1}
				allowReset
			/>
		</BaseControl>
	);
};

export const lineHeightStyles = (lineHeight) =>
	lineHeight ? { lineHeight } : {};

export const attributes = (
	attrPrefixName = "",
	{
		fontSizeUnit = "px",
		fontSize = "",
		fontFamily = "",
		fontWeight = "",
		lineHeight = "",
	} = {}
) => ({
	[camelCase(`${attrPrefixName}-font-size-unit`)]: {
		type: "string",
		default: fontSizeUnit,
	},
	[camelCase(`${attrPrefixName}-font-size`)]: {
		type: "string",
		default: fontSize,
	},
	[camelCase(`${attrPrefixName}-font-family`)]: {
		type: "string",
		default: fontFamily,
	},
	[camelCase(`${attrPrefixName}-font-weight`)]: {
		type: "number",
		default: fontWeight,
	},
	[camelCase(`${attrPrefixName}-line-height`)]: {
		type: "number",
		default: lineHeight,
	},
});

export const innerControls = (props, attrPrefixName = "") => (
	<>
		{fontFamilyControl(props, camelCase(`${attrPrefixName}-font-family`))}
		{fontSizeControl(
			props,
			camelCase(`${attrPrefixName}-font-size`),
			camelCase(`${attrPrefixName}-font-size-unit`)
		)}
		{fontWeightControl(props, camelCase(`${attrPrefixName}-font-weight`))}
		{lineHeightControl(props, camelCase(`${attrPrefixName}-line-height`))}
	</>
);

export const controls = ({
	props,
	initialOpen = false,
	attrPrefixName = "",
}) => (
	<PanelBody title={__("Typography", "beer-blocks")} initialOpen={initialOpen}>
		{innerControls(props, attrPrefixName)}
	</PanelBody>
);

export const styles = (attributes, attrPrefixName = "") => {
	const {
		[camelCase(`${attrPrefixName}-font-family`)]: fontFamily,
		[camelCase(`${attrPrefixName}-font-size`)]: fontSize,
		[camelCase(`${attrPrefixName}-font-weight`)]: fontWeight,
		[camelCase(`${attrPrefixName}-line-height`)]: lineHeight,
	} = attributes;

	return {
		...fontSizeStyles(fontSize),
		...fontFamilyStyles(fontFamily),
		...fontWeightStyles(fontWeight),
		...lineHeightStyles(lineHeight),
	};
};

export default {
	defaultUnits,
	fontFamilyAttribute,
	fontFamilyControl,
	fontFamilyStyles,
	fontSizeUnitAttribute,
	fontSizeAttribute,
	fontSizeControl,
	fontSizeStyles,
	fontWeightAttribute,
	fontWeightControl,
	fontWeightStyles,
	lineHeightAttribute,
	lineHeightControl,
	lineHeightStyles,
	attributes,
	innerControls,
	controls,
	styles,
};
