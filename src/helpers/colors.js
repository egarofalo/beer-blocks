import { useState } from "react";
import { __, sprintf } from "@wordpress/i18n";
import {
	BaseControl,
	ColorPalette,
	PanelBody,
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
	Disabled,
	RangeControl,
	SelectControl,
} from "@wordpress/components";
import { variantsColorPallet as variants } from "./bootstrap-variants";
import { camelCase, has } from "lodash";

// default attributes values
const DEFAULTS = {
	transitionDelay: 0,
	transitionDuration: 0,
	transitionTimingFunction: "ease",
	color: undefined,
	background: undefined,
	borderColor: undefined,
};

// elements statuses
const statuses = {
	normal: __("Normal", "beer-blocks"),
	"mouse-over": __("Mouse over", "beer-blocks"),
	active: __("Active", "beer-blocks"),
	focus: __("Focus", "beer-blocks"),
};

// returns radio group for choose the element status
const statusControls = (status, setStatus, excludeStatus = {}) => (
	<BaseControl
		label={sprintf(__("Select status (%s)", "beer-blocks"), statuses[status])}
	>
		<RadioGroup onChange={setStatus} checked={status}>
			<Radio value="normal">{statuses.normal}</Radio>
			{!excludeStatus["mouse-over"] && (
				<Radio value="mouse-over">{statuses["mouse-over"]}</Radio>
			)}
			{!excludeStatus["active"] && (
				<Radio value="active">{statuses.active}</Radio>
			)}
			{!excludeStatus["focus"] && <Radio value="focus">{statuses.focus}</Radio>}
		</RadioGroup>
	</BaseControl>
);

// transition timing functions
const transitionTimingFunctions = {
	ease: __("Ease", "beer-blocks"),
	linear: __("Linear", "beer-blocks"),
	"ease-in": __("Ease In", "beer-blocks"),
	"ease-out": __("Ease Out", "beer-blocks"),
	"ease-in-out": __("Ease In Out", "beer-blocks"),
};

// returns attribute name by prefix and status
const attrNameByStatus = ({ attr, attrPrefix = "", status = "normal" }) =>
	camelCase(`${attrPrefix}-${status === "normal" ? "" : status}-${attr}`);

// returns css3 transition block attributes
export const transitionAttributes = ({
	attrName,
	attrPrefix = "",
	transitionDelay = DEFAULTS.transitionDelay,
	transitionDuration = DEFAULTS.transitionDuration,
	transitionTimingFunction = DEFAULTS.transitionTimingFunction,
}) => ({
	[camelCase(`${attrPrefix}-${attrName}-transition-delay`)]: {
		type: "string",
		default: `${transitionDelay}s`,
	},
	[camelCase(`${attrPrefix}-${attrName}-transition-duration`)]: {
		type: "string",
		default: `${transitionDuration}s`,
	},
	[camelCase(`${attrPrefix}-${attrName}-transition-timing-function`)]: {
		type: "string",
		default: transitionTimingFunction,
	},
});

// returns controls for transition effects
export const transitionControl = ({ props, attrPrefix = "", status }) => {
	const transitionDelayAttr = camelCase(
		`${attrPrefix}-colors-transition-delay`
	);
	const transitionDurationAttr = camelCase(
		`${attrPrefix}-colors-transition-duration`
	);
	const transitionTimingFunctionAttr = camelCase(
		`${attrPrefix}-colors-transition-timing-function`
	);

	const {
		setAttributes,
		attributes: {
			[transitionDelayAttr]: transitionDelay = undefined,
			[transitionDurationAttr]: transitionDuration = undefined,
			[transitionTimingFunctionAttr]: transitionTimingFunction = undefined,
		},
	} = props;

	if (transitionDelay === undefined) {
		return null;
	}

	let result = (
		<>
			<SelectControl
				label={__("Transition timing function (in seconds)", "beer-blocks")}
				options={Object.entries(transitionTimingFunctions).map(
					([value, label]) => ({
						label,
						value,
					})
				)}
				value={transitionTimingFunction}
				onChange={(value) =>
					setAttributes({ [transitionTimingFunctionAttr]: value })
				}
			/>

			<RangeControl
				label={__("Transition delay (in seconds)", "beer-blocks")}
				value={Number.parseFloat(transitionDelay)}
				min={0}
				max={10}
				step={0.1}
				allowReset
				onChange={(value) =>
					setAttributes({
						[transitionDelayAttr]: `${value}s`,
					})
				}
				onReset={() =>
					setAttributes({ [transitionDelayAttr]: DEFAULTS.transitionDelay })
				}
			/>

			<RangeControl
				label={__("Transition duration (in seconds)", "beer-blocks")}
				value={Number.parseFloat(transitionDuration)}
				min={0}
				max={10}
				step={0.1}
				allowReset
				onChange={(value) =>
					setAttributes({
						[transitionDurationAttr]: `${value}s`,
					})
				}
				onReset={() =>
					setAttributes({
						[transitionDurationAttr]: DEFAULTS.transitionDuration,
					})
				}
			/>
		</>
	);

	if (status !== "mouse-over") {
		result = <Disabled>{result}</Disabled>;
	}

	return result;
};

// returns block's color attribute
export const colorAttribute = ({
	attrPrefix = "",
	defaultValue = DEFAULTS.color,
	mouseOverAttr = false,
	mouseOverDefaultValue = DEFAULTS.color,
	activeAttr = false,
	activeDefaultValue = DEFAULTS.color,
	focusAttr = false,
	focusDefaultValue = DEFAULTS.color,
}) => ({
	[camelCase(`${attrPrefix}-color`)]: {
		type: "string",
		default: defaultValue,
	},
	...(mouseOverAttr
		? {
				[camelCase(`${attrPrefix}-mouse-over-color`)]: {
					type: "string",
					default: mouseOverDefaultValue,
				},
		  }
		: {}),
	...(activeAttr
		? {
				[camelCase(`${attrPrefix}-active-color`)]: {
					type: "string",
					default: activeDefaultValue,
				},
		  }
		: {}),
	...(focusAttr
		? {
				[camelCase(`${attrPrefix}-focus-color`)]: {
					type: "string",
					default: focusDefaultValue,
				},
		  }
		: {}),
});

// returns block's color attribute
export const backgroundAttribute = ({
	attrPrefix = "",
	defaultValue = DEFAULTS.background,
	mouseOverAttr = false,
	mouseOverDefaultValue = DEFAULTS.background,
	activeAttr = false,
	activeDefaultValue = DEFAULTS.background,
	focusAttr = false,
	focusDefaultValue = DEFAULTS.background,
}) => ({
	[camelCase(`${attrPrefix}-background`)]: {
		type: "string",
		default: defaultValue,
	},
	...(mouseOverAttr
		? {
				[camelCase(`${attrPrefix}-mouse-over-background`)]: {
					type: "string",
					default: mouseOverDefaultValue,
				},
		  }
		: {}),
	...(activeAttr
		? {
				[camelCase(`${attrPrefix}-active-background`)]: {
					type: "string",
					default: activeDefaultValue,
				},
		  }
		: {}),
	...(focusAttr
		? {
				[camelCase(`${attrPrefix}-focus-background`)]: {
					type: "string",
					default: focusDefaultValue,
				},
		  }
		: {}),
});

// returns block's borderColor attribute
export const borderColorAttribute = ({
	attrPrefix = "",
	defaultValue = DEFAULTS.borderColor,
	mouseOverAttr = false,
	mouseOverDefaultValue = DEFAULTS.borderColor,
	activeAttr = false,
	activeDefaultValue = DEFAULTS.borderColor,
	focusAttr = false,
	focusDefaultValue = DEFAULTS.borderColor,
}) => ({
	[camelCase(`${attrPrefix}-border-color`)]: {
		type: "string",
		default: defaultValue,
	},
	...(mouseOverAttr
		? {
				[camelCase(`${attrPrefix}-mouse-over-border-color`)]: {
					type: "string",
					default: mouseOverDefaultValue,
				},
		  }
		: {}),
	...(activeAttr
		? {
				[camelCase(`${attrPrefix}-active-border-color`)]: {
					type: "string",
					default: activeDefaultValue,
				},
		  }
		: {}),
	...(focusAttr
		? {
				[camelCase(`${attrPrefix}-focus-border-color`)]: {
					type: "string",
					default: focusDefaultValue,
				},
		  }
		: {}),
});

// returns block's color and background attributes
export const attributes = ({
	attrPrefix = "",
	defaultColor = DEFAULTS.color,
	defaultBackground = DEFAULTS.background,
	defaultBorderColor = DEFAULTS.borderColor,
	mouseOverColorAttr = false,
	mouseOverColorDefaultValue = DEFAULTS.color,
	activeColorAttr = false,
	activeColorDefaultValue = DEFAULTS.color,
	focusColorAttr = false,
	focusColorDefaultValue = DEFAULTS.color,
	mouseOverBackgroundAttr = false,
	mouseOverBackgroundDefaultValue = DEFAULTS.background,
	activeBackgroundAttr = false,
	activeBackgroundDefaultValue = DEFAULTS.background,
	focusBackgroundAttr = false,
	focusBackgroundDefaultValue = DEFAULTS.background,
	mouseOverBorderColorAttr = false,
	mouseOverBorderColorDefaultValue = DEFAULTS.borderColor,
	activeBorderColorAttr = false,
	activeBorderColorDefaultValue = DEFAULTS.borderColor,
	focusBorderColorAttr = false,
	focusBorderColorDefaultValue = DEFAULTS.borderColor,
	transitionAttr = false,
	transitionDelayDefaultValue = DEFAULTS.transitionDelay,
	transitionDurationDefaultValue = DEFAULTS.transitionDuration,
	transitionTimingFunctionDefaultValue = DEFAULTS.transitionTimingFunction,
}) => ({
	...colorAttribute({
		attrPrefix,
		defaultValue: defaultColor,
		mouseOverAttr: mouseOverColorAttr,
		mouseOverDefaultValue: mouseOverColorDefaultValue,
		activeAttr: activeColorAttr,
		activeDefaultValue: activeColorDefaultValue,
		focusAttr: focusColorAttr,
		focusDefaultValue: focusColorDefaultValue,
	}),
	...backgroundAttribute({
		attrPrefix,
		defaultValue: defaultBackground,
		mouseOverAttr: mouseOverBackgroundAttr,
		mouseOverDefaultValue: mouseOverBackgroundDefaultValue,
		activeAttr: activeBackgroundAttr,
		activeDefaultValue: activeBackgroundDefaultValue,
		focusAttr: focusBackgroundAttr,
		focusDefaultValue: focusBackgroundDefaultValue,
	}),
	...borderColorAttribute({
		attrPrefix,
		defaultValue: defaultBorderColor,
		mouseOverAttr: mouseOverBorderColorAttr,
		mouseOverDefaultValue: mouseOverBorderColorDefaultValue,
		activeAttr: activeBorderColorAttr,
		activeDefaultValue: activeBorderColorDefaultValue,
		focusAttr: focusBorderColorAttr,
		focusDefaultValue: focusBorderColorDefaultValue,
	}),
	...(transitionAttr
		? transitionAttributes({
				attrPrefix,
				transitionDelay: transitionDelayDefaultValue,
				transitionDuration: transitionDurationDefaultValue,
				transitionTimingFunction: transitionTimingFunctionDefaultValue,
		  })
		: {}),
});

// returns color atrribute's controls
export const colorControl = ({
	props,
	attrPrefix = "",
	label = __("Font color", "beer-blocks"),
	status = "normal",
}) => {
	const attrName = attrNameByStatus({
		attr: "color",
		attrPrefix,
		status,
	});

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
				disableAlpha
			/>
		</BaseControl>
	);
};

// returns background attribute's controls
export const backgroundControl = ({
	props,
	attrPrefix = "",
	label = __("Background", "beer-blocks"),
	status = "normal",
}) => {
	const attrName = attrNameByStatus({
		attr: "background",
		attrPrefix,
		status,
	});

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
				disableAlpha
			/>
		</BaseControl>
	);
};

// returns border color attribute's controls
export const borderColorControl = ({
	props,
	attrPrefix = "",
	label = __("Border color", "beer-blocks"),
	status = "normal",
}) => {
	const attrName = attrNameByStatus({
		attr: "border-color",
		attrPrefix,
		status,
	});

	const { setAttributes, attributes } = props;

	if (!has(attributes, attrName)) {
		return null;
	}

	return (
		<BaseControl label={label}>
			<ColorPalette
				colors={variants}
				value={attributes[attrName]}
				onChange={(borderColor) => setAttributes({ [attrName]: borderColor })}
				disableAlpha
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
	borderColorControlLabel = __("Border color", "beer-blocks"),
	panelBody = true,
	initialOpen = false,
	title = __("Colors", "beer-blocks"),
	excludeStatus = [],
	disabled = false,
}) => {
	const [status, setStatus] = useState("normal");

	let result = (
		<>
			{!["mouse-over", "active", "focus"].every((status) =>
				excludeStatus.includes(status)
			) && statusControls(status, setStatus, excludeStatus)}

			{colorControl({
				props,
				attrPrefix,
				label: colorControlLabel,
				status,
			})}

			{backgroundControl({
				props,
				attrPrefix,
				label: backgroundControlLabel,
				status,
			})}

			{borderColorControl({
				props,
				attrPrefix,
				label: borderColorControlLabel,
				status,
			})}

			{transitionControl({
				props,
				attrPrefix,
				status,
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

// returns css vars for color attribute
export const colorCssVars = ({ props, blockName, attrPrefix = "" }) => {
	const normalAttrName = camelCase(`${attrPrefix}-color`);
	const mouseOverAttrName = camelCase(`${attrPrefix}-mouse-over-color`);
	const activeAttrName = camelCase(`${attrPrefix}-active-color`);
	const focusAttrName = camelCase(`${attrPrefix}-focus-color`);

	const {
		attributes: {
			[normalAttrName]: normalColor = undefined,
			[mouseOverAttrName]: mouseOverColor = undefined,
			[activeAttrName]: activeColor = undefined,
			[focusAttrName]: focusColor = undefined,
		},
	} = props;

	return {
		...(normalColor
			? {
					[`--wp-beer-blocks-${blockName}-${normalAttrName}`]: normalColor,
			  }
			: {}),
		...(mouseOverColor
			? {
					[`--wp-beer-blocks-${blockName}-${mouseOverAttrName}`]: mouseOverColor,
			  }
			: {}),
		...(activeColor
			? {
					[`--wp-beer-blocks-${blockName}-${activeAttrName}`]: activeColor,
			  }
			: {}),
		...(focusColor
			? {
					[`--wp-beer-blocks-${blockName}-${focusAttrName}`]: focusColor,
			  }
			: {}),
	};
};

// returns css vars for background attribute
export const backgroundCssVars = ({ props, blockName, attrPrefix = "" }) => {
	const normalAttrName = camelCase(`${attrPrefix}-background`);
	const mouseOverAttrName = camelCase(`${attrPrefix}-mouse-over-background`);
	const activeAttrName = camelCase(`${attrPrefix}-active-background`);
	const focusAttrName = camelCase(`${attrPrefix}-focus-background`);

	const {
		attributes: {
			[normalAttrName]: normalBackground = undefined,
			[mouseOverAttrName]: mouseOverBackground = undefined,
			[activeAttrName]: activeBackground = undefined,
			[focusAttrName]: focusBackground = undefined,
		},
	} = props;

	return {
		...(normalBackground
			? {
					[`--wp-beer-blocks-${blockName}-${normalAttrName}`]: normalBackground,
			  }
			: {}),
		...(mouseOverBackground
			? {
					[`--wp-beer-blocks-${blockName}-${mouseOverAttrName}`]: mouseOverBackground,
			  }
			: {}),
		...(activeBackground
			? {
					[`--wp-beer-blocks-${blockName}-${activeAttrName}`]: activeBackground,
			  }
			: {}),
		...(focusBackground
			? {
					[`--wp-beer-blocks-${blockName}-${focusAttrName}`]: focusBackground,
			  }
			: {}),
	};
};

// returns css vars for border color attribute
export const borderColorCssVars = ({ props, blockName, attrPrefix = "" }) => {
	const normalAttrName = camelCase(`${attrPrefix}-border-color`);
	const mouseOverAttrName = camelCase(`${attrPrefix}-mouse-over-border-color`);
	const activeAttrName = camelCase(`${attrPrefix}-active-border-color`);
	const focusAttrName = camelCase(`${attrPrefix}-focus-border-color`);

	const {
		attributes: {
			[normalAttrName]: normalBorderColor = undefined,
			[mouseOverAttrName]: mouseOverBorderColor = undefined,
			[activeAttrName]: activeBorderColor = undefined,
			[focusAttrName]: focusBorderColor = undefined,
		},
	} = props;

	return {
		...(normalBorderColor
			? {
					[`--wp-beer-blocks-${blockName}-${normalAttrName}`]: normalBorderColor,
			  }
			: {}),
		...(mouseOverBorderColor
			? {
					[`--wp-beer-blocks-${blockName}-${mouseOverAttrName}`]: mouseOverBorderColor,
			  }
			: {}),
		...(activeBorderColor
			? {
					[`--wp-beer-blocks-${blockName}-${activeAttrName}`]: activeBorderColor,
			  }
			: {}),
		...(focusBorderColor
			? {
					[`--wp-beer-blocks-${blockName}-${focusAttrName}`]: focusBorderColor,
			  }
			: {}),
	};
};

// returns css vars for transition attribute
export const transitionCssVars = ({ props, blockName, attrPrefix = "" }) => {
	const transitionDelayAttrName = camelCase(
		`${attrPrefix}-colors-transition-delay`
	);
	const transitionDurationAttrName = camelCase(
		`${attrPrefix}-colors-transition-duration`
	);
	const transitionTimingFunctionAttrName = camelCase(
		`${attrPrefix}-colors-transition-timing-function`
	);

	const {
		attributes: {
			[transitionDelayAttrName]: transitionDelay = undefined,
			[transitionDurationAttrName]: transitionDuration = undefined,
			[transitionTimingFunctionAttrName]: transitionTimingFunction = undefined,
		},
	} = props;

	return {
		...(transitionDelay
			? {
					[`--wp-beer-blocks-${blockName}-${transitionDelayAttrName}`]: transitionDelay,
			  }
			: {}),
		...(transitionDuration
			? {
					[`--wp-beer-blocks-${blockName}-${transitionDurationAttrName}`]: transitionDuration,
			  }
			: {}),
		...(transitionTimingFunction
			? {
					[`--wp-beer-blocks-${blockName}-${transitionTimingFunctionAttrName}`]: transitionTimingFunction,
			  }
			: {}),
	};
};

// returns css vars for all colors attributes
export const cssVars = ({ props, blockName, attrPrefix = "" }) => ({
	...colorCssVars({ props, blockName, attrPrefix }),
	...backgroundCssVars({ props, blockName, attrPrefix }),
	...borderColorCssVars({ props, blockName, attrPrefix }),
	...transitionCssVars({ props, blockName, attrPrefix }),
});

export default {
	transitionAttributes,
	colorAttribute,
	backgroundAttribute,
	borderColorAttribute,
	attributes,
	colorControl,
	backgroundControl,
	borderColorControl,
	controls,
	colorCssVars,
	backgroundCssVars,
	borderColorCssVars,
	transitionCssVars,
	cssVars,
};
