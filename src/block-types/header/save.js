import { useBlockProps, RichText } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import colors from "./../../helpers/colors";

const save = (props) => {
	const {
		attributes: { headingLevel, content, textAlign },
	} = props;

	const blockProps = useBlockProps.save({
		className: `has-text-align-${textAlign}${colors.cssClasses(
			props
		)}${spacing.cssClasses(props)}${typography.cssClasses(props)}`,
		style: {
			...spacing.cssVars(props, "header"),
			...typography.styles(props),
			...typography.cssVars(props, "header"),
			...colors.cssVars(props, "header"),
		},
	});

	return (
		<RichText.Content
			{...blockProps}
			tagName={`h${headingLevel}`}
			value={content}
		/>
	);
};

export default save;
