import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
	BlockControls,
	BlockAlignmentToolbar,
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
import typography from "./../../helpers/typography";
import border from "./../../helpers/border";
import borderRadius from "./../../helpers/border-radius";
import spacing from "./../../helpers/spacing";
import colors from "./../../helpers/colors";
import transition from "./../../helpers/transition";

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
			align,
			variant,
			outline,
			size,
			blockLevel,
		},
		setAttributes,
	} = props;

	const [isURLPickerOpen, setIsURLPickerOpen] = useState(false);

	const blockStyle = {
		...spacing.paddingCssVars({ props, blockName: "button" }),
		...spacing.marginCssVars({ props, blockName: "button" }),
		...(variant === ""
			? {
					...border.cssVars({ props, blockName: "button" }),
					...borderRadius.styles(props),
					...colors.cssVars({ props, blockName: "button" }),
					...typography.fontSizeCssVars({ props, blockName: "button" }),
					...typography.lineHeightCssVars({ props, blockName: "button" }),
			  }
			: {}),
		...(align ? { textAlign: align } : {}),
	};

	const btnStyle = {
		...typography.fontFamilyStyles(props),
		...typography.fontWeightStyles(props),
		...(blockLevel ? { textAlign: "center" } : { display: "inline-block" }),
	};

	const className =
		variant !== ""
			? `btn btn-${outline ? "outline-" : ""}${variant}${
					size ? ` ${size}` : ""
			  }${blockLevel ? " btn-block" : ""}`
			: "wp-beer-blocks-btn-custom-styles";

	const blockProps = useBlockProps({ style: blockStyle });

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Button settings", "beer-blocks")}>
					<>
						{transition.statusControls("normal", (status) => {
							console.log(status);
						})}
						<SelectControl
							label={__("Button variant", "beer-blocks")}
							value={variant}
							options={[
								{
									value: "",
									label: __("Custom styles", "beer-blocks"),
								},
								...optionsVariant,
							]}
							onChange={(value) => setAttributes({ variant: value })}
							style={{ paddingBottom: 0, marginBottom: 0 }}
							help={__(
								"If you choose 'Custom styles' you can change button typography, font color, background, borders and spacing.",
								"beer-blocks"
							)}
						/>

						<ToggleControl
							label={__("Block Level Button?", "beer-blocks")}
							checked={blockLevel}
							onChange={(value) =>
								setAttributes({
									blockLevel: value,
									align: value ? undefined : align,
								})
							}
						/>

						{variant !== "" && (
							<>
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
							</>
						)}
					</>
				</PanelBody>

				{typography.breakpointsControls({ props, disabled: variant !== "" })}
				{colors.controls({ props, disabled: variant !== "" })}
				{border.controls({ props, disabled: variant !== "" })}
				{borderRadius.controls({ props, disabled: variant !== "" })}
				{spacing.breakpointsControls({ props })}
			</InspectorControls>

			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={linkIcon}
						label={__("Edit", "beer-blocks")}
						onClick={() => setIsURLPickerOpen(true)}
					/>

					{!blockLevel && (
						<BlockAlignmentToolbar
							value={align}
							onChange={(align) => setAttributes({ align })}
						/>
					)}

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

			<div {...blockProps}>
				<RichText
					className={className}
					style={btnStyle}
					tagName="a"
					href={url}
					rel={rel}
					value={content}
					allowedFormats={["core/bold", "core/italic"]}
					onChange={(content) => setAttributes({ content })}
					target={opensInNewTab ? "_blank" : "_self"}
				/>
			</div>
		</>
	);
};

export default edit;
