import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	TabPanel,
	__experimentalHeading as Heading,
	__experimentalBorderBoxControl as BorderBoxControl,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import {
	RxCorners,
	RxCornerBottomLeft,
	RxCornerBottomRight,
	RxCornerTopLeft,
	RxCornerTopRight,
} from "react-icons/rx";
import { variantsColorPallet as variants } from "./bootstrap-variants";
import { controlWrapperStyle } from "./inline-styles";
import { reset as resetButton } from "./buttons";
import { lowerCase, camelCase, upperFirst, has, get } from "lodash";

// default units used in UnitControl component
const defaultUnits = [
	{ value: "px", label: "PX" },
	{ value: "em", label: "EM" },
	{ value: "rem", label: "REM" },
	{ value: "%", label: "%" },
];

// border radius corners
const borderRadiusCorners = [
	"all",
	"top-right",
	"bottom-right",
	"bottom-left",
	"top-left",
];

// returns border radius value for all corners
const getBorderRadiusValue = (value) =>
	Object.fromEntries(
		borderRadiusCorners.map((corner) => [camelCase(corner), value])
	);

// border radius icons for tabs panel
const borderRadiusIcons = (corner) =>
	({
		all: <RxCorners className="beer-blocks-border-radius-tab-icon" />,
		"top-right": (
			<RxCornerTopRight className="beer-blocks-border-radius-tab-icon" />
		),
		"bottom-right": (
			<RxCornerBottomRight className="beer-blocks-border-radius-tab-icon" />
		),
		"bottom-left": (
			<RxCornerBottomLeft className="beer-blocks-border-radius-tab-icon" />
		),
		"top-left": (
			<RxCornerTopLeft className="beer-blocks-border-radius-tab-icon" />
		),
	}[corner]);

// border radius tabs panel options
const borderRadiusOptions = [borderRadiusCorners].map((corner) => ({
	name: camelCase(corner),
	title: borderRadiusIcons(corner),
}));

// border sides
const borderSides = ["top", "right", "bottom", "left"];

// checks if the attribute value has each side of borders
const isSplitBorders = (borders) =>
	has(borders, "top") ||
	has(borders, "right") ||
	has(borders, "bottom") ||
	has(borders, "left");

// returns attribute name
const attrName = (attrPrefix = "", borderRadius = false) =>
	camelCase(`${attrPrefix}-border${borderRadius ? "-radius" : ""}`);

// returns block's border attribute
const borderAttribute = (attrPrefix = "") => ({
	[attrName(attrPrefix)]: {
		type: "object",
		default: undefined,
	},
});

// returns block's border radius attribute
const borderRadiusAttribute = (attrPrefix = "") => ({
	[attrName(attrPrefix, true)]: {
		type: "object",
		default: getBorderRadiusValue(undefined),
	},
});

// returns border block's attribute
export const attributes = ({ attrPrefix = "", borderRadius = false } = {}) => ({
	...borderAttribute(attrPrefix),
	...(borderRadius ? borderRadiusAttribute(attrPrefix) : {}),
});

// returns border control
const borderControl = ({
	props,
	attrPrefix = "",
	label = __("Border styles", "beer-blocks"),
	enableStyle = true,
}) => {
	const attr = attrName(attrPrefix);
	const {
		attributes: { [attr]: border },
		setAttributes,
	} = props;

	return (
		<BorderBoxControl
			colors={variants}
			label={label}
			value={border}
			onChange={(newBorders) => setAttributes({ [attr]: newBorders })}
			enableStyle={enableStyle}
		/>
	);
};

// returns border radius control
const borderRadiusControl = ({
	props,
	attrPrefix = "",
	label = __("Rounded borders", "beer-blocks"),
}) => {
	const attr = attrName(attrPrefix, true);
	const {
		setAttributes,
		attributes: { [attr]: borderRadius },
	} = props;

	return (
		<>
			<Heading level="3" style={{ marginBottom: "5px" }}>
				{label}
			</Heading>

			<TabPanel
				initialTabName="all"
				tabs={borderRadiusOptions}
				className="beer-blocks-tabs border-helper"
			>
				{(tab) => (
					<UnitControl
						label={sprintf(
							__("%s corner", "beer-blocks"),
							upperFirst(lowerCase(tab.name))
						)}
						value={borderRadius[tab.name]}
						onChange={(value) =>
							setAttributes({
								[attr]: {
									...borderRadius,
									[camelCase(tab.name)]: value,
								},
							})
						}
						onUnitChange={() =>
							setAttributes({
								[attr]: {
									...borderRadius,
									[camelCase(tab.name)]: undefined,
								},
							})
						}
						units={defaultUnits}
					/>
				)}
			</TabPanel>
		</>
	);
};

// returns border controls
export const controls = ({
	props,
	initialOpen = false,
	attrPrefix = "",
	panelBody = true,
	title = __("Borders", "beer-blocks"),
	enableStyle = true,
	reset = true,
}) => {
	const { attributes, setAttributes } = props;
	const borderAttr = attrName(attrPrefix);
	const borderRadiusAttr = attrName(attrPrefix, true);

	const controls = has(attributes, borderAttr) ? (
		<>
			<div style={controlWrapperStyle}>
				{borderControl({ props, attrPrefix, enableStyle })}
			</div>

			{has(attributes, borderRadiusAttr)
				? borderRadiusControl({ props, attrPrefix })
				: null}

			{reset &&
				resetButton({
					onClick: () =>
						setAttributes({
							[borderAttr]: undefined,
							...(has(attributes, borderRadiusAttr)
								? {
										[borderRadiusAttr]: getBorderRadiusValue(undefined),
								  }
								: {}),
						}),
				})}
		</>
	) : null;

	if (!controls) {
		return null;
	}

	return panelBody ? (
		<PanelBody title={title} initialOpen={initialOpen}>
			{controls}
		</PanelBody>
	) : (
		controls
	);
};

// returns border css vars
export const borderCssVars = (props, blockName, attrPrefix = "") => {
	const attr = attrName(attrPrefix);
	const {
		attributes: { [attr]: borders = undefined },
	} = props;

	if (borders) {
		return isSplitBorders(borders)
			? Object.fromEntries([
					...Object.entries(borders)
						.filter((border) => border[1])
						.map((border) => [
							`--wp-beer-blocks-${blockName}-${
								attr + upperFirst(border[0])
							}Width`,
							border[1].width,
						]),
					...Object.entries(borders)
						.filter((border) => border[1])
						.map((border) => [
							`--wp-beer-blocks-${blockName}-${
								attr + upperFirst(border[0])
							}Color`,
							border[1].color,
						]),
					...Object.entries(borders)
						.filter((border) => border[1] && get(border[1], "style"))
						.map((border) => [
							`--wp-beer-blocks-${blockName}-${
								attr + upperFirst(border[0])
							}Style`,
							border[1].style,
						]),
			  ])
			: Object.fromEntries([
					...borderSides.map((side) => [
						[`--wp-beer-blocks-${blockName}-${attr + upperFirst(side)}Width`],
						borders.width,
					]),
					...borderSides.map((side) => [
						[`--wp-beer-blocks-${blockName}-${attr + upperFirst(side)}Color`],
						borders.color,
					]),
					...(has(borders, "style")
						? borderSides.map((side) => [
								[
									`--wp-beer-blocks-${blockName}-${
										attr + upperFirst(side)
									}Style`,
								],
								borders.style,
						  ])
						: []),
			  ]);
	}

	return {};
};

// returns css vars for border radius styles
export const borderRadiusCssVars = (props, blockName, attrPrefix = "") => {
	const attr = attrName(attrPrefix, true);
	const {
		attributes: { [attr]: borderRadius = undefined },
	} = props;

	if (borderRadius) {
		return borderRadius.all
			? { [`--wp-beer-blocks-${blockName}-${attr}`]: borderRadius.all }
			: Object.fromEntries(
					Object.entries(borderRadius)
						.filter((corner) => corner[1])
						.map((corner) => [
							`--wp-beer-blocks-${blockName}-${attr + upperFirst(corner[0])}`,
							corner[1],
						])
			  );
	}

	return {};
};

// returns css vars for border styles
export const cssVars = (props, blockName, attrPrefix = "") => ({
	...borderCssVars(props, blockName, attrPrefix),
	...borderRadiusCssVars(props, blockName, attrPrefix),
});

// returns css classes that enable border rules
const borderCssClass = (props, attrPrefix = "", addWhitespaceBefore = true) => {
	const attr = attrName(attrPrefix);

	const {
		attributes: { [attr]: border = undefined },
	} = props;

	if (border) {
		const classes = isSplitBorders(border)
			? Object.entries(border)
					.map((borderSide) => [
						...(borderSide[1].color
							? [`wp-beer-blocks-has-border-${borderSide[0]}-color-rule`]
							: []),
						...(borderSide[1].width
							? [`wp-beer-blocks-has-border-${borderSide[0]}-width-rule`]
							: []),
						...(get(borderSide[1], "style")
							? [`wp-beer-blocks-has-border-${borderSide[0]}-style-rule`]
							: []),
					])
					.join(" ")
			: Object.entries(border)
					.filter((borderRule) => borderRule[1])
					.map(
						(borderRule) => `wp-beer-blocks-has-border-${borderRule[0]}-rule`
					)
					.join(" ");

		return classes ? `${addWhitespaceBefore ? " " : ""}${classes}` : "";
	}

	return "";
};

// returns css classes that enable border radius rules
const borderRadiusCssClass = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	const attr = attrName(attrPrefix);

	const {
		attributes: { [attr]: borderRadius = undefined },
	} = props;

	if (borderRadius) {
		const classes = borderRadius.all
			? "wp-beer-blocks-has-border-radius"
			: Object.entries(borderRadius)
					.filter((corner) => corner[1])
					.map((corner) => `wp-beer-blocks-has-border-${corner}-radius`)
					.join(" ");

		return classes ? `${addWhitespaceBefore ? " " : ""}${classes}` : "";
	}

	return "";
};

// returns css classes that enable the rules used in this helper
export const cssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	let classes = `${borderCssClass(props, attrPrefix)}${borderRadiusCssClass(
		props,
		attrPrefix
	)}`.trimStart();

	return `${addWhitespaceBefore ? " " : ""}${classes}`.trimEnd();
};

export default {
	attributes,
	borderControl,
	borderRadiusControl,
	controls,
	borderCssVars,
	borderRadiusCssVars,
	cssVars,
	borderCssClass,
	borderRadiusCssClass,
	cssClasses,
};
