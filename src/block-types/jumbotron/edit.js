import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";

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

			<div {...blockProps}>
				<InnerBlocks />
			</div>
		</>
	);
};

export default edit;
