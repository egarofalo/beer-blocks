import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { isObjectLike, isArray, camelCase } from "lodash";

const { __Visualizer: Visualizer } = BoxControl;

const defaultUnits = [
	{ value: "px", label: "PX" },
	{ value: "em", label: "EM" },
	{ value: "rem", label: "REM" },
];

const visualizerAttribute = () => ({
	type: "object",
	default: {
		values: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
		showValues: {
			top: false,
			right: false,
			bottom: false,
			left: false,
		},
	},
});

export const paddingAttribute = (
	padding = ["top", "right", "bottom", "left"]
) => {
	const paddingAttribute = Object.fromEntries(padding.map((key) => [key, ""]));

	return { type: "object", default: paddingAttribute };
};

export const paddingControl = ({
	props,
	paddingAttr = "padding",
	visualizerAttr = "visualizer",
} = {}) => {
	const {
		setAttributes,
		attributes: { [paddingAttr]: padding },
	} = props;

	const sides = Object.entries(padding).map((side) => side[0]);
	const defaultValues = Object.fromEntries(sides.map((side) => [side, ""]));

	return (
		<BoxControl
			label={__("Padding", "beer-blocks")}
			allowReset={true}
			resetValues={defaultValues}
			units={defaultUnits}
			values={padding}
			onChange={(nextValues) => setAttributes({ [paddingAttr]: nextValues })}
			onChangeShowVisualizer={(showValues) =>
				setAttributes({
					[visualizerAttr]: {
						values: padding,
						showValues,
					},
				})
			}
			sides={sides}
		/>
	);
};

export const paddingStyles = (padding = {}) => {
	const { top, right, bottom, left } = padding;

	return {
		...(top ? { paddingTop: top } : {}),
		...(right ? { paddingRight: right } : {}),
		...(bottom ? { paddingBottom: bottom } : {}),
		...(left ? { paddingLeft: left } : {}),
	};
};

export const marginAttribute = (
	margin = ["top", "right", "bottom", "left"]
) => {
	const marginAttribute = Object.fromEntries(margin.map((key) => [key, ""]));

	return { type: "object", default: marginAttribute };
};

export const marginControl = ({ props, marginAttr = "margin" }) => {
	const {
		setAttributes,
		attributes: { [marginAttr]: margin },
	} = props;
	const sides = Object.entries(margin).map((side) => side[0]);
	const defaultValues = Object.fromEntries(sides.map((side) => [side, ""]));

	return (
		<BoxControl
			label={__("Margin", "beer-blocks")}
			allowReset={true}
			resetValues={defaultValues}
			units={defaultUnits}
			values={margin}
			onChange={(nextValues) => setAttributes({ [marginAttr]: nextValues })}
			sides={sides}
		/>
	);
};

export const marginStyles = (margin = {}) => {
	const { top, right, bottom, left } = margin;

	return {
		...(top ? { marginTop: top } : {}),
		...(right ? { marginRight: right } : {}),
		...(bottom ? { marginBottom: bottom } : {}),
		...(left ? { marginLeft: left } : {}),
	};
};

export const attributes = ({
	attrPrefixName = "",
	padding = ["top", "right", "bottom", "left"],
	margin = ["top", "right", "bottom", "left"],
} = {}) => ({
	...(isArray(padding)
		? { [camelCase(`${attrPrefixName}-padding`)]: paddingAttribute(padding) }
		: {}),
	...(isArray(margin)
		? { [camelCase(`${attrPrefixName}-margin`)]: marginAttribute(margin) }
		: {}),
	...(isArray(padding)
		? { [camelCase(`${attrPrefixName}-visualizer`)]: visualizerAttribute() }
		: {}),
});

export const innerControls = (props, attrPrefixName = "") => {
	const paddingAttr = camelCase(`${attrPrefixName}-padding`);
	const visualizerAttr = camelCase(`${attrPrefixName}-visualizer`);
	const marginAttr = camelCase(`${attrPrefixName}-margin`);

	const {
		attributes: { [paddingAttr]: padding, [marginAttr]: margin },
	} = props;

	return (
		<>
			{isObjectLike(padding)
				? paddingControl({ props, paddingAttr, visualizerAttr })
				: null}
			{isObjectLike(margin) ? marginControl({ props, marginAttr }) : null}
		</>
	);
};

export const controls = ({
	props,
	initialOpen = false,
	attrPrefixName = "",
	title = __("Spacing", "beer-blocks"),
}) => {
	return (
		<PanelBody title={title} initialOpen={initialOpen}>
			{innerControls(props, attrPrefixName)}
		</PanelBody>
	);
};

export const styles = (attributes, attrPrefixName = "") => {
	const {
		[camelCase(`${attrPrefixName}-padding`)]: padding,
		[camelCase(`${attrPrefixName}-margin`)]: margin,
	} = attributes;

	return {
		...(isObjectLike(padding) ? paddingStyles(padding) : {}),
		...(isObjectLike(margin) ? marginStyles(margin) : {}),
	};
};

export const visualizer = (props, children, attrPrefixName = "") => {
	const {
		attributes: {
			[camelCase(`${attrPrefixName}-visualizer`)]: {
				values: visualizerValues,
				showValues: visualizerShowValues,
			},
		},
	} = props;

	return (
		<Visualizer showValues={visualizerShowValues} values={visualizerValues}>
			{children}
		</Visualizer>
	);
};

export default {
	visualizerAttribute,
	paddingAttribute,
	paddingControl,
	paddingStyles,
	marginAttribute,
	marginControl,
	marginStyles,
	attributes,
	innerControls,
	controls,
	styles,
	visualizer,
};
