import {
	useBlockProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import typography from "./../../helpers/typography";
import blockAlignment from "./../../helpers/block-alignment";
import textAlignment from "./../../helpers/text-alignment";
import colors from "./../../helpers/colors";
import size from "./../../helpers/size";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

const edit = (props) => {
	const {
		attributes: { content, placeholder },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
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

	return (
		<>
			<InspectorControls>
				{typography.controls({ props, initialOpen: true })}
				{blockAlignment.controlsWithBreakpoints({ props })}
				{textAlignment.controlsWithBreakpoints({ props })}
				{colors.controls({ props })}
				{size.controls({ props })}
				{spacing.controls({ props })}
				{htmlAttrs.controls({ props })}
			</InspectorControls>

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
