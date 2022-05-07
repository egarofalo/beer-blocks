import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";

const save = (props) => {
	const {
		attributes: { tagName: TagName },
	} = props;

	const blockProps = useBlockProps.save({
		style: {
			...spacing.paddingCssVars({ props, blockName: "section" }),
			...spacing.marginCssVars({ props, blockName: "section" }),
		},
	});

	return (
		<TagName {...blockProps}>
			<InnerBlocks.Content />
		</TagName>
	);
};

export default save;
