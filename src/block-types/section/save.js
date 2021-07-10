import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";

const save = (props) => {
	const {
		attributes: { tagName: TagName },
	} = props;

	const blockProps = useBlockProps.save({
		style: {
			...spacing.styles(props.attributes),
		},
	});

	return (
		<TagName {...blockProps}>
			<InnerBlocks.Content />
		</TagName>
	);
};

export default save;
