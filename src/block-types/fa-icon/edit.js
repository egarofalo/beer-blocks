import { __, sprintf } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	BaseControl,
	ToggleControl,
	Button,
	Disabled,
} from "@wordpress/components";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import {
	farIconsClasses,
	fasIconsClasses,
	fabIconsClasses,
	BLOCK_LEVEL_ELEMENT,
	INLINE_ELEMENT,
} from "./../../helpers/fa-icons";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import dimension from "../../helpers/dimension";
import grid from "../../helpers/grid";

const edit = (props) => {
	const {
		attributes: {
			iconType,
			icon,
			showHtmlElementTypeToggleField,
			htmlElementType,
			textAlign,
			imgId,
			imgAlt,
			imgUrl,
			imgNaturalWidth,
			imgNaturalHeight,
			imgHeight,
		},
		setAttributes,
	} = props;

	const icons = [...farIconsClasses, ...fasIconsClasses, ...fabIconsClasses];
	const useAnImage = iconType === "image";

	let blockPropsParam = { style: spacing.styles(props) };
	const dimensionCssVars = {
		...dimension.widthCssVars({
			props,
			blockName: "fa-icon",
			attrPrefix: "img",
		}),
		...dimension.heightCssVars({
			props,
			blockName: "fa-icon",
			attrPrefix: "img",
		}),
	};

	if (useAnImage) {
		blockPropsParam = {
			...blockPropsParam,
			style: {
				...blockPropsParam.style,
				...(htmlElementType === INLINE_ELEMENT ? dimensionCssVars : {}),
			},
			className:
				htmlElementType === BLOCK_LEVEL_ELEMENT
					? `has-text-align-${textAlign}`
					: "img-fluid wp-block-beer-blocks-fa-icon-image",
		};
	} else {
		blockPropsParam = {
			...blockPropsParam,
			className:
				htmlElementType === BLOCK_LEVEL_ELEMENT
					? `has-text-align-${textAlign}`
					: icon,
			style: {
				...blockPropsParam.style,
				...typography.fontSizeCssVars({
					props,
					blockName: "fa-icon",
					attrPrefix: "icon",
				}),
				...typography.lineHeightCssVars({
					props,
					blockName: "fa-icon",
					attrPrefix: "icon",
				}),
			},
		};
	}

	const blockProps = useBlockProps(blockPropsParam);

	const imgElem =
		htmlElementType === BLOCK_LEVEL_ELEMENT ? (
			<div {...blockProps}>
				<img
					className="img-fluid wp-block-beer-blocks-fa-icon-image"
					alt={imgAlt}
					src={imgUrl}
					style={{
						...dimension.widthCssVars({
							props,
							blockName: "fa-icon",
							attrPrefix: "img",
						}),
						...dimension.heightCssVars({
							props,
							blockName: "fa-icon",
							attrPrefix: "img",
						}),
					}}
				/>
			</div>
		) : (
			<img alt={imgAlt} src={imgUrl} {...blockProps} />
		);

	const iconElem =
		htmlElementType === BLOCK_LEVEL_ELEMENT ? (
			<div {...blockProps}>
				<i className={icon}></i>
			</div>
		) : (
			<i {...blockProps}></i>
		);

	const removeMedia = () => {
		setAttributes({
			imgId: 0,
			imgUrl: "",
			imgAlt: "",
			imgNaturalWidth: 0,
			imgNaturalHeight: 0,
			imgWidth: Object.fromEntries(
				grid.breakpoints.map((key) => [[key], undefined])
			),
			imgHeight: Object.fromEntries(
				grid.breakpoints.map((key) => [[key], undefined])
			),
			imgDimensionBreakpointsBehavior: Object.fromEntries(
				grid.breakpoints.map((key) => [[key], grid.sameBehavior])
			),
		});
	};

	const onSelectMedia = (media) =>
		setAttributes({
			imgId: media.id,
			imgUrl: media.url,
			imgAlt: media.alt,
			imgNaturalWidth: media.width === 0 ? 100 : media.width,
			imgNaturalHeight: media.height,
			imgWidth: Object.fromEntries(
				grid.breakpoints.map((key) => [
					[key],
					`${media.width === 0 ? 100 : media.width}px`,
				])
			),
			imgHeight: Object.fromEntries(
				grid.breakpoints.map((key) => [
					[key],
					`${media.height === 0 ? "auto" : media.height}px`,
				])
			),
		});

	const setOriginalImageSize = () =>
		setAttributes({
			imgWidth: Object.fromEntries(
				grid.breakpoints.map((key) => [
					[key],
					`${imgNaturalWidth === 0 ? 100 : imgNaturalWidth}px`,
				])
			),
			imgHeight: Object.fromEntries(
				grid.breakpoints.map((key) => [
					[key],
					`${imgNaturalHeight === 0 ? "auto" : imgNaturalHeight}px`,
				])
			),
		});

	const iconControls = (
		<>
			<BaseControl label={__("Choose an Icon", "beer-blocks")}>
				<FontIconPicker
					icons={icons}
					onChange={(icon) => setAttributes({ icon })}
					value={icon}
					renderUsing="class"
					isMulti={false}
					theme="beer-blocks"
				/>
			</BaseControl>

			{typography.breakpointsControls({
				props,
				attrPrefix: "icon",
				breakpointsBehaviorAttrPrefix: "icon",
				panelBody: false,
				fontSizeControlLabel: (breakpoint) =>
					sprintf(
						__("Icon size (%s)", "beer-blocks"),
						breakpoint.toUpperCase()
					),
				includeFontFamilyControl: false,
				includeFontWeightControl: false,
			})}
		</>
	);

	const imageControls = (
		<>
			<div
				className="editor-post-featured-image"
				style={{ marginBottom: "20px" }}
			>
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

			{grid.getBreakpointsTabs((breakpoint) => {
				const {
					attributes: { imgDimensionBreakpointsBehavior: breakpointsBehavior },
				} = props;

				const nextBreakpoints = grid.getNextBreakpoints(
					breakpoint,
					breakpointsBehavior
				);

				const heightControl = dimension.heightBreakpointsControl({
					props,
					breakpoint,
					attrPrefix: "img",
					breakpointsBehaviorAttrPrefix: "img-dimension",
					type: "string",
				});

				return (
					<>
						{grid.getBreakpointsBehaviorControl({
							props,
							attrPrefix: "img-dimension",
							breakpoint,
							affectedAttrs: ["imgWidth", "imgHeight"],
						})}

						{breakpointsBehavior[breakpoint] !== grid.sameBehavior && (
							<>
								<div style={{ marginBottom: "24px" }}>
									{dimension.widthBreakpointsControl({
										props,
										breakpoint,
										attrPrefix: "img",
										breakpointsBehaviorAttrPrefix: "img-dimension",
									})}
								</div>

								<ToggleControl
									label={__("Set auto height", "beer-blocks")}
									checked={imgHeight[breakpoint] === "auto"}
									onChange={() => {
										const newHeight =
											imgHeight[breakpoint] === "auto"
												? `${imgNaturalHeight}px`
												: "auto";

										setAttributes({
											imgHeight: {
												...imgHeight,
												[breakpoint]: newHeight,
												...(nextBreakpoints.length > 0
													? Object.fromEntries(
															nextBreakpoints.map((nextBreakpoint) => [
																nextBreakpoint,
																newHeight,
															])
													  )
													: {}),
											},
										});
									}}
								/>

								{imgHeight[breakpoint] === "auto" ? (
									<Disabled>{heightControl}</Disabled>
								) : (
									heightControl
								)}
							</>
						)}
					</>
				);
			})}

			<div style={{ paddingTop: "24px" }}>
				<Button onClick={setOriginalImageSize} isPrimary>
					{__("Set original size", "beer-blocks")}
				</Button>
			</div>
		</>
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Icon settings", "beer-blocks")}>
					{showHtmlElementTypeToggleField && (
						<ToggleControl
							label={__("Block level element type", "beer-blocks")}
							checked={htmlElementType === BLOCK_LEVEL_ELEMENT}
							onChange={() =>
								setAttributes({
									htmlElementType:
										htmlElementType === BLOCK_LEVEL_ELEMENT
											? INLINE_ELEMENT
											: BLOCK_LEVEL_ELEMENT,
								})
							}
							help={__(
								"Disable this toggle field if you want to display the icon as an inline element.",
								"beer-blocks"
							)}
						/>
					)}

					<ToggleControl
						label={__("Use an image", "beer-blocks")}
						checked={useAnImage}
						onChange={() =>
							setAttributes({
								iconType: useAnImage ? "fa" : "image",
							})
						}
						help={__(
							"If you want to use an image as icon, enable this toggle field.",
							"beer-blocks"
						)}
					/>

					{!useAnImage ? iconControls : imageControls}
				</PanelBody>

				{spacing.controls({ props })}
			</InspectorControls>

			{htmlElementType === BLOCK_LEVEL_ELEMENT && (
				<BlockControls>
					<AlignmentToolbar
						value={textAlign}
						onChange={(textAlign) => setAttributes({ textAlign })}
					/>
				</BlockControls>
			)}

			{!useAnImage ? iconElem : imgElem}
		</>
	);
};

export default edit;
