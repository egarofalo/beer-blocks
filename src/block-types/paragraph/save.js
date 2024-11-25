import { useBlockProps, RichText } from "@wordpress/block-editor";
import typography from "./../../helpers/typography";
import blockAlignment from "./../../helpers/block-alignment";
import textAlignment from "./../../helpers/text-alignment";
import colors from "./../../helpers/colors";
import size from "./../../helpers/size";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

const save = (props) => {
	const {
		attributes: { content },
	} = props;

	const blockProps = useBlockProps.save({
		className: `${blockAlignment.cssClasses(props)}${textAlignment.cssClasses(
			props,
		)}${typography.cssClasses(props)}${colors.cssClasses(
			props,
		)}${size.cssClasses(props)}${spacing.cssClasses(props)}`.trimStart(),
		style: {
			...typography.styles(props),
			...typography.cssVars(props, "paragraph"),
			...colors.cssVars(props, "paragraph"),
			...size.cssVars(props, "paragraph"),
			...spacing.cssVars(props, "paragraph"),
		},
		...htmlAttrs.blockProps(props),
	});

	return <RichText.Content {...blockProps} tagName="p" value={content} />;
};

export default save;
