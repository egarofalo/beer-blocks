import { __ } from "@wordpress/i18n";
import {
	BaseControl,
	ColorPalette,
	PanelBody,
	GradientPicker,
	TabPanel,
	__experimentalHeading as Heading,
} from "@wordpress/components";
import { variantsColorPallet as variants } from "./bootstrap-variants";
import { camelCase, has } from "lodash";

// returns attribute name
const attrName = (attr, attrPrefix = "") => camelCase(`${attrPrefix}-${attr}`);

// returns block's color attribute
const colorAttribute = (attrPrefix = "") => ({
	[attrName("color", attrPrefix)]: {
		type: "string",
		default: undefined,
	},
});

// returns block's background color attribute
const backgroundAttribute = (attrPrefix = "") => ({
	[attrName("background", attrPrefix)]: {
		type: "string",
		default: undefined,
	},
});

// returns block's color and background attributes
export const attributes = ({
	attrPrefix = "",
	colorAttr = true,
	backgroundAttr = true,
} = {}) => ({
	...(colorAttr ? colorAttribute(attrPrefix) : {}),
	...(backgroundAttr ? backgroundAttribute(attrPrefix) : {}),
});

// returns color attribute's controls
const colorControl = ({
	props,
	attrPrefix = "",
	label = __("Font color", "beer-blocks"),
}) => {
	const attr = attrName("color", attrPrefix);
	const { setAttributes, attributes } = props;

	if (!has(attributes, attr)) {
		return null;
	}

	return (
		<BaseControl label={label}>
			<ColorPalette
				colors={variants}
				value={attributes[attr]}
				onChange={(color) => setAttributes({ [attr]: color })}
				enableAlpha={false}
			/>
		</BaseControl>
	);
};

// returns background attribute's controls
const backgroundControl = ({
	props,
	attrPrefix = "",
	label = __("Background", "beer-blocks"),
}) => {
	const attr = attrName("background", attrPrefix);
	const { setAttributes, attributes } = props;

	if (!has(attributes, attr)) {
		return null;
	}

	const solidColor = attributes[attr]
		? attributes[attr].search(/(linear|radial)-gradient/) > -1
			? undefined
			: attributes[attr]
		: undefined;

	const gradientColor = solidColor ? undefined : attributes[attr];

	return (
		<>
			<Heading level="3" style={{ marginBottom: "5px" }}>
				{label}
			</Heading>

			<TabPanel
				initialTabName="solid"
				tabs={[
					{ name: "solid", title: __("Solid", "beer-blocks") },
					{ name: "gradient", title: __("Gradient", "beer-blocks") },
				]}
				className="beer-blocks-tabs"
			>
				{(tab) =>
					tab.name === "solid" ? (
						<ColorPalette
							colors={variants}
							value={solidColor}
							onChange={(background) => setAttributes({ [attr]: background })}
							enableAlpha={true}
						/>
					) : (
						<GradientPicker
							value={gradientColor}
							onChange={(background) => setAttributes({ [attr]: background })}
						/>
					)
				}
			</TabPanel>
		</>
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
const colorCssVars = (props, blockName, attrPrefix = "") => {
	const attr = attrName("color", attrPrefix);

	const {
		attributes: { [attr]: color = undefined },
	} = props;

	return color
		? {
				[`--wp-beer-blocks-${blockName}-${attr}`]: color,
		  }
		: {};
};

// returns css vars for background attribute
const backgroundCssVars = (props, blockName, attrPrefix = "") => {
	const attr = attrName("background", attrPrefix);

	const {
		attributes: { [attr]: background = undefined },
	} = props;

	return background
		? {
				[`--wp-beer-blocks-${blockName}-${attr}`]: background,
		  }
		: {};
};

// returns css vars for all colors attributes
export const cssVars = (props, blockName, attrPrefix = "") => ({
	...colorCssVars(props, blockName, attrPrefix),
	...backgroundCssVars(props, blockName, attrPrefix),
});

// returns css classes that enable color rule
const colorCssClass = (props, attrPrefix = "", addWhitespaceBefore = true) => {
	const attr = attrName("color", attrPrefix);

	const {
		attributes: { [attr]: color = undefined },
	} = props;

	return color
		? `${addWhitespaceBefore ? " " : ""}wp-beer-blocks-has-color-rule`
		: "";
};

// returns css classes that enable backround rule
const backgroundCssClass = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	const attr = attrName("background", attrPrefix);

	const {
		attributes: { [attr]: background = undefined },
	} = props;

	return background
		? `${addWhitespaceBefore ? " " : ""}wp-beer-blocks-has-background-rule`
		: "";
};

// returns css classes that enable the rules used in this helper
export const cssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	let classes = `${colorCssClass(props, attrPrefix)}${backgroundCssClass(
		props,
		attrPrefix
	)}`.trimStart();

	return `${addWhitespaceBefore ? " " : ""}${classes}`.trimEnd();
};

export default {
	attributes,
	controls,
	cssVars,
	cssClasses,
};
