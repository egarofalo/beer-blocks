import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	BaseControl,
	RangeControl,
	SelectControl,
	ColorPicker,
	__experimentalHeading as Heading,
	Button,
} from "@wordpress/components";
import { camelCase, capitalize } from "lodash";

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

const label = (type, side) =>
	({
		style: {
			all: __("Border style", "beer-blocks"),
			top: __("Border top style", "beer-blocks"),
			right: __("Border right style", "beer-blocks"),
			bottom: __("Border bottom style", "beer-blocks"),
			left: __("Border left style", "beer-blocks"),
		},
		width: {
			all: __("Border width", "beer-blocks"),
			top: __("Border top width", "beer-blocks"),
			right: __("Border right width", "beer-blocks"),
			bottom: __("Border bottom width", "beer-blocks"),
			left: __("Border left width", "beer-blocks"),
		},
		color: {
			all: __("Border color", "beer-blocks"),
			top: __("Border top color", "beer-blocks"),
			right: __("Border right color", "beer-blocks"),
			bottom: __("Border bottom color", "beer-blocks"),
			left: __("Border left color", "beer-blocks"),
		},
	}[type][side === "" ? "all" : side]);

const sectionTitle = (side) =>
	({
		all: (
			<Heading align="center" level="3">
				{__("ALL BORDERS", "beer-blocks")}
			</Heading>
		),
		top: (
			<Heading align="center" level="3">
				{__("BORDER TOP", "beer-blocks")}
			</Heading>
		),
		right: (
			<Heading align="center" level="3">
				{__("BORDER RIGHT", "beer-blocks")}
			</Heading>
		),
		bottom: (
			<Heading align="center" level="3">
				{__("BORDER BOTTOM", "beer-blocks")}
			</Heading>
		),
		left: (
			<Heading align="center" level="3">
				{__("BORDER LEFT", "beer-blocks")}
			</Heading>
		),
	}[side === "" ? "all" : side]);

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
		<BaseControl>
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
		</BaseControl>
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
	[camelCase(`${attrPrefixName}-border-${side}-style`)]: {
		type: "string",
		default: "",
	},
	[camelCase(`${attrPrefixName}-border-${side}-width`)]: {
		type: "string",
		default: "",
	},
	[camelCase(`${attrPrefixName}-border-${side}-color`)]: {
		type: "string",
		default: "",
	},
});

export const innerControls = ({
	props,
	attrPrefixName = "",
	side = "",
	title = undefined,
}) => (
	<>
		{title === undefined ? sectionTitle(side) : title}
		{borderStyleControl({
			props,
			attrName: camelCase(`${attrPrefixName}-border-${side}-style`),
			label: label("style", side),
		})}
		{borderWidthControl({
			props,
			attrName: camelCase(`${attrPrefixName}-border-${side}-width`),
			label: label("width", side),
		})}
		{borderColorControl({
			props,
			attrName: camelCase(`${attrPrefixName}-border-${side}-color`),
			label: label("color", side),
		})}
		<BaseControl>
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
		</BaseControl>
	</>
);

export const controls = ({
	props,
	initialOpen = false,
	attrPrefixName = "",
}) => {
	const {
		[camelCase(`${attrPrefixName}-border-style`)]: borderStyle = undefined,
		[camelCase(
			`${attrPrefixName}-border-top-style`
		)]: borderTopStyle = undefined,
		[camelCase(
			`${attrPrefixName}-border-right-style`
		)]: borderRightStyle = undefined,
		[camelCase(
			`${attrPrefixName}-border-bottom-style`
		)]: borderBottomStyle = undefined,
		[camelCase(
			`${attrPrefixName}-border-left-style`
		)]: borderLeftStyle = undefined,
	} = props.attributes;

	return (
		<PanelBody title={__("Border", "beer-blocks")} initialOpen={initialOpen}>
			{borderStyle !== undefined && innerControls({ props, attrPrefixName })}
			{borderTopStyle !== undefined &&
				innerControls({ props, attrPrefixName, side: "top" })}
			{borderRightStyle !== undefined &&
				innerControls({ props, attrPrefixName, side: "right" })}
			{borderBottomStyle !== undefined &&
				innerControls({ props, attrPrefixName, side: "bottom" })}
			{borderLeftStyle !== undefined &&
				innerControls({ props, attrPrefixName, side: "left" })}
		</PanelBody>
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
