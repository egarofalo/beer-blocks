import { __ } from "@wordpress/i18n";
import { SelectControl, PanelBody, ToggleControl } from "@wordpress/components";
import grid from "./grid";
import { camelCase, has } from "lodash";

// Returns flex-direction flexbox attribute
const flexDirectionAttribute = ({
	attrPrefix = "",
	breakpoints = true,
	defaultValue = "row",
} = {}) =>
	grid.attributes({
		attrName: camelCase(`${attrPrefix}-flex-direction`),
		breakpoints,
		breakpointsBehavior: false,
		defaultValue,
	});

// Returns justify-content flexbox attribute
const justifyContentAttribute = ({
	attrPrefix = "",
	breakpoints = true,
	defaultValue = "",
} = {}) =>
	grid.attributes({
		attrName: camelCase(`${attrPrefix}-justify-content`),
		breakpoints,
		breakpointsBehavior: false,
		defaultValue,
	});

// Returns align-items flexbox attribute
const alignItemsAttribute = ({
	attrPrefix = "",
	breakpoints = true,
	defaultValue = "",
} = {}) =>
	grid.attributes({
		attrName: camelCase(`${attrPrefix}-align-items`),
		breakpoints,
		breakpointsBehavior: false,
		defaultValue,
	});

// Returns flex-direction, justify-content and align-items flexbox attributes
export const attributes = ({
	attrPrefix = "",
	breakpoints = true,
	breakpointsBehaviorAttrPrefix = undefined,
	flexDirectionAttr = true,
	flexDirectionDefaultValue = "row",
	justifyContentAttr = true,
	justifyContentDefaultValue = "",
	alignItemsAttr = true,
	alignItemsDefaultValue = "",
} = {}) => ({
	...(flexDirectionAttr
		? flexDirectionAttribute({
				attrPrefix,
				defaultValue: flexDirectionDefaultValue,
				breakpoints,
		  })
		: {}),
	...(justifyContentAttr
		? justifyContentAttribute({
				attrPrefix,
				defaultValue: justifyContentDefaultValue,
				breakpoints,
		  })
		: {}),
	...(alignItemsAttr
		? alignItemsAttribute({
				attrPrefix,
				defaultValue: alignItemsDefaultValue,
				breakpoints,
		  })
		: {}),
	...(breakpoints
		? grid.breakpointsBehaviorAttribute(
				breakpointsBehaviorAttrPrefix
					? breakpointsBehaviorAttrPrefix
					: `${attrPrefix}-flexbox`
		  )
		: {}),
});

// Returns flex-direction controls
const flexDirectionControls = ({
	props,
	breakpoint,
	breakpointsBehaviorAttrPrefix = undefined,
	attrPrefix = "",
	stackedContentsLabel = __("Stacked contents", "beer-blocks"),
	stackedContentsHelp = __(
		"Enable this toggle field to set the CSS Flexbox flex-direction property value to column or column-reverse.",
		"beer-blocks"
	),
	reverseOrderLabel = __("Reverse order", "beer-blocks"),
	reverseOrderHelp = __(
		"Enable this toggle field to set the CSS Flexbox flex-direction property value to row-reverse or column-reverse.",
		"beer-blocks"
	),
}) => {
	const flexDirectionAttrName = camelCase(`${attrPrefix}-flex-direction`);
	const breakpointsBehaviorAttrName = camelCase(
		`${
			breakpointsBehaviorAttrPrefix
				? breakpointsBehaviorAttrPrefix
				: `${attrPrefix}-flexbox`
		}-breakpoints-behavior`
	);

	const {
		attributes: {
			[flexDirectionAttrName]: flexDirection,
			[breakpointsBehaviorAttrName]: breakpointsBehavior = undefined,
		},
		setAttributes,
	} = props;

	if (
		breakpointsBehavior &&
		breakpointsBehavior[breakpoint] === grid.sameBehavior
	) {
		return null;
	}

	const nextBreakpoints = breakpointsBehavior
		? grid.getNextBreakpoints(breakpoint, breakpointsBehavior)
		: undefined;

	const getStackedContentsValue = (value) =>
		value.startsWith("column")
			? value.replace(/^column/, "row")
			: value.replace(/^row/, "column");

	const getReverseOrderValue = (value) =>
		value.endsWith("-reverse")
			? value.replace(/\-reverse$/, "")
			: `${value}-reverse`;

	const stackedContentsChange = () =>
		setAttributes({
			[flexDirectionAttrName]:
				nextBreakpoints !== undefined
					? {
							...flexDirection,
							[breakpoint]: getStackedContentsValue(flexDirection[breakpoint]),
							...(nextBreakpoints.length > 0
								? Object.fromEntries(
										nextBreakpoints.map((nextBreakpoint) => [
											nextBreakpoint,
											getStackedContentsValue(flexDirection[breakpoint]),
										])
								  )
								: {}),
					  }
					: getStackedContentsValue(flexDirection),
		});

	const reverseOrderChange = () =>
		setAttributes({
			[flexDirectionAttrName]:
				nextBreakpoints !== undefined
					? {
							...flexDirection,
							[breakpoint]: getReverseOrderValue(flexDirection[breakpoint]),
							...(nextBreakpoints.length > 0
								? Object.fromEntries(
										nextBreakpoints.map((nextBreakpoint) => [
											nextBreakpoint,
											getReverseOrderValue(flexDirection[breakpoint]),
										])
								  )
								: {}),
					  }
					: getReverseOrderValue(flexDirection),
		});

	return (
		<>
			<ToggleControl
				label={stackedContentsLabel}
				help={stackedContentsHelp}
				checked={
					breakpointsBehavior !== undefined
						? flexDirection[breakpoint].startsWith("column")
						: flexDirection.startsWith("column")
				}
				onChange={stackedContentsChange}
			/>

			<ToggleControl
				label={reverseOrderLabel}
				help={reverseOrderHelp}
				checked={
					breakpointsBehavior !== undefined
						? flexDirection[breakpoint].endsWith("-reverse")
						: flexDirection.endsWith("-reverse")
				}
				onChange={reverseOrderChange}
			/>
		</>
	);
};

// Returns flex-direction property class
const flexDirectionClasses = ({
	props,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = undefined,
}) => {
	const flexDirectionAttrName = camelCase(`${attrPrefix}-flex-direction`);
	const breakpointsBehaviorAttrName = camelCase(
		`${
			breakpointsBehaviorAttrPrefix
				? breakpointsBehaviorAttrPrefix
				: `${attrPrefix}-flexbox`
		}-breakpoints-behavior`
	);

	const {
		attributes: {
			[flexDirectionAttrName]: flexDirection,
			[breakpointsBehaviorAttrName]: breakpointsBehavior = undefined,
		},
	} = props;

	const classes =
		breakpointsBehavior !== undefined
			? Object.entries(flexDirection).reduce((prevValue, currValue) => {
					const breakpoint = currValue[0];
					const value = currValue[1];

					return value && breakpointsBehavior[breakpoint] !== grid.sameBehavior
						? `${prevValue}flex-${
								breakpoint !== "xs" ? `${breakpoint}-` : ""
						  }${value} `
						: prevValue;
			  }, "")
			: `flex-${flexDirection}`;

	return classes.trim();
};

// justify-content dropdown options
export const justifyContentOptions = [
	{
		value: "",
		label: __("-- SELECT OPTION --", "beer-blocks"),
	},
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

// Returns justify-content control
const justifyContentControl = ({
	props,
	breakpoint,
	breakpointsBehaviorAttrPrefix = undefined,
	attrPrefix = "",
	label = __("Justify content", "beer-blocks"),
	help = __(
		"Select the CSS Flexbox justify-content property value.",
		"beer-blocks"
	),
	controlOptions = justifyContentOptions,
}) => {
	const attrName = camelCase(`${attrPrefix}-justify-content`);
	const breakpointsBehaviorAttrName = camelCase(
		`${
			breakpointsBehaviorAttrPrefix
				? breakpointsBehaviorAttrPrefix
				: `${attrPrefix}-flexbox`
		}-breakpoints-behavior`
	);

	const {
		attributes: {
			[attrName]: justifyContent,
			[breakpointsBehaviorAttrName]: breakpointsBehavior = undefined,
		},
		setAttributes,
	} = props;

	if (
		breakpointsBehavior &&
		breakpointsBehavior[breakpoint] === grid.sameBehavior
	) {
		return null;
	}

	const nextBreakpoints = breakpointsBehavior
		? grid.getNextBreakpoints(breakpoint, breakpointsBehavior)
		: undefined;

	const change = (newJustifyContent) =>
		setAttributes({
			[attrName]:
				nextBreakpoints !== undefined
					? {
							...justifyContent,
							[breakpoint]: newJustifyContent,
							...(nextBreakpoints.length > 0
								? Object.fromEntries(
										nextBreakpoints.map((nextBreakpoint) => [
											nextBreakpoint,
											newJustifyContent,
										])
								  )
								: {}),
					  }
					: newJustifyContent,
		});

	return (
		<SelectControl
			label={label}
			value={
				breakpointsBehavior !== undefined
					? justifyContent[breakpoint]
					: justifyContent
			}
			options={controlOptions}
			onChange={change}
			help={help}
		/>
	);
};

// Returns justify-content property classes
const justifyContentClasses = ({
	props,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = undefined,
}) => {
	const attrName = camelCase(`${attrPrefix}-justify-content`);
	const breakpointsBehaviorAttrName = camelCase(
		`${
			breakpointsBehaviorAttrPrefix
				? breakpointsBehaviorAttrPrefix
				: `${attrPrefix}-flexbox`
		}-breakpoints-behavior`
	);

	const {
		attributes: {
			[attrName]: justifyContent,
			[breakpointsBehaviorAttrName]: breakpointsBehavior = undefined,
		},
	} = props;

	const classes =
		breakpointsBehavior !== undefined
			? Object.entries(justifyContent).reduce((prevValue, currValue) => {
					const breakpoint = currValue[0];
					const value = currValue[1];

					return value && breakpointsBehavior[breakpoint] !== grid.sameBehavior
						? `${prevValue}justify-content-${
								breakpoint !== "xs" ? `${breakpoint}-` : ""
						  }${value} `
						: prevValue;
			  }, "")
			: `justify-content-${justifyContent}`;

	return classes.trim();
};

// align-items dropdown options
export const alignItemsOptions = [
	{
		value: "",
		label: __("-- SELECT OPTION --", "beer-blocks"),
	},
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

// Returns align-items control
const alignItemsControl = ({
	props,
	breakpoint,
	breakpointsBehaviorAttrPrefix = undefined,
	attrPrefix = "",
	label = __("Align items", "beer-blocks"),
	help = __(
		"Select the CSS Flexbox align-items property value.",
		"beer-blocks"
	),
	controlOptions = alignItemsOptions,
}) => {
	const attrName = camelCase(`${attrPrefix}-align-items`);
	const breakpointsBehaviorAttrName = camelCase(
		`${
			breakpointsBehaviorAttrPrefix
				? breakpointsBehaviorAttrPrefix
				: `${attrPrefix}-flexbox`
		}-breakpoints-behavior`
	);

	const {
		attributes: {
			[attrName]: alignItems,
			[breakpointsBehaviorAttrName]: breakpointsBehavior = undefined,
		},
		setAttributes,
	} = props;

	if (
		breakpointsBehavior &&
		breakpointsBehavior[breakpoint] === grid.sameBehavior
	) {
		return null;
	}

	const nextBreakpoints = breakpointsBehavior
		? grid.getNextBreakpoints(breakpoint, breakpointsBehavior)
		: undefined;

	const change = (newAlignItems) =>
		setAttributes({
			[attrName]:
				nextBreakpoints !== undefined
					? {
							...alignItems,
							[breakpoint]: newAlignItems,
							...(nextBreakpoints.length > 0
								? Object.fromEntries(
										nextBreakpoints.map((nextBreakpoint) => [
											nextBreakpoint,
											newAlignItems,
										])
								  )
								: {}),
					  }
					: newAlignItems,
		});

	return (
		<SelectControl
			label={label}
			value={
				breakpointsBehavior !== undefined ? alignItems[breakpoint] : alignItems
			}
			options={controlOptions}
			onChange={change}
			help={help}
		/>
	);
};

// Returns align-items property classes
const alignItemsClasses = ({
	props,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = undefined,
}) => {
	const attrName = camelCase(`${attrPrefix}-align-items`);
	const breakpointsBehaviorAttrName = camelCase(
		`${
			breakpointsBehaviorAttrPrefix
				? breakpointsBehaviorAttrPrefix
				: `${attrPrefix}-flexbox`
		}-breakpoints-behavior`
	);

	const {
		attributes: {
			[attrName]: alignItems,
			[breakpointsBehaviorAttrName]: breakpointsBehavior = undefined,
		},
	} = props;

	const classes =
		breakpointsBehavior !== undefined
			? Object.entries(alignItems).reduce((prevValue, currValue) => {
					const breakpoint = currValue[0];
					const value = currValue[1];

					return value && breakpointsBehavior[breakpoint] !== grid.sameBehavior
						? `${prevValue}align-items-${
								breakpoint !== "xs" ? `${breakpoint}-` : ""
						  }${value} `
						: prevValue;
			  }, "")
			: `align-items-${justifyContent}`;

	return classes.trim();
};

// Returns justify-content and align-items flexbox controls
export const controls = ({
	props,
	breakpoints = true,
	breakpointsBehaviorAttrPrefix = undefined,
	attrPrefix = "",
	panelBody = true,
	title = __("Flexbox styles", "beer-blocks"),
	initialOpen = false,
	justifyContentControlOptions = justifyContentOptions,
	alignItemsControlOption = alignItemsOptions,
}) => {
	const { attributes } = props;
	const flexDirectionAttr = camelCase(`${attrPrefix}-flex-direction`);
	const justifyContentAttr = camelCase(`${attrPrefix}-justify-content`);
	const alignItemsAttr = camelCase(`${attrPrefix}-align-items`);
	const affectedAttrs = [
		flexDirectionAttr,
		justifyContentAttr,
		alignItemsAttr,
	].filter((attr) => has(attributes, attr));

	const getInnerControls = (breakpoint = false) => (
		<>
			{has(attributes, justifyContentAttr) &&
				justifyContentControl({
					props,
					breakpoint,
					breakpointsBehaviorAttrPrefix,
					attrPrefix,
					controlOptions: justifyContentControlOptions,
				})}

			{has(attributes, alignItemsAttr) &&
				alignItemsControl({
					props,
					breakpoint,
					breakpointsBehaviorAttrPrefix,
					attrPrefix,
					controlOptions: alignItemsControlOption,
				})}

			{has(attributes, flexDirectionAttr) &&
				flexDirectionControls({
					props,
					breakpoint,
					breakpointsBehaviorAttrPrefix,
					attrPrefix,
				})}
		</>
	);

	if (
		has(attributes, flexDirectionAttr) ||
		has(attributes, justifyContentAttr) ||
		has(attributes, alignItemsAttr)
	) {
		const innerControls = breakpoints
			? grid.getBreakpointsTabs((breakpoint) => (
					<>
						{grid.getBreakpointsBehaviorControl({
							props,
							attrPrefix: breakpointsBehaviorAttrPrefix
								? breakpointsBehaviorAttrPrefix
								: `${attrPrefix}-flexbox`,
							breakpoint,
							affectedAttrs,
						})}

						{getInnerControls(breakpoint)}
					</>
			  ))
			: getInnerControls();

		return panelBody ? (
			<PanelBody title={title} initialOpen={initialOpen}>
				{innerControls}
			</PanelBody>
		) : (
			innerControls
		);
	}

	return null;
};

// Returns flex-direction, align-items and justify-content properties classes
export const cssClasses = ({
	props,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = undefined,
}) => {
	const flexDirectionAttr = camelCase(`${attrPrefix}-flex-direction`);
	const justifyContentAttr = camelCase(`${attrPrefix}-justify-content`);
	const alignItemsAttr = camelCase(`${attrPrefix}-align-items`);
	const { attributes } = props;

	return `${
		has(attributes, flexDirectionAttr)
			? `${flexDirectionClasses({
					props,
					attrPrefix,
					breakpointsBehaviorAttrPrefix,
			  })} `
			: ""
	}${
		has(attributes, justifyContentAttr)
			? `${justifyContentClasses({
					props,
					attrPrefix,
					breakpointsBehaviorAttrPrefix,
			  })} `
			: ""
	}${
		has(attributes, alignItemsAttr)
			? alignItemsClasses({
					props,
					attrPrefix,
					breakpointsBehaviorAttrPrefix,
			  })
			: ""
	}`.trim();
};

export default {
	attributes,
	controls,
	cssClasses,
	justifyContentOptions,
	alignItemsOptions,
};
