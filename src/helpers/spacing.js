import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { isObjectLike, isArray } from "lodash";

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
	const { setAttributes, attributes } = props;
	const padding = attributes[paddingAttr];
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
	let styles = {};

	if (top) {
		styles["paddingTop"] = top;
	}

	if (right) {
		styles["paddingRight"] = right;
	}

	if (bottom) {
		styles["paddingBottom"] = bottom;
	}

	if (left) {
		styles["paddingLeft"] = left;
	}

	return styles;
};

export const marginAttribute = (
	margin = ["top", "right", "bottom", "left"]
) => {
	const marginAttribute = Object.fromEntries(margin.map((key) => [key, ""]));

	return { type: "object", default: marginAttribute };
};

export const marginControl = ({ props, marginAttr = "margin" }) => {
	const { setAttributes, attributes } = props;
	const margin = attributes[marginAttr];
	const sides = Object.entries(margin).map((side) => side[0]);
	const defaultValues = Object.fromEntries(sides.map((side) => [side, ""]));

	return (
		<BoxControl
			label={__("Margin", "beer-blocks")}
			allowReset={true}
			resetValues={defaultValues}
			units={defaultUnits}
			values={margin}
			onChange={(nextValues) => setAttributes({ margin: nextValues })}
			sides={sides}
		/>
	);
};

export const marginStyles = (margin = {}) => {
	const { top, right, bottom, left } = margin;
	let styles = {};

	if (top) {
		styles["marginTop"] = top;
	}

	if (right) {
		styles["marginRight"] = right;
	}

	if (bottom) {
		styles["marginBottom"] = bottom;
	}

	if (left) {
		styles["marginLeft"] = left;
	}

	return styles;
};

export const attributes = ({
	padding = ["top", "right", "bottom", "left"],
	margin = ["top", "right", "bottom", "left"],
} = {}) => ({
	...(isArray(padding) ? { padding: paddingAttribute(padding) } : {}),
	...(isArray(margin) ? { margin: marginAttribute(margin) } : {}),
	visualizer: visualizerAttribute(),
});

export const controls = ({ props, initialOpen = false }) => {
	const {
		attributes: { padding, margin },
	} = props;

	return (
		<PanelBody title={__("Spacing", "beer-blocks")} initialOpen={initialOpen}>
			{isObjectLike(padding) ? paddingControl({ props }) : null}
			{isObjectLike(margin) ? marginControl({ props }) : null}
		</PanelBody>
	);
};

export const styles = ({ padding, margin }) => ({
	...(isObjectLike(padding) ? paddingStyles(padding) : {}),
	...(isObjectLike(margin) ? marginStyles(margin) : {}),
});

export const visualizer = (props, children, visualizerAttr = "visualizer") => {
	const {
		attributes: {
			[visualizerAttr]: {
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
	controls,
	styles,
	visualizer,
};
