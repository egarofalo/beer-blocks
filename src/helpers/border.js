import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	BaseControl,
	RangeControl,
	SelectControl,
	ColorPicker,
} from "@wordpress/components";

export const attributes = () => ({
	borderStyle: {
		type: "string",
		default: "",
	},
	borderWidth: {
		type: "string",
		default: "",
	},
	borderColor: {
		type: "string",
		default: "",
	},
});

export const innerControls = (props) => {
	const {
		setAttributes,
		attributes: { borderStyle, borderWidth, borderColor },
	} = props;

	return (
		<>
			<SelectControl
				label={__("Style", "beer-blocks")}
				options={[
					{ label: __("-- SELECT --", "beer-blocks"), value: "" },
					{ label: "None", value: "none" },
					{ label: "Dotted", value: "dotted" },
					{ label: "Dashed", value: "dashed" },
					{ label: "Solid", value: "solid" },
					{ label: "Double", value: "double" },
					{ label: "Groove", value: "groove" },
					{ label: "Ridge", value: "ridge" },
					{ label: "Inset", value: "inset" },
					{ label: "Outset", value: "outset" },
					{ label: "Hidden", value: "hidden" },
				]}
				value={borderStyle}
				onChange={(value) =>
					setAttributes({
						borderStyle: value,
					})
				}
			/>

			<BaseControl>
				<RangeControl
					label={__("Width", "beer-blocks")}
					value={borderWidth}
					onChange={(value) => setAttributes({ borderWidth: value })}
					min={1}
					step={1}
					allowReset
				/>
			</BaseControl>

			<BaseControl label={__("Color", "beer-blocks")}>
				<ColorPicker
					color={borderColor}
					onChangeComplete={(value) =>
						setAttributes({ borderColor: value.hex })
					}
					disableAlpha
				/>
			</BaseControl>
		</>
	);
};

export const controls = ({ props, initialOpen = false }) => (
	<PanelBody title={__("Border", "beer-blocks")} initialOpen={initialOpen}>
		{innerControls(props)}
	</PanelBody>
);

export const styles = ({ borderStyle, borderWidth, borderColor }) => {
	let styles = {};

	if (borderStyle) {
		styles["borderStyle"] = borderStyle;
	}

	if (borderWidth) {
		styles["borderWidth"] = borderWidth;
	}

	if (borderColor) {
		styles["borderColor"] = borderColor;
	}

	return styles;
};

export default { attributes, innerControls, controls, styles };
