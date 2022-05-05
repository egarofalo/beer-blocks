import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";

const save = (props) => {
	const blockProps = useBlockProps.save({
		style: {
			...spacing.paddingCssVars({ props, blockName: "info-box" }),
			...spacing.marginCssVars({ props, blockName: "info-box" }),
		},
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
