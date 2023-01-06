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
	Disabled,
} from "@wordpress/components";
import { link as linkIcon } from "@wordpress/icons";
import { options as optionsVariant } from "./../../helpers/bootstrap-variants";
import typography from "./../../helpers/typography";
import border from "./../../helpers/border";
import spacing from "./../../helpers/spacing";
import statuses from "./../../helpers/statuses";
import colors from "./../../helpers/colors";

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
		...spacing.marginCssVars(props, "button"),
		...(!blockLevel ? { textAlign: align } : {}),
	};

	const btnStyle = {
		...spacing.paddingCssVars(props, "button"),
		...(!blockLevel
			? { display: "inline-block" }
			: { display: "block", textAlign: "center" }),
		...(!variant
			? {
					...typography.fontSizeCssVars(props, "button"),
					...typography.lineHeightCssVars(props, "button"),
					...colors.cssVars(props, "button"),
					...border.cssVars(props, "button"),
					...statuses.cssVars(props, "button"),
					...typography.fontFamilyStyles(props),
					...typography.fontWeightStyles(props),
			  }
			: {}),
	};

	const className = variant
		? `btn btn-${outline ? "outline-" : ""}${variant}${size ? ` ${size}` : ""}${
				blockLevel ? " btn-block" : ""
		  }`
		: `wp-beer-blocks-btn-custom-styles ${statuses.cssClasses(
				props
		  )}`.trimEnd();

	const blockProps = useBlockProps({ style: blockStyle });

	let customStylesControls = (
		<>
			{typography.breakpointsControls({ props })}
			{colors.controls({ props })}
			{border.controls({ props })}
			{statuses.controls({ props })}
		</>
	);

	if (variant) {
		customStylesControls = <Disabled>{customStylesControls}</Disabled>;
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Button settings", "beer-blocks")}>
					<>
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

						{variant && (
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

				{spacing.breakpointsControls({ props })}
				{customStylesControls}
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
