import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import colors from "./../../helpers/colors";
import spacing from "./../../helpers/spacing";
import grid from "./../../helpers/grid";
import htmlAttrs from "./../../helpers/html-attrs";

const edit = (props) => {
	const blockProps = useBlockProps({
		className: `${spacing.cssClasses(props)}${colors.cssClasses(
			props
		)}`.trimStart(),
		style: {
			...colors.cssVars(props, "advanced-header"),
			...spacing.cssVars(props, "advanced-header"),
		},
		...htmlAttrs.blockProps(props),
	});

	const templates = [
		[
			"beer-blocks/header",
			{
				placeholder: __("Write title here...", "beer-blocks"),
				textAlign: "center",
			},
		],
		[
			"beer-blocks/separator",
			{
				height: grid.breakpointsAttributeValue({ xs: 2 }),
				align: "center",
			},
		],
		[
			"beer-blocks/paragraph",
			{
				placeholder: __("Write subtitle here...", "beer-blocks"),
				textAlign: "center",
			},
		],
	];

	return (
		<>
			<InspectorControls>
				{colors.controls({ props })}
				{spacing.controls({ props })}
				{htmlAttrs.controls({ props })}
			</InspectorControls>

			<div {...blockProps}>
				<InnerBlocks template={templates} templateLock="all" />
			</div>
		</>
	);
};

export default edit;
