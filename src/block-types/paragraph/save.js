import { useBlockProps, RichText } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import colors from "./../../helpers/colors";
import htmlAttrs from "./../../helpers/html-attrs";

const save = (props) => {
	const {
		attributes: { content, textAlign },
	} = props;

	const blockProps = useBlockProps.save({
		className: `has-text-align-${textAlign}${spacing.cssClasses(
			props
		)}${typography.cssClasses(props)}${colors.cssClasses(props)}`,
		style: {
			...spacing.cssVars(props, "paragraph"),
			...typography.styles(props),
			...typography.cssVars(props, "paragraph"),
			...colors.cssVars(props, "paragraph"),
		},
		...htmlAttrs.blockProps(props),
	});

	return <RichText.Content {...blockProps} tagName="p" value={content} />;
};

export default save;
