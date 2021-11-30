import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import innerBorder from "./../../helpers/inner-border";

const save = (props) => {
	const {
		attributes: { containerType, tagName: TagName },
	} = props;

	const blockProps = useBlockProps.save({
		className: containerType,
		style: {
			...spacing.styles(props.attributes),
		},
	});

	return (
		<TagName {...blockProps}>
			{innerBorder.borderTopHtml(props.attributes)}
			<InnerBlocks.Content />
			{innerBorder.borderBottomHtml(props.attributes)}
		</TagName>
	);
};

export default save;
