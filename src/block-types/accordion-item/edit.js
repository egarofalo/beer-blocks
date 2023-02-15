import { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
	BlockControls,
	AlignmentToolbar,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
} from "@wordpress/block-editor";
import {
	ToolbarGroup,
	PanelBody,
	BaseControl,
	ToggleControl,
	CardDivider,
} from "@wordpress/components";
import { headingLevelDropdown } from "./../../helpers/heading";
import spacing from "./../../helpers/spacing";
import typography from "../../helpers/typography";
import border from "../../helpers/border";
import colors from "../../helpers/colors";

const edit = (props) => {
	const {
		clientId,
		setAttributes,
		attributes: {
			id,
			headingId,
			parentId,
			show,
			headingLevel,
			headingTextAlign,
			headingContent,
		},
		context: { accordionId },
	} = props;

	useEffect(() => {
		setAttributes({
			id: `collapse-${clientId}`,
			headingId: `heading-${clientId}`,
			parentId: `accordion-${accordionId}`,
		});
	}, [clientId, accordionId]);

	const blockProps = useBlockProps({
		className: "card",
		style: {
			...spacing.paddingCssVars(props, "accordion-item"),
			...spacing.marginCssVars(props, "accordion-item"),
			...colors.backgroundCssVars(props, "accordion-item"),
			...border.cssVars(props, "accordion-item"),
		},
	});

	const innerBlocksProps = useInnerBlocksProps
		? useInnerBlocksProps()
		: __useInnerBlocksProps();

	const HeadingTag = `h${headingLevel}`;
	const collapseId = id;

	return (
		<>
			<InspectorControls>
				{spacing.breakpointsControls({ props })}
				{colors.controls({ props })}
				{border.controls({ props })}

				<PanelBody title={__("Heading", "beer-blocks")} initialOpen={false}>
					{typography.breakpointsControls({
						props,
						attrPrefix: "heading",
						breakpointsBehaviorAttrPrefix: "heading",
						panelBody: false,
					})}

					<CardDivider />

					{colors.controls({
						props,
						attrPrefix: "heading",
						panelBody: false,
					})}

					<CardDivider />

					{border.controls({
						props,
						attrPrefix: "heading",
						panelBody: false,
					})}

					<CardDivider />

					{spacing.controls({
						props,
						attrPrefix: "heading",
						panelBody: false,
					})}
				</PanelBody>

				<PanelBody title={__("Body", "beer-blocks")} initialOpen={false}>
					<BaseControl help={__("Shows the content as default", "beer-blocks")}>
						<ToggleControl
							label={__("Opened", "beer-blocks")}
							checked={show}
							onChange={() =>
								setAttributes({
									show: !show,
								})
							}
						/>
					</BaseControl>

					<CardDivider />

					{spacing.controls({
						props,
						attrPrefix: "body",
						panelBody: false,
					})}
				</PanelBody>
			</InspectorControls>

			<BlockControls>
				<ToolbarGroup>
					<AlignmentToolbar
						value={headingTextAlign}
						onChange={(textAlign) =>
							setAttributes({ headingTextAlign: textAlign })
						}
					/>
				</ToolbarGroup>

				<ToolbarGroup>{headingLevelDropdown(props)}</ToolbarGroup>
			</BlockControls>

			<div {...blockProps}>
				<div
					className="card-header"
					id={headingId}
					style={{
						padding: 0,
						...colors.backgroundCssVars(props, "accordion-item", "heading"),
						...border.cssVars(props, "accordion-item", "heading"),
					}}
				>
					<HeadingTag style={{ margin: 0, padding: 0 }}>
						<button
							class={`btn btn-link btn-block has-text-align-${headingTextAlign}`}
							type="button"
							data-toggle="collapse"
							data-target={`#${collapseId}`}
							aria-expanded={show ? "true" : "false"}
							aria-controls={collapseId}
							style={{
								margin: 0,
								textAlign: headingTextAlign,
								...spacing.styles(props, "heading"),
								...typography.fontFamilyStyles(props, "heading"),
								...typography.fontWeightStyles(props, "heading"),
								...typography.fontSizeCssVars(
									props,
									"accordion-item",
									"heading"
								),
								...typography.lineHeightCssVars(
									props,
									"accordion-item",
									"heading"
								),
								...colors.colorCssVars(props, "accordion-item", "heading"),
							}}
						>
							<RichText
								placeholder={__("Write item title here...", "beer-blocks")}
								tagName="span"
								value={headingContent}
								allowedFormats={["core/bold", "core/italic"]}
								onChange={(newContent) =>
									setAttributes({ headingContent: newContent })
								}
								multiline={false}
							/>
						</button>
					</HeadingTag>
				</div>

				<div
					id={collapseId}
					className={`collapse${show ? " show" : ""}`}
					aria-labelledby={headingId}
					data-parent={`#${parentId}`}
				>
					<div className="card-body" style={spacing.styles(props, "body")}>
						<div {...innerBlocksProps} />
					</div>
				</div>
			</div>
		</>
	);
};

export default edit;
