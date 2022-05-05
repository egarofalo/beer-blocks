import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "../../helpers/spacing";

const save = (props) => {
	const blockProps = useBlockProps.save({
		style: {
			...spacing.paddingCssVars({ props, blockName: "grid" }),
			...spacing.marginCssVars({ props, blockName: "grid" }),
		},
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
