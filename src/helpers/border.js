import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	TabPanel,
	__experimentalHeading as Heading,
	__experimentalBorderBoxControl as BorderBoxControl,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import {
	BsBoxArrowInUpLeft,
	BsBoxArrowInUpRight,
	BsBoxArrowInDownRight,
	BsBoxArrowInDownLeft,
} from "react-icons/bs";
import { variantsColorPallet as variants } from "./bootstrap-variants";
import { controlWrapperStyle } from "./inline-styles";
import { reset as resetButton } from "./buttons";
import { lowerCase, camelCase, upperFirst, has, get } from "lodash";

// border styles
export const borderStyles = {
	dotted: __("Dotted border", "beer-blocks"),
	dashed: __("Dashed border", "beer-blocks"),
	solid: __("Solid border", "beer-blocks"),
	double: __("Double border", "beer-blocks"),
	groove: __("3D grooved border", "beer-blocks"),
	ridge: __("3D ridged border", "beer-blocks"),
	inset: __("3D inset border", "beer-blocks"),
	outset: __("3D outset border", "beer-blocks"),
};

// default units used in UnitControl component
const defaultUnits = [
	{ value: "px", label: "PX" },
	{ value: "em", label: "EM" },
	{ value: "rem", label: "REM" },
	{ value: "%", label: "%" },
];

// border radius corners
const borderRadiusCorners = [
	"top-right",
	"bottom-right",
	"bottom-left",
	"top-left",
];

// returns border radius value
const getBorderRadiusValue = (value) =>
	Object.fromEntries(
		borderRadiusCorners.map((corner) => [camelCase(corner), value])
	);

// border radius icons for tabs panel
const borderRadiusIcons = (corner) =>
	({
		"top-right": (
			<BsBoxArrowInUpRight className="beer-blocks-border-radius-tab-icon" />
		),
		"bottom-right": (
			<BsBoxArrowInDownRight className="beer-blocks-border-radius-tab-icon" />
		),
		"bottom-left": (
			<BsBoxArrowInDownLeft className="beer-blocks-border-radius-tab-icon" />
		),
		"top-left": (
			<BsBoxArrowInUpLeft className="beer-blocks-border-radius-tab-icon" />
		),
	}[corner]);

// border radius tabs panel options
const borderRadiusOptions = borderRadiusCorners.map((corner) => ({
	name: camelCase(corner),
	title: borderRadiusIcons(corner),
}));

// border sides
const borderSides = ["top", "right", "bottom", "left"];

// checks if the  attribute value has each side of borders
export const isSplitBorders = (borders) =>
	has(borders, "top") ||
	has(borders, "right") ||
	has(borders, "bottom") ||
	has(borders, "left");

// returns attribute name
export const attrName = (attrPrefix = "", borderRadius = false) =>
	camelCase(`${attrPrefix}-border${borderRadius ? "-radius" : ""}`);

// returns border block's attribute
export const attributes = ({
	attrPrefix = "",
	defaultValue = undefined,
	borderRadius = false,
	defaultBorderRadiusValue = undefined,
} = {}) => ({
	[attrName(attrPrefix)]: {
		type: "object",
		default: defaultValue,
	},
	...(borderRadius
		? {
				[attrName(attrPrefix, true)]: {
					type: "object",
					default: getBorderRadiusValue(defaultBorderRadiusValue),
				},
		  }
		: {}),
});

// returns border control
export const borderControl = ({
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
export const borderRadiusControl = ({
	props,
	attrPrefix = "",
	label = __("Rounded borders", "beer-blocks"),
	defaultValue = undefined,
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
				initialTabName="topRight"
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
								...borderRadius,
								[camelCase(tab.name)]: defaultValue,
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
	defaultValue = undefined,
	defaultBorderRadiusValue = undefined,
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
				? borderRadiusControl({
						props,
						attrPrefix,
						defaultValue: defaultBorderRadiusValue,
				  })
				: null}

			{reset &&
				resetButton({
					onClick: () =>
						setAttributes({
							[borderAttr]: defaultValue,
							...(has(attributes, borderRadiusAttr)
								? {
										[borderRadiusAttr]: getBorderRadiusValue(
											defaultBorderRadiusValue
										),
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

	if (borders !== undefined) {
		return isSplitBorders(borders)
			? Object.fromEntries([
					...Object.entries(borders)
						.filter((border) => border[1] !== undefined)
						.map((border) => [
							`--wp-beer-blocks-${blockName}-${
								attr + upperFirst(border[0])
							}Width`,
							border[1].width,
						]),
					...Object.entries(borders)
						.filter((border) => border[1] !== undefined)
						.map((border) => [
							`--wp-beer-blocks-${blockName}-${
								attr + upperFirst(border[0])
							}Color`,
							border[1].color,
						]),
					...Object.entries(borders)
						.filter(
							(border) =>
								border[1] !== undefined && get(border[1], "style") !== undefined
						)
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

	return borderRadius !== undefined || borderRadius !== ""
		? Object.fromEntries(
				Object.entries(borderRadius).map((corner) => [
					`--wp-beer-blocks-${blockName}-${attr + upperFirst(corner[0])}`,
					corner[1],
				])
		  )
		: {};
};

// returns css vars for border styles
export const cssVars = (props, blockName, attrPrefix = "") => ({
	...borderCssVars(props, blockName, attrPrefix),
	...borderRadiusCssVars(props, blockName, attrPrefix),
});

export default {
	borderStyles,
	isSplitBorders,
	attrName,
	attributes,
	borderControl,
	borderRadiusControl,
	controls,
	borderCssVars,
	borderRadiusCssVars,
	cssVars,
};
