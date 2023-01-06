import {
	useBlockProps,
	InspectorControls,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import colors from "./../../helpers/colors";

const edit = (props) => {
	const {
		attributes: { content, textAlign, placeholder },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
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

	return (
		<>
			<InspectorControls>
				{typography.breakpointsControls({ props, initialOpen: true })}
				{colors.controls({ props })}
				{spacing.breakpointsControls({ props })}
			</InspectorControls>

			<BlockControls>
				<AlignmentToolbar
					value={textAlign}
					onChange={(textAlign) => setAttributes({ textAlign })}
				/>
			</BlockControls>

			<RichText
				{...blockProps}
				placeholder={placeholder}
				tagName="p"
				value={content}
				allowedFormats={[
					"core/bold",
					"core/italic",
					"core/link",
					"core/code",
					"core/mark",
					"core/strikethrough",
				]}
				onChange={(newContent) => setAttributes({ content: newContent })}
			/>
		</>
	);
};

export default edit;
