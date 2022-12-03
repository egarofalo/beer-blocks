import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";

const save = (props) => {
	const {
		attributes: { containerType, tagName: TagName },
	} = props;

	const blockProps = useBlockProps.save({
		className: containerType,
		style: {
			...spacing.paddingCssVars({ props, blockName: "container" }),
			...spacing.marginCssVars({ props, blockName: "container" }),
		},
	});

	return (
		<TagName {...blockProps}>
			<InnerBlocks.Content />
		</TagName>
	);
};

export default save;
