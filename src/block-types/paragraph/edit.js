import {
	useBlockProps,
	InspectorControls,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";

const { visualizer } = spacing;

const edit = (props) => {
	const {
		attributes: { content, textAlign, placeholder },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		className: `has-text-align-${textAlign}`,
		style: {
			...spacing.styles(props.attributes),
			...typography.fontFamilyStyles(props),
			...typography.fontWeightStyles(props),
			...typography.fontSizeCssVars({
				props,
				blockName: "paragraph",
				breakpoints: true,
			}),
			...typography.lineHeightCssVars({
				props,
				blockName: "paragraph",
				breakpoints: true,
			}),
		},
	});

	return (
		<>
			<InspectorControls>
				{typography.breakpointsControls({
					props,
					initialOpen: true,
					breakpoints: true,
				})}
				{spacing.controls({ props })}
			</InspectorControls>

			<BlockControls>
				<AlignmentToolbar
					value={textAlign}
					onChange={(textAlign) => setAttributes({ textAlign })}
				/>
			</BlockControls>

			{visualizer(
				props,
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
			)}
		</>
	);
};

export default edit;
