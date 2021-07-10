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

const visualizerAttributes = () => ({
	visualizerValues: {
		type: "object",
		default: {
			top: "",
			right: "",
			bottom: "",
			left: "",
		},
	},
	visualizerShowValues: {
		type: "object",
		default: {
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

	return Object.entries(paddingAttribute).length > 0
		? { padding: { type: "object", default: paddingAttribute } }
		: {};
};

export const paddingControl = (props) => {
	const {
		setAttributes,
		attributes: { padding },
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
			onChange={(nextValues) => setAttributes({ padding: nextValues })}
			onChangeShowVisualizer={(visualizerShowValues) =>
				setAttributes({ visualizerShowValues, visualizerValues: padding })
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

	return Object.entries(marginAttribute).length > 0
		? { margin: { type: "object", default: marginAttribute } }
		: {};
};

export const marginControl = (props) => {
	const {
		setAttributes,
		attributes: { margin },
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
	...(isArray(padding) ? paddingAttribute(padding) : {}),
	...(isArray(margin) ? marginAttribute(margin) : {}),
	...visualizerAttributes(),
});

export const controls = ({ props, initialOpen = false }) => {
	const {
		attributes: { padding, margin },
	} = props;

	return (
		<PanelBody title={__("Spacing", "beer-blocks")} initialOpen={initialOpen}>
			{isObjectLike(padding) ? paddingControl(props) : null}
			{isObjectLike(margin) ? marginControl(props) : null}
		</PanelBody>
	);
};

export const styles = ({ padding, margin }) => ({
	...(isObjectLike(padding) ? paddingStyles(padding) : {}),
	...(isObjectLike(margin) ? marginStyles(margin) : {}),
});

export const visualizer = (props, children) => {
	const {
		attributes: { visualizerValues, visualizerShowValues },
	} = props;

	return (
		<Visualizer showValues={visualizerShowValues} values={visualizerValues}>
			{children}
		</Visualizer>
	);
};

export default {
	visualizerAttributes,
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
