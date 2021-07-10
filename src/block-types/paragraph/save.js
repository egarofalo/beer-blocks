import { useBlockProps, RichText } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";

const save = (props) => {
	const {
		attributes: { content, textAlign },
	} = props;

	const blockProps = useBlockProps.save({
		className: `has-text-align-${textAlign}`,
		style: {
			...spacing.styles(props.attributes),
			...typography.styles(props.attributes),
		},
	});

	return <RichText.Content {...blockProps} tagName="p" value={content} />;
};

export default save;
