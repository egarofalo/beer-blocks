import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "../../helpers/spacing";
import colors from "../../helpers/colors";

const save = (props) => {
	const blockProps = useBlockProps.save({
		style: {
			...colors.cssVars(props, "grid"),
			...spacing.paddingCssVars(props, "grid"),
			...spacing.marginCssVars(props, "grid"),
		},
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
