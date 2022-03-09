import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	BaseControl,
	RangeControl,
	SelectControl,
	ColorPicker,
	Button,
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
} from "@wordpress/components";
import { camelCase, capitalize } from "lodash";
import {
	MdBorderOuter,
	MdBorderLeft,
	MdBorderTop,
	MdBorderRight,
	MdBorderBottom,
} from "react-icons/md";

const BORDER_STYLES = [
	{ label: __("-- SELECT --", "beer-blocks"), value: "" },
	{ label: __("None", "beer-blocks"), value: "none" },
	{ label: __("Dotted", "beer-blocks"), value: "dotted" },
	{ label: __("Dashed", "beer-blocks"), value: "dashed" },
	{ label: __("Solid", "beer-blocks"), value: "solid" },
	{ label: __("Double", "beer-blocks"), value: "double" },
	{ label: __("Inset", "beer-blocks"), value: "inset" },
	{ label: __("Outset", "beer-blocks"), value: "outset" },
];

const sidesLabels = {
	all: __("All borders", "beer-blocks"),
	left: __("Left border", "beer-blocks"),
	top: __("Top border", "beer-blocks"),
	right: __("Right border", "beer-blocks"),
	bottom: __("Bottom border", "beer-blocks"),
};

export const borderStyleAttribute = () => ({ type: "string", default: "" });

export const borderStyleControl = ({
	props,
	attrName = "borderStyle",
	label = __("Border style", "beer-blocks"),
}) => {
	const {
		setAttributes,
		attributes: { [attrName]: borderStyle = undefined },
	} = props;

	return borderStyle !== undefined ? (
		<SelectControl
			label={label}
			options={BORDER_STYLES}
			value={borderStyle}
			onChange={(value) =>
				setAttributes({
					[attrName]: value,
				})
			}
		/>
	) : null;
};

export const borderStyleStyles = (borderStyle, side = "") =>
	borderStyle ? { [`border${capitalize(side)}Style`]: borderStyle } : {};

export const borderWidthAttribute = () => ({
	type: "string",
	default: "",
});

export const borderWidthControl = ({
	props,
	attrName = "borderWidth",
	label = __("Border width", "beer-blocks"),
}) => {
	const {
		setAttributes,
		attributes: { [attrName]: borderWidth = undefined },
	} = props;

	return borderWidth !== undefined ? (
		<RangeControl
			label={label}
			value={borderWidth ? parseInt(borderWidth.replace(/px$/, "")) : ""}
			onChange={(value) =>
				setAttributes({ [attrName]: value ? `${value}px` : "" })
			}
			min={1}
			step={1}
			allowReset
			resetFallbackValue={""}
		/>
	) : null;
};

export const borderWidthStyles = (borderWidth, side = "") =>
	borderWidth ? { [`border${capitalize(side)}Width`]: borderWidth } : {};

export const borderColorAttribute = () => ({ type: "string", default: "" });

export const borderColorControl = ({
	props,
	attrName = "borderColor",
	label = __("Border color", "beer-blocks"),
}) => {
	const {
		setAttributes,
		attributes: { [attrName]: borderColor = undefined },
	} = props;

	return borderColor !== undefined ? (
		<BaseControl label={label}>
			<ColorPicker
				color={borderColor}
				onChangeComplete={(value) => setAttributes({ [attrName]: value.hex })}
				disableAlpha
				defaultValue=""
			/>
		</BaseControl>
	) : null;
};

export const borderColorStyles = (borderColor, side = "") =>
	borderColor ? { [`border${capitalize(side)}Color`]: borderColor } : {};

export const attributes = ({ attrPrefixName = "", side = "" } = {}) => ({
	[camelCase(`${attrPrefixName}-border-${side}-style`)]: borderStyleAttribute(),
	[camelCase(`${attrPrefixName}-border-${side}-width`)]: borderWidthAttribute(),
	[camelCase(`${attrPrefixName}-border-${side}-color`)]: borderColorAttribute(),
});

export const innerControls = ({ props, attrPrefixName = "", side = "" }) => (
	<>
		{borderStyleControl({
			props,
			attrName: camelCase(`${attrPrefixName}-border-${side}-style`),
		})}

		{borderWidthControl({
			props,
			attrName: camelCase(`${attrPrefixName}-border-${side}-width`),
		})}

		{borderColorControl({
			props,
			attrName: camelCase(`${attrPrefixName}-border-${side}-color`),
		})}

		<Button
			className="is-destructive"
			style={{ display: "block", textAlign: "center", width: "100%" }}
			onClick={() =>
				props.setAttributes({
					[camelCase(`${attrPrefixName}-border-${side}-style`)]: "",
					[camelCase(`${attrPrefixName}-border-${side}-width`)]: "",
					[camelCase(`${attrPrefixName}-border-${side}-color`)]: "",
				})
			}
		>
			{__("Clear fields", "beer-blocks")}
		</Button>
	</>
);

export const controls = ({
	props,
	initialOpen = false,
	attrPrefixName = "",
	title = __("Border", "beer-blocks"),
}) => {
	const {
		[camelCase(`${attrPrefixName}-border-style`)]: borderStyle = undefined,
		[camelCase(
			`${attrPrefixName}-border-left-style`
		)]: borderLeftStyle = undefined,
		[camelCase(
			`${attrPrefixName}-border-top-style`
		)]: borderTopStyle = undefined,
		[camelCase(
			`${attrPrefixName}-border-right-style`
		)]: borderRightStyle = undefined,
		[camelCase(
			`${attrPrefixName}-border-bottom-style`
		)]: borderBottomStyle = undefined,
	} = props.attributes;

	const selectedSide = () => {
		if (borderStyle !== undefined) {
			return "all";
		}

		if (borderLeftStyle !== undefined) {
			return "left";
		}

		if (borderTopStyle !== undefined) {
			return "top";
		}

		if (borderRightStyle !== undefined) {
			return "right";
		}

		if (borderBottomStyle !== undefined) {
			return "bottom";
		}
	};

	const [side, setSide] = useState(selectedSide());

	const result = (
		<>
			<BaseControl
				label={sprintf(
					__("Select border side (%s)", "beer-blocks"),
					sidesLabels[side]
				)}
			>
				<RadioGroup
					onChange={setSide}
					checked={side}
					style={{ display: "block", marginTop: "8px" }}
				>
					{borderStyle !== undefined && (
						<Radio value="all">
							<MdBorderOuter style={{ fontSize: "1.2rem" }} />
						</Radio>
					)}

					{borderLeftStyle !== undefined && (
						<Radio value="left">
							<MdBorderLeft style={{ fontSize: "1.2rem" }} />
						</Radio>
					)}

					{borderTopStyle !== undefined && (
						<Radio value="top">
							<MdBorderTop style={{ fontSize: "1.2rem" }} />
						</Radio>
					)}

					{borderRightStyle !== undefined && (
						<Radio value="right">
							<MdBorderRight style={{ fontSize: "1.2rem" }} />
						</Radio>
					)}

					{borderBottomStyle !== undefined && (
						<Radio value="bottom">
							<MdBorderBottom style={{ fontSize: "1.2rem" }} />
						</Radio>
					)}
				</RadioGroup>
			</BaseControl>

			{side === "all"
				? innerControls({ props, attrPrefixName })
				: innerControls({ props, attrPrefixName, side })}
		</>
	);

	return title ? (
		<PanelBody title={title} initialOpen={initialOpen}>
			{result}
		</PanelBody>
	) : (
		result
	);
};

export const styles = (attributes, attrPrefixName = "") => {
	const {
		[camelCase(`${attrPrefixName}-border-style`)]: borderStyle = undefined,
		[camelCase(`${attrPrefixName}-border-width`)]: borderWidth = undefined,
		[camelCase(`${attrPrefixName}-border-color`)]: borderColor = undefined,
		[camelCase(
			`${attrPrefixName}-border-top-style`
		)]: borderTopStyle = undefined,
		[camelCase(
			`${attrPrefixName}-border-top-width`
		)]: borderTopWidth = undefined,
		[camelCase(
			`${attrPrefixName}-border-top-color`
		)]: borderTopColor = undefined,
		[camelCase(
			`${attrPrefixName}-border-right-style`
		)]: borderRightStyle = undefined,
		[camelCase(
			`${attrPrefixName}-border-right-width`
		)]: borderRightWidth = undefined,
		[camelCase(
			`${attrPrefixName}-border-right-color`
		)]: borderRightColor = undefined,
		[camelCase(
			`${attrPrefixName}-border-bottom-style`
		)]: borderBottomStyle = undefined,
		[camelCase(
			`${attrPrefixName}-border-bottom-width`
		)]: borderBottomWidth = undefined,
		[camelCase(
			`${attrPrefixName}-border-bottom-color`
		)]: borderBottomColor = undefined,
		[camelCase(
			`${attrPrefixName}-border-left-style`
		)]: borderLeftStyle = undefined,
		[camelCase(
			`${attrPrefixName}-border-left-width`
		)]: borderLeftWidth = undefined,
		[camelCase(
			`${attrPrefixName}-border-left-color`
		)]: borderLeftColor = undefined,
	} = attributes;

	return {
		...borderStyleStyles(borderStyle),
		...borderStyleStyles(borderTopStyle, "top"),
		...borderStyleStyles(borderRightStyle, "right"),
		...borderStyleStyles(borderBottomStyle, "bottom"),
		...borderStyleStyles(borderLeftStyle, "left"),
		...borderWidthStyles(borderWidth),
		...borderWidthStyles(borderTopWidth, "top"),
		...borderWidthStyles(borderRightWidth, "right"),
		...borderWidthStyles(borderBottomWidth, "bottom"),
		...borderWidthStyles(borderLeftWidth, "left"),
		...borderColorStyles(borderColor),
		...borderColorStyles(borderTopColor, "top"),
		...borderColorStyles(borderRightColor, "right"),
		...borderColorStyles(borderBottomColor, "bottom"),
		...borderColorStyles(borderLeftColor, "left"),
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
