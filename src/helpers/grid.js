import { __ } from "@wordpress/i18n";
import {
	TabPanel,
	RadioControl,
	RangeControl,
	SelectControl,
} from "@wordpress/components";

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

export const breakpoints = ["xs", "sm", "md", "lg", "xl"];

export const breakpointsOptions = breakpoints.map((breakpoint) => ({
	name: breakpoint,
	title: breakpoint.toLocaleUpperCase(),
}));

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
	breakpoint = "xs",
}) => {
	const {
		attributes: { [attrName]: justifyContent },
		setAttributes,
	} = props;

	return (
		<SelectControl
			label={sprintf(
				__("Justify content (%s)", "beer-blocks"),
				breakpoint.toUpperCase()
			)}
			value={justifyContent[breakpoint]}
			options={justifyContentOptions}
			onChange={(value) =>
				setAttributes({
					justifyContent: {
						...justifyContent,
						[breakpoint]: value,
					},
				})
			}
			help={__(
				"Select the CSS Flexbox justify-content property value.",
				"beer-blocks"
			)}
		/>
	);
};

export const getJustifyContentClass = (justifyContent) =>
	Object.entries(justifyContent).reduce((classes, [key, value]) => {
		const breakpoint = key !== "xs" ? `-${key}` : "";

		return `${classes} justify-content${breakpoint}-${value}`;
	}, "");

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
	breakpoint = "xs",
}) => {
	const {
		attributes: { [attrName]: alignItems },
		setAttributes,
	} = props;

	return (
		<SelectControl
			label={sprintf(
				__("Align items (%s)", "beer-blocks"),
				breakpoint.toUpperCase()
			)}
			value={alignItems[breakpoint]}
			options={alignItemsOptions}
			onChange={(value) =>
				setAttributes({
					alignItems: {
						...alignItems,
						[breakpoint]: value,
					},
				})
			}
			help={__(
				"Select the CSS Flexbox align-items property value.",
				"beer-blocks"
			)}
		/>
	);
};

export const getAlignItemsClass = (alignItems) =>
	Object.entries(alignItems).reduce((classes, [key, value]) => {
		const breakpoint = key !== "xs" ? `-${key}` : "";

		return `${classes} align-items${breakpoint}-${value}`;
	}, "");

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

export const getColControls = (props, extraContents = (breakpoint) => null) => {
	const {
		attributes: { sizing },
		setAttributes,
	} = props;

	return (
		<TabPanel
			className="beer-blocks-breakpoints-panel"
			activeClass="active-tab"
			initialTabName="xs"
			tabs={breakpointsOptions}
		>
			{(tab) => (
				<>
					<RadioControl
						label={sprintf(
							__("Column sizing type (%s)", "beer-blocks"),
							tab.name.toUpperCase()
						)}
						help={
							<div style={{ marginTop: "5px" }}>
								{sprintf(
									__(
										"Settings applied from %s resolution and up",
										"beer-blocks"
									),
									tab.name.toUpperCase()
								)}
							</div>
						}
						selected={sizing[tab.name].sizingType}
						options={colSizingTypeOptions(tab.name)}
						onChange={(option) => {
							setAttributes({
								sizing: {
									...sizing,
									[tab.name]: {
										...sizing[tab.name],
										sizingType: option,
									},
								},
							});
						}}
					/>

					{sizing[tab.name].sizingType === manualSizing && (
						<RangeControl
							label={sprintf(
								__("Column sizing (%d)", "beer-blocks"),
								sizing[tab.name].size
							)}
							value={sizing[tab.name].size}
							onChange={(width) => {
								setAttributes({
									sizing: {
										...sizing,
										[tab.name]: {
											...sizing[tab.name],
											size: width,
										},
									},
								});
							}}
							min={1}
							max={12}
							step={1}
							style={{ paddingBottom: 0, marginBottom: 0 }}
						/>
					)}

					{extraContents(tab.name)}
				</>
			)}
		</TabPanel>
	);
};

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

export const getRowClass = (justifyContent, alignItems) =>
	`row ${getJustifyContentClass(justifyContent)} ${getAlignItemsClass(
		alignItems
	)}`;

export const getRowControls = (props, extraContents = (breakpoint) => null) => {
	return (
		<TabPanel
			className="beer-blocks-breakpoints-panel"
			activeClass="active-tab"
			initialTabName="xs"
			tabs={[
				{
					name: "xs",
					title: "XS",
					className: "beer-blocks-breakpoint-tab",
				},
				{
					name: "sm",
					title: "SM",
					className: "beer-blocks-breakpoint-tab",
				},
				{
					name: "md",
					title: "MD",
					className: "beer-blocks-breakpoint-tab",
				},
				{
					name: "lg",
					title: "LG",
					className: "beer-blocks-breakpoint-tab",
				},
				{
					name: "xl",
					title: "XL",
					className: "beer-blocks-breakpoint-tab",
				},
			]}
		>
			{(tab) => (
				<>
					{justifyContentControl({ props, breakpoint: tab.name })}
					{alignItemsControl({ props, breakpoint: tab.name })}
					{extraContents(tab.name)}
				</>
			)}
		</TabPanel>
	);
};

export default {
	manualSizing,
	autoSizingEqualWidth,
	autoSizingVariableWidthContent,
	colSizingTypeOptions,
	breakpoints,
	breakpointsOptions,
	justifyContentOptions,
	justifyContentControl,
	getJustifyContentClass,
	alignItemsOptions,
	alignItemsControl,
	getAlignItemsClass,
	getColSizingAttributes,
	getColClass,
	getColControls,
	getJustifyContentAttributes,
	getAlignItemsAttributes,
	getRowClass,
	getRowControls,
};
