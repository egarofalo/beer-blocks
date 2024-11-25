import {
	useBlockProps,
	InspectorControls,
	RichText,
	BlockControls,
} from "@wordpress/block-editor";
import { ToolbarGroup } from "@wordpress/components";
import typography from "./../../helpers/typography";
import textAlignment from "./../../helpers/text-alignment";
import blockAlignment from "./../../helpers/block-alignment";
import colors from "./../../helpers/colors";
import size from "./../../helpers/size";
import spacing from "./../../helpers/spacing";
import { headingLevelDropdown } from "./../../helpers/heading";
import htmlAttrs from "./../../helpers/html-attrs";

const edit = (props) => {
	const {
		attributes: { headingLevel, content, placeholder },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
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
		<>
			<InspectorControls>
				{typography.controls({ props, initialOpen: true })}
				{textAlignment.controlsWithBreakpoints({ props })}
				{blockAlignment.controlsWithBreakpoints({ props })}
				{colors.controls({ props })}
				{size.controls({ props })}
				{spacing.controls({ props })}
				{htmlAttrs.controls({ props })}
			</InspectorControls>

			<BlockControls>
				<ToolbarGroup>{headingLevelDropdown(props)}</ToolbarGroup>
			</BlockControls>

			<RichText
				{...blockProps}
				placeholder={placeholder}
				tagName={`h${headingLevel}`}
				value={content}
				allowedFormats={["core/bold", "core/italic"]}
				onChange={(newContent) => setAttributes({ content: newContent })}
			/>
		</>
	);
};

export default edit;
