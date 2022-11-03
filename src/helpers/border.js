import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	BaseControl,
	RangeControl,
	SelectControl,
	ColorPalette,
	Button,
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
	Disabled,
} from "@wordpress/components";
import { camelCase, capitalize, has } from "lodash";
import {
	BsBorderOuter,
	BsBorderLeft,
	BsBorderTop,
	BsBorderRight,
	BsBorderBottom,
} from "react-icons/bs";
import { variantsColorPallet as variants } from "./bootstrap-variants";

// default attributes values
const DEFAULTS = {
	borderStyle: undefined,
	borderColor: undefined,
	borderWidth: undefined,
};

// border style options
const BORDER_STYLES = [
	{ label: __("-- SELECT --", "beer-blocks"), value: undefined },
	{ label: __("None", "beer-blocks"), value: "none" },
	{ label: __("Dotted", "beer-blocks"), value: "dotted" },
	{ label: __("Dashed", "beer-blocks"), value: "dashed" },
	{ label: __("Solid", "beer-blocks"), value: "solid" },
	{ label: __("Double", "beer-blocks"), value: "double" },
	{ label: __("Inset", "beer-blocks"), value: "inset" },
	{ label: __("Outset", "beer-blocks"), value: "outset" },
];

// border sides
const SIDES = ["top", "right", "bottom", "left"];

// border sides labels
const SIDES_LABELS = {
	all: __("All borders", "beer-blocks"),
	left: __("Left border", "beer-blocks"),
	top: __("Top border", "beer-blocks"),
	right: __("Right border", "beer-blocks"),
	bottom: __("Bottom border", "beer-blocks"),
};

// returns border side style block's attribute
export const borderStyleAttribute = ({
	attrPrefix = "",
	defaultValue = DEFAULTS.borderStyle,
	sides = SIDES,
}) =>
	Object.fromEntries(
		sides.map((side) => [
			camelCase(`${attrPrefix}-border-${side}-style`),
			{ type: "string", default: defaultValue },
		])
	);

// returns border style control
export const borderStyleControl = ({
	props,
	attrPrefix = "",
	label = __("Border style", "beer-blocks"),
	side = "all",
}) => {
	const { setAttributes, attributes } = props;
	const attrName = camelCase(
		`${attrPrefix}-border-${side === "all" ? "top" : side}-style`
	);

	if (!has(attributes, attrName)) {
		return null;
	}

	return (
		<SelectControl
			label={label}
			options={BORDER_STYLES}
			value={attributes[attrName]}
			onChange={(value) =>
				setAttributes(
					side === "all"
						? Object.fromEntries(
								SIDES.map((side) => [
									camelCase(`${attrPrefix}-border-${side}-style`),
									value,
								])
						  )
						: { [camelCase(`${attrPrefix}-border-${side}-style`)]: value }
				)
			}
		/>
	);
};

// returns border style inline styles
export const borderStyleStyles = (borderStyle, side) => ({
	[`border${capitalize(side)}Style`]: borderStyle,
});

// returns border side width block's attribute
export const borderWidthAttribute = ({
	attrPrefix = "",
	defaultValue = DEFAULTS.borderWidth,
	sides = SIDES,
}) =>
	Object.fromEntries(
		sides.map((side) => [
			camelCase(`${attrPrefix}-border-${side}-width`),
			{ type: "string", default: defaultValue },
		])
	);

// returns border width control
export const borderWidthControl = ({
	props,
	attrPrefix = "",
	label = __("Border width", "beer-blocks"),
	side = "all",
	defaultValue = DEFAULTS.borderWidth,
}) => {
	const { setAttributes, attributes } = props;
	const attrName = camelCase(
		`${attrPrefix}-border-${side === "all" ? "top" : side}-width`
	);

	if (!has(attributes, attrName)) {
		return null;
	}

	const { [attrName]: borderWidth } = attributes;

	return (
		<RangeControl
			label={label}
			value={
				borderWidth !== undefined
					? parseInt(borderWidth.replace(/px$/, ""))
					: borderWidth
			}
			onChange={(value) =>
				setAttributes(
					side === "all"
						? Object.fromEntries(
								SIDES.map((side) => [
									camelCase(`${attrPrefix}-border-${side}-width`),
									value !== undefined ? `${value}px` : value,
								])
						  )
						: {
								[camelCase(`${attrPrefix}-border-${side}-width`)]:
									value !== undefined ? `${value}px` : value,
						  }
				)
			}
			min={1}
			step={1}
			allowReset
			resetFallbackValue={defaultValue}
		/>
	);
};

// returns border width inline styles
export const borderWidthStyles = (borderWidth, side) => ({
	[`border${capitalize(side)}Width`]: borderWidth,
});

// returns border color block's attribute
export const borderColorAttribute = ({
	attrPrefix = "",
	defaultValue = DEFAULTS.borderColor,
	sides = SIDES,
}) =>
	Object.fromEntries(
		sides.map((side) => [
			camelCase(`${attrPrefix}-border-${side}-color`),
			{ type: "string", default: defaultValue },
		])
	);

// returns border color control
export const borderColorControl = ({
	props,
	attrPrefix = "",
	label = __("Border color", "beer-blocks"),
	side = "all",
}) => {
	const { setAttributes, attributes } = props;
	const attrName = camelCase(
		`${attrPrefix}-border-${side === "all" ? "top" : side}-color`
	);

	if (!has(attributes, attrName)) {
		return null;
	}

	return (
		<BaseControl label={label}>
			<ColorPalette
				colors={variants}
				value={attributes[attrName]}
				onChange={(color) =>
					setAttributes(
						side === "all"
							? Object.fromEntries(
									SIDES.map((side) => [
										camelCase(`${attrPrefix}-border-${side}-color`),
										color,
									])
							  )
							: { [camelCase(`${attrPrefix}-border-${side}-color`)]: color }
					)
				}
				disableAlpha
			/>
		</BaseControl>
	);
};

// returns border color inline styles
export const borderColorStyles = (borderColor, side) => ({
	[`border${capitalize(side)}Color`]: borderColor,
});

// returns border block's attributes
export const attributes = ({
	attrPrefix = "",
	sides = SIDES,
	defaultBorderStyle = DEFAULTS.borderStyle,
	defaultBorderColor = DEFAULTS.borderColor,
	defaultBorderWidth = DEFAULTS.borderWidth,
	borderColorTransition = false,
	borderWidthTransition = false,
} = {}) => ({
	...borderStyleAttribute({
		attrPrefix,
		defaultValue: defaultBorderStyle,
		sides,
	}),
	...borderWidthAttribute({
		attrPrefix,
		defaultValue: defaultBorderWidth,
		sides,
		transition: borderWidthTransition,
	}),
	...borderColorAttribute({
		attrPrefix,
		defaultValue: defaultBorderColor,
		sides,
		transition: borderColorTransition,
	}),
});

// returns border's specific side controls
export const innerControls = ({
	props,
	attrPrefix = "",
	side = "all",
	defaultBorderStyle = DEFAULTS.borderStyle,
	defaultBorderWidth = DEFAULTS.borderWidth,
	defaultBorderColor = DEFAULTS.borderColor,
}) => (
	<>
		{borderStyleControl({ props, attrPrefix, side })}
		{borderWidthControl({
			props,
			attrPrefix,
			side,
			defaultValue: defaultBorderWidth,
		})}
		{borderColorControl({ props, attrPrefix, side })}

		<Button
			className="is-destructive"
			style={{ display: "block", textAlign: "center", width: "100%" }}
			onClick={() =>
				props.setAttributes(
					side === "all"
						? {
								...Object.fromEntries(
									SIDES.map((side) => [
										camelCase(`${attrPrefix}-border-${side}-style`),
										defaultBorderStyle,
									])
								),
								...Object.fromEntries(
									SIDES.map((side) => [
										camelCase(`${attrPrefix}-border-${side}-width`),
										defaultBorderWidth,
									])
								),
								...Object.fromEntries(
									SIDES.map((side) => [
										camelCase(`${attrPrefix}-border-${side}-color`),
										defaultBorderColor,
									])
								),
						  }
						: {
								[camelCase(
									`${attrPrefix}-border-${side}-style`
								)]: defaultBorderStyle,
								[camelCase(
									`${attrPrefix}-border-${side}-width`
								)]: defaultBorderWidth,
								[camelCase(
									`${attrPrefix}-border-${side}-color`
								)]: defaultBorderColor,
						  }
				)
			}
		>
			{__("Clear fields", "beer-blocks")}
		</Button>
	</>
);

// returns border's controls inside a Panel Body
export const controls = ({
	props,
	initialOpen = false,
	attrPrefix = "",
	panelBody = true,
	title = __("Border", "beer-blocks"),
	defaultBorderStyle = DEFAULTS.borderStyle,
	defaultBorderWidth = DEFAULTS.borderWidth,
	defaultBorderColor = DEFAULTS.borderColor,
	disabled = false,
}) => {
	const { attributes } = props;
	const borderTopStyleAttr = has(
		attributes,
		camelCase(`${attrPrefix}-border-top-style`)
	);
	const borderRightStyleAttr = has(
		attributes,
		camelCase(`${attrPrefix}-border-right-style`)
	);
	const borderBottomStyleAttr = has(
		attributes,
		camelCase(`${attrPrefix}-border-bottom-style`)
	);
	const borderLeftStyleAttr = has(
		attributes,
		camelCase(`${attrPrefix}-border-left-style`)
	);
	const borderAllSides =
		borderTopStyleAttr &&
		borderRightStyleAttr &&
		borderBottomStyleAttr &&
		borderLeftStyleAttr;

	const selectedSide = () => {
		if (borderAllSides) {
			return "all";
		}

		if (borderTopStyleAttr) {
			return "top";
		}

		if (borderRightStyleAttr) {
			return "right";
		}

		if (borderBottomStyleAttr) {
			return "bottom";
		}

		if (borderLeftStyleAttr) {
			return "left";
		}

		return null;
	};

	const [side, setSide] = useState(selectedSide());

	if (side === null) {
		return null;
	}

	let result = (
		<>
			<BaseControl
				label={sprintf(
					__("Select border side (%s)", "beer-blocks"),
					SIDES_LABELS[side]
				)}
			>
				<RadioGroup
					onChange={setSide}
					checked={side}
					style={{ display: "block", marginTop: "8px" }}
				>
					{borderAllSides && (
						<Radio value="all">
							<BsBorderOuter style={{ fontSize: "1.2rem" }} />
						</Radio>
					)}

					{borderLeftStyleAttr && (
						<Radio value="left">
							<BsBorderLeft style={{ fontSize: "1.2rem" }} />
						</Radio>
					)}

					{borderTopStyleAttr && (
						<Radio value="top">
							<BsBorderTop style={{ fontSize: "1.2rem" }} />
						</Radio>
					)}

					{borderRightStyleAttr && (
						<Radio value="right">
							<BsBorderRight style={{ fontSize: "1.2rem" }} />
						</Radio>
					)}

					{borderBottomStyleAttr && (
						<Radio value="bottom">
							<BsBorderBottom style={{ fontSize: "1.2rem" }} />
						</Radio>
					)}
				</RadioGroup>
			</BaseControl>

			{innerControls({
				props,
				attrPrefix,
				side,
				defaultBorderStyle,
				defaultBorderColor,
				defaultBorderWidth,
			})}
		</>
	);

	if (disabled) {
		result = <Disabled>{result}</Disabled>;
	}

	return panelBody ? (
		<PanelBody title={title} initialOpen={initialOpen}>
			{result}
		</PanelBody>
	) : (
		result
	);
};

// returns border's inline styles
export const styles = (props, attrPrefix = "") => {
	const {
		[camelCase(`${attrPrefix}-border-top-style`)]: borderTopStyle = undefined,
		[camelCase(`${attrPrefix}-border-top-width`)]: borderTopWidth = undefined,
		[camelCase(`${attrPrefix}-border-top-color`)]: borderTopColor = undefined,
		[camelCase(
			`${attrPrefix}-border-right-style`
		)]: borderRightStyle = undefined,
		[camelCase(
			`${attrPrefix}-border-right-width`
		)]: borderRightWidth = undefined,
		[camelCase(
			`${attrPrefix}-border-right-color`
		)]: borderRightColor = undefined,
		[camelCase(
			`${attrPrefix}-border-bottom-style`
		)]: borderBottomStyle = undefined,
		[camelCase(
			`${attrPrefix}-border-bottom-width`
		)]: borderBottomWidth = undefined,
		[camelCase(
			`${attrPrefix}-border-bottom-color`
		)]: borderBottomColor = undefined,
		[camelCase(`${attrPrefix}-border-left-style`)]: borderLeftStyle = undefined,
		[camelCase(`${attrPrefix}-border-left-width`)]: borderLeftWidth = undefined,
		[camelCase(`${attrPrefix}-border-left-color`)]: borderLeftColor = undefined,
	} = props.attributes;

	return {
		...borderStyleStyles(borderTopStyle, "top"),
		...borderStyleStyles(borderRightStyle, "right"),
		...borderStyleStyles(borderBottomStyle, "bottom"),
		...borderStyleStyles(borderLeftStyle, "left"),
		...borderWidthStyles(borderTopWidth, "top"),
		...borderWidthStyles(borderRightWidth, "right"),
		...borderWidthStyles(borderBottomWidth, "bottom"),
		...borderWidthStyles(borderLeftWidth, "left"),
		...borderColorStyles(borderTopColor, "top"),
		...borderColorStyles(borderRightColor, "right"),
		...borderColorStyles(borderBottomColor, "bottom"),
		...borderColorStyles(borderLeftColor, "left"),
	};
};

// returns css vars for border-style styles
export const borderStyleCssVars = ({ props, blockName, attrPrefix = "" }) => {
	const { attributes } = props;

	return Object.fromEntries(
		SIDES.map((side) => {
			const attrName = camelCase(`${attrPrefix}-border-${side}-style`);
			const { [attrName]: borderStyle = undefined } = attributes;

			return borderStyle
				? [`--wp-beer-blocks-${blockName}-${attrName}`, borderStyle]
				: [];
		})
	);
};

// returns css vars for border-color styles
export const borderColorCssVars = ({ props, blockName, attrPrefix = "" }) => {
	const { attributes } = props;

	return Object.fromEntries(
		SIDES.map((side) => {
			const attrName = camelCase(`${attrPrefix}-border-${side}-color`);
			const { [attrName]: borderColor = undefined } = attributes;

			return borderColor
				? [`--wp-beer-blocks-${blockName}-${attrName}`, borderColor]
				: [];
		})
	);
};

// returns css vars for border-width styles
export const borderWidthCssVars = ({ props, blockName, attrPrefix = "" }) => {
	const { attributes } = props;

	return Object.fromEntries(
		SIDES.map((side) => {
			const attrName = camelCase(`${attrPrefix}-border-${side}-width`);
			const { [attrName]: borderWidth = undefined } = attributes;

			return borderWidth
				? [`--wp-beer-blocks-${blockName}-${attrName}`, borderWidth]
				: [];
		})
	);
};

// returns css vars for border styles
export const cssVars = ({ props, blockName, attrPrefix = "" }) => ({
	...borderStyleCssVars({ props, blockName, attrPrefix }),
	...borderColorCssVars({ props, blockName, attrPrefix }),
	...borderWidthCssVars({ props, blockName, attrPrefix }),
});

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
	borderStyleCssVars,
	borderColorCssVars,
	borderWidthCssVars,
	cssVars,
};
