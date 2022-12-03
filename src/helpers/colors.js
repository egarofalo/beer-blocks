import { __ } from "@wordpress/i18n";
import { BaseControl, ColorPalette, PanelBody } from "@wordpress/components";
import { variantsColorPallet as variants } from "./bootstrap-variants";
import { camelCase, has } from "lodash";

// default attributes values
const DEFAULTS = {
	color: undefined,
	background: undefined,
};

// returns attribute name
export const attrName = ({ attr, attrPrefix = "" }) =>
	camelCase(`${attrPrefix}-${attr}`);

// returns block's color attribute
export const colorAttribute = ({
	attrPrefix = "",
	defaultValue = DEFAULTS.color,
}) => ({
	[attrName({ attr: "color", attrPrefix })]: {
		type: "string",
		default: defaultValue,
	},
});

// returns block's background color attribute
export const backgroundAttribute = ({
	attrPrefix = "",
	defaultValue = DEFAULTS.background,
}) => ({
	[attrName({ attr: "background", attrPrefix })]: {
		type: "string",
		default: defaultValue,
	},
});

// returns block's color and background attributes
export const attributes = ({
	attrPrefix = "",
	defaultColor = DEFAULTS.color,
	defaultBackground = DEFAULTS.background,
} = {}) => ({
	...colorAttribute({
		attrPrefix,
		defaultValue: defaultColor,
	}),
	...backgroundAttribute({
		attrPrefix,
		defaultValue: defaultBackground,
	}),
});

// returns color atrribute's controls
export const colorControl = ({
	props,
	attrPrefix = "",
	label = __("Font color", "beer-blocks"),
}) => {
	const attrName = camelCase(`${attrPrefix}-color`);
	const { setAttributes, attributes } = props;

	if (!has(attributes, attrName)) {
		return null;
	}

	return (
		<BaseControl label={label}>
			<ColorPalette
				colors={variants}
				value={attributes[attrName]}
				onChange={(color) => setAttributes({ [attrName]: color })}
				enableAlpha={false}
			/>
		</BaseControl>
	);
};

// returns background attribute's controls
export const backgroundControl = ({
	props,
	attrPrefix = "",
	label = __("Background", "beer-blocks"),
}) => {
	const attrName = camelCase(`${attrPrefix}-background`);
	const { setAttributes, attributes } = props;

	if (!has(attributes, attrName)) {
		return null;
	}

	return (
		<BaseControl label={label}>
			<ColorPalette
				colors={variants}
				value={attributes[attrName]}
				onChange={(background) => setAttributes({ [attrName]: background })}
				enableAlpha={true}
			/>
		</BaseControl>
	);
};

// returns all controls
export const controls = ({
	props,
	attrPrefix = "",
	colorControlLabel = __("Font color", "beer-blocks"),
	backgroundControlLabel = __("Background", "beer-blocks"),
	panelBody = true,
	initialOpen = false,
	title = __("Colors", "beer-blocks"),
}) => {
	let result = (
		<>
			{colorControl({
				props,
				attrPrefix,
				label: colorControlLabel,
			})}

			{backgroundControl({
				props,
				attrPrefix,
				label: backgroundControlLabel,
			})}
		</>
	);
	return panelBody ? (
		<PanelBody title={title} initialOpen={initialOpen}>
			{result}
		</PanelBody>
	) : (
		result
	);
};

// returns css vars for color attribute
export const colorCssVars = ({ props, blockName, attrPrefix = "" }) => {
	const attrName = camelCase(`${attrPrefix}-color`);

	const {
		attributes: { [attrName]: color = undefined },
	} = props;

	return color
		? {
				[`--wp-beer-blocks-${blockName}-${attrName}`]: color,
		  }
		: {};
};

// returns css vars for background attribute
export const backgroundCssVars = ({ props, blockName, attrPrefix = "" }) => {
	const attrName = camelCase(`${attrPrefix}-background`);

	const {
		attributes: { [attrName]: background = undefined },
	} = props;

	return background
		? {
				[`--wp-beer-blocks-${blockName}-${attrName}`]: background,
		  }
		: {};
};

// returns css vars for all colors attributes
export const cssVars = ({ props, blockName, attrPrefix = "" }) => ({
	...colorCssVars({ props, blockName, attrPrefix }),
	...backgroundCssVars({ props, blockName, attrPrefix }),
});

export default {
	attrName,
	colorAttribute,
	backgroundAttribute,
	attributes,
	colorControl,
	backgroundControl,
	controls,
	colorCssVars,
	backgroundCssVars,
	cssVars,
};
