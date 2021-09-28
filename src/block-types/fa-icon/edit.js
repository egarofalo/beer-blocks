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
	ResponsiveWrapper,
} from "@wordpress/components";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import { defaultUnits } from "./../../helpers/typography";
import {
	farIconsClasses,
	fasIconsClasses,
	fabIconsClasses,
	BLOCK_LEVEL_ELEMENT,
	INLINE_ELEMENT,
	removeMedia,
	onSelectMedia,
	setOriginalImageSize,
} from "./../../helpers/fa-icons";

const edit = (props) => {
	const {
		attributes: {
			iconType,
			icon,
			iconSize,
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
		...(useAnImage ? { width: imgWidth, height: imgHeight } : {}),
	};

	const blockProps = useBlockProps({
		...(htmlElementType === BLOCK_LEVEL_ELEMENT
			? {
					className: `has-text-align-${textAlign}${
						useAnImage ? " img-fluid" : ""
					}`,
			  }
			: {}),
		...(htmlElementType === INLINE_ELEMENT
			? {
					className: icon,
					style,
			  }
			: {}),
	});

	const imgElem =
		htmlElementType === BLOCK_LEVEL_ELEMENT ? (
			<img
				className="img-fluid"
				style={{ width: imgWidth, height: imgHeight }}
				alt={imgAlt}
				src={imgUrl}
			/>
		) : (
			<img alt={imgAlt} src={imgUrl} {...blockProps} />
		);

	const iconElem =
		htmlElementType === BLOCK_LEVEL_ELEMENT ? (
			<i className={icon} style={style}></i>
		) : (
			<i {...blockProps}></i>
		);

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
				label={sprintf(__("Icon Size (%s)", "beer-blocks"), iconSize)}
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
									<ResponsiveWrapper
										naturalWidth={imgNaturalWidth}
										naturalHeight={imgNaturalHeight}
									>
										<img src={imgUrl} alt={imgAlt} />
									</ResponsiveWrapper>
								)}
							</Button>
						)}
						title={__("Choose an image", "beer-blocks")}
						onSelect={onSelectMedia(media, props)}
						allowedTypes={["image"]}
					/>
				</MediaUploadCheck>

				{imgId > 0 && (
					<MediaUploadCheck>
						<MediaUpload
							title={__("Replace image", "beer-blocks")}
							value={imgId}
							onSelect={onSelectMedia(media, props)}
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
						<Button onClick={removeMedia(props)} isLink isDestructive>
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
			</BaseControl>

			<BaseControl>
				<Button onClick={setOriginalImageSize(props)} isPrimary>
					{__("Set original size", "beer-blocks")}
				</Button>
			</BaseControl>
		</>
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Icon settings", "beer-blocks")}>
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
