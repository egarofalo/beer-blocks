import { useBlockProps, RichText } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";

const save = (props) => {
	const {
		attributes: { headingLevel, content, textAlign },
	} = props;

	const blockProps = useBlockProps.save({
		style: {
			...spacing.styles(props.attributes),
			...typography.styles(props.attributes),
		},
	});

	return (
		<RichText.Content
			{...blockProps}
			tagName={`h${headingLevel}`}
			value={content}
			className={`has-text-align-${textAlign}`}
		/>
	);
};

export default save;
