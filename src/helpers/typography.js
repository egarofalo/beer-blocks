import { __, sprintf } from "@wordpress/i18n";
import {
	PanelBody,
	__experimentalUnitControl as UnitControl,
	BaseControl,
	RangeControl,
	TextControl,
} from "@wordpress/components";
import ReactHtmlParser from "react-html-parser";

export const defaultUnits = [
	{ value: "px", label: "PX" },
	{ value: "em", label: "EM" },
	{ value: "rem", label: "REM" },
];

export const attributes = () => ({
	fontSizeUnit: {
		type: "string",
		default: "px",
	},
	fontSize: {
		type: "string",
		default: "",
	},
	fontFamily: {
		type: "string",
		default: "",
	},
	fontWeight: {
		type: "number",
		default: "",
	},
	lineHeight: {
		type: "number",
		default: "",
	},
});

export const innerControls = (props) => {
	const {
		setAttributes,
		attributes: { fontSizeUnit, fontSize, fontFamily, fontWeight, lineHeight },
	} = props;

	return (
		<>
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
						fontFamily: value,
					})
				}
			/>

			<BaseControl
				help={__(
					"Set the font size and select the unit in the right side of the input field.",
					"beer-blocks"
				)}
			>
				<UnitControl
					label={sprintf(__("Font Size (%s)", "beer-blocks"), fontSizeUnit)}
					value={fontSize}
					onChange={(fontSize) => setAttributes({ fontSize })}
					onUnitChange={(fontSizeUnit) =>
						setAttributes({
							fontSizeUnit,
							fontSize: "",
						})
					}
					units={defaultUnits}
				/>
			</BaseControl>

			<BaseControl>
				<RangeControl
					label={__("Font Weight", "beer-blocks")}
					value={fontWeight}
					onChange={(fontWeight) => setAttributes({ fontWeight })}
					min={100}
					max={900}
					step={100}
					style={{ paddingBottom: 0, marginBottom: 0 }}
					allowReset
				/>
			</BaseControl>

			<BaseControl>
				<RangeControl
					label={__("Line Height", "beer-blocks")}
					value={lineHeight}
					onChange={(lineHeight) => setAttributes({ lineHeight })}
					min={1}
					max={10}
					step={0.1}
					style={{ paddingBottom: 0, marginBottom: 0 }}
					allowReset
				/>
			</BaseControl>
		</>
	);
};

export const controls = ({ props, initialOpen = false }) => (
	<PanelBody title={__("Typography", "beer-blocks")} initialOpen={initialOpen}>
		{innerControls(props)}
	</PanelBody>
);

export const styles = ({ fontSize, fontFamily, fontWeight, lineHeight }) => {
	let styles = {};

	if (fontSize) {
		styles["fontSize"] = fontSize;
	}

	if (fontFamily) {
		styles["fontFamily"] = fontFamily;
	}

	if (fontWeight) {
		styles["fontWeight"] = fontWeight;
	}

	if (lineHeight) {
		styles["lineHeight"] = lineHeight;
	}

	return styles;
};

export default { defaultUnits, attributes, innerControls, controls, styles };
