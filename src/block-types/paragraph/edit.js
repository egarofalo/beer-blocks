import {
	useBlockProps,
	InspectorControls,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";

const { PaddingVisualizer } = spacing;

const edit = (props) => {
	const {
		attributes: { content, textAlign, placeholder },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
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

	return (
		<>
			<InspectorControls>
				{typography.breakpointsControls({ props, initialOpen: true })}
				{spacing.breakpointsControls({ props })}
			</InspectorControls>

			<BlockControls>
				<AlignmentToolbar
					value={textAlign}
					onChange={(textAlign) => setAttributes({ textAlign })}
				/>
			</BlockControls>

			<PaddingVisualizer blockProps={props}>
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
			</PaddingVisualizer>
		</>
	);
};

export default edit;
