import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import spacing, { PaddingVisualizer } from "./../../helpers/spacing";
import grid from "./../../helpers/grid";

const edit = (props) => {
	const blockProps = useBlockProps({
		style: {
			...spacing.paddingCssVars({ props, blockName: "advanced-header" }),
			...spacing.marginCssVars({ props, blockName: "advanced-header" }),
		},
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
				height: grid.breakpointsAttributeValue(2),
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
				{spacing.breakpointsControls({ props })}
			</InspectorControls>

			<PaddingVisualizer blockProps={props}>
				<div {...blockProps}>
					<InnerBlocks template={templates} templateLock="all" />
				</div>
			</PaddingVisualizer>
		</>
	);
};

export default edit;
