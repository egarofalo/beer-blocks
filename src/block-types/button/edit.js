import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
	BlockControls,
	__experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import {
	SelectControl,
	PanelBody,
	ToolbarGroup,
	ToolbarButton,
	ToggleControl,
	Popover,
} from "@wordpress/components";
import { link as linkIcon } from "@wordpress/icons";
import { options as optionsVariant } from "./../../helpers/bootstrap-variants";

const linkControl = (
	isURLPickerOpen,
	url,
	opensInNewTab,
	rel,
	setIsURLPickerOpen,
	setAttributes
) =>
	isURLPickerOpen && (
		<Popover position="bottom center" onClose={() => setIsURLPickerOpen(false)}>
			<LinkControl
				value={{ url, opensInNewTab }}
				onChange={({ url: newURL = "", opensInNewTab: newOpensInNewTab }) => {
					let updatedRel = rel;

					if (opensInNewTab && !rel) {
						updatedRel = "noreferrer noopener";
					} else if (!opensInNewTab && rel === "noreferrer noopener") {
						updatedRel = "noopener";
					}

					setAttributes({
						url: newURL,
						opensInNewTab: newOpensInNewTab,
						rel: updatedRel,
					});
				}}
			/>
		</Popover>
	);

const edit = (props) => {
	const {
		attributes: {
			content,
			url,
			opensInNewTab,
			rel,
			variant,
			outline,
			size,
			blockLevel,
		},
		setAttributes,
	} = props;

	const [isURLPickerOpen, setIsURLPickerOpen] = useState(false);

	const blockProps = useBlockProps({
		className: `btn btn-${outline ? "outline-" : ""}${variant}${
			size ? ` ${size}` : ""
		}${blockLevel ? " btn-block" : ""}`,
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Button settings", "beer-blocks")}>
					<div style={{ paddingBottom: "20px" }}>
						<SelectControl
							label={__("Button variant", "beer-blocks")}
							value={variant}
							options={optionsVariant}
							onChange={(value) => setAttributes({ variant: value })}
							style={{ paddingBottom: 0, marginBottom: 0 }}
						/>
					</div>

					<div style={{ paddingBottom: "20px" }}>
						<SelectControl
							label={__("Button size", "beer-blocks")}
							value={size}
							options={[
								{
									value: "btn-lg",
									label: __("Large", "beer-blocks"),
								},
								{
									value: "",
									label: __("Medium", "beer-blocks"),
								},
								{
									value: "btn-sm",
									label: __("Small", "beer-blocks"),
								},
							]}
							onChange={(value) => setAttributes({ size: value })}
							style={{ paddingBottom: 0, marginBottom: 0 }}
						/>
					</div>

					<div style={{ paddingBottom: "20px" }}>
						<ToggleControl
							label={__("Outline Button?", "beer-blocks")}
							checked={outline}
							onChange={(value) => setAttributes({ outline: value })}
						/>
					</div>

					<ToggleControl
						label={__("Block Level Button?", "beer-blocks")}
						checked={blockLevel}
						onChange={(value) => setAttributes({ blockLevel: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={linkIcon}
						label={__("Edit", "beer-blocks")}
						onClick={() => setIsURLPickerOpen(true)}
					/>

					{linkControl(
						isURLPickerOpen,
						url,
						opensInNewTab,
						rel,
						setIsURLPickerOpen,
						setAttributes
					)}
				</ToolbarGroup>
			</BlockControls>

			<RichText
				{...blockProps}
				tagName="a"
				href={url}
				rel={rel}
				value={content}
				allowedFormats={["core/bold", "core/italic"]}
				onChange={(content) => setAttributes({ content })}
				target={opensInNewTab ? "_blank" : "_self"}
			/>
		</>
	);
};

export default edit;
