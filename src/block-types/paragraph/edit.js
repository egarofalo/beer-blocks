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
import htmlAttrs from "./../../helpers/html-attrs";

const edit = (props) => {
	const {
		attributes: { content, textAlign, placeholder },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
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

	return (
		<>
			<InspectorControls>
				{typography.controls({ props, initialOpen: true })}
				{colors.controls({ props })}
				{spacing.controls({ props })}
				{htmlAttrs.controls({ props })}
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
