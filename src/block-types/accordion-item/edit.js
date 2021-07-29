import { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
	BlockControls,
	AlignmentToolbar,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
} from "@wordpress/block-editor";
import {
	ToolbarGroup,
	PanelBody,
	ColorPicker,
	BaseControl,
} from "@wordpress/components";
import { select } from "@wordpress/data";
import { headingLevelDropdown } from "./../../helpers/heading";
import spacing from "./../../helpers/spacing";
import typography from "../../helpers/typography";
import border from "../../helpers/border";

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
			headingPadding,
			headingColor,
			headingBackground,
			headingContent,
			bodyPadding,
			bodyBackground,
		},
	} = props;

	useEffect(() => {
		const blockEditorData = select("core/block-editor");
		const accordion = blockEditorData.getBlock(
			blockEditorData.getBlockParents(clientId, true)[0]
		);
		setAttributes({
			id: `collapse-${clientId}`,
			headingId: `heading-${clientId}`,
			parentId: `accordion-${accordion.clientId}`,
		});
	}, []);

	const blockProps = useBlockProps({
		className: "card",
		style: {
			...spacing.styles(props.attributes),
			...border.styles(props.attributes),
		},
	});

	const innerBlocksProps = useInnerBlocksProps();
	const HeadingTag = `h${headingLevel}`;
	const collapseId = id;

	return (
		<>
			<InspectorControls>
				{spacing.controls({ props })}
				{border.controls({ props })}

				<PanelBody title={__("Heading", "beer-blocks")}>
					{spacing.paddingControl({
						props,
						paddingAttr: "headingPadding",
						visualizerAttr: "headingPaddingVisualizer",
					})}

					{typography.innerControls(props)}

					<BaseControl label={__("Font color", "beer-blocks")}>
						<ColorPicker
							color={headingColor}
							onChangeComplete={(value) =>
								setAttributes({ headingColor: value.hex })
							}
							disableAlpha
						/>
					</BaseControl>

					<BaseControl label={__("Background color", "beer-blocks")}>
						<ColorPicker
							color={headingBackground}
							onChangeComplete={(value) => {
								setAttributes({ headingBackground: value.hex });
							}}
							disableAlpha
						/>
					</BaseControl>
				</PanelBody>

				<PanelBody title={__("Body", "beer-blocks")}>
					{spacing.paddingControl({
						props,
						paddingAttr: "bodyPadding",
						visualizerAttr: "bodyPaddingVisualizer",
					})}

					<BaseControl label={__("Background color", "beer-blocks")}>
						<ColorPicker
							color={bodyBackground}
							onChangeComplete={(value) => {
								setAttributes({ bodyBackground: value.hex });
							}}
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

			{spacing.visualizer(
				props,
				<div {...blockProps}>
					<div
						className="card-header"
						id={headingId}
						style={{
							backgroundColor: headingBackground,
							padding: 0,
							borderBottom: "none",
						}}
					>
						<HeadingTag style={{ margin: 0, padding: 0 }}>
							{spacing.visualizer(
								props,
								<button
									class={`btn btn-link btn-block has-text-align-${headingTextAlign}`}
									type="button"
									data-toggle="collapse"
									data-target={`#${collapseId}`}
									aria-expanded="true"
									aria-controls={collapseId}
									style={{
										margin: 0,
										color: headingColor,
										textAlign: headingTextAlign,
										...spacing.paddingStyles(headingPadding),
										...typography.styles(props.attributes),
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
								</button>,
								"headingPaddingVisualizer"
							)}
						</HeadingTag>
					</div>

					<div
						id={collapseId}
						className={`collapse${show ? " show" : ""}`}
						aria-labelledby={headingId}
						data-parent={`#${parentId}`}
						style={{ backgroundColor: bodyBackground }}
					>
						{spacing.visualizer(
							props,
							<div
								className="card-body"
								style={spacing.paddingStyles(bodyPadding)}
							>
								<div {...innerBlocksProps} />
							</div>,
							"bodyPaddingVisualizer"
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default edit;
