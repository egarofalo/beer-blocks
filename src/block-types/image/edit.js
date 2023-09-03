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
import size from "../../helpers/size";
import blockAlignment from "../../helpers/block-alignment";
import colors from "../../helpers/colors";
import typography from "../../helpers/typography";
import placeholder from "./../../images/placeholder-image.svg";

const edit = (props) => {
	const {
		attributes: {
			imgId,
			imgAlt,
			imgUrl,
			showRemoveFigcaptionToggleField,
			figcaption,
			removeFigcaption,
			figcaptionTextAlign,
			imgNaturalWidth,
			imgNaturalHeight,
		},
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		className: spacing.cssClasses(props).trimStart(),
		style: spacing.cssVars(props, "image"),
	});

	const getOriginalImgSizeAttrs = (width, height) => ({
		width: grid.breakpointsAttributeValue({
			xs: `${width === 0 ? 200 : width}px`,
		}),
		height: grid.breakpointsAttributeValue({ xs: `${height}px` }),
		autoHeight: grid.breakpointsAttributeValue({ xs: height === 0 }),
		sizeBreakpointsBehavior: grid.breakpointsBehaviorAttributeValue(
			grid.sameBehavior
		),
	});

	const removeMedia = () => {
		setAttributes({
			imgId: 0,
			imgUrl: "",
			imgAlt: "",
			imgNaturalWidth: 200,
			imgNaturalHeight: 0,
			width: grid.breakpointsAttributeValue({ xs: "200px" }),
			height: grid.breakpointsAttributeValue({ xs: "0px" }),
			autoHeight: grid.breakpointsAttributeValue({ xs: true }),
			sizeBreakpointsBehavior: grid.breakpointsBehaviorAttributeValue(
				grid.sameBehavior
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
			...getOriginalImgSizeAttrs(media.width, media.height),
		});

	const setOriginalImageSize = () =>
		setAttributes({
			...getOriginalImgSizeAttrs(imgNaturalWidth, imgNaturalHeight),
		});

	const imageControls = (
		<>
			<div
				className="editor-post-featured-image"
				style={{ marginBottom: "20px" }}
			>
				{showRemoveFigcaptionToggleField && (
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
				)}

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
									<Button onClick={open} isLarge variant="primary">
										{__("Replace image", "beer-blocks")}
									</Button>
								)}
							/>
						</MediaUploadCheck>

						<MediaUploadCheck>
							<Button onClick={removeMedia} isDestructive>
								{__("Remove image", "beer-blocks")}
							</Button>
						</MediaUploadCheck>
					</>
				)}
			</div>

			{imgId > 0 && (
				<>
					{size.controls({ props, panelBody: false })}

					<div style={{ paddingTop: "20px" }}>
						<Button onClick={setOriginalImageSize} variant="primary">
							{__("Set original size", "beer-blocks")}
						</Button>
					</div>
				</>
			)}
		</>
	);

	let figcaptionControls = (
		<>
			{typography.controls({
				props,
				attrPrefix: "figcaption",
				title: __("Legend typography", "beer-blocks"),
			})}

			{colors.controls({
				props,
				attrPrefix: "figcaption",
				title: __("Legend color", "beer-blocks"),
			})}

			{spacing.controls({
				props,
				attrPrefix: "figcaption",
				title: __("Legend spacing", "beer-blocks"),
				paddingSides: false,
				marginSides: ["top", "bottom"],
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

				{spacing.controls({ props, paddingSides: false })}
				{showRemoveFigcaptionToggleField && figcaptionControls}
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
					className={`img-fluid d-block${size.cssClasses(props)}`}
					style={{
						...blockAlignment.styles(props),
						...size.cssVars(props, "image"),
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
						}${typography.cssClasses(props, "figcaption")}${colors.cssClasses(
							props,
							"figcaption"
						)}${spacing.cssClasses(props, "figcaption")}`}
						style={{
							...typography.styles(props, "figcaption"),
							...typography.cssVars(props, "image", "figcaption"),
							...colors.cssVars(props, "image", "figcaption"),
							...spacing.cssVars(props, "image", "figcaption"),
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
