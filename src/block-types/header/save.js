import { useBlockProps, RichText } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";

const save = (props) => {
	const {
		attributes: { headingLevel, content, textAlign },
	} = props;

	const blockProps = useBlockProps.save({
		className: `has-text-align-${textAlign}`,
		style: {
			...spacing.paddingCssVars({ props, blockName: "header" }),
			...spacing.marginCssVars({ props, blockName: "header" }),
			...typography.fontFamilyStyles(props),
			...typography.fontWeightStyles(props),
			...typography.fontSizeCssVars({ props, blockName: "header" }),
			...typography.lineHeightCssVars({ props, blockName: "header" }),
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
