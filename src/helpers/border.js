import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	BaseControl,
	RangeControl,
	SelectControl,
	ColorPicker,
} from "@wordpress/components";
import { camelCase } from "lodash";

export const borderStyleAttribute = () => ({ type: "string", default: "" });

export const borderStyleControl = (props, attrName = "borderStyle") => {
	const {
		setAttributes,
		attributes: { [attrName]: borderStyle },
	} = props;

	return (
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
	);
};

export const borderStyleStyles = (borderStyle) =>
	borderStyle ? { borderStyle } : {};

export const borderWidthAttribute = () => ({ type: "string", default: "" });

export const borderWidthControl = (props, attrName = "borderWidth") => {
	const {
		setAttributes,
		attributes: { [attrName]: borderWidth },
	} = props;

	return (
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
	);
};

export const borderWidthStyles = (borderWidth) =>
	borderWidth ? { borderWidth } : {};

export const borderColorAttribute = () => ({ type: "string", default: "" });

export const borderColorControl = (props, attrName = "borderColor") => {
	const {
		setAttributes,
		attributes: { [attrName]: borderColor },
	} = props;

	return (
		<BaseControl label={__("Color", "beer-blocks")}>
			<ColorPicker
				color={borderColor}
				onChangeComplete={(value) => setAttributes({ borderColor: value.hex })}
				disableAlpha
			/>
		</BaseControl>
	);
};

export const borderColorStyles = (borderColor) =>
	borderColor ? { borderColor } : {};

export const attributes = (attrPrefixName = "") => ({
	[camelCase(`${attrPrefixName}-border-style`)]: {
		type: "string",
		default: "",
	},
	[camelCase(`${attrPrefixName}-border-width`)]: {
		type: "string",
		default: "",
	},
	[camelCase(`${attrPrefixName}-border-color`)]: {
		type: "string",
		default: "",
	},
});

export const innerControls = (props, attrPrefixName = "") => (
	<>
		{borderStyleControl(props, camelCase(`${attrPrefixName}-border-style`))}
		{borderWidthControl(props, camelCase(`${attrPrefixName}-border-width`))}
		{borderColorControl(props, camelCase(`${attrPrefixName}-border-color`))}
	</>
);

export const controls = ({
	props,
	initialOpen = false,
	attrPrefixName = "",
}) => (
	<PanelBody title={__("Border", "beer-blocks")} initialOpen={initialOpen}>
		{innerControls(props, attrPrefixName)}
	</PanelBody>
);

export const styles = (attributes, attrPrefixName = "") => {
	const {
		[camelCase(`${attrPrefixName}-border-style`)]: borderStyle,
		[camelCase(`${attrPrefixName}-border-width`)]: borderWidth,
		[camelCase(`${attrPrefixName}-border-color`)]: borderColor,
	} = attributes;

	return {
		...borderStyleStyles(borderStyle),
		...borderWidthStyles(borderWidth),
		...borderColorStyles(borderColor),
	};
};

export default {
	borderStyleAttribute,
	borderStyleControl,
	borderStyleStyles,
	borderWidthAttribute,
	borderWidthControl,
	borderWidthStyles,
	borderColorAttribute,
	borderColorControl,
	borderColorStyles,
	attributes,
	innerControls,
	controls,
	styles,
};
