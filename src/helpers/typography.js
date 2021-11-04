import { __, sprintf } from "@wordpress/i18n";
import {
	PanelBody,
	__experimentalUnitControl as UnitControl,
	BaseControl,
	RangeControl,
	Notice,
} from "@wordpress/components";
import { dispatch, useSelect, select } from "@wordpress/data";
import Select from "react-select";
import fontFamilies from "./fonts.json";
import { camelCase } from "lodash";
import { STORE_NAME } from "./../store/constants";
import { get as loGet } from "lodash";

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

const setSelectedFonts = (blocks, selectedFonts) => {
	blocks.forEach((block, index) => {
		if (block.innerBlocks.length > 0) {
			setSelectedFonts(block.innerBlocks, selectedFonts);
		}

		let fontFamily = loGet(block.attributes, "fontFamily");

		if (fontFamily && !selectedFonts.includes(fontFamily)) {
			selectedFonts.push(fontFamily);
		}
	});
};

const onChangeFontFamilyControl = (
	props,
	selectedOption,
	attrName,
	selectedFonts
) => {
	const { setAttributes } = props;

	setAttributes({
		[attrName]: selectedOption.value.family,
	});

	let editorSelectedFonts = [];
	setSelectedFonts(
		select("core/block-editor").getBlocks(),
		editorSelectedFonts
	);
	dispatch(STORE_NAME).updateSelectedFonts(editorSelectedFonts);
};

export const fontFamilyControl = (props, attrName = "fontFamily") => {
	const {
		attributes: { [attrName]: fontFamily },
	} = props;

	const {
		selectedFonts = [],
		selectedFontsLoading,
		selectedFontsError,
		updateSelectedFontsLoading,
		updateSelectedFontsError,
	} = useSelect((select) => {
		const store = select(STORE_NAME);

		return {
			selectedFonts: store.selectedFonts(),
			selectedFontsLoading: store.selectedFontsLoading(),
			selectedFontsError: store.selectedFontsError(),
			updateSelectedFontsLoading: store.updateSelectedFontsLoading(),
			updateSelectedFontsError: store.updateSelectedFontsError(),
		};
	}, []);

	console.log(selectedFonts);

	return (
		<>
			<BaseControl
				label={__("Font Families:", "beer-blocks")}
				help={__("Choose a font family from Google Fonts.", "beer-blocks")}
			>
				<Select
					options={fontFamilies.map(({ family, variants }) => ({
						value: {
							family,
							variants,
						},
						label: family,
					}))}
					isMulti={false}
					isLoading={selectedFontsLoading}
					noOptionsMessage={() => __("No font family options", "beer-blocks")}
					placeholder={__("Select...", "beer-blocks")}
					onChange={(selectedOption) =>
						onChangeFontFamilyControl(
							props,
							selectedOption,
							attrName,
							selectedFonts
						)
					}
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

			{updateSelectedFontsLoading && (
				<Notice status="info" isDismissible={false}>
					{__("Updating selected fonts...", "beer-blocks")}
				</Notice>
			)}

			{selectedFontsError && (
				<Notice status="error" isDismissible={false}>
					{selectedFontsError.message}
				</Notice>
			)}

			{updateSelectedFontsError && (
				<Notice status="error" isDismissible={false}>
					{updateSelectedFontsError.message}
				</Notice>
			)}
		</>
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
