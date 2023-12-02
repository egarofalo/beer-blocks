import { __, sprintf } from "@wordpress/i18n";
import { TabPanel, RadioControl, RangeControl } from "@wordpress/components";
import {
	MdOutlinePhoneAndroid as XsBreakpointIcon,
	MdOutlineTabletAndroid as SmBreakpointIcon,
	MdOutlineTablet as MdBreakpointIcon,
	MdOutlineLaptop as LgBreakpointIcon,
	MdOutlineMonitor as XlBreakpointIcon,
	MdOutlineTv as XxlBreakpointIcon,
} from "react-icons/md";
import { camelCase, has, isEmpty, isPlainObject } from "lodash";

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
export const breakpointsAttributeValue = (defaultValue) => {
	if (
		isPlainObject(defaultValue) &&
		breakpoints
			.map((breakpoint) => has(defaultValue, breakpoint))
			.includes(true)
	) {
		return Object.fromEntries(
			Object.entries(defaultValue).filter((value) =>
				breakpoints.includes(value[0])
			)
		);
	}

	return Object.fromEntries(breakpoints.map((key) => [[key], defaultValue]));
};

// default value for breakpoints behavior attribute
export const breakpointsBehaviorAttributeValue = (defaultValue) =>
	Object.fromEntries(
		breakpoints
			.filter((breakpoint) => breakpoint !== "xs")
			.map((key) => [[key], defaultValue])
	);

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

// block attributes with breakpoints
export const breakpointsAttribute = ({
	attrName,
	breakpointsBehaviorAttributes = false,
	defaultValue = undefined,
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

// return column sizing type attributes for each breakpoint
export const getColSizingAttribute = ({
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = undefined,
	defaultSizingType = autoSizingEqualWidth,
	defaultSize = 12,
} = {}) => ({
	...attributes({
		attrName: camelCase(`${attrPrefix}-col-sizing`),
		breakpoints: true,
		breakpointsBehavior: false,
		defaultValue: { sizingType: defaultSizingType, size: defaultSize },
	}),
	...breakpointsBehaviorAttribute(
		breakpointsBehaviorAttrPrefix
			? breakpointsBehaviorAttrPrefix
			: `${attrPrefix}-col-sizing`
	),
});

// return bootstrap column sizing classes
export const getColSizingClasses = ({
	props,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = undefined,
}) => {
	const colSizingAttrName = camelCase(`${attrPrefix}-col-sizing`);
	const breakpointsBehaviorAttrName = camelCase(
		`${
			breakpointsBehaviorAttrPrefix
				? breakpointsBehaviorAttrPrefix
				: `${attrPrefix}-col-sizing`
		}-breakpoints-behavior`
	);

	const {
		attributes: {
			[colSizingAttrName]: colSizing,
			[breakpointsBehaviorAttrName]: breakpointsBehavior,
		},
	} = props;

	const getBreakpointColClass = (value, breakpoint) => {
		if (breakpoint === "xs") {
			return `col${
				value["sizingType"] === autoSizingVariableWidthContent
					? "-auto"
					: value["sizingType"] === manualSizing
					? `-${value["size"]}`
					: ""
			}`;
		}

		switch (value["sizingType"]) {
			case autoSizingEqualWidth:
				return `col-${breakpoint}`;
			case autoSizingVariableWidthContent:
				return `col-${breakpoint}-auto`;
			case manualSizing:
				return `col-${breakpoint}-${value["size"]}`;
			default:
				return "";
		}
	};

	const classes = Object.entries(colSizing).reduce((prevValue, currValue) => {
		const breakpoint = currValue[0];
		const value = currValue[1];

		return breakpointsBehavior[breakpoint] !== sameBehavior
			? `${prevValue + getBreakpointColClass(value, breakpoint)} `
			: prevValue;
	}, "");

	return classes.trim();
};

// return bootstrap column sizing controls settings
export const getColSizingControls = ({
	props,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = undefined,
}) => {
	const attrName = camelCase(`${attrPrefix}-col-sizing`);
	const breakpointsBehaviorAttrName = camelCase(
		`${
			breakpointsBehaviorAttrPrefix
				? breakpointsBehaviorAttrPrefix
				: `${attrPrefix}-col-sizing`
		}-breakpoints-behavior`
	);
	const affectedAttrs = [attrName];

	const {
		attributes: {
			[attrName]: colSizing,
			[breakpointsBehaviorAttrName]: breakpointsBehavior,
		},
		setAttributes,
	} = props;

	const getInnerControl = (breakpoint) => {
		if (breakpointsBehavior[breakpoint] === sameBehavior) {
			return null;
		}

		const nextBreakpoints = getNextBreakpoints(breakpoint, breakpointsBehavior);

		const changeColumnSizingType = (option) => {
			const newColSizingType = {
				...colSizing[breakpoint],
				sizingType: option,
			};

			setAttributes({
				[attrName]: {
					...colSizing,
					[breakpoint]: newColSizingType,
					...(nextBreakpoints.length > 0
						? Object.fromEntries(
								nextBreakpoints.map((nextBreakpoint) => [
									nextBreakpoint,
									newColSizingType,
								])
						  )
						: {}),
				},
			});
		};

		const changeColumnSizing = (width) => {
			const newColSizing = {
				...colSizing[breakpoint],
				size: width,
			};

			setAttributes({
				[attrName]: {
					...colSizing,
					[breakpoint]: newColSizing,
					...(nextBreakpoints.length > 0
						? Object.fromEntries(
								nextBreakpoints.map((nextBreakpoint) => [
									nextBreakpoint,
									newColSizing,
								])
						  )
						: {}),
				},
			});
		};

		return (
			<>
				<RadioControl
					label={sprintf(
						__("Column sizing type (%s)", "beer-blocks"),
						breakpoint.toUpperCase()
					)}
					help={sprintf(
						__("Settings applied from %s resolution and up", "beer-blocks"),
						breakpoint.toUpperCase()
					)}
					selected={colSizing[breakpoint].sizingType}
					options={colSizingTypeOptions(breakpoint)}
					onChange={changeColumnSizingType}
				/>

				{colSizing[breakpoint].sizingType === manualSizing && (
					<RangeControl
						label={sprintf(
							__("Column sizing (%d)", "beer-blocks"),
							colSizing[breakpoint].size
						)}
						value={colSizing[breakpoint].size}
						onChange={changeColumnSizing}
						min={1}
						max={12}
						step={1}
					/>
				)}
			</>
		);
	};

	return getBreakpointsTabs((breakpoint) => (
		<>
			{getBreakpointsBehaviorControl({
				props,
				attrPrefix: `${attrPrefix}-col-sizing`,
				breakpoint,
				affectedAttrs,
			})}

			{getInnerControl(breakpoint)}
		</>
	));
};

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
	getColSizingAttribute,
	getColSizingClasses,
	getColSizingControls,
	breakpointsBehaviorAttribute,
	getPreviousBreakpoint,
	getNextBreakpoints,
	getBreakpointsBehaviorControl,
	getBreakpointsTabs,
};
