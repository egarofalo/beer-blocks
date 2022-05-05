import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import spacing, { PaddingVisualizer } from "./../../helpers/spacing";

const edit = (props) => {
	const blockProps = useBlockProps({
		className: "jumbotron",
		style: {
			...spacing.paddingCssVars({ props, blockName: "jumbotron" }),
			...spacing.marginCssVars({ props, blockName: "jumbotron" }),
		},
	});

	return (
		<>
			<InspectorControls>
				{spacing.breakpointsControls({ props })}
			</InspectorControls>

			<PaddingVisualizer blockProps={props}>
				<div {...blockProps}>
					<InnerBlocks />
				</div>
			</PaddingVisualizer>
		</>
	);
};

export default edit;
