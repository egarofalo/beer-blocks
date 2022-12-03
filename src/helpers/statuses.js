import { __ } from "@wordpress/i18n";
import {
	RangeControl,
	BaseControl,
	ColorPalette,
	SelectControl,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
	__experimentalDivider as Divider,
	__experimentalHeading as Heading,
} from "@wordpress/components";
import { variantsColorPallet as variants } from "./bootstrap-variants";
import { camelCase, has } from "lodash";
import {
	controls as nativeBorderControl,
	cssVars as nativeBorderCssVars,
	isSplitBorders,
} from "./border";
import { controlWrapperStyle } from "./inline-styles";
import { reset as resetButton } from "./buttons";

// default transition attribute values
const TRANSITION_DEFAULTS = {
	delay: 0,
	duration: 0,
	timingFunction: "ease",
};

// elements statuses
const statuses = {
	hover: __("Hover", "beer-blocks"),
	active: __("Active", "beer-blocks"),
	focus: __("Focus", "beer-blocks"),
};

// check if transition value is falsy
const isFalsyTransition = (transition) =>
	!transition.delay && !transition.duration && !transition.timingFunction;

// returns attribute name by prefix and status
const attrNameByStatus = ({ attr, attrPrefix = "", status }) =>
	camelCase(`${attrPrefix}-${status}-${attr}`);

// transition timing functions
const transitionTimingFunctions = {
	ease: __("Ease", "beer-blocks"),
	linear: __("Linear", "beer-blocks"),
	"ease-in": __("Ease In", "beer-blocks"),
	"ease-out": __("Ease Out", "beer-blocks"),
	"ease-in-out": __("Ease In Out", "beer-blocks"),
};

// on deselect handle function for each panel item by status
const onDeselectPanelItem = ({
	status = "hover",
	attrPrefix = "",
	props,
	defaultColor = undefined,
	defaultBackground = undefined,
	defaultBorder = undefined,
}) => {
	const { attributes, setAttributes } = props;
	const colorAttrName = attrNameByStatus({
		attr: "color",
		attrPrefix,
		status,
	});
	const backgroundAttrName = attrNameByStatus({
		attr: "background",
		attrPrefix,
		status,
	});
	const borderAttrName = attrNameByStatus({
		attr: "border",
		attrPrefix,
		status,
	});

	if (defaultBorder) {
		defaultBorder = isSplitBorders(defaultBorder)
			? {
					top: {
						color: defaultBorder.top.color,
						width: defaultBorder.top.width,
					},
					right: {
						color: defaultBorder.right.color,
						width: defaultBorder.right.width,
					},
					bottom: {
						color: defaultBorder.bottom.color,
						width: defaultBorder.bottom.width,
					},
					left: {
						color: defaultBorder.left.color,
						width: defaultBorder.left.width,
					},
			  }
			: {
					color: defaultBorder.color,
					width: defaultBorder.width,
			  };
	}

	setAttributes({
		...(has(attributes, colorAttrName)
			? { [colorAttrName]: defaultColor }
			: {}),
		...(has(attributes, backgroundAttrName)
			? { [backgroundAttrName]: defaultBackground }
			: {}),
		...(has(attributes, borderAttrName)
			? { [borderAttrName]: defaultBorder }
			: {}),
	});
};

// check if panel item by status has a truly value
const panelItemHasValue = ({ props, attrPrefix, status = "hover" }) => {
	const { attributes } = props;
	const colorAttrName = attrNameByStatus({ attr: "color", attrPrefix, status });
	const backgroundAttrName = attrNameByStatus({
		attr: "background",
		attrPrefix,
		status,
	});
	const borderAttrName = attrNameByStatus({
		attr: "border",
		attrPrefix,
		status,
	});

	return (
		attributes[colorAttrName] ||
		attributes[backgroundAttrName] ||
		attributes[borderAttrName]
	);
};

// returns transition block attribute
const transitionAttributes = ({
	attrPrefix = "",
	defaultValue = TRANSITION_DEFAULTS,
}) => ({
	[camelCase(`${attrPrefix}-transition`)]: {
		type: "object",
		default: defaultValue,
	},
});

// returns controls for transition effects
const transitionControls = ({ props, attrPrefix = "" }) => {
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
					options={[
						...Object.entries(transitionTimingFunctions).map(
							([value, label]) => ({
								label,
								value,
							})
						),
					]}
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
const transitionCssVars = ({ props, blockName, attrPrefix = "" }) => {
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
const colorAttribute = ({
	status,
	attrPrefix = "",
	defaultValue = undefined,
}) => ({
	[attrNameByStatus({ attr: "color", status, attrPrefix })]: {
		type: "string",
		default: defaultValue,
	},
});

// returns color atrribute's controls
const colorControl = ({
	props,
	attrPrefix = "",
	label = __("Font color", "beer-blocks"),
	status,
}) => {
	const { setAttributes, attributes } = props;
	const attrName = attrNameByStatus({
		attr: "color",
		attrPrefix,
		status,
	});

	return (
		<div style={controlWrapperStyle}>
			<BaseControl label={label}>
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
const colorCssVars = ({ props, blockName, attrPrefix = "" }) => {
	const hoverAttrName = attrNameByStatus({
		attr: "color",
		attrPrefix,
		status: "hover",
	});
	const activeAttrName = attrNameByStatus({
		attr: "color",
		attrPrefix,
		status: "active",
	});
	const focusAttrName = attrNameByStatus({
		attr: "color",
		attrPrefix,
		status: "focus",
	});

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
const backgroundAttribute = ({
	status,
	attrPrefix = "",
	defaultValue = undefined,
}) => ({
	[attrNameByStatus({ attr: "background", status, attrPrefix })]: {
		type: "string",
		default: defaultValue,
	},
});

// returns background attribute's controls
const backgroundControl = ({
	props,
	attrPrefix = "",
	label = __("Background", "beer-blocks"),
	status,
}) => {
	const { setAttributes, attributes } = props;
	const attrName = attrNameByStatus({
		attr: "background",
		attrPrefix,
		status,
	});

	return (
		<div style={controlWrapperStyle}>
			<BaseControl label={label}>
				<ColorPalette
					colors={variants}
					value={attributes[attrName]}
					onChange={(background) => setAttributes({ [attrName]: background })}
					disableAlpha
					clearable={false}
				/>
			</BaseControl>
		</div>
	);
};

// returns css vars for background attribute
const backgroundCssVars = ({ props, blockName, attrPrefix = "" }) => {
	const hoverAttrName = attrNameByStatus({
		attr: "background",
		attrPrefix,
		status: "hover",
	});
	const activeAttrName = attrNameByStatus({
		attr: "background",
		attrPrefix,
		status: "active",
	});
	const focusAttrName = attrNameByStatus({
		attr: "background",
		attrPrefix,
		status: "focus",
	});

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
const borderAttribute = ({
	status,
	attrPrefix = "",
	defaultValue = undefined,
}) => ({
	[attrNameByStatus({ attr: "border", status, attrPrefix })]: {
		type: "object",
		default: defaultValue,
	},
});

// returns border attribute's controls
const borderControl = ({
	props,
	attrPrefix = "",
	label = __("Border styles", "beer-blocks"),
	status,
}) =>
	nativeBorderControl({
		props,
		attrPrefix: `${attrPrefix}-${status}`,
		enableStyle: false,
		panelBody: false,
		label,
		reset: false,
	});

// returns css vars for border attribute
const borderCssVars = ({ props, blockName, attrPrefix = "" }) => ({
	...nativeBorderCssVars({
		props,
		blockName,
		attrPrefix: camelCase(`${attrPrefix}-hover`),
		enableStyle: false,
	}),
	...nativeBorderCssVars({
		props,
		blockName,
		attrPrefix: camelCase(`${attrPrefix}-active`),
		enableStyle: false,
	}),
	...nativeBorderCssVars({
		props,
		blockName,
		attrPrefix: camelCase(`${attrPrefix}-focus`),
		enableStyle: false,
	}),
});

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
	...(hoverColorAttr
		? colorAttribute({
				status: "hover",
				attrPrefix,
				defaultValue: hoverColorDefaultValue,
		  })
		: {}),
	...(activeColorAttr
		? colorAttribute({
				status: "active",
				attrPrefix,
				defaultValue: activeColorDefaultValue,
		  })
		: {}),
	...(focusColorAttr
		? colorAttribute({
				status: "focus",
				attrPrefix,
				defaultValue: focusColorDefaultValue,
		  })
		: {}),
	...(hoverBackgroundAttr
		? backgroundAttribute({
				status: "hover",
				attrPrefix,
				defaultValue: hoverBackgroundDefaultValue,
		  })
		: {}),
	...(activeBackgroundAttr
		? backgroundAttribute({
				status: "active",
				attrPrefix,
				defaultValue: activeBackgroundDefaultValue,
		  })
		: {}),
	...(focusBackgroundAttr
		? backgroundAttribute({
				status: "focus",
				attrPrefix,
				defaultValue: focusBackgroundDefaultValue,
		  })
		: {}),

	...(hoverBorderAttr
		? borderAttribute({
				status: "hover",
				attrPrefix,
				defaultValue: hoverBorderDefaultValue,
		  })
		: {}),
	...(activeBorderAttr
		? borderAttribute({
				status: "active",
				attrPrefix,
				defaultValue: activeBorderDefaultValue,
		  })
		: {}),
	...(focusBorderAttr
		? borderAttribute({
				status: "focus",
				attrPrefix,
				defaultValue: focusBorderDefaultValue,
		  })
		: {}),
	...(transitionAttr
		? transitionAttributes({ attrPrefix, defaultValue: transitionDefaultValue })
		: {}),
});

// returns all statuses controls
export const controls = ({
	props,
	attrPrefix = "",
	title = __("Element statuses", "beer-blocks"),
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
	// attributes names
	const hoverColorAttrName = attrNameByStatus({
		attr: "color",
		attrPrefix,
		status: "hover",
	});
	const hoverBackgroundAttrName = attrNameByStatus({
		attr: "background",
		attrPrefix,
		status: "hover",
	});
	const hoverBorderAttrName = attrNameByStatus({
		attr: "border",
		attrPrefix,
		status: "hover",
	});
	const activeColorAttrName = attrNameByStatus({
		attr: "color",
		attrPrefix,
		status: "active",
	});
	const activeBackgroundAttrName = attrNameByStatus({
		attr: "background",
		attrPrefix,
		status: "active",
	});
	const activeBorderAttrName = attrNameByStatus({
		attr: "border",
		attrPrefix,
		status: "active",
	});
	const focusColorAttrName = attrNameByStatus({
		attr: "color",
		attrPrefix,
		status: "focus",
	});
	const focusBackgroundAttrName = attrNameByStatus({
		attr: "background",
		attrPrefix,
		status: "focus",
	});
	const focusBorderAttrName = attrNameByStatus({
		attr: "border",
		attrPrefix,
		status: "focus",
	});
	const transitionAttrName = camelCase(`${attrPrefix}-transition`);
	// attributes flags
	const hoverColorAttr = has(attributes, hoverColorAttrName);
	const hoverBackgroundAttr = has(attributes, hoverBackgroundAttrName);
	const hoverBorderAttr = has(attributes, hoverBorderAttrName);
	const activeColorAttr = has(attributes, activeColorAttrName);
	const activeBackgroundAttr = has(attributes, activeBackgroundAttrName);
	const activeBorderAttr = has(attributes, activeBorderAttrName);
	const focusColorAttr = has(attributes, focusColorAttrName);
	const focusBackgroundAttr = has(attributes, focusBackgroundAttrName);
	const focusBorderAttr = has(attributes, focusBorderAttrName);
	const transitionAttr = has(attributes, transitionAttrName);
	const hoverStatus = hoverColorAttr || hoverBackgroundAttr || hoverBorderAttr;
	const activeStatus =
		activeColorAttr || activeBackgroundAttr || activeBorderAttr;
	const focusStatus = focusColorAttr || focusBackgroundAttr || focusBorderAttr;

	const panelItemHeadingStyles = {
		textAlign: "center",
		textTransform: "uppercase",
	};

	return (
		<ToolsPanel label={title}>
			{hoverStatus && (
				<ToolsPanelItem
					label={__(statuses.hover, "beer-blocks")}
					hasValue={() =>
						panelItemHasValue({ props, attrPrefix, status: "hover" })
					}
					onDeselect={() =>
						onDeselectPanelItem({
							props,
							attrPrefix,
							status: "hover",
							defaultColor: hoverColorDefaultValue,
							defaultBackground: hoverBackgroundDefaultValue,
							defaultBorder: hoverBorderDefaultValue,
							defaultTransition: transitionDefaultValue,
						})
					}
				>
					<Heading style={panelItemHeadingStyles}>
						{__(statuses.hover, "beer-blocks")}
					</Heading>

					{hoverColorAttr &&
						colorControl({ props, attrPrefix, status: "hover" })}
					{hoverBackgroundAttr &&
						backgroundControl({ props, attrPrefix, status: "hover" })}
					{hoverBorderAttr &&
						borderControl({ props, attrPrefix, status: "hover" })}

					{resetButton({
						onClick: setAttributes({
							...(hoverColorAttr
								? { [hoverColorAttrName]: hoverColorDefaultValue }
								: {}),
							...(hoverBackgroundAttr
								? { [hoverBackgroundAttrName]: hoverBackgroundDefaultValue }
								: {}),
							...(hoverBorderAttr
								? { [hoverBorderAttrName]: hoverBorderDefaultValue }
								: {}),
						}),
					})}

					{(activeStatus || focusStatus || transitionAttr) && <Divider />}
				</ToolsPanelItem>
			)}

			{activeStatus && (
				<ToolsPanelItem
					label={__(statuses.active, "beer-blocks")}
					hasValue={() =>
						panelItemHasValue({ props, attrPrefix, status: "active" })
					}
					onDeselect={() =>
						onDeselectPanelItem({
							props,
							attrPrefix,
							status: "active",
							defaultColor: activeColorDefaultValue,
							defaultBackground: activeBackgroundDefaultValue,
							defaultBorder: activeBorderDefaultValue,
							defaultTransition: transitionDefaultValue,
						})
					}
				>
					<Heading style={panelItemHeadingStyles}>
						{__(statuses.active, "beer-blocks")}
					</Heading>

					{activeColorAttr &&
						colorControl({ props, attrPrefix, status: "active" })}
					{activeBackgroundAttr &&
						backgroundControl({ props, attrPrefix, status: "active" })}
					{activeBorderAttr &&
						borderControl({ props, attrPrefix, status: "active" })}

					{resetButton({
						onClick: setAttributes({
							...(activeColorAttr
								? { [activeColorAttrName]: activeColorDefaultValue }
								: {}),
							...(activeBackgroundAttr
								? { [activeBackgroundAttrName]: activeBackgroundDefaultValue }
								: {}),
							...(activeBorderAttr
								? { [activeBorderAttrName]: activeBorderDefaultValue }
								: {}),
						}),
					})}

					{(focusStatus || transitionAttr) && <Divider />}
				</ToolsPanelItem>
			)}

			{focusStatus && (
				<ToolsPanelItem
					label={__(statuses.focus, "beer-blocks")}
					hasValue={() =>
						panelItemHasValue({ props, attrPrefix, status: "focus" })
					}
					onDeselect={() =>
						onDeselectPanelItem({
							props,
							attrPrefix,
							status: "focus",
							defaultColor: focusColorDefaultValue,
							defaultBackground: focusBackgroundDefaultValue,
							defaultBorder: focusBorderDefaultValue,
							defaultTransition: transitionDefaultValue,
						})
					}
				>
					<Heading style={panelItemHeadingStyles}>
						{__(statuses.focus, "beer-blocks")}
					</Heading>

					{focusColorAttr &&
						colorControl({ props, attrPrefix, status: "focus" })}
					{focusBackgroundAttr &&
						backgroundControl({ props, attrPrefix, status: "focus" })}
					{focusBorderAttr &&
						borderControl({ props, attrPrefix, status: "focus" })}

					{resetButton({
						onClick: setAttributes({
							...(focusColorAttr
								? { [focusColorAttrName]: focusColorDefaultValue }
								: {}),
							...(focusBackgroundAttr
								? { [focusBackgroundAttrName]: focusBackgroundDefaultValue }
								: {}),
							...(focusBorderAttr
								? { [focusBorderAttrName]: focusBorderDefaultValue }
								: {}),
						}),
					})}

					{transitionAttr && <Divider />}
				</ToolsPanelItem>
			)}

			{transitionAttr && (
				<ToolsPanelItem
					label={__("Transition Effects", "beer-blocks")}
					hasValue={() =>
						!isFalsyTransition(
							attributes[camelCase(`${attrPrefix}-transition`)]
						)
					}
					onDeselect={() =>
						setAttributes({
							[camelCase(`${attrPrefix}-transition`)]: transitionDefaultValue,
						})
					}
				>
					<Heading style={panelItemHeadingStyles}>
						{__("Transitions", "beer-blocks")}
					</Heading>

					{transitionControls({ props, attrPrefix })}

					{resetButton({
						onClick: setAttributes({
							[transitionAttrName]: transitionDefaultValue,
						}),
					})}
				</ToolsPanelItem>
			)}
		</ToolsPanel>
	);
};

// returns css vars for transition and colors attributes
export const cssVars = ({ props, blockName, attrPrefix = "" }) => ({
	...colorCssVars({ props, blockName, attrPrefix }),
	...backgroundCssVars({ props, blockName, attrPrefix }),
	...borderCssVars({ props, blockName, attrPrefix }),
	...transitionCssVars({ props, blockName, attrPrefix }),
});

// set fallback values for color, background or border attributes if they are undefined
export const setAttributesFallbackValues = ({
	props,
	attrPrefix = "",
	useEffect,
	attributesValues = {},
}) => {
	const useEffectFunc = () => {
		const { setAttributes, attributes } = props;
		const hoverColorAttrName = attrNameByStatus({
			attr: "color",
			attrPrefix,
			status: "hover",
		});
		const activeColorAttrName = attrNameByStatus({
			attr: "color",
			attrPrefix,
			status: "active",
		});
		const focusColorAttrName = attrNameByStatus({
			attr: "color",
			attrPrefix,
			status: "focus",
		});
		const hoverBackgroundAttrName = attrNameByStatus({
			attr: "background",
			attrPrefix,
			status: "hover",
		});
		const activeBackgroundAttrName = attrNameByStatus({
			attr: "background",
			attrPrefix,
			status: "active",
		});
		const focusBackgroundAttrName = attrNameByStatus({
			attr: "background",
			attrPrefix,
			status: "focus",
		});
		const hoverBorderAttrName = attrNameByStatus({
			attr: "border",
			attrPrefix,
			status: "hover",
		});
		const activeBorderAttrName = attrNameByStatus({
			attr: "border",
			attrPrefix,
			status: "active",
		});
		const focusBorderAttrName = attrNameByStatus({
			attr: "border",
			attrPrefix,
			status: "focus",
		});

		setAttributes({
			...(has(attributes, hoverColorAttrName) &&
			has(attributesValues, "color") &&
			attributes[hoverColorAttrName] === undefined
				? { [hoverColorAttrName]: attributesValues.color }
				: {}),
			...(has(attributes, activeColorAttrName) &&
			has(attributesValues, "color") &&
			attributes[activeColorAttrName] === undefined
				? { [activeColorAttrName]: attributesValues.color }
				: {}),
			...(has(attributes, focusColorAttrName) &&
			has(attributesValues, "color") &&
			attributes[focusColorAttrName] === undefined
				? { [focusColorAttrName]: attributesValues.color }
				: {}),
			...(has(attributes, hoverBackgroundAttrName) &&
			has(attributesValues, "background") &&
			attributes[hoverBackgroundAttrName] === undefined
				? { [hoverBackgroundAttrName]: attributesValues.background }
				: {}),
			...(has(attributes, activeBackgroundAttrName) &&
			has(attributesValues, "background") &&
			attributes[activeBackgroundAttrName] === undefined
				? { [activeBackgroundAttrName]: attributesValues.background }
				: {}),
			...(has(attributes, focusBackgroundAttrName) &&
			has(attributesValues, "background") &&
			attributes[focusBackgroundAttrName] === undefined
				? { [focusBackgroundAttrName]: attributesValues.background }
				: {}),
			...(has(attributes, hoverBorderAttrName) &&
			has(attributesValues, "border") &&
			attributes[hoverBorderAttrName] === undefined
				? { [hoverBorderAttrName]: attributesValues.border }
				: {}),
			...(has(attributes, activeBorderAttrName) &&
			has(attributesValues, "border") &&
			attributes[activeBorderAttrName] === undefined
				? { [activeBorderAttrName]: attributesValues.border }
				: {}),
			...(has(attributes, focusBorderAttrName) &&
			has(attributesValues, "border") &&
			attributes[focusBorderAttrName] === undefined
				? { [focusBorderAttrName]: attributesValues.border }
				: {}),
		});
	};

	useEffect(() => useEffectFunc(), []);
};

export default {
	attributes,
	controls,
	cssVars,
	setAttributesFallbackValues,
};
