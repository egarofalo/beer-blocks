import { useEffect } from "react";
import { __, sprintf } from "@wordpress/i18n";
import {
	PanelBody,
	__experimentalUnitControl as UnitControl,
	__experimentalDivider as Divider,
	BaseControl,
	RangeControl,
} from "@wordpress/components";
import Select from "react-select";
import googleFonts from "./google-fonts.json";
import safeFonts from "./safe-fonts.json";
import { has, get, camelCase, kebabCase } from "lodash";
import grid from "./grid";
import { only as unitsOnly } from "./units";

// Font families list
export const fontFamilies = [...safeFonts, ...googleFonts];

// Default font size units
export const defaultUnits = [
	{ value: "px", label: "PX" },
	{ value: "em", label: "EM" },
	{ value: "rem", label: "REM" },
];

// check if value is a valid font size
const validFontSize = (value) => value !== undefined && value !== "";

// check if value is a valid line height
const validLineHeight = (value) => value !== undefined && value !== "";

// check if value is a valid letter spacing
const validLetterSpacing = (value) => value !== undefined && value !== "";

// add google font family to head tag
const addGoogleFontToHead = (fontFamily) => {
	if (!fontFamily) {
		return;
	}

	const fontFamilyObj = fontFamilies.find(
		(fontObject) => fontFamily === fontObject.family
	);

	if (!fontFamilyObj || fontFamilyObj.is_safe) {
		return;
	}

	const nameAttr = `beer-blocks-google-fonts-css-${kebabCase(fontFamily)}`;
	let link = document.querySelector(`link[name=${nameAttr}]`);

	if (link) {
		return;
	}

	link = document.createElement("link");
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("name", nameAttr);
	link.setAttribute("media", "all");
	link.setAttribute(
		"href",
		`https://fonts.googleapis.com/css?family=${
			fontFamily.replace(/\s+/g, "+") +
			(has(fontFamilyObj, "variants")
				? `:${fontFamilyObj.variants.join(",")}`
				: "")
		}`
	);
	document.head.appendChild(link);
};

// returns font size block's attribute with breakpoints
const fontSizeAttribute = ({
	attrPrefix = "",
	breakpointsBehavior = false,
} = {}) =>
	grid.attributes({
		attrName: camelCase(`${attrPrefix}-font-size`),
		breakpoints: true,
		breakpointsBehavior,
	});

// returns line height block attribute with breakpoints
const lineHeightAttribute = ({
	attrPrefix = "",
	breakpointsBehavior = false,
} = {}) =>
	grid.attributes({
		attrName: camelCase(`${attrPrefix}-line-height`),
		breakpoints: true,
		breakpointsBehavior,
		type: "number",
	});

// returns letter spacing block's attribute with breakpoints
const letterSpacingAttribute = ({
	attrPrefix = "",
	breakpointsBehavior = false,
} = {}) =>
	grid.attributes({
		attrName: camelCase(`${attrPrefix}-letter-spacing`),
		breakpoints: true,
		breakpointsBehavior,
	});

// returns font family block attributes
const fontFamilyAttribute = (attrPrefix = "") => ({
	[camelCase(`${attrPrefix}-font-family`)]: {
		type: "string",
		default: undefined,
	},
});

// returns font weight block attributes
const fontWeightAttribute = (attrPrefix = "") => ({
	[camelCase(`${attrPrefix}-font-weight`)]: {
		type: "number",
		default: undefined,
	},
});

// returns typography block attributes
export const attributes = ({
	attrPrefix = "",
	lineHeightAttr = true,
	letterSpacing = true,
	fontFamilyAttr = true,
	fontWeightAttr = true,
} = {}) => ({
	...fontSizeAttribute({ attrPrefix }),
	...(lineHeightAttr ? lineHeightAttribute({ attrPrefix }) : {}),
	...(letterSpacing ? letterSpacingAttribute({ attrPrefix }) : {}),
	...grid.breakpointsBehaviorAttribute(`${attrPrefix}-font`),
	...(fontFamilyAttr ? fontFamilyAttribute(attrPrefix) : {}),
	...(fontWeightAttr ? fontWeightAttribute(attrPrefix) : {}),
});

// returns controls for font size attribute with breakpoints
const fontSizeControl = ({
	props,
	breakpoint,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = "",
	label = sprintf(
		__("Font size (%s)", "beer-blocks"),
		breakpoint.toUpperCase()
	),
}) => {
	const attrName = camelCase(`${attrPrefix}-font-size`);
	const breakpointsBehaviorAttrName = camelCase(
		`${breakpointsBehaviorAttrPrefix}-breakpoints-behavior`
	);

	const {
		setAttributes,
		attributes: {
			[attrName]: fontSize,
			[breakpointsBehaviorAttrName]: breakpointsBehavior,
		},
	} = props;

	if (breakpointsBehavior[breakpoint] === grid.sameBehavior) {
		return null;
	}

	const change = (newFontSize) =>
		setAttributes({
			[attrName]: {
				...fontSize,
				[breakpoint]: newFontSize,
			},
		});

	const unitChange = (newUnit) => {
		setAttributes({
			[attrName]: {
				...fontSize,
				[breakpoint]: undefined,
			},
		});
	};

	return (
		<UnitControl
			label={label}
			value={fontSize[breakpoint]}
			onChange={change}
			onUnitChange={unitChange}
			units={unitsOnly(["px", "rem", "em"])}
		/>
	);
};

// returns controls for line height attribute with breakpoints
const lineHeightControl = ({
	props,
	breakpoint,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = "",
	label = sprintf(
		__("Line height (%s)", "beer-blocks"),
		breakpoint.toUpperCase()
	),
	minLineHeight = 1,
	maxLineHeight = 5,
}) => {
	const attrName = camelCase(`${attrPrefix}-line-height`);
	const breakpointsBehaviorAttrName = camelCase(
		`${breakpointsBehaviorAttrPrefix}-breakpoints-behavior`
	);

	const {
		setAttributes,
		attributes: {
			[attrName]: lineHeight,
			[breakpointsBehaviorAttrName]: breakpointsBehavior,
		},
	} = props;

	if (breakpointsBehavior[breakpoint] === grid.sameBehavior) {
		return null;
	}

	const change = (newLineHeight) =>
		setAttributes({
			[attrName]: {
				...lineHeight,
				[breakpoint]: newLineHeight,
			},
		});

	return (
		<RangeControl
			label={label}
			value={lineHeight[breakpoint]}
			onChange={change}
			min={minLineHeight}
			max={maxLineHeight}
			step={0.1}
			allowReset
		/>
	);
};

// returns controls for letter spacing attribute with breakpoints
const letterSpacingControl = ({
	props,
	breakpoint,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = "",
	label = sprintf(
		__("Letter spacing (%s)", "beer-blocks"),
		breakpoint.toUpperCase()
	),
}) => {
	const attrName = camelCase(`${attrPrefix}-letter-spacing`);
	const breakpointsBehaviorAttrName = camelCase(
		`${breakpointsBehaviorAttrPrefix}-breakpoints-behavior`
	);

	const {
		setAttributes,
		attributes: {
			[attrName]: letterSpacing,
			[breakpointsBehaviorAttrName]: breakpointsBehavior,
		},
	} = props;

	if (breakpointsBehavior[breakpoint] === grid.sameBehavior) {
		return null;
	}

	const change = (newLetterSpacing) =>
		setAttributes({
			[attrName]: {
				...letterSpacing,
				[breakpoint]: newLetterSpacing,
			},
		});

	const unitChange = (newUnit) => {
		setAttributes({
			[attrName]: {
				...letterSpacing,
				[breakpoint]: undefined,
			},
		});
	};

	return (
		<UnitControl
			label={label}
			value={letterSpacing[breakpoint]}
			onChange={change}
			onUnitChange={unitChange}
			units={unitsOnly(["px", "rem", "em"])}
		/>
	);
};

// returns font family block attributes controls
const fontFamilyControl = (props, attrPrefix = "") => {
	const attrName = camelCase(`${attrPrefix}-font-family`);

	const {
		attributes: { [attrName]: fontFamily },
		setAttributes,
	} = props;

	useEffect(() => {
		addGoogleFontToHead(fontFamily);
	}, []);

	return (
		<>
			<BaseControl
				label={__("Font Families:", "beer-blocks")}
				help={__("Choose a font family.", "beer-blocks")}
			>
				<Select
					options={fontFamilies.map(({ family, variants }) => ({
						value: {
							family,
							variants,
						},
						label: family,
					}))}
					isClearable={true}
					isMulti={false}
					noOptionsMessage={() => __("No font family options", "beer-blocks")}
					placeholder={__("Select...", "beer-blocks")}
					onChange={(selectedOption) => {
						if (selectedOption) {
							addGoogleFontToHead(selectedOption.value.family);

							setAttributes({
								[attrName]: selectedOption.value.family,
							});
						} else {
							setAttributes({ [attrName]: "" });
						}
					}}
					value={
						fontFamily
							? {
									label: fontFamily,
									value: fontFamilies.find(
										(font) => font.family === fontFamily
									),
							  }
							: null
					}
				/>
			</BaseControl>
		</>
	);
};

// returns font weight block controls
const fontWeightControl = (props, attrPrefix = "") => {
	const attrName = camelCase(`${attrPrefix}-font-weight`);

	const {
		setAttributes,
		attributes: { [attrName]: fontWeight },
	} = props;

	return (
		<BaseControl label={__("Font Weight", "beer-blocks")}>
			<RangeControl
				value={fontWeight}
				onChange={(fontWeight) => setAttributes({ [attrName]: fontWeight })}
				min={100}
				max={900}
				step={100}
				allowReset
			/>
		</BaseControl>
	);
};

// returns controls for typography attributes with breakpoints
export const controls = ({
	props,
	initialOpen = false,
	attrPrefix = "",
	panelBody = true,
	title = __("Typography", "beer-blocks"),
	fontSizeControlLabel = (breakpoint) =>
		sprintf(__("Font size (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	lineHeightControlLabel = (breakpoint) =>
		sprintf(__("Line height (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	letterSpacingControlLabel = (breakpoint) =>
		sprintf(__("Letter spacing (%s)", "beer-blocks"), breakpoint.toUpperCase()),
}) => {
	const { attributes } = props;
	const fontSizeAttrName = camelCase(`${attrPrefix}-font-size`);
	const lineHeightAttrName = camelCase(`${attrPrefix}-line-height`);
	const letterSpacingAttrName = camelCase(`${attrPrefix}-letter-spacing`);
	const fontFamilyAttrName = camelCase(`${attrPrefix}-font-family`);
	const fontWeightAttrName = camelCase(`${attrPrefix}-font-weight`);
	const breakpointsBehaviorAttrPrefix = `${attrPrefix}-font`;
	const affectedAttrs = [
		fontSizeAttrName,
		lineHeightAttrName,
		letterSpacingAttrName,
	].filter((attr) => has(attributes, attr));

	if (affectedAttrs.length > 0) {
		const result = (
			<>
				{grid.getBreakpointsTabs((breakpoint) => (
					<>
						{grid.getBreakpointsBehaviorControl({
							props,
							attrPrefix: breakpointsBehaviorAttrPrefix,
							breakpoint,
							affectedAttrs,
						})}

						{has(attributes, fontSizeAttrName) &&
							fontSizeControl({
								props,
								breakpoint,
								attrPrefix,
								breakpointsBehaviorAttrPrefix,
								label: fontSizeControlLabel(breakpoint),
							})}

						{has(attributes, lineHeightAttrName) &&
							lineHeightControl({
								props,
								breakpoint,
								attrPrefix,
								breakpointsBehaviorAttrPrefix,
								label: lineHeightControlLabel(breakpoint),
							})}

						{has(attributes, letterSpacingAttrName) &&
							letterSpacingControl({
								props,
								breakpoint,
								attrPrefix,
								breakpointsBehaviorAttrPrefix,
								label: letterSpacingControlLabel(breakpoint),
							})}
					</>
				))}

				{has(attributes, fontFamilyAttrName) ||
				has(attributes, fontWeightAttrName) ? (
					<Divider />
				) : null}

				{has(attributes, fontFamilyAttrName) &&
					fontFamilyControl(props, attrPrefix)}

				{has(attributes, fontWeightAttrName) &&
					fontWeightControl(props, attrPrefix)}
			</>
		);

		return panelBody ? (
			<PanelBody title={title} initialOpen={initialOpen}>
				{result}
			</PanelBody>
		) : (
			result
		);
	}

	return null;
};

// returns font size css vars for style html attribute
const fontSizeCssVars = (props, blockName, attrPrefix = "") => {
	const attrName = camelCase(`${attrPrefix}-font-size`);
	const {
		attributes: { [attrName]: fontSize = undefined },
	} = props;

	return fontSize
		? Object.fromEntries(
				grid.breakpoints
					.map((breakpoint) => [
						`--wp-beer-blocks-${blockName}-${attrName}-${breakpoint}`,
						fontSize[breakpoint],
					])
					.filter((cssVar) => validFontSize(cssVar[1]))
		  )
		: {};
};

// returns css classes that enable font size rule
const fontSizeCssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	const attrName = camelCase(`${attrPrefix}-font-size`);
	const {
		attributes: { [attrName]: fontSize = undefined },
	} = props;

	const fontSizeClasses = () =>
		grid.breakpoints
			.map((breakpoint) =>
				validFontSize(get(fontSize, breakpoint))
					? `wp-beer-blocks-has-fontSize-${breakpoint}-rule`
					: false
			)
			.filter((cssClass) => cssClass);

	const fontSizeClass = fontSize
		? `${addWhitespaceBefore && " "}${fontSizeClasses().join(" ")}`
		: "";

	return fontSizeClass.trimEnd();
};

// returns font family inline styles
const fontFamilyStyles = (props, attrPrefix = "") => {
	const {
		attributes: { [camelCase(`${attrPrefix}-font-family`)]: fontFamily },
	} = props;

	return fontFamily ? { fontFamily } : {};
};

// returns font weight inline styles
const fontWeightStyles = (props, attrPrefix = "") => {
	const {
		attributes: { [camelCase(`${attrPrefix}-font-weight`)]: fontWeight },
	} = props;

	return fontWeight ? { fontWeight } : {};
};

// returns line height css vars for style html attribute
const lineHeightCssVars = (props, blockName, attrPrefix = "") => {
	const attrName = camelCase(`${attrPrefix}-line-height`);
	const {
		attributes: { [attrName]: lineHeight = undefined },
	} = props;

	return lineHeight
		? Object.fromEntries(
				grid.breakpoints
					.map((breakpoint) => {
						let result = [
							`--wp-beer-blocks-${blockName}-${attrName}-${breakpoint}`,
							!isNaN(lineHeight[breakpoint])
								? lineHeight[breakpoint].toString()
								: lineHeight[breakpoint],
						];

						return result;
					})
					.filter((cssVar) => validLineHeight(cssVar[1]))
		  )
		: {};
};

// returns css classes that enable line height rule
const lineHeightCssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	const attrName = camelCase(`${attrPrefix}-line-height`);
	const {
		attributes: { [attrName]: lineHeight = undefined },
	} = props;

	const lineHeightClasses = () =>
		grid.breakpoints
			.map((breakpoint) =>
				validLineHeight(get(lineHeight, breakpoint))
					? `wp-beer-blocks-has-lineHeight-${breakpoint}-rule`
					: false
			)
			.filter((cssClass) => cssClass);

	const lineHeightClass = lineHeight
		? `${addWhitespaceBefore && " "}${lineHeightClasses().join(" ")}`
		: "";

	return lineHeightClass.trimEnd();
};

// returns letter spacing css vars for style html attribute
const letterSpacingCssVars = (props, blockName, attrPrefix = "") => {
	const attrName = camelCase(`${attrPrefix}-letter-spacing`);
	const {
		attributes: { [attrName]: letterSpacing = undefined },
	} = props;

	return letterSpacing
		? Object.fromEntries(
				grid.breakpoints
					.map((breakpoint) => [
						`--wp-beer-blocks-${blockName}-${attrName}-${breakpoint}`,
						letterSpacing[breakpoint],
					])
					.filter((cssVar) => validLetterSpacing(cssVar[1]))
		  )
		: {};
};

// returns css classes that enable letter spacing rule
const letterSpacingCssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	const attrName = camelCase(`${attrPrefix}-letter-spacing`);
	const {
		attributes: { [attrName]: letterSpacing = undefined },
	} = props;

	const letterSpacingClasses = () =>
		grid.breakpoints
			.map((breakpoint) =>
				validLetterSpacing(get(letterSpacing, breakpoint))
					? `wp-beer-blocks-has-letterSpacing-${breakpoint}-rule`
					: false
			)
			.filter((cssClass) => cssClass);

	const letterSpacingClass = letterSpacing
		? `${addWhitespaceBefore && " "}${letterSpacingClasses().join(" ")}`
		: "";

	return letterSpacingClass.trimEnd();
};

// returns font styles
export const styles = (props, attrPrefix = "") => ({
	...fontFamilyStyles(props, attrPrefix),
	...fontWeightStyles(props, attrPrefix),
});

// returns css vars for all typography attributes
export const cssVars = (props, blockName, attrPrefix = "") => ({
	...fontSizeCssVars(props, blockName, attrPrefix),
	...lineHeightCssVars(props, blockName, attrPrefix),
	...letterSpacingCssVars(props, blockName, attrPrefix),
});

// returns css classes that enable the rules used in this helper
export const cssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	let classes = `${fontSizeCssClasses(props, attrPrefix)}${lineHeightCssClasses(
		props,
		attrPrefix
	)}${letterSpacingCssClasses(props, attrPrefix)}`.trimStart();

	return `${addWhitespaceBefore && " "}${classes}`.trimEnd();
};

export default {
	defaultUnits,
	fontFamilies,
	attributes,
	controls,
	styles,
	cssVars,
	cssClasses,
};
