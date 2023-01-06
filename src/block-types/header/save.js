import { useBlockProps, RichText } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import colors from "./../../helpers/colors";

const save = (props) => {
	const {
		attributes: { headingLevel, content, textAlign },
	} = props;

	const blockProps = useBlockProps.save({
		className: `has-text-align-${textAlign}`,
		style: {
			...spacing.paddingCssVars(props, "header"),
			...spacing.marginCssVars(props, "header"),
			...typography.fontFamilyStyles(props),
			...typography.fontWeightStyles(props),
			...typography.fontSizeCssVars(props, "header"),
			...typography.lineHeightCssVars(props, "header"),
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
