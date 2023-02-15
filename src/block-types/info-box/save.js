import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import colors from "./../../helpers/colors";
import spacing from "./../../helpers/spacing";

const save = (props) => {
	const blockProps = useBlockProps.save({
		style: {
			...colors.cssVars(props, "info-box"),
			...spacing.paddingCssVars(props, "info-box"),
			...spacing.marginCssVars(props, "info-box"),
		},
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
