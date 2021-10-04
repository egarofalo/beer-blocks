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
	ToggleControl,
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
			headingColor,
			headingBackground,
			headingContent,
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

				<PanelBody title={__("Heading", "beer-blocks")} initialOpen={false}>
					{spacing.innerControls(props, "heading")}
					{typography.innerControls(props, "heading")}

					<BaseControl label={__("Font color", "beer-blocks")}>
						<ColorPicker
							color={headingColor}
							onChangeComplete={(value) =>
								setAttributes({ headingColor: value.hex })
							}
							disableAlpha
						/>
					</BaseControl>

					{border.innerControls(props, "heading", {
						style: __("Border style", "beer-blocks"),
						width: __("Border width", "beer-blocks"),
						color: __("Border color", "beer-blocks"),
					})}

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

					{spacing.innerControls(props, "body")}
					{border.innerControls(props, "body", {
						style: __("Border style", "beer-blocks"),
						width: __("Border width", "beer-blocks"),
						color: __("Border color", "beer-blocks"),
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
							...border.styles(props.attributes, "heading"),
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
									aria-expanded={show ? "true" : "false"}
									aria-controls={collapseId}
									style={{
										margin: 0,
										color: headingColor,
										textAlign: headingTextAlign,
										...spacing.styles(props.attributes, "heading"),
										...typography.styles(props.attributes, "heading"),
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
								"heading"
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
								style={{
									...spacing.styles(props.attributes, "body"),
									...border.styles(props.attributes, "body"),
								}}
							>
								<div {...innerBlocksProps} />
							</div>,
							"body"
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default edit;
