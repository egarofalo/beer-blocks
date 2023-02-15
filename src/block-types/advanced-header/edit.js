import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import colors from "./../../helpers/colors";
import spacing from "./../../helpers/spacing";
import grid from "./../../helpers/grid";

const edit = (props) => {
	const blockProps = useBlockProps({
		style: {
			...colors.backgroundCssVars(props, "advanced-header"),
			...spacing.paddingCssVars(props, "advanced-header"),
			...spacing.marginCssVars(props, "advanced-header"),
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
				{colors.controls({ props })}
				{spacing.breakpointsControls({ props })}
			</InspectorControls>

			<div {...blockProps}>
				<InnerBlocks template={templates} templateLock="all" />
			</div>
		</>
	);
};

export default edit;
