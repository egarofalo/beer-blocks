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
import { ToolbarGroup } from "@wordpress/components";
import { select } from "@wordpress/data";
import { headingLevelDropdown } from "./../../helpers/heading";
import spacing from "./../../helpers/spacing";

const edit = (props) => {
	const {
		clientId,
		setAttributes,
		attributes: { show, headingLevel, headingTextAlign, headingContent },
	} = props;

	const blockEditorData = select("core/block-editor");
	const accordion = blockEditorData.getBlock(
		blockEditorData.getBlockParents(clientId, true)[0]
	);

	const blockProps = useBlockProps({
		className: "card",
	});

	const innerBlocksProps = useInnerBlocksProps();
	const HeadingTag = `h${headingLevel}`;
	const headingId = `heading-${clientId}`;
	const collapseId = `collapse-${clientId}`;
	const parentId = `accordion-${accordion.clientId}`;

	return (
		<>
			<InspectorControls>{spacing.controls({ props })}</InspectorControls>

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
					<div className="card-header" id={headingId}>
						<HeadingTag style={spacing.styles(props.attributes)}>
							<button
								class={`btn btn-link btn-block has-text-align-${headingTextAlign}`}
								type="button"
								data-toggle="collapse"
								data-target={`#${collapseId}`}
								aria-expanded="true"
								aria-controls={collapseId}
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
						<div className="card-body">
							<div {...innerBlocksProps} />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default edit;
