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
		}-enabled`,
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
const transitionAttributes = (attrPrefix) => ({
	[camelCase(`${attrPrefix}-transition`)]: {
		type: "object",
		default: TRANSITION_DEFAULTS,
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

// returns CSS classes for transition rules
const transitionCssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true,
) => {
	const {
		attributes: {
			[toggleAttrName("transition", attrPrefix)]: toggleTransition = undefined,
			[camelCase(`${attrPrefix}-transition`)]: transition = undefined,
		},
	} = props;

	const classes =
		toggleTransition && transition
			? [
					"wp-beer-blocks-has-transition-property-rule",
					...(transition.delay !== undefined
						? ["wp-beer-blocks-has-transition-delay-rule"]
						: []),
					...(transition.duration !== undefined
						? ["wp-beer-blocks-has-transition-duration-rule"]
						: []),
					...(transition.timingFunction !== undefined
						? ["wp-beer-blocks-has-transition-timing-function-rule"]
						: []),
			  ]
			: [];

	return classes.length > 0
		? `${addWhitespaceBefore ? " " : ""}${classes.join(" ")}`
		: "";
};

// returns color attribute by status
const colorAttribute = (status, attrPrefix) => ({
	[attrNameByStatus("color", status, attrPrefix)]: {
		type: "string",
		default: "",
	},
});

// returns color atrribute's controls
const colorControl = (props, attrPrefix, status) => {
	const { setAttributes, attributes } = props;
	const attrName = attrNameByStatus("color", status, attrPrefix);

	return (
		<BaseControl label={__("Font color", "beer-blocks")}>
			<ColorPalette
				colors={variants}
				value={attributes[attrName]}
				onChange={(color) => setAttributes({ [attrName]: color })}
				disableAlpha
				clearable={true}
			/>
		</BaseControl>
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

// returns CSS classes for color rules
const colorCssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true,
) => {
	const {
		attributes: {
			[toggleAttrName("hover", attrPrefix)]: toggleHover = undefined,
			[attrNameByStatus("color", "hover", attrPrefix)]: hoverColor = undefined,
			[toggleAttrName("active", attrPrefix)]: toggleActive = undefined,
			[attrNameByStatus("color", "active", attrPrefix)]:
				activeColor = undefined,
			[toggleAttrName("focus", attrPrefix)]: toggleFocus = undefined,
			[attrNameByStatus("color", "focus", attrPrefix)]: focusColor = undefined,
			//[toggleAttrName("transition", attrPrefix)]: toggleTransition = undefined,
		},
	} = props;

	const classes = [
		...(toggleHover && hoverColor
			? ["wp-beer-blocks-has-hover-color-rule"]
			: []),
		...(toggleActive && activeColor
			? ["wp-beer-blocks-has-active-color-rule"]
			: []),
		...(toggleFocus && focusColor
			? ["wp-beer-blocks-has-focus-color-rule"]
			: []),
	];

	return classes.length > 0
		? `${addWhitespaceBefore ? " " : ""}${classes.join(" ")}`
		: "";
};

// returns background attribute by status
const backgroundAttribute = (status, attrPrefix) => ({
	[attrNameByStatus("background", status, attrPrefix)]: {
		type: "string",
		default: "",
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
		<>
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
							clearable={true}
						/>
					) : (
						<GradientPicker
							value={gradientColor}
							onChange={(background) =>
								setAttributes({ [attrName]: background })
							}
							clearable={true}
						/>
					)
				}
			</TabPanel>
		</>
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

// returns CSS classes for background rules
const backgroundCssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true,
) => {
	const {
		attributes: {
			[toggleAttrName("hover", attrPrefix)]: toggleHover = undefined,
			[attrNameByStatus("background", "hover", attrPrefix)]:
				hoverBackground = undefined,
			[toggleAttrName("active", attrPrefix)]: toggleActive = undefined,
			[attrNameByStatus("background", "active", attrPrefix)]:
				activeBackground = undefined,
			[toggleAttrName("focus", attrPrefix)]: toggleFocus = undefined,
			[attrNameByStatus("background", "focus", attrPrefix)]:
				focusBackground = undefined,
		},
	} = props;

	const classes = [
		...(toggleHover && hoverBackground
			? ["wp-beer-blocks-has-hover-background-rule"]
			: []),
		...(toggleActive && activeBackground
			? ["wp-beer-blocks-has-active-background-rule"]
			: []),
		...(toggleFocus && focusBackground
			? ["wp-beer-blocks-has-focus-background-rule"]
			: []),
	];

	return classes.length > 0
		? `${addWhitespaceBefore ? " " : ""}${classes.join(" ")}`
		: "";
};

// returns border color attribute by status
const borderColorAttribute = (status, attrPrefix) => ({
	[attrNameByStatus("border-color", status, attrPrefix)]: {
		type: "string",
		default: "",
	},
});

// returns border color attribute's controls
const borderColorControl = (props, attrPrefix, status) => {
	const { setAttributes, attributes } = props;
	const attrName = attrNameByStatus("border-color", status, attrPrefix);

	return (
		<BaseControl label={__("Border color", "beer-blocks")}>
			<ColorPalette
				colors={variants}
				value={attributes[attrName]}
				onChange={(color) => setAttributes({ [attrName]: color })}
				disableAlpha
				clearable={true}
			/>
		</BaseControl>
	);
};

// returns css vars for border color attribute
const borderColorCssVars = (props, blockName, attrPrefix) => {
	const hoverAttrName = attrNameByStatus("border-color", "hover", attrPrefix);
	const activeAttrName = attrNameByStatus("border-color", "active", attrPrefix);
	const focusAttrName = attrNameByStatus("border-color", "focus", attrPrefix);

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

// returns CSS classes for border color rules
const borderColorCssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true,
) => {
	const {
		attributes: {
			[toggleAttrName("hover", attrPrefix)]: toggleHover = undefined,
			[attrNameByStatus("border-color", "hover", attrPrefix)]:
				hoverBorderColor = undefined,
			[toggleAttrName("active", attrPrefix)]: toggleActive = undefined,
			[attrNameByStatus("border-color", "active", attrPrefix)]:
				activeBorderColor = undefined,
			[toggleAttrName("focus", attrPrefix)]: toggleFocus = undefined,
			[attrNameByStatus("border-color", "focus", attrPrefix)]:
				focusBorderColor = undefined,
		},
	} = props;

	const classes = [
		...(toggleHover && hoverBorderColor
			? ["wp-beer-blocks-has-hover-border-color-rule"]
			: []),
		...(toggleActive && activeBorderColor
			? ["wp-beer-blocks-has-active-border-color-rule"]
			: []),
		...(toggleFocus && focusBorderColor
			? ["wp-beer-blocks-has-focus-border-color-rule"]
			: []),
	];

	return classes.length > 0
		? `${addWhitespaceBefore ? " " : ""}${classes.join(" ")}`
		: "";
};

// Toggle control for enable hover, active, focus or transition control
const statusToggleControl = (props, attrPrefix, status) => {
	const attrStatusName = toggleAttrName(status, attrPrefix);

	const {
		attributes: { [attrStatusName]: statusEnabled = undefined },
		setAttributes,
	} = props;

	return statusEnabled !== undefined ? (
		<ToggleControl
			label={sprintf(
				__("Enable %s"),
				status === "transition" ? "transition effects" : `${status} status`,
			)}
			checked={statusEnabled}
			onChange={() => setAttributes({ [attrStatusName]: !statusEnabled })}
		/>
	) : null;
};

/*
Attributes ej:
- {attrPrefix}hoverStatusEnabled
- {attrPrefix}activeStatusEnabled
- {attrPrefix}focusStatusEnabled
- {attrPrefix}hoverColor
- {attrPrefix}focusColor
- {attrPrefix}activeColor
- {attrPrefix}hoverBackground
- {attrPrefix}focusBackground
- {attrPrefix}activeBackground
- {attrPrefix}hoverBorderColor
- {attrPrefix}focusBorderColor
- {attrPrefix}activeBorderColor
- {attrPrefix}transitionEnabled
- {attrPrefix}transition
*/
// returns block attributes
export const attributes = ({
	attrPrefix = "",
	hoverColorAttr = false,
	activeColorAttr = false,
	focusColorAttr = false,
	hoverBackgroundAttr = false,
	activeBackgroundAttr = false,
	focusBackgroundAttr = false,
	hoverBorderColorAttr = false,
	activeBorderColorAttr = false,
	focusBorderColorAttr = false,
	transitionAttr = false,
}) => ({
	...(hoverColorAttr || hoverBackgroundAttr || hoverBorderColorAttr
		? {
				[toggleAttrName("hover", attrPrefix)]: {
					type: "boolean",
					default: false,
				},
		  }
		: {}),
	...(activeColorAttr || activeBackgroundAttr || activeBorderColorAttr
		? {
				[toggleAttrName("active", attrPrefix)]: {
					type: "boolean",
					default: false,
				},
		  }
		: {}),
	...(focusColorAttr || focusBackgroundAttr || focusBorderColorAttr
		? {
				[toggleAttrName("focus", attrPrefix)]: {
					type: "boolean",
					default: false,
				},
		  }
		: {}),
	...(hoverColorAttr ? colorAttribute("hover", attrPrefix) : {}),
	...(activeColorAttr ? colorAttribute("active", attrPrefix) : {}),
	...(focusColorAttr ? colorAttribute("focus", attrPrefix) : {}),
	...(hoverBackgroundAttr ? backgroundAttribute("hover", attrPrefix) : {}),
	...(activeBackgroundAttr ? backgroundAttribute("active", attrPrefix) : {}),
	...(focusBackgroundAttr ? backgroundAttribute("focus", attrPrefix) : {}),
	...(hoverBorderColorAttr ? borderColorAttribute("hover", attrPrefix) : {}),
	...(activeBorderColorAttr ? borderColorAttribute("active", attrPrefix) : {}),
	...(focusBorderColorAttr ? borderColorAttribute("focus", attrPrefix) : {}),
	...(transitionAttr
		? {
				[toggleAttrName("transition", attrPrefix)]: {
					type: "boolean",
					default: false,
				},
				...transitionAttributes(attrPrefix),
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
}) => {
	const { attributes, setAttributes } = props;
	// hover attributes names
	const hoverToggleAttrName = toggleAttrName("hover", attrPrefix);
	const hoverColorAttrName = attrNameByStatus("color", "hover", attrPrefix);
	const hoverBackgroundAttrName = attrNameByStatus(
		"background",
		"hover",
		attrPrefix,
	);
	const hoverBorderColorAttrName = attrNameByStatus(
		"border-color",
		"hover",
		attrPrefix,
	);
	// active attributes names
	const activeToggleAttrName = toggleAttrName("active", attrPrefix);
	const activeColorAttrName = attrNameByStatus("color", "active", attrPrefix);
	const activeBackgroundAttrName = attrNameByStatus(
		"background",
		"active",
		attrPrefix,
	);
	const activeBorderColorAttrName = attrNameByStatus(
		"border-color",
		"active",
		attrPrefix,
	);
	// focus attributes names
	const focusToggleAttrName = toggleAttrName("focus", attrPrefix);
	const focusColorAttrName = attrNameByStatus("color", "focus", attrPrefix);
	const focusBackgroundAttrName = attrNameByStatus(
		"background",
		"focus",
		attrPrefix,
	);
	const focusBorderColorAttrName = attrNameByStatus(
		"border-color",
		"focus",
		attrPrefix,
	);
	// hover attributes flags
	const hoverColorAttr = has(attributes, hoverColorAttrName);
	const hoverBackgroundAttr = has(attributes, hoverBackgroundAttrName);
	const hoverBorderColorAttr = has(attributes, hoverBorderColorAttrName);
	const hoverStatus =
		hoverColorAttr || hoverBackgroundAttr || hoverBorderColorAttr;
	// active attributes flags
	const activeColorAttr = has(attributes, activeColorAttrName);
	const activeBackgroundAttr = has(attributes, activeBackgroundAttrName);
	const activeBorderColorAttr = has(attributes, activeBorderColorAttrName);
	const activeStatus =
		activeColorAttr || activeBackgroundAttr || activeBorderColorAttr;
	// focus attributes flags
	const focusColorAttr = has(attributes, focusColorAttrName);
	const focusBackgroundAttr = has(attributes, focusBackgroundAttrName);
	const focusBorderColorAttr = has(attributes, focusBorderColorAttrName);
	const focusStatus =
		focusColorAttr || focusBackgroundAttr || focusBorderColorAttr;
	// transition attribute name and flag
	const transitionToggleAttrName = toggleAttrName("transition", attrPrefix);
	const transitionAttrName = camelCase(`${attrPrefix}-transition`);
	const transitionAttr = has(attributes, transitionAttrName);

	// hover status controls
	const hoverInnerControls = hoverStatus ? (
		<>
			{hoverColorAttr && colorControl(props, attrPrefix, "hover")}
			{hoverBackgroundAttr && backgroundControl(props, attrPrefix, "hover")}
			{hoverBorderColorAttr && borderColorControl(props, attrPrefix, "hover")}
		</>
	) : null;

	// active status controls
	const activeInnerControls = activeStatus ? (
		<>
			{activeColorAttr && colorControl(props, attrPrefix, "active")}
			{activeBackgroundAttr && backgroundControl(props, attrPrefix, "active")}
			{activeBorderColorAttr && borderColorControl(props, attrPrefix, "active")}
		</>
	) : null;

	// focus status controls
	const focusInnerControls = focusStatus ? (
		<>
			{focusColorAttr && colorControl(props, attrPrefix, "focus")}
			{focusBackgroundAttr && backgroundControl(props, attrPrefix, "focus")}
			{focusBorderColorAttr && borderColorControl(props, attrPrefix, "focus")}
		</>
	) : null;

	// transition constrols
	const transitionInnerControls = transitionAttr ? (
		<>
			{transitionControls(props, attrPrefix)}

			{resetButton({
				onClick: () =>
					setAttributes({
						[transitionAttrName]: TRANSITION_DEFAULTS,
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
					{statusToggleControl(props, attrPrefix, "hover")}
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
					{statusToggleControl(props, attrPrefix, "active")}
					{attributes[activeToggleAttrName] ? (
						activeInnerControls
					) : (
						<Disabled>{activeInnerControls}</Disabled>
					)}
				</PanelBody>
			)}

			{focusInnerControls && (
				<PanelBody
					title={__(statuses.focus, "beer-blocks")}
					initialOpen={false}
				>
					{statusToggleControl(props, attrPrefix, "focus")}
					{attributes[focusToggleAttrName] ? (
						focusInnerControls
					) : (
						<Disabled>{focusInnerControls}</Disabled>
					)}
				</PanelBody>
			)}

			{transitionInnerControls && (
				<PanelBody
					title={__("Transition Effects", "beer-blocks")}
					initialOpen={false}
				>
					{statusToggleControl(props, attrPrefix, "transition")}
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
	...borderColorCssVars(props, blockName, attrPrefix),
	...transitionCssVars(props, blockName, attrPrefix),
});

// returns CSS classes depending on attribute values
export const cssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true,
) => {
	const classes = `${colorCssClasses(props, attrPrefix)}${backgroundCssClasses(
		props,
		attrPrefix,
	)}${borderColorCssClasses(props, attrPrefix)}${transitionCssClasses(
		props,
		attrPrefix,
	)}`.trimStart();

	return `${addWhitespaceBefore ? " " : ""}${classes}`.trimEnd();
};

export default {
	attributes,
	controls,
	cssVars,
	cssClasses,
};
