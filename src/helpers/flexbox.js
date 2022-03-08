import { __ } from "@wordpress/i18n";
import { SelectControl } from "@wordpress/components";

export const justifyContentOptions = [
	{
		value: "start",
		label: __("Start", "beer-blocks"),
	},
	{
		value: "end",
		label: __("End", "beer-blocks"),
	},
	{
		value: "center",
		label: __("Center", "beer-blocks"),
	},
	{
		value: "between",
		label: __("Space Between", "beer-blocks"),
	},
	{
		value: "around",
		label: __("Space Around", "beer-blocks"),
	},
];

export const justifyContentControl = ({
	props,
	attrName = "justifyContent",
	label = __("Justify content", "beer-blocks"),
	help = __(
		"Select the CSS Flexbox justify-content property value.",
		"beer-blocks"
	),
}) => {
	const {
		attributes: { [attrName]: justifyContent },
		setAttributes,
	} = props;

	return (
		<SelectControl
			label={label}
			value={justifyContent}
			options={justifyContentOptions}
			onChange={(value) => setAttributes({ [attrName]: value })}
			help={help}
		/>
	);
};

export const justifyContentClass = ({
	justifyContent,
	prefix = "",
	suffix = "",
}) =>
	`${prefix ? `${prefix} ` : ""}${
		justifyContent ? `justify-content-${justifyContent}` : ""
	}${suffix ? ` ${suffix}` : ""}`;

export const alignItemsOptions = [
	{
		value: "start",
		label: __("Start", "beer-blocks"),
	},
	{
		value: "end",
		label: __("End", "beer-blocks"),
	},
	{
		value: "center",
		label: __("Center", "beer-blocks"),
	},
	{
		value: "baseline",
		label: __("Baseline", "beer-blocks"),
	},
	{
		value: "stretch",
		label: __("Stretch", "beer-blocks"),
	},
];

export const alignItemsControl = ({
	props,
	attrName = "alignItems",
	label = __("Align items (%s)", "beer-blocks"),
	help = __(
		"Select the CSS Flexbox align-items property value.",
		"beer-blocks"
	),
}) => {
	const {
		attributes: { [attrName]: alignItems },
		setAttributes,
	} = props;

	return (
		<SelectControl
			label={label}
			value={alignItems}
			options={alignItemsOptions}
			onChange={(value) => setAttributes({ [attrName]: value })}
			help={help}
		/>
	);
};

export const alignItemsClass = ({ alignItems, prefix = "", suffix = "" }) =>
	`${prefix ? `${prefix} ` : ""}${
		alignItems ? `align-items-${alignItems}` : ""
	}${suffix ? `${suffix} ` : ""}`;

export default {
	justifyContentOptions,
	justifyContentControl,
	justifyContentClass,
	alignItemsOptions,
	alignItemsControl,
	alignItemsClass,
};
