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
	__experimentalUnitControl as UnitControl,
	BaseControl,
	ToggleControl,
	Button,
	Disabled,
} from "@wordpress/components";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import { defaultUnits } from "./../../helpers/typography";
import {
	farIconsClasses,
	fasIconsClasses,
	fabIconsClasses,
	BLOCK_LEVEL_ELEMENT,
	INLINE_ELEMENT,
} from "./../../helpers/fa-icons";

const edit = (props) => {
	const {
		attributes: {
			iconType,
			icon,
			iconSize,
			showHtmlElementTypeToggleField,
			htmlElementType,
			textAlign,
			imgId,
			imgAlt,
			imgUrl,
			imgNaturalWidth,
			imgNaturalHeight,
			imgWidth,
			imgHeight,
			imgWidthUnit,
			imgHeightUnit,
		},
		setAttributes,
	} = props;

	const icons = [...farIconsClasses, ...fasIconsClasses, ...fabIconsClasses];
	const useAnImage = iconType === "image";

	const style = {
		...(!useAnImage && iconSize ? { fontSize: iconSize } : {}),
		...(useAnImage
			? {
					...(imgWidth ? { width: imgWidth } : {}),
					...(imgHeight ? { height: imgHeight } : {}),
			  }
			: {}),
	};

	const blockProps = useBlockProps({
		...(htmlElementType === BLOCK_LEVEL_ELEMENT
			? {
					className: `has-text-align-${textAlign}`,
			  }
			: {}),
		...(htmlElementType === INLINE_ELEMENT
			? {
					className: useAnImage ? "img-fluid" : icon,
					style,
			  }
			: {}),
	});

	const imgElem =
		htmlElementType === BLOCK_LEVEL_ELEMENT ? (
			<img className="img-fluid" style={style} alt={imgAlt} src={imgUrl} />
		) : (
			<img alt={imgAlt} src={imgUrl} {...blockProps} />
		);

	const iconElem =
		htmlElementType === BLOCK_LEVEL_ELEMENT ? (
			<i className={icon} style={style}></i>
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
			imgWidth: "",
			imgHeight: "",
			imgWidthUnit: "px",
			imgHeightUnit: "px",
		});
	};

	const onSelectMedia = (media) =>
		setAttributes({
			imgId: media.id,
			imgUrl: media.url,
			imgAlt: media.alt,
			imgNaturalWidth: media.width === 0 ? 100 : media.width,
			imgNaturalHeight: media.height,
			imgWidth: `${media.width === 0 ? 100 : media.width}px`,
			imgHeight: media.height === 0 ? "auto" : `${media.height}px`,
			imgWidthUnit: "px",
			imgHeightUnit: "px",
		});

	const setOriginalImageSize = () =>
		setAttributes({
			imgWidth: `${imgNaturalWidth === 0 ? 100 : imgNaturalWidth}px`,
			imgHeight: imgNaturalHeight === 0 ? "auto" : `${imgNaturalHeight}px`,
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

			<BaseControl
				label={
					iconSize
						? sprintf(__("Icon Size (%s)", "beer-blocks"), iconSize)
						: __("Icon Size", "beer-blocks")
				}
			>
				<UnitControl
					value={iconSize}
					onChange={(iconSize) => setAttributes({ iconSize })}
					onUnitChange={() =>
						setAttributes({
							iconSize: "",
						})
					}
					units={defaultUnits}
				/>
			</BaseControl>
		</>
	);

	const imgHeightControl = (
		<UnitControl
			label={sprintf(__("Height (%s)", "beer-blocks"), imgHeightUnit)}
			value={imgHeight}
			onChange={(height) => setAttributes({ imgHeight: height })}
			onUnitChange={(unit) =>
				setAttributes({
					imgHeightUnit: unit,
				})
			}
			units={[
				{ value: "px", label: "PX" },
				{ value: "em", label: "EM" },
				{ value: "rem", label: "REM" },
				{ value: "%", label: "%" },
			]}
		/>
	);

	const imageControls = (
		<>
			<div
				className="editor-post-featured-image"
				style={{ marginBottom: "24px" }}
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
				)}

				{imgId > 0 && (
					<MediaUploadCheck>
						<Button onClick={removeMedia} isLink isDestructive>
							{__("Remove image", "beer-blocks")}
						</Button>
					</MediaUploadCheck>
				)}
			</div>

			<BaseControl>
				<UnitControl
					label={sprintf(__("Width (%s)", "beer-blocks"), imgWidthUnit)}
					value={imgWidth}
					onChange={(width) => setAttributes({ imgWidth: width })}
					onUnitChange={(unit) =>
						setAttributes({
							imgWidthUnit: unit,
						})
					}
					units={[
						{ value: "px", label: "PX" },
						{ value: "em", label: "EM" },
						{ value: "rem", label: "REM" },
						{ value: "%", label: "%" },
					]}
				/>
			</BaseControl>

			<ToggleControl
				label={__("Set auto height", "beer-blocks")}
				checked={imgHeight === "auto"}
				onChange={() =>
					setAttributes({
						imgHeight: imgHeight === "auto" ? `${imgNaturalHeight}px` : "auto",
					})
				}
			/>

			<BaseControl>
				{imgHeight === "auto" ? (
					<Disabled>{imgHeightControl}</Disabled>
				) : (
					imgHeightControl
				)}
			</BaseControl>

			<BaseControl>
				<Button onClick={setOriginalImageSize} isPrimary>
					{__("Set original size", "beer-blocks")}
				</Button>
			</BaseControl>
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
			</InspectorControls>

			{htmlElementType === BLOCK_LEVEL_ELEMENT && (
				<BlockControls>
					<AlignmentToolbar
						value={textAlign}
						onChange={(textAlign) => setAttributes({ textAlign })}
					/>
				</BlockControls>
			)}

			{htmlElementType === BLOCK_LEVEL_ELEMENT ? (
				<div {...blockProps}>{!useAnImage ? iconElem : imgElem}</div>
			) : !useAnImage ? (
				iconElem
			) : (
				imgElem
			)}
		</>
	);
};

export default edit;
