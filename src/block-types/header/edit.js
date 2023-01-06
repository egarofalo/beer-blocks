import {
	useBlockProps,
	InspectorControls,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import { ToolbarGroup } from "@wordpress/components";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import colors from "./../../helpers/colors";
import { headingLevelDropdown } from "./../../helpers/heading";

const edit = (props) => {
	const {
		attributes: { headingLevel, content, textAlign, placeholder },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
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
		<>
			<InspectorControls>
				{typography.breakpointsControls({ props, initialOpen: true })}
				{colors.controls({ props })}
				{spacing.breakpointsControls({ props })}
			</InspectorControls>

			<BlockControls>
				<ToolbarGroup>
					<AlignmentToolbar
						value={textAlign}
						onChange={(textAlign) => setAttributes({ textAlign })}
					/>
				</ToolbarGroup>

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
