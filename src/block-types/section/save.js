import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import colors from "./../../helpers/colors";
import spacing from "./../../helpers/spacing";

const save = (props) => {
	const {
		attributes: { tagName: TagName },
	} = props;

	const blockProps = useBlockProps.save({
		style: {
			...colors.backgroundCssVars(props, "section"),
			...spacing.paddingCssVars(props, "section"),
			...spacing.marginCssVars(props, "section"),
		},
	});

	return (
		<TagName {...blockProps}>
			<InnerBlocks.Content />
		</TagName>
	);
};

export default save;
