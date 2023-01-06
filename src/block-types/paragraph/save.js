import { useBlockProps, RichText } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import colors from "./../../helpers/colors";

const save = (props) => {
	const {
		attributes: { content, textAlign },
	} = props;

	const blockProps = useBlockProps.save({
		className: `has-text-align-${textAlign}`,
		style: {
			...spacing.paddingCssVars(props, "paragraph"),
			...spacing.marginCssVars(props, "paragraph"),
			...typography.fontFamilyStyles(props),
			...typography.fontWeightStyles(props),
			...typography.fontSizeCssVars(props, "paragraph"),
			...typography.lineHeightCssVars(props, "paragraph"),
			...colors.cssVars(props, "paragraph"),
		},
	});

	return <RichText.Content {...blockProps} tagName="p" value={content} />;
};

export default save;
