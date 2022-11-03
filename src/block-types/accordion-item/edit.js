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
	ColorPalette,
	BaseControl,
	ToggleControl,
	CardDivider,
} from "@wordpress/components";
import { headingLevelDropdown } from "./../../helpers/heading";
import spacing, { PaddingVisualizer } from "./../../helpers/spacing";
import typography from "../../helpers/typography";
import border from "../../helpers/border";
import { variantsColorPallet as variants } from "../../helpers/bootstrap-variants";

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
			headingColor,
			headingBackground,
			headingContent,
			bodyBackground,
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
			...spacing.paddingCssVars({
				props,
				blockName: "accordion-item",
				breakpoints: true,
			}),
			...spacing.marginCssVars({
				props,
				blockName: "accordion-item",
				breakpoints: true,
			}),
			...border.cssVars({ props, blockName: "accordion-item" }),
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
				{border.controls({ props })}

				<PanelBody title={__("Heading", "beer-blocks")} initialOpen={false}>
					{spacing.controls({
						props,
						attrPrefix: "heading",
						panelBody: false,
					})}

					<CardDivider />

					{typography.breakpointsControls({
						props,
						attrPrefix: "heading",
						breakpointsBehaviorAttrPrefix: "heading",
						panelBody: false,
					})}

					<CardDivider />

					<BaseControl label={__("Font color", "beer-blocks")}>
						<ColorPalette
							colors={variants}
							value={headingColor}
							onChange={(value) => setAttributes({ headingColor: value })}
							disableAlpha
						/>
					</BaseControl>

					<CardDivider />

					{border.controls({
						props,
						attrPrefix: "heading",
						panelBody: false,
					})}

					<CardDivider />

					<BaseControl label={__("Background color", "beer-blocks")}>
						<ColorPalette
							colors={variants}
							value={headingBackground}
							onChange={(value) => setAttributes({ headingBackground: value })}
							disableAlpha
						/>
					</BaseControl>
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

					<CardDivider />

					{border.controls({
						props,
						attrPrefix: "body",
						panelBody: false,
					})}

					<CardDivider />

					<BaseControl label={__("Background color", "beer-blocks")}>
						<ColorPalette
							colors={variants}
							value={bodyBackground}
							onChange={(value) => setAttributes({ bodyBackground: value })}
							disableAlpha
						/>
					</BaseControl>
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
						...(headingBackground
							? { backgroundColor: headingBackground }
							: {}),
						...border.cssVars({
							props,
							blockName: "accordion-item",
							attrPrefix: "heading",
						}),
					}}
				>
					<HeadingTag style={{ margin: 0, padding: 0 }}>
						<PaddingVisualizer blockProps={props} attrPrefix="heading">
							<button
								class={`btn btn-link btn-block has-text-align-${headingTextAlign}`}
								type="button"
								data-toggle="collapse"
								data-target={`#${collapseId}`}
								aria-expanded={show ? "true" : "false"}
								aria-controls={collapseId}
								style={{
									margin: 0,
									color: headingColor,
									textAlign: headingTextAlign,
									...spacing.styles(props, "heading"),
									...typography.fontFamilyStyles(props, "heading"),
									...typography.fontWeightStyles(props, "heading"),
									...typography.fontSizeCssVars({
										props,
										blockName: "accordion-item",
										attrPrefix: "heading",
									}),
									...typography.lineHeightCssVars({
										props,
										blockName: "accordion-item",
										attrPrefix: "heading",
									}),
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
						</PaddingVisualizer>
					</HeadingTag>
				</div>

				<div
					id={collapseId}
					className={`collapse${show ? " show" : ""}`}
					aria-labelledby={headingId}
					data-parent={`#${parentId}`}
					style={{ backgroundColor: bodyBackground }}
				>
					<PaddingVisualizer blockProps={props} attrPrefix="body">
						<div
							className="card-body"
							style={{
								...spacing.styles(props, "body"),
								...border.cssVars({
									props,
									attrPrefix: "body",
									blockName: "accordion-item",
								}),
							}}
						>
							<div {...innerBlocksProps} />
						</div>
					</PaddingVisualizer>
				</div>
			</div>
		</>
	);
};

export default edit;
