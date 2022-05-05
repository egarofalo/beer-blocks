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
			...spacing.paddingCssVars({ props, blockName: "paragraph" }),
			...spacing.marginCssVars({ props, blockName: "paragraph" }),
			...typography.fontFamilyStyles(props),
			...typography.fontWeightStyles(props),
			...typography.fontSizeCssVars({ props, blockName: "paragraph" }),
			...typography.lineHeightCssVars({ props, blockName: "paragraph" }),
		},
	});

	return <RichText.Content {...blockProps} tagName="p" value={content} />;
};

export default save;
