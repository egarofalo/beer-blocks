import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "../../helpers/spacing";

const save = (props) => {
	const blockProps = useBlockProps.save({
		className: "jumbotron",
		style: {
			...spacing.paddingCssVars({ props, blockName: "jumbotron" }),
			...spacing.marginCssVars({ props, blockName: "jumbotron" }),
		},
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
