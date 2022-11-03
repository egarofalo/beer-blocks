import { __, sprintf } from "@wordpress/i18n";
import {
	BaseControl,
	RangeControl,
	Button,
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
} from "@wordpress/components";

// default attributes values
const DEFAULTS = {
	transitionDelay: 0,
	transitionDuration: 0,
	transitionTimingFunction: "ease",
};

// elements statuses
const statuses = {
	normal: __("Normal", "beer-blocks"),
	hover: __("Hover", "beer-blocks"),
	active: __("Active", "beer-blocks"),
};

// returns radio group for choose elements status
export const statusControls = (status, setStatus) => (
	<BaseControl
		label={sprintf(__("Select status (%s)", "beer-blocks"), statuses[status])}
	>
		<RadioGroup onChange={setStatus} checked={status}>
			<Radio value="normal">{statuses.normal}</Radio>
			<Radio value="hover">{statuses.hover}</Radio>
			<Radio value="active">{statuses.active}</Radio>
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

// returns css3 transition block attributes
export const attributes = ({
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
export const transitionControls = ({
	props,
	attrName,
	attrPrefix = "",
	defaultTransitionTimingFunction = DEFAULTS.transitionTimingFunction,
	defaultTransitionDelay = DEFAULTS.transitionDelay,
	defaultTransitionDuration = DEFAULTS.transitionDuration,
}) => {
	const transitionDelayAttr = camelCase(
		`${attrPrefix}-${attrName}-transition-delay`
	);
	const transitionDurationAttr = camelCase(
		`${attrPrefix}-${attrName}-transition-duration`
	);
	const transitionTimingFunctionAttr = camelCase(
		`${attrPrefix}-${attrName}-transition-timing-function`
	);

	const {
		setAttributes,
		attributes: {
			[transitionDelayAttr]: transitionDelay,
			[transitionDurationAttr]: transitionDuration,
			[transitionTimingFunctionAttr]: transitionTimingFunction,
		},
	} = props;

	return (
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
				resetFallbackValue={defaultTransitionDelay}
				onChange={(value) =>
					setAttributes({
						[transitionDelayAttr]: `${value}s`,
					})
				}
			/>

			<RangeControl
				label={__("Transition duration (in seconds)", "beer-blocks")}
				value={Number.parseFloat(transitionDuration)}
				min={0}
				max={10}
				step={0.1}
				allowReset
				resetFallbackValue={defaultTransitionDuration}
				onChange={(value) =>
					setAttributes({
						[transitionDurationAttr]: `${value}s`,
					})
				}
			/>

			<Button
				className="is-destructive"
				style={{ display: "block", textAlign: "center", width: "100%" }}
				onClick={() =>
					setAttributes({
						[transitionTimingFunctionAttr]: defaultTransitionTimingFunction,
						[transitionDelayAttr]: defaultTransitionDelay,
						[transitionDurationAttr]: defaultTransitionDuration,
					})
				}
			>
				{__("Clear fields", "beer-blocks")}
			</Button>
		</>
	);
};

// returns css vars for transition attributes
export const transitionCssVars = ({
	props,
	blockName,
	attrName,
	attrPrefix = "",
}) => {
	const transitionDelayAttr = camelCase(
		`${attrPrefix}-${attrName}-transition-delay`
	);
	const transitionDurationAttr = camelCase(
		`${attrPrefix}-${attrName}-transition-duration`
	);
	const transitionTimingFunctionAttr = camelCase(
		`${attrPrefix}-${attrName}-transition-timing-function`
	);

	const {
		attributes: {
			[transitionDelayAttr]: transitionDelay,
			[transitionDurationAttr]: transitionDuration,
			[transitionTimingFunctionAttr]: transitionTimingFunction,
		},
	} = props;

	return {
		[`--wp-beer-blocks-${blockName}-${transitionDelayAttr}`]: transitionDelay,
		[`--wp-beer-blocks-${blockName}-${transitionDurationAttr}`]: transitionDuration,
		[`--wp-beer-blocks-${blockName}-${transitionTimingFunctionAttr}`]: transitionTimingFunction,
	};
};

export default {
	statusControls,
	attributes,
	transitionControls,
	transitionCssVars,
};
