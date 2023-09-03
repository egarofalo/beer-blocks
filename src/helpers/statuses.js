import { __, sprintf } from "@wordpress/i18n";
import {
	RangeControl,
	BaseControl,
	ColorPalette,
	SelectControl,
	Panel,
	PanelBody,
	ToggleControl,
	Disabled,
	TabPanel,
	GradientPicker,
	__experimentalHeading as Heading,
} from "@wordpress/components";
import { variantsColorPallet as variants } from "./bootstrap-variants";
import { camelCase, has } from "lodash";
import { MdAdsClick } from "react-icons/md";
import {
	borderControl as nativeBorderControl,
	borderCssVars as nativeBorderCssVars,
} from "./border";
import { controlWrapperStyle } from "./inline-styles";
import { reset as resetButton } from "./buttons";

// default transition attribute values
const TRANSITION_DEFAULTS = {
	delay: undefined,
	duration: undefined,
	timingFunction: undefined,
};

// elements statuses
const statuses = {
	hover: __("Hover", "beer-blocks"),
	active: __("Active", "beer-blocks"),
	focus: __("Focus", "beer-blocks"),
};

// returns attribute name by prefix and status
const attrNameByStatus = (attr, status, attrPrefix) =>
	camelCase(`${attrPrefix}-${status}-${attr}`);

// returns attribute name used in toggle controls for enable status controls
const toggleAttrName = (status, attrPrefix) =>
	camelCase(
		`${attrPrefix}-${
			status === "transition" ? status : `${status}-status`
		}-enabled`
	);

// transition timing functions
const transitionTimingFunctions = [
	{
		label: __("-- SELECT --", "beer-blocks"),
		value: undefined,
	},
	{
		label: __("Ease", "beer-blocks"),
		value: "ease",
	},
	{
		label: __("Linear", "beer-blocks"),
		value: "linear",
	},
	{
		label: __("Ease In", "beer-blocks"),
		value: "ease-in",
	},
	{
		label: __("Ease Out", "beer-blocks"),
		value: "ease-out",
	},
	{
		label: __("Ease In Out", "beer-blocks"),
		value: "ease-in-out",
	},
];

// returns transition block attribute
const transitionAttributes = (attrPrefix, defaultValue) => ({
	[camelCase(`${attrPrefix}-transition`)]: {
		type: "object",
		default: defaultValue,
	},
});

// returns controls for transition effects
const transitionControls = (props, attrPrefix) => {
	const transitionAttr = camelCase(`${attrPrefix}-transition`);
	const {
		setAttributes,
		attributes: { [transitionAttr]: transition },
	} = props;

	return (
		<>
			<div style={controlWrapperStyle}>
				<SelectControl
					label={__("Transition timing function", "beer-blocks")}
					options={transitionTimingFunctions}
					value={transition.timingFunction}
					onChange={(value) =>
						setAttributes({
							[transitionAttr]: {
								...transition,
								timingFunction: value,
							},
						})
					}
				/>
			</div>

			<div style={controlWrapperStyle}>
				<RangeControl
					label={__("Transition delay (in seconds)", "beer-blocks")}
					value={transition.delay}
					min={0}
					max={10}
					step={0.1}
					onChange={(value) =>
						setAttributes({
							[transitionAttr]: {
								...transition,
								delay: value,
							},
						})
					}
				/>
			</div>

			<RangeControl
				label={__("Transition duration (in seconds)", "beer-blocks")}
				value={transition.duration}
				min={0}
				max={10}
				step={0.1}
				onChange={(value) =>
					setAttributes({
						[transitionAttr]: {
							...transition,
							duration: value,
						},
					})
				}
			/>
		</>
	);
};

// returns css vars for transition attributes
const transitionCssVars = (props, blockName, attrPrefix) => {
	const transitionAttr = camelCase(`${attrPrefix}-transition`);
	const {
		attributes: { [transitionAttr]: transition = undefined },
	} = props;

	return transition !== undefined
		? {
				...(transition.delay !== undefined
					? {
							[`--wp-beer-blocks-${blockName}-${transitionAttr}Delay`]: `${transition.delay}s`,
					  }
					: {}),
				...(transition.duration !== undefined
					? {
							[`--wp-beer-blocks-${blockName}-${transitionAttr}Duration`]: `${transition.duration}s`,
					  }
					: {}),
				...(transition.timingFunction !== undefined
					? {
							[`--wp-beer-blocks-${blockName}-${transitionAttr}TimingFunction`]:
								transition.timingFunction,
					  }
					: {}),
		  }
		: {};
};

// returns color attribute by status
const colorAttribute = (status, attrPrefix, defaultValue) => ({
	[attrNameByStatus("color", status, attrPrefix)]: {
		type: "string",
		default: defaultValue,
	},
});

// returns color atrribute's controls
const colorControl = (props, attrPrefix, status) => {
	const { setAttributes, attributes } = props;
	const attrName = attrNameByStatus("color", status, attrPrefix);

	return (
		<div style={controlWrapperStyle}>
			<BaseControl label={__("Font color", "beer-blocks")}>
				<ColorPalette
					colors={variants}
					value={attributes[attrName]}
					onChange={(color) => setAttributes({ [attrName]: color })}
					disableAlpha
					clearable={false}
				/>
			</BaseControl>
		</div>
	);
};

// returns css vars for color attribute
const colorCssVars = (props, blockName, attrPrefix) => {
	const hoverAttrName = attrNameByStatus("color", "hover", attrPrefix);
	const activeAttrName = attrNameByStatus("color", "active", attrPrefix);
	const focusAttrName = attrNameByStatus("color", "focus", attrPrefix);

	const {
		attributes: {
			[hoverAttrName]: hoverAttr = undefined,
			[activeAttrName]: activeAttr = undefined,
			[focusAttrName]: focusAttr = undefined,
		},
	} = props;

	return {
		...(hoverAttr !== undefined
			? {
					[`--wp-beer-blocks-${blockName}-${hoverAttrName}`]: hoverAttr,
			  }
			: {}),
		...(activeAttr !== undefined
			? {
					[`--wp-beer-blocks-${blockName}-${activeAttrName}`]: activeAttr,
			  }
			: {}),
		...(focusAttr !== undefined
			? {
					[`--wp-beer-blocks-${blockName}-${focusAttrName}`]: focusAttr,
			  }
			: {}),
	};
};

// returns background attribute by status
const backgroundAttribute = (status, attrPrefix, defaultValue) => ({
	[attrNameByStatus("background", status, attrPrefix)]: {
		type: "string",
		default: defaultValue,
	},
});

// returns background attribute's controls
const backgroundControl = (props, attrPrefix, status) => {
	const { setAttributes, attributes } = props;
	const attrName = attrNameByStatus("background", status, attrPrefix);

	const solidColor = attributes[attrName]
		? attributes[attrName].search(/(linear|radial)-gradient/) > -1
			? undefined
			: attributes[attrName]
		: undefined;

	const gradientColor = solidColor ? undefined : attributes[attrName];

	return (
		<div style={controlWrapperStyle}>
			<Heading level="3" style={{ marginBottom: "5px" }}>
				{__("Background", "beer-blocks")}
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
							onChange={(background) =>
								setAttributes({ [attrName]: background })
							}
							enableAlpha={true}
							clearable={false}
						/>
					) : (
						<GradientPicker
							value={gradientColor}
							onChange={(background) =>
								setAttributes({ [attrName]: background })
							}
							clearable={false}
						/>
					)
				}
			</TabPanel>
		</div>
	);
};

// returns css vars for background attribute
const backgroundCssVars = (props, blockName, attrPrefix) => {
	const hoverAttrName = attrNameByStatus("background", "hover", attrPrefix);
	const activeAttrName = attrNameByStatus("background", "active", attrPrefix);
	const focusAttrName = attrNameByStatus("background", "focus", attrPrefix);

	const {
		attributes: {
			[hoverAttrName]: hoverAttr = undefined,
			[activeAttrName]: activeAttr = undefined,
			[focusAttrName]: focusAttr = undefined,
		},
	} = props;

	return {
		...(hoverAttr !== undefined
			? {
					[`--wp-beer-blocks-${blockName}-${hoverAttrName}`]: hoverAttr,
			  }
			: {}),
		...(activeAttr !== undefined
			? {
					[`--wp-beer-blocks-${blockName}-${activeAttrName}`]: activeAttr,
			  }
			: {}),
		...(focusAttr !== undefined
			? {
					[`--wp-beer-blocks-${blockName}-${focusAttrName}`]: focusAttr,
			  }
			: {}),
	};
};

// returns border attribute by status
const borderAttribute = (status, attrPrefix, defaultValue) => ({
	[attrNameByStatus("border", status, attrPrefix)]: {
		type: "object",
		default: defaultValue,
	},
});

// returns border attribute's controls
/*
const borderControl = (props, attrPrefix, status) =>
	nativeBorderControl({
		props,
		attrPrefix: `${attrPrefix}-${status}`,
		enableStyle: false,
	});
	*/

const borderControl = (props, attrPrefix, status) => null;

// returns css vars for border attribute
const borderCssVars = (props, blockName, attrPrefix) => ({
	...nativeBorderCssVars(props, blockName, camelCase(`${attrPrefix}-hover`)),
	...nativeBorderCssVars(props, blockName, camelCase(`${attrPrefix}-active`)),
	...nativeBorderCssVars(props, blockName, camelCase(`${attrPrefix}-focus`)),
});

// Toggle control for enable hover, active, focus status or transition controls
const statusToggleControl = (props, attrPrefix, status, defaultValues) => {
	const attrStatusName = toggleAttrName(status, attrPrefix);

	const {
		attributes: { [attrStatusName]: statusEnabled = undefined },
		setAttributes,
	} = props;

	return statusEnabled !== undefined ? (
		<ToggleControl
			label={sprintf(
				__("Enable %s"),
				status === "transition" ? "transition effects" : `${status} status`
			)}
			checked={statusEnabled}
			onChange={() =>
				setAttributes({
					[attrStatusName]: !statusEnabled,
					...defaultValues,
				})
			}
		/>
	) : null;
};

// returns block attributes
export const attributes = ({
	attrPrefix = "",
	hoverColorAttr = false,
	hoverColorDefaultValue = undefined,
	activeColorAttr = false,
	activeColorDefaultValue = undefined,
	focusColorAttr = false,
	focusColorDefaultValue = undefined,
	hoverBackgroundAttr = false,
	hoverBackgroundDefaultValue = undefined,
	activeBackgroundAttr = false,
	activeBackgroundDefaultValue = undefined,
	focusBackgroundAttr = false,
	focusBackgroundDefaultValue = undefined,
	hoverBorderAttr = false,
	hoverBorderDefaultValue = undefined,
	activeBorderAttr = false,
	activeBorderDefaultValue = undefined,
	focusBorderAttr = false,
	focusBorderDefaultValue = undefined,
	transitionAttr = false,
	transitionDefaultValue = TRANSITION_DEFAULTS,
}) => ({
	...(hoverColorAttr || hoverBackgroundAttr || hoverBorderAttr
		? {
				[toggleAttrName("hover", attrPrefix)]: {
					type: "boolean",
					default: false,
				},
		  }
		: {}),
	...(activeColorAttr || activeBackgroundAttr || activeBorderAttr
		? {
				[toggleAttrName("active", attrPrefix)]: {
					type: "boolean",
					default: false,
				},
		  }
		: {}),
	...(focusColorAttr || focusBackgroundAttr || focusBorderAttr
		? {
				[toggleAttrName("focus", attrPrefix)]: {
					type: "boolean",
					default: false,
				},
		  }
		: {}),
	...(hoverColorAttr
		? colorAttribute("hover", attrPrefix, hoverColorDefaultValue)
		: {}),
	...(activeColorAttr
		? colorAttribute("active", attrPrefix, activeColorDefaultValue)
		: {}),
	...(focusColorAttr
		? colorAttribute("focus", attrPrefix, focusColorDefaultValue)
		: {}),
	...(hoverBackgroundAttr
		? backgroundAttribute("hover", attrPrefix, hoverBackgroundDefaultValue)
		: {}),
	...(activeBackgroundAttr
		? backgroundAttribute("active", attrPrefix, activeBackgroundDefaultValue)
		: {}),
	...(focusBackgroundAttr
		? backgroundAttribute("focus", attrPrefix, focusBackgroundDefaultValue)
		: {}),

	...(hoverBorderAttr
		? borderAttribute("hover", attrPrefix, hoverBorderDefaultValue)
		: {}),
	...(activeBorderAttr
		? borderAttribute("active", attrPrefix, activeBorderDefaultValue)
		: {}),
	...(focusBorderAttr
		? borderAttribute("focus", attrPrefix, focusBorderDefaultValue)
		: {}),
	...(transitionAttr
		? {
				[toggleAttrName("transition", attrPrefix)]: {
					type: "boolean",
					default: false,
				},
				...transitionAttributes(attrPrefix, transitionDefaultValue),
		  }
		: {}),
});

// returns all statuses controls
export const controls = ({
	props,
	attrPrefix = "",
	title = (
		<>
			<MdAdsClick className="components-panel__header-icon" />{" "}
			{__("Element statuses", "beer-blocks")}
		</>
	),
	hoverColorDefaultValue = undefined,
	activeColorDefaultValue = undefined,
	focusColorDefaultValue = undefined,
	hoverBackgroundDefaultValue = undefined,
	activeBackgroundDefaultValue = undefined,
	focusBackgroundDefaultValue = undefined,
	hoverBorderDefaultValue = undefined,
	activeBorderDefaultValue = undefined,
	focusBorderDefaultValue = undefined,
	transitionDefaultValue = TRANSITION_DEFAULTS,
}) => {
	const { attributes, setAttributes } = props;

	// hover attributes names
	const hoverToggleAttrName = toggleAttrName("hover", attrPrefix);
	const hoverColorAttrName = attrNameByStatus("color", "hover", attrPrefix);
	const hoverBackgroundAttrName = attrNameByStatus(
		"background",
		attrPrefix,
		"hover"
	);
	const hoverBorderAttrName = attrNameByStatus("border", "hover", attrPrefix);

	// active attributes names
	const activeToggleAttrName = toggleAttrName("active", attrPrefix);
	const activeColorAttrName = attrNameByStatus("color", "active", attrPrefix);
	const activeBackgroundAttrName = attrNameByStatus(
		"background",
		"active",
		attrPrefix
	);
	const activeBorderAttrName = attrNameByStatus("border", "active", attrPrefix);

	// focus attributes names
	const focusToggleAttrName = toggleAttrName("focus", attrPrefix);
	const focusColorAttrName = attrNameByStatus("color", "focus", attrPrefix);
	const focusBackgroundAttrName = attrNameByStatus(
		"background",
		"focus",
		attrPrefix
	);
	const focusBorderAttrName = attrNameByStatus("border", "focus", attrPrefix);

	// hover attributes flags
	const hoverColorAttr = has(attributes, hoverColorAttrName);
	const hoverBackgroundAttr = has(attributes, hoverBackgroundAttrName);
	const hoverBorderAttr = has(attributes, hoverBorderAttrName);
	const hoverStatus = hoverColorAttr || hoverBackgroundAttr || hoverBorderAttr;

	// active attributes flags
	const activeColorAttr = has(attributes, activeColorAttrName);
	const activeBackgroundAttr = has(attributes, activeBackgroundAttrName);
	const activeBorderAttr = has(attributes, activeBorderAttrName);
	const activeStatus =
		activeColorAttr || activeBackgroundAttr || activeBorderAttr;

	// focus attributes flags
	const focusColorAttr = has(attributes, focusColorAttrName);
	const focusBackgroundAttr = has(attributes, focusBackgroundAttrName);
	const focusBorderAttr = has(attributes, focusBorderAttrName);
	const focusStatus = focusColorAttr || focusBackgroundAttr || focusBorderAttr;

	// transition attribute name and flag
	const transitionToggleAttrName = toggleAttrName("transition", attrPrefix);
	const transitionAttrName = camelCase(`${attrPrefix}-transition`);
	const transitionAttr = has(attributes, transitionAttrName);

	// hover status default values
	const hoverStatusDefaultValues = {
		...(hoverColorAttr ? { [hoverColorAttrName]: hoverColorDefaultValue } : {}),
		...(hoverBackgroundAttr
			? { [hoverBackgroundAttrName]: hoverBackgroundDefaultValue }
			: {}),
		...(hoverBorderAttr
			? { [hoverBorderAttrName]: hoverBorderDefaultValue }
			: {}),
	};

	// active status default values
	const activeStatusDefaultValues = {
		...(activeColorAttr
			? { [activeColorAttrName]: activeColorDefaultValue }
			: {}),
		...(activeBackgroundAttr
			? { [activeBackgroundAttrName]: activeBackgroundDefaultValue }
			: {}),
		...(activeBorderAttr
			? { [activeBorderAttrName]: activeBorderDefaultValue }
			: {}),
	};

	// focus status default values
	const focusStatusDefaultValues = {
		...(focusColorAttr ? { [focusColorAttrName]: focusColorDefaultValue } : {}),
		...(focusBackgroundAttr
			? { [focusBackgroundAttrName]: focusBackgroundDefaultValue }
			: {}),
		...(focusBorderAttr
			? { [focusBorderAttrName]: focusBorderDefaultValue }
			: {}),
	};

	// hover status controls
	const hoverInnerControls = hoverStatus ? (
		<>
			{hoverColorAttr && colorControl(props, attrPrefix, "hover")}
			{hoverBackgroundAttr && backgroundControl(props, attrPrefix, "hover")}
			{hoverBorderAttr && borderControl(props, attrPrefix, "hover")}

			{resetButton({
				onClick: () => setAttributes(hoverStatusDefaultValues),
			})}
		</>
	) : null;

	// active status controls
	const activeInnerControls = activeStatus ? (
		<>
			{activeColorAttr && colorControl(props, attrPrefix, "active")}
			{activeBackgroundAttr && backgroundControl(props, attrPrefix, "active")}
			{activeBorderAttr && borderControl(props, attrPrefix, "active")}

			{resetButton({
				onClick: () => setAttributes(activeStatusDefaultValues),
			})}
		</>
	) : null;

	// focus status controls
	const focusInnerControls = focusStatus ? (
		<>
			{focusColorAttr && colorControl(props, attrPrefix, "focus")}
			{focusBackgroundAttr && backgroundControl(props, attrPrefix, "focus")}
			{focusBorderAttr && borderControl(props, attrPrefix, "focus")}

			{resetButton({
				onClick: () => setAttributes(focusStatusDefaultValues),
			})}
		</>
	) : null;

	// transition constrols
	const transitionInnerControls = transitionAttr ? (
		<>
			{transitionControls(props, attrPrefix)}

			{resetButton({
				onClick: () =>
					setAttributes({
						[transitionAttrName]: transitionDefaultValue,
					}),
			})}
		</>
	) : null;

	return (
		<Panel header={title} className="components-panel__with-subpanels">
			{hoverInnerControls && (
				<PanelBody
					title={__(statuses.hover, "beer-blocks")}
					initialOpen={false}
				>
					{statusToggleControl(
						props,
						attrPrefix,
						"hover",
						hoverStatusDefaultValues
					)}
					{attributes[hoverToggleAttrName] ? (
						hoverInnerControls
					) : (
						<Disabled>{hoverInnerControls}</Disabled>
					)}
				</PanelBody>
			)}

			{activeInnerControls && (
				<PanelBody
					title={__(statuses.active, "beer-blocks")}
					initialOpen={false}
				>
					{statusToggleControl(
						props,
						attrPrefix,
						"active",
						activeStatusDefaultValues
					)}
					{attributes[activeToggleAttrName] ? (
						activeInnerControls
					) : (
						<Disabled>{activeInnerControls}</Disabled>
					)}
				</PanelBody>
			)}

			{focusStatus && (
				<PanelBody
					title={__(statuses.focus, "beer-blocks")}
					initialOpen={false}
				>
					{statusToggleControl(
						props,
						attrPrefix,
						"focus",
						focusStatusDefaultValues
					)}
					{attributes[focusToggleAttrName] ? (
						focusInnerControls
					) : (
						<Disabled>{focusInnerControls}</Disabled>
					)}
				</PanelBody>
			)}

			{transitionAttr && (
				<PanelBody
					title={__("Transition Effects", "beer-blocks")}
					initialOpen={false}
				>
					{statusToggleControl(props, attrPrefix, "transition", {
						[transitionAttrName]: transitionDefaultValue,
					})}
					{attributes[transitionToggleAttrName] ? (
						transitionInnerControls
					) : (
						<Disabled>{transitionInnerControls}</Disabled>
					)}
				</PanelBody>
			)}
		</Panel>
	);
};

// returns css vars for transition and colors attributes
export const cssVars = (props, blockName, attrPrefix = "") => ({
	...colorCssVars(props, blockName, attrPrefix),
	...backgroundCssVars(props, blockName, attrPrefix),
	...borderCssVars(props, blockName, attrPrefix),
	...transitionCssVars(props, blockName, attrPrefix),
});

// returns CSS classes depending on attribute values
export const cssClasses = (props, attrPrefix = "") => {
	const {
		attributes: {
			[toggleAttrName("hover", attrPrefix)]: toggleHoverStatus = undefined,
			[toggleAttrName("active", attrPrefix)]: toggleActiveStatus = undefined,
			[toggleAttrName("focus", attrPrefix)]: toggleFocusStatus = undefined,
			[toggleAttrName("transition", attrPrefix)]: toggleTransition = undefined,
		},
	} = props;

	const classes = [
		...(toggleHoverStatus ? ["wp-beer-blocks-hover-statuses-helper"] : []),
		...(toggleActiveStatus ? ["wp-beer-blocks-active-statuses-helper"] : []),
		...(toggleFocusStatus ? ["wp-beer-blocks-focus-statuses-helper"] : []),
		...(toggleTransition ? ["wp-beer-blocks-transition-statuses-helper"] : []),
	];

	return classes.length > 0 ? classes.join(" ") : "";
};

export default {
	attributes,
	controls,
	cssVars,
	cssClasses,
};
