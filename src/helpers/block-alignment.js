import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	PanelBody,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { camelCase, get, has } from "lodash";
import { BsAlignStart, BsAlignCenter, BsAlignEnd } from "react-icons/bs";
import grid from "./grid";
import { BlockAlignmentToolbar } from "@wordpress/block-editor";

// Block alignment classes
const getClassByAlignValue = (align, breakpoint = undefined) => {
	const breakpointClass =
		breakpoint && breakpoint !== "xs" ? `${breakpoint}-` : "";

	switch (align) {
		case "left":
			return `mr-${breakpointClass}auto ml-${breakpointClass}0`;
		case "right":
			return `ml-${breakpointClass}auto mr-${breakpointClass}0`;
		case "center":
			return `mx-${breakpointClass}auto`;
		default:
			return "";
	}
};

// Block alignment controls
const alignmentControls = [
	{
		align: "left",
		icon: <BsAlignStart />,
		title: __("Align block to left", "beer-blocks"),
	},
	{
		align: "center",
		icon: <BsAlignCenter />,
		title: __("Center block", "beer-blocks"),
	},
	{
		align: "right",
		icon: <BsAlignEnd />,
		title: __("Align block to right", "beer-blocks"),
	},
];

// Returns text align attribute
export const attribute = ({
	attrPrefix = "",
	defaultValue = undefined,
} = {}) => ({
	[camelCase(`${attrPrefix}-block-align`)]: {
		type: "string",
		default: defaultValue,
	},
});

// Returns text align toolbar
export const toolbar = ({
	props,
	attrPrefix = "",
	label = __("Block align", "beer-blocks"),
}) => {
	const attrName = camelCase(`${attrPrefix}-block-align`);

	const {
		setAttributes,
		attributes: { [attrName]: blockAlign },
	} = props;

	return (
		<BlockAlignmentToolbar
			label={label}
			controls={["left", "center", "right"]}
			value={blockAlign}
			onChange={(value) => {
				setAttributes({
					[attrName]: value,
				});
			}}
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
		attributes: { [camelCase(`${attrPrefix}-block-align`)]: blockAlign = "" },
	} = props;

	return `${addWhitespaceBefore ? " " : ""}${getClassByAlignValue(
		blockAlign
	)}`.trimEnd();
};

/**
 * Attributes and controls with breakpoints behavior.
 */

// Returns block align attributes with breakpoints
export const attributesWithBreakpoints = ({
	attrPrefix = "",
	defaultValue = undefined,
	breakpointsBehaviorAttrPrefix = "block-align",
} = {}) => ({
	...grid.attributes({
		attrName: camelCase(`${attrPrefix}-block-align`),
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

// Returns block align attribute control for certain breakpoint
export const blockAlignControlWithBreakpoint = ({
	props,
	breakpoint,
	attrPrefix = "",
	breakpointsBehaviorAttrPrefix = "",
	label = sprintf(
		__("Block align (%s)", "beer-blocks"),
		breakpoint.toUpperCase()
	),
}) => {
	const { setAttributes, attributes } = props;
	const blockAlignAttrName = camelCase(`${attrPrefix}-block-align`);
	const breakpointsBehaviorAttrName = camelCase(
		`${breakpointsBehaviorAttrPrefix}-breakpoints-behavior`
	);

	const {
		[blockAlignAttrName]: blockAlign = undefined,
		[breakpointsBehaviorAttrName]: breakpointsBehavior,
	} = attributes;

	if (breakpointsBehavior[breakpoint] === grid.sameBehavior) {
		return null;
	}

	const onChange = (newBlockAlign) =>
		setAttributes({
			[blockAlignAttrName]: {
				...blockAlign,
				[breakpoint]: newBlockAlign,
			},
		});

	return blockAlign ? (
		<ToggleGroupControl
			label={label}
			value={blockAlign[breakpoint]}
			onChange={onChange}
			isBlock
		>
			{alignmentControls.map((control) => (
				<ToggleGroupControlOption value={control.align} label={control.icon} />
			))}
		</ToggleGroupControl>
	) : null;
};

// Returns controls for block align attribute with breakpoints
export const controlsWithBreakpoints = ({
	props,
	initialOpen = false,
	attrPrefix = "",
	panelBody = true,
	title = __("Block alignment", "beer-blocks"),
	blockAlignControlLabel = (breakpoint) =>
		sprintf(__("Block align (%s)", "beer-blocks"), breakpoint.toUpperCase()),
	beforeControls = (breakpoint) => null,
	afterControls = (breakpoint) => null,
}) => {
	const { attributes } = props;
	const blockAlignAttrName = camelCase(`${attrPrefix}-block-align`);
	const breakpointsBehaviorAttrPrefix = `${attrPrefix}-block-align`;
	const affectedAttrs = [blockAlignAttrName].filter((attr) =>
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

				{blockAlignControlWithBreakpoint({
					props,
					breakpoint,
					attrPrefix,
					breakpointsBehaviorAttrPrefix,
					label: blockAlignControlLabel(breakpoint),
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

// Returns block align css classes for different breakpoints
export const cssClasses = (
	props,
	attrPrefix = "",
	addWhitespaceBefore = true
) => {
	const blockAlignAttrName = camelCase(`${attrPrefix}-block-align`);
	const {
		attributes: { [blockAlignAttrName]: blockAlign = undefined },
	} = props;

	const blockAlignClasses = (
		blockAlign
			? grid.breakpoints.map((breakpoint) =>
					get(blockAlign, breakpoint)
						? getClassByAlignValue(blockAlign[breakpoint], breakpoint)
						: false
			  )
			: []
	).filter((cssClass) => cssClass);

	return `${addWhitespaceBefore && " "}${blockAlignClasses.join(
		" "
	)}`.trimEnd();
};

export default {
	attribute,
	toolbar,
	cssClass,
	attributesWithBreakpoints,
	controlsWithBreakpoints,
	cssClasses,
};
