import { __ } from "@wordpress/i18n";
import {
	TabPanel,
	RadioControl,
	RangeControl,
	SelectControl,
} from "@wordpress/components";
import {
	MdOutlinePhoneAndroid as XsBreakpointIcon,
	MdOutlineTabletAndroid as SmBreakpointIcon,
	MdOutlineTablet as MdBreakpointIcon,
	MdOutlineLaptop as LgBreakpointIcon,
	MdOutlineMonitor as XlBreakpointIcon,
	MdOutlineTv as XxlBreakpointIcon,
} from "react-icons/md";
import { camelCase, isEmpty } from "lodash";

// Bootstrap containers options for select component
export const containerTypesOptions = [
	{ value: "container", label: "Container" },
	{
		value: "container-fluid",
		label: "Container Fluid",
	},
	{
		value: "container-sm",
		label: "Container SM",
	},
	{
		value: "container-md",
		label: "Container MD",
	},
	{
		value: "container-lg",
		label: "Container LG",
	},
	{
		value: "container-xl",
		label: "Container XL",
	},
	{
		value: "container-xxl",
		label: "Container XXL",
	},
];

// columns sizing type
export const autoSizingEqualWidth = "auto-sizing-ew";
export const autoSizingVariableWidthContent = "auto-sizing-vwc";
export const manualSizing = "manual-sizing";

// breakpoints behavior
export const sameBehavior = "same-behavior";
export const differentBehavior = "different-behavior";

// column sizing type options for radio control
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

// Bootstrap grid breakpoints
export const breakpoints = ["xs", "sm", "md", "lg", "xl", "xxl"];

// default value for attributes with breakpoints
export const breakpointsAttributeValue = (defaultValue) =>
	Object.fromEntries(breakpoints.map((key) => [[key], defaultValue]));

// default value for breakpoints behavior attribute
export const breakpointsBehaviorAttributeValue = (defaultValue) =>
	Object.fromEntries(
		breakpoints
			.filter((breakpoint) => breakpoint !== "xs")
			.map((key) => [[key], defaultValue])
	);

// general attributes optionally with breakpoints
export const attributes = ({
	attrName,
	breakpoints,
	breakpointsBehavior,
	defaultValue = undefined,
	type = "string",
}) =>
	breakpoints
		? breakpointsAttribute({
				attrName,
				breakpointsBehaviorAttributes: breakpointsBehavior,
				...(defaultValue !== undefined ? { defaultValue } : {}),
		  })
		: {
				[attrName]: {
					type,
					...(defaultValue !== undefined
						? {
								default: defaultValue,
						  }
						: {}),
				},
		  };

// block attributes with breakpoints
export const breakpointsAttribute = ({
	attrName,
	breakpointsBehaviorAttributes = false,
	defaultValue = "",
}) => ({
	[attrName]: {
		type: "object",
		default: breakpointsAttributeValue(defaultValue),
	},
	...(breakpointsBehaviorAttributes
		? {
				[`${attrName}BreakpointsBehavior`]: {
					type: "object",
					default: {
						sm: sameBehavior,
						md: sameBehavior,
						lg: sameBehavior,
						xl: sameBehavior,
						xxl: sameBehavior,
					},
				},
		  }
		: {}),
});

// breakpoints icons for tabs panel
export const breakpointIcon = (breakpoint) =>
	({
		xs: <XsBreakpointIcon className="beer-blocks-breakpoint-tab-icon" />,
		sm: <SmBreakpointIcon className="beer-blocks-breakpoint-tab-icon" />,
		md: <MdBreakpointIcon className="beer-blocks-breakpoint-tab-icon" />,
		lg: <LgBreakpointIcon className="beer-blocks-breakpoint-tab-icon" />,
		xl: <XlBreakpointIcon className="beer-blocks-breakpoint-tab-icon" />,
		xxl: <XxlBreakpointIcon className="beer-blocks-breakpoint-tab-icon" />,
	}[breakpoint]);

// breakpoints tabs panel options
export const breakpointsOptions = breakpoints.map((breakpoint) => ({
	name: breakpoint,
	title: breakpointIcon(breakpoint),
}));

// justify-content css flexbox options
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

// select control for justify-content css flexbox options
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

// return justify-content bootstrap class
export const getJustifyContentClass = (justifyContent) =>
	Object.entries(justifyContent).reduce((classes, [key, value]) => {
		const breakpoint = key !== "xs" ? `-${key}` : "";

		return `${classes} justify-content${breakpoint}-${value}`;
	}, "");

// return justify-content attributes
export const getJustifyContentAttributes = ({
	xs = "start",
	sm = "start",
	md = "start",
	lg = "start",
	xl = "start",
	xxl = "start",
} = {}) => ({
	xs,
	sm,
	md,
	lg,
	xl,
	xxl,
});

// align-items css flexbox options
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

// select control for align-items css flexbox options
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

// return align-items bootstrap class
export const getAlignItemsClass = (alignItems) =>
	Object.entries(alignItems).reduce((classes, [key, value]) => {
		const breakpoint = key !== "xs" ? `-${key}` : "";

		return `${classes} align-items${breakpoint}-${value}`;
	}, "");

// return align-items attributes
export const getAlignItemsAttributes = ({
	xs = "start",
	sm = "start",
	md = "start",
	lg = "start",
	xl = "start",
	xxl = "start",
} = {}) => ({
	xs,
	sm,
	md,
	lg,
	xl,
	xxl,
});

// return column sizing type attributes for each breakpoint
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
	xxlSizingType = "",
	xxlSize = 12,
}) => ({
	xs: { sizingType: xsSizingType, size: xsSize },
	sm: { sizingType: smSizingType, size: smSize },
	md: { sizingType: mdSizingType, size: mdSize },
	lg: { sizingType: lgSizingType, size: lgSize },
	xl: { sizingType: xlSizingType, size: xlSize },
	xxl: { sizingType: xxlSizingType, size: xxlSize },
});

// return bootstrap column classes
export const getColClass = (sizing) => {
	const getBreakpointColClass = (breakpoint, resolution) => {
		if (breakpoint === undefined) {
			return "";
		}

		if (resolution === "xs") {
			return `col${
				breakpoint["sizingType"] === autoSizingVariableWidthContent
					? "-auto"
					: breakpoint["sizingType"] === manualSizing
					? `-${breakpoint["size"]}`
					: ""
			}`;
		}

		switch (breakpoint["sizingType"]) {
			case autoSizingEqualWidth:
				return `col-${resolution}`;
			case autoSizingVariableWidthContent:
				return `col-${resolution}-auto`;
			case manualSizing:
				return `col-${resolution}-${breakpoint["size"]}`;
			default:
				return "";
		}
	};

	return `${getBreakpointColClass(sizing["xs"], "xs")} ${getBreakpointColClass(
		sizing["sm"],
		"sm"
	)} ${getBreakpointColClass(sizing["md"], "md")} ${getBreakpointColClass(
		sizing["lg"],
		"lg"
	)} ${getBreakpointColClass(sizing["xl"], "xl")} ${getBreakpointColClass(
		sizing["xxl"],
		"xxl"
	)}`;
};

// return bootstrap column controls settings
export const getColControls = (
	props,
	customControls = (breakpoint) => null
) => {
	const {
		attributes: { sizing },
		setAttributes,
	} = props;

	return (
		<TabPanel
			initialTabName="xs"
			tabs={breakpointsOptions}
			className="beer-blocks-tabs"
		>
			{(tab) => (
				<>
					<RadioControl
						label={sprintf(
							__("Column sizing type (%s)", "beer-blocks"),
							tab.name.toUpperCase()
						)}
						help={sprintf(
							__("Settings applied from %s resolution and up", "beer-blocks"),
							tab.name.toUpperCase()
						)}
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
						/>
					)}

					{customControls(tab.name)}
				</>
			)}
		</TabPanel>
	);
};

// return bootstrap row classes
export const getRowClass = (justifyContent, alignItems) =>
	`row ${getJustifyContentClass(justifyContent)} ${getAlignItemsClass(
		alignItems
	)}`;

// return bootstrap row controls settings
export const getRowControls = (
	props,
	customControls = (breakpoint) => null
) => {
	return (
		<TabPanel
			initialTabName="xs"
			tabs={breakpointsOptions}
			className="beer-blocks-tabs-breakpoints"
		>
			{(tab) => (
				<>
					{justifyContentControl({ props, breakpoint: tab.name })}
					{alignItemsControl({ props, breakpoint: tab.name })}
					{customControls(tab.name)}
				</>
			)}
		</TabPanel>
	);
};

// breakpoints behavior attribute only
export const breakpointsBehaviorAttribute = (attrPrefix = "") => ({
	[camelCase(`${attrPrefix}-breakpoints-behavior`)]: {
		type: "object",
		default: {
			sm: sameBehavior,
			md: sameBehavior,
			lg: sameBehavior,
			xl: sameBehavior,
			xxl: sameBehavior,
		},
	},
});

// return previous breakpoint
export const getPreviousBreakpoint = (breakpoint) =>
	({
		xs: "",
		sm: "xs",
		md: "sm",
		lg: "md",
		xl: "lg",
		xxl: "xl",
	}[breakpoint]);

// return next breakpoints
export const getNextBreakpoints = (breakpoint, breakpointsBehavior = {}) => {
	const index = breakpoints.indexOf(breakpoint);

	if (index === -1 || index === breakpoints.length - 1) {
		return [];
	}

	let nextBreakpoints = breakpoints.slice(index + 1);

	if (isEmpty(breakpointsBehavior)) {
		return nextBreakpoints;
	}

	const differentBehaviorIndex = nextBreakpoints.findIndex(
		(breakpoint) => breakpointsBehavior[breakpoint] === differentBehavior
	);

	if (differentBehaviorIndex > -1) {
		nextBreakpoints = nextBreakpoints.slice(0, differentBehaviorIndex);
	}

	return nextBreakpoints;
};

// return breakpoints behavior controls
export const getBreakpointsBehaviorControl = ({
	props,
	attrPrefix,
	breakpoint,
	affectedAttrs = [],
	onChange = undefined,
}) => {
	const attrName = camelCase(`${attrPrefix}-breakpoints-behavior`);
	const {
		setAttributes,
		attributes: { [attrName]: breakpointsBehavior },
	} = props;

	const change =
		typeof onChange === "function"
			? onChange
			: (option) => {
					const prevBreakpoint = getPreviousBreakpoint(breakpoint);
					const nextBreakpoints = getNextBreakpoints(
						breakpoint,
						breakpointsBehavior
					);

					setAttributes({
						[attrName]: {
							...breakpointsBehavior,
							[breakpoint]: option,
						},
						...(affectedAttrs.length > 0 && option === sameBehavior
							? Object.fromEntries(
									affectedAttrs.map((attr) => {
										const affectedAttr = props.attributes[attr];
										const previousValue = affectedAttr[prevBreakpoint];

										return [
											attr,
											{
												...affectedAttr,
												[breakpoint]: previousValue,
												...(nextBreakpoints.length > 0
													? Object.fromEntries(
															nextBreakpoints.map((nextBreakpoint) => [
																nextBreakpoint,
																previousValue,
															])
													  )
													: {}),
											},
										];
									})
							  )
							: {}),
					});
			  };

	return getPreviousBreakpoint(breakpoint) ? (
		<RadioControl
			label={sprintf(
				__("Breakpoint behavior (%s)", "beer-blocks"),
				breakpoint.toUpperCase()
			)}
			selected={breakpointsBehavior[breakpoint]}
			options={[
				{
					label: __("Same as previous breakpoint", "beer-blocks"),
					value: sameBehavior,
				},
				{
					label: __("Set different value", "beer-blocks"),
					value: differentBehavior,
				},
			]}
			onChange={change}
		/>
	) : null;
};

// return tabs panel with custom controls for each breakpoint
export const getBreakpointsTabs = (content) => {
	return (
		<TabPanel
			initialTabName="xs"
			tabs={breakpointsOptions}
			className="beer-blocks-tabs"
		>
			{(tab) => content(tab.name)}
		</TabPanel>
	);
};

export default {
	containerTypesOptions,
	manualSizing,
	autoSizingEqualWidth,
	autoSizingVariableWidthContent,
	sameBehavior,
	differentBehavior,
	colSizingTypeOptions,
	breakpoints,
	breakpointsAttributeValue,
	breakpointsBehaviorAttributeValue,
	attributes,
	breakpointsAttribute,
	breakpointIcon,
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
	breakpointsBehaviorAttribute,
	getPreviousBreakpoint,
	getNextBreakpoints,
	getBreakpointsBehaviorControl,
	getBreakpointsTabs,
};
