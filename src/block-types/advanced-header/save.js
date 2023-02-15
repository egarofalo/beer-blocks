import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import colors from "./../../helpers/colors";
import spacing from "./../../helpers/spacing";

const save = (props) => {
	const blockProps = useBlockProps.save({
		style: {
			...colors.backgroundCssVars(props, "advanced-header"),
			...spacing.paddingCssVars(props, "advanced-header"),
			...spacing.marginCssVars(props, "advanced-header"),
		},
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
