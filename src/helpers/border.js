import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	__experimentalBorderBoxControl as BorderBoxControl,
} from "@wordpress/components";
import { camelCase, capitalize, has } from "lodash";
import { variantsColorPallet as variants } from "./bootstrap-variants";
import { reset as resetButton } from "./buttons";

// checks if the  attribute value has each side of borders
export const isSplitBorders = (borders) =>
	has(borders, "top") &&
	has(borders, "right") &&
	has(borders, "bottom") &&
	has(borders, "left");

// returns attribute name
export const attrName = ({ attrPrefix = "" } = {}) =>
	camelCase(`${attrPrefix}-border`);

// returns border block's attribute
export const attributes = ({
	attrPrefix = "",
	defaultValue = undefined,
} = {}) => ({
	[attrName({ attrPrefix })]: {
		type: "object",
		default: defaultValue,
	},
});

// returns border control
export const controls = ({
	props,
	initialOpen = false,
	attrPrefix = "",
	panelBody = true,
	title = __("Border", "beer-blocks"),
	label = __("Border styles", "beer-blocks"),
	enableStyle = true,
	reset = true,
	defaultValue = undefined,
}) => {
	const attr = attrName({ attrPrefix });
	const {
		attributes: { [attr]: borders },
		setAttributes,
	} = props;

	const controls = (
		<>
			<BorderBoxControl
				colors={variants}
				label={label}
				value={borders}
				onChange={(newBorders) => setAttributes({ [attr]: newBorders })}
				enableStyle={enableStyle}
			/>
			{reset &&
				resetButton({ onClick: () => setAttributes({ [attr]: defaultValue }) })}
		</>
	);

	return panelBody ? (
		<PanelBody title={title} initialOpen={initialOpen}>
			{controls}
		</PanelBody>
	) : (
		controls
	);
};

// returns css vars for border styles
export const cssVars = ({
	props,
	blockName,
	attrPrefix = "",
	enableStyle = true,
}) => {
	const attr = attrName({ attrPrefix });
	const {
		attributes: { [attr]: borders = undefined },
	} = props;

	if (borders !== undefined) {
		return isSplitBorders(borders)
			? Object.fromEntries([
					...Object.entries(borders).map((border) => [
						`--wp-beer-blocks-${blockName}-${
							attr + capitalize(border[0])
						}Width`,
						border[1].width,
					]),
					...Object.entries(borders).map((border) => [
						`--wp-beer-blocks-${blockName}-${
							attr + capitalize(border[0])
						}Color`,
						border[1].color,
					]),
					...(enableStyle
						? Object.entries(borders).map((border) => [
								`--wp-beer-blocks-${blockName}-${
									attr + capitalize(border[0])
								}Style`,
								border[1].style,
						  ])
						: []),
			  ])
			: Object.fromEntries([
					...["Top", "Right", "Bottom", "Left"].map((side) => [
						[`--wp-beer-blocks-${blockName}-${attr + side}Width`],
						borders.width,
					]),
					...["Top", "Right", "Bottom", "Left"].map((side) => [
						[`--wp-beer-blocks-${blockName}-${attr + side}Color`],
						borders.color,
					]),
					...(enableStyle
						? ["Top", "Right", "Bottom", "Left"].map((side) => [
								[`--wp-beer-blocks-${blockName}-${attr + side}Style`],
								borders.style,
						  ])
						: {}),
			  ]);
	}

	return {};
};

export default {
	isSplitBorders,
	attrName,
	attributes,
	controls,
	cssVars,
};
