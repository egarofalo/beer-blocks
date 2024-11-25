import { useBlockProps, RichText } from "@wordpress/block-editor";
import typography from "./../../helpers/typography";
import textAlignment from "./../../helpers/text-alignment";
import blockAlignment from "./../../helpers/block-alignment";
import colors from "./../../helpers/colors";
import size from "./../../helpers/size";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

const save = (props) => {
	const {
		attributes: { headingLevel, content },
	} = props;

	const blockProps = useBlockProps.save({
		className: `${textAlignment.cssClasses(props)}${blockAlignment.cssClasses(
			props,
		)}${colors.cssClasses(props)}${typography.cssClasses(
			props,
		)}${size.cssClasses(props)}${spacing.cssClasses(props)}`.trimStart(),
		style: {
			...typography.styles(props),
			...typography.cssVars(props, "header"),
			...colors.cssVars(props, "header"),
			...size.cssVars(props, "header"),
			...spacing.cssVars(props, "header"),
		},
		...htmlAttrs.blockProps(props),
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
