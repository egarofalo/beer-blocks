import { AlignmentToolbar } from "@wordpress/block-editor";
import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	PanelBody,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { camelCase, get, has } from "lodash";
import {
	MdFormatAlignLeft,
	MdFormatAlignCenter,
	MdFormatAlignRight,
	MdFormatAlignJustify,
} from "react-icons/md";
import grid from "./grid";

const alignmentControls = [
	{
		align: "left",
		icon: <MdFormatAlignLeft />,
		title: __("Align text to left", "beer-blocks"),
	},
	{
		align: "center",
		icon: <MdFormatAlignCenter />,
		title: __("Align text to center", "beer-blocks"),
	},
	{
		align: "right",
		icon: <MdFormatAlignRight />,
		title: __("Align text to right", "beer-blocks"),
	},
	{
		align: "justify",
		icon: <MdFormatAlignJustify />,
		title: __("Justify text", "beer-blocks"),
	},
];

// Returns text align attribute
export const attribute = ({ attrPrefix = "", defaultValue = "left" } = {}) => ({
	[camelCase(`${attrPrefix}-text-align`)]: {
		type: "string",
		default: defaultValue,
	},
});

// Returns text align toolbar
export const toolbar = ({
	props,
	attrPrefix = "",
	label = __("Text align", "beer-blocks"),
	controls = alignmentControls,
	excludeControls = [],
}) => {
	const attrName = camelCase(`${attrPrefix}-text-align`);

	const {
		setAttributes,
		attributes: { [attrName]: textAlign },
	} = props;

	return (
		<AlignmentToolbar
			label={label}
			alignmentControls={controls.filter(
				(control) => !excludeControls.includes(control.align)
			)}
			value={textAlign}
			onChange={(value) =>
				setAttributes({
					[attrName]: value,
				})
			}
		/>
	);
};

// Returns text align css class
export const cssClass = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	const {
		attributes: { [camelCase(`${attrPrefix}-text-align`)]: textAlign = "" },
	} = props;

	return `${addWhitespaceBefore ? " " : ""}${
		textAlign ? `text-${textAlign}` : ""
	}`.trimEnd();
};

/**
 * Attributes and controls with breakpoints behavior.
 */

// Returns text align attributes with breakpoints
export const attributesWithBreakpoints = ({
	attrPrefix = "",
	defaultValue = undefined,
	breakpointsBehaviorAttrPrefix = "text-align",
} = {}) => ({
	...grid.attributes({
		attrName: camelCase(`${attrPrefix}-text-align`),
		breakpoints: true,
		breakpointsBehavior: false,
		defaultValue,
	}),
	...(breakpointsBehaviorAttrPrefix
		? grid.breakpointsBehaviorAttribute(
				`${attrPrefix}-${breakpointsBehaviorAttrPrefix}`
		  )
		: {}),
});

// Returns text-align attribute control for certain breakpoint
const textAlignControlWithBreakpoint = ({
	props,
	breakpoint,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = "",
	label = sprintf(
		__("Text align (%s)", "beer-blocks"),
		breakpoint.toUpperCase()
	),
	controls = alignmentControls,
	excludeControls = [],
}) => {
	const { setAttributes, attributes } = props;
	const textAlignAttrName = camelCase(`${attrPrefix}-text-align`);
	const breakpointsBehaviorAttrName = camelCase(
		`${breakpointsBehaviorAttrPrefix}-breakpoints-behavior`
	);

	const {
		[textAlignAttrName]: textAlign = undefined,
		[breakpointsBehaviorAttrName]: breakpointsBehavior,
	} = attributes;

	if (breakpointsBehavior[breakpoint] === grid.sameBehavior) {
		return null;
	}

	const onChange = (newTextAlign) =>
		setAttributes({
			[textAlignAttrName]: {
				...textAlign,
				[breakpoint]: newTextAlign,
			},
		});

	return textAlign ? (
		<ToggleGroupControl
			label={label}
			value={textAlign[breakpoint]}
			onChange={onChange}
			isBlock
		>
			{controls
				.filter((control) => !excludeControls.includes(control.align))
				.map((control) => (
					<ToggleGroupControlOption
						value={control.align}
						label={control.icon}
					/>
				))}
		</ToggleGroupControl>
	) : null;
};

// Returns controls for text-align attribute with breakpoints
export const controlsWithBreakpoints = ({
	props,
	initialOpen = false,
	attrPrefix = "",
	panelBody = true,
	title = __("Text alignment", "beer-blocks"),
	textAlignControlLabel = (breakpoint) =>
		sprintf(__("Text align (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	textAlignControls = alignmentControls,
	excludeTextAlignControls = [],
	beforeControls = (breakpoint) => null,
	afterControls = (breakpoint) => null,
}) => {
	const { attributes } = props;
	const textAlignAttrName = camelCase(`${attrPrefix}-text-align`);
	const breakpointsBehaviorAttrPrefix = `${attrPrefix}-text-align`;
	const affectedAttrs = [textAlignAttrName].filter((attr) =>
		has(attributes, attr)
	);

	if (affectedAttrs.length > 0) {
		const breakpointsTabs = grid.getBreakpointsTabs((breakpoint) => (
			<>
				{grid.getBreakpointsBehaviorControl({
					props,
					attrPrefix: breakpointsBehaviorAttrPrefix,
					breakpoint,
					affectedAttrs,
				})}

				{beforeControls(breakpoint)}

				{textAlignControlWithBreakpoint({
					props,
					breakpoint,
					attrPrefix,
					breakpointsBehaviorAttrPrefix,
					label: textAlignControlLabel(breakpoint),
					controls: textAlignControls,
					excludeControls: excludeTextAlignControls,
				})}

				{afterControls(breakpoint)}
			</>
		));

		return panelBody ? (
			<PanelBody title={title} initialOpen={initialOpen}>
				{breakpointsTabs}
			</PanelBody>
		) : (
			breakpointsTabs
		);
	}

	return null;
};

// Returns text align css classes for different breakpoints
export const cssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	const textAlignAttrName = camelCase(`${attrPrefix}-text-align`);
	const {
		attributes: { [textAlignAttrName]: textAlign = undefined },
	} = props;

	const textAlignClasses = (
		textAlign
			? grid.breakpoints.map((breakpoint) =>
					get(textAlign, breakpoint)
						? `text-${breakpoint === "xs" ? "" : `${breakpoint}-`}${
								textAlign[breakpoint]
						  }`
						: false
			  )
			: []
	).filter((cssClass) => cssClass);

	const textAlignClass =
		textAlignClasses.length > 0
			? `${addWhitespaceBefore && " "}${textAlignClasses.join(" ")}`
			: "";

	return textAlignClass.trimEnd();
};

export default {
	attribute,
	toolbar,
	cssClass,
	attributesWithBreakpoints,
	controlsWithBreakpoints,
	cssClasses,
};
