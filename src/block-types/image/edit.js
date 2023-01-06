import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
	RichText,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import {
	PanelBody,
	Button,
	ToggleControl,
	Disabled,
} from "@wordpress/components";
import grid from "./../../helpers/grid";
import spacing from "./../../helpers/spacing";
import dimension from "../../helpers/dimension";
import blockAlignment from "../../helpers/block-alignment";
import typography from "../../helpers/typography";
import placeholder from "./../../images/placeholder-image.svg";

const edit = (props) => {
	const {
		attributes: {
			imgId,
			imgAlt,
			imgUrl,
			figcaption,
			removeFigcaption,
			figcaptionTextAlign,
			imgNaturalWidth,
			imgNaturalHeight,
		},
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		style: spacing.marginCssVars(props, "image"),
	});

	const removeMedia = () => {
		setAttributes({
			imgId: 0,
			imgUrl: "",
			imgAlt: "",
			imgNaturalWidth: 0,
			imgNaturalHeight: 0,
			width: Object.fromEntries(
				grid.breakpoints.map((key) => [[key], "200px"])
			),
			height: Object.fromEntries(
				grid.breakpoints.map((key) => [[key], "auto"])
			),
			dimensionBreakpointsBehavior: Object.fromEntries(
				grid.breakpoints.map((key) => [[key], grid.sameBehavior])
			),
		});
	};

	const onSelectMedia = (media) =>
		setAttributes({
			imgId: media.id,
			imgUrl: media.url,
			imgAlt: media.alt,
			imgNaturalWidth: media.width === 0 ? 200 : media.width,
			imgNaturalHeight: media.height,
			width: grid.breakpointsAttributeValue(
				`${media.width === 0 ? 200 : media.width}px`
			),
			height: grid.breakpointsAttributeValue("auto"),
			dimensionBreakpointsBehavior: grid.breakpointsBehaviorAttributeValue(
				grid.sameBehavior
			),
		});

	const setOriginalImageSize = () =>
		setAttributes({
			width: grid.breakpointsAttributeValue(
				`${imgNaturalWidth === 0 ? 200 : imgNaturalWidth}px`
			),
			height: grid.breakpointsAttributeValue("auto"),
			dimensionBreakpointsBehavior: grid.breakpointsBehaviorAttributeValue(
				grid.sameBehavior
			),
		});

	const imageControls = (
		<>
			<div
				className="editor-post-featured-image"
				style={{ marginBottom: "20px" }}
			>
				<ToggleControl
					label={__("Remove legend", "beer-blocks")}
					checked={removeFigcaption}
					onChange={() =>
						setAttributes({
							removeFigcaption: !removeFigcaption,
						})
					}
					help={__(
						"Enable this toggle field if you want to remove the image legend.",
						"beer-blocks"
					)}
				/>

				<MediaUploadCheck>
					<MediaUpload
						render={({ open }) => (
							<Button
								className={
									imgId === 0
										? "editor-post-featured-image__toggle"
										: "editor-post-featured-image__preview"
								}
								onClick={open}
								value={imgId}
							>
								{imgId === 0 ? (
									__("Open media library", "beer-blocks")
								) : (
									<img
										src={imgUrl}
										alt={imgAlt}
										style={{
											maxWidth: "100%",
											height: "auto",
											width: `${imgNaturalWidth}px`,
										}}
									/>
								)}
							</Button>
						)}
						title={__("Choose an image", "beer-blocks")}
						onSelect={onSelectMedia}
						allowedTypes={["image"]}
					/>
				</MediaUploadCheck>

				{imgId > 0 && (
					<>
						<MediaUploadCheck>
							<MediaUpload
								title={__("Replace image", "beer-blocks")}
								value={imgId}
								onSelect={onSelectMedia}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button onClick={open} isSecondary isLarge>
										{__("Replace image", "beer-blocks")}
									</Button>
								)}
							/>
						</MediaUploadCheck>

						<MediaUploadCheck>
							<Button onClick={removeMedia} isLink isDestructive>
								{__("Remove image", "beer-blocks")}
							</Button>
						</MediaUploadCheck>
					</>
				)}
			</div>

			{imgId > 0 && (
				<>
					{dimension.breakpointsControls({
						props,
						includeAutoHeightControl: true,
						defaultHeight: imgNaturalHeight,
					})}

					<div style={{ paddingTop: "20px" }}>
						<Button onClick={setOriginalImageSize} isPrimary>
							{__("Set original size", "beer-blocks")}
						</Button>
					</div>
				</>
			)}
		</>
	);

	let figcaptionControls = (
		<>
			{typography.breakpointsControls({
				props,
				attrPrefix: "figcaption",
				breakpointsBehaviorAttrPrefix: "figcaption-font",
			})}
		</>
	);

	figcaptionControls = removeFigcaption ? (
		<Disabled>{figcaptionControls}</Disabled>
	) : (
		figcaptionControls
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Image settings", "beer-blocks")}>
					{imageControls}
				</PanelBody>

				{spacing.breakpointsControls({ props })}
				{figcaptionControls}
			</InspectorControls>

			<BlockControls>
				{blockAlignment.toolbar({ props })}

				{!removeFigcaption && (
					<AlignmentToolbar
						value={figcaptionTextAlign}
						onChange={(textAlign) =>
							setAttributes({ figcaptionTextAlign: textAlign })
						}
					/>
				)}
			</BlockControls>

			<figure {...blockProps}>
				<img
					className="img-fluid d-block"
					style={{
						...blockAlignment.styles(props),
						...dimension.widthCssVars(props, "image"),
						...dimension.heightCssVars(props, "image"),
					}}
					alt={imgId > 0 ? imgAlt : __("Placeholder image", "beer-blocks")}
					src={imgId > 0 ? imgUrl : placeholder}
				/>

				{!removeFigcaption && (
					<RichText
						className={`d-block${
							figcaptionTextAlign !== undefined
								? ` text-${figcaptionTextAlign}`
								: ""
						}`}
						style={{
							...typography.fontFamilyStyles(props, "figcaption"),
							...typography.fontWeightStyles(props, "figcaption"),
							...typography.fontSizeCssVars(props, "image", "figcaption"),
							...typography.lineHeightCssVars(props, "image", "figcaption"),
						}}
						placeholder={__("Add a legend", "beer-blocks")}
						tagName="figcaption"
						value={figcaption}
						allowedFormats={[
							"core/bold",
							"core/italic",
							"core/link",
							"core/code",
							"core/mark",
							"core/strikethrough",
						]}
						onChange={(content) => setAttributes({ figcaption: content })}
					/>
				)}
			</figure>
		</>
	);
};

export default edit;
