import { __ } from "@wordpress/i18n";

export const autoSizingEqualWidth = "auto-sizing-ew";
export const autoSizingVariableWidthContent = "auto-sizing-vwc";
export const manualSizing = "manual-sizing";

export const colSizingTypeOptions = (resolution) => [
	{
		label: __("Manual sizing", "beer-blocks"),
		value: manualSizing,
	},
	{
		label: __("Auto sizing: equal width", "beer-blocks"),
		value: autoSizingEqualWidth,
	},
	{
		label: __("Auto sizing: variable width content", "beer-blocks"),
		value: autoSizingVariableWidthContent,
	},
	...(resolution !== "xs"
		? [
				{
					label: __("Same as previous breakpoint", "beer-blocks"),
					value: "",
				},
		  ]
		: []),
];

export const breakpointsOptions = [
	{
		name: "xs",
		title: "XS",
	},
	{
		name: "sm",
		title: "SM",
	},
	{
		name: "md",
		title: "MD",
	},
	{
		name: "lg",
		title: "LG",
	},
	{
		name: "xl",
		title: "XL",
	},
];

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

export const getColSizingAttributes = ({
	xsSizingType = manualSizing,
	xsSize = 12,
	smSizingType = "",
	smSize = 12,
	mdSizingType = "",
	mdSize = 12,
	lgSizingType = "",
	lgSize = 12,
	xlSizingType = "",
	xlSize = 12,
}) => ({
	xs: { sizingType: xsSizingType, size: xsSize },
	sm: { sizingType: smSizingType, size: smSize },
	md: { sizingType: mdSizingType, size: mdSize },
	lg: { sizingType: lgSizingType, size: lgSize },
	xl: { sizingType: xlSizingType, size: xlSize },
});

const getBreakpointColClass = (breakpoint, resolution) => {
	if (resolution === "xs") {
		return `col${
			breakpoint.sizingType === autoSizingVariableWidthContent
				? "-auto"
				: breakpoint.sizingType === manualSizing
				? `-${breakpoint.size}`
				: ""
		}`;
	}

	switch (breakpoint.sizingType) {
		case autoSizingEqualWidth:
			return `col-${resolution}`;
		case autoSizingVariableWidthContent:
			return `col-${resolution}-auto`;
		case manualSizing:
			return `col-${resolution}-${breakpoint.size}`;
		default:
			return "";
	}
};

export const getColClass = (sizing) =>
	`${getBreakpointColClass(sizing.xs, "xs")} ${getBreakpointColClass(
		sizing.sm,
		"sm"
	)} ${getBreakpointColClass(sizing.md, "md")} ${getBreakpointColClass(
		sizing.lg,
		"lg"
	)} ${getBreakpointColClass(sizing.xl, "xl")}`;

export const getJustifyContentAttributes = ({
	xs = "start",
	sm = "start",
	md = "start",
	lg = "start",
	xl = "start",
} = {}) => ({
	xs,
	sm,
	md,
	lg,
	xl,
});

export const getAlignItemsAttributes = ({
	xs = "start",
	sm = "start",
	md = "start",
	lg = "start",
	xl = "start",
} = {}) => ({
	xs,
	sm,
	md,
	lg,
	xl,
});

const getBreakpointRowClass = (breakpoint, resolution) =>
	`justify-content${resolution !== "xs" ? `-${resolution}` : ""}-${
		breakpoint.justifyContent
	} align-items${resolution !== "xs" ? `-${resolution}` : ""}-${
		breakpoint.alignItems
	}`;

export const getRowClass = (justifyContent, alignItems) =>
	`row ${getBreakpointRowClass(
		{ justifyContent: justifyContent.xs, alignItems: alignItems.xs },
		"xs"
	)} ${getBreakpointRowClass(
		{ justifyContent: justifyContent.sm, alignItems: alignItems.sm },
		"sm"
	)} ${getBreakpointRowClass(
		{ justifyContent: justifyContent.md, alignItems: alignItems.md },
		"md"
	)} ${getBreakpointRowClass(
		{ justifyContent: justifyContent.lg, alignItems: alignItems.lg },
		"lg"
	)} ${getBreakpointRowClass(
		{ justifyContent: justifyContent.xl, alignItems: alignItems.xl },
		"xl"
	)}`;

export default {
	manualSizing,
	autoSizingEqualWidth,
	autoSizingVariableWidthContent,
	colSizingTypeOptions,
	breakpointsOptions,
	justifyContentOptions,
	alignItemsOptions,
	getColSizingAttributes,
	getColClass,
	getJustifyContentAttributes,
	getAlignItemsAttributes,
	getRowClass,
};
