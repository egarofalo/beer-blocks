import {
	useBlockProps,
	InspectorControls,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import { ToolbarGroup } from "@wordpress/components";
import spacing, { PaddingVisualizer } from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import { headingLevelDropdown } from "./../../helpers/heading";

const edit = (props) => {
	const {
		attributes: { headingLevel, content, textAlign, placeholder },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
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
		<>
			<InspectorControls>
				{typography.breakpointsControls({ props, initialOpen: true })}
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

			<PaddingVisualizer blockProps={props}>
				<RichText
					{...blockProps}
					placeholder={placeholder}
					tagName={`h${headingLevel}`}
					value={content}
					allowedFormats={["core/bold", "core/italic"]}
					onChange={(newContent) => setAttributes({ content: newContent })}
				/>
			</PaddingVisualizer>
		</>
	);
};

export default edit;
