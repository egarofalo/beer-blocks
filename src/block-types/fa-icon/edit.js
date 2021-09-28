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

	const blockProps = useBlockProps({
		...(htmlElementType === BLOCK_LEVEL_ELEMENT
			? {
					className: `has-text-align-${textAlign}`,
			  }
			: {}),
		...(htmlElementType === INLINE_ELEMENT
			? {
					className: icon,
			  }
			: {}),
		style: {
			...(iconSize ? { fontSize: iconSize } : {}),
		},
	});

	const icons = [...farIconsClasses, ...fasIconsClasses, ...fabIconsClasses];
	const useAnImage = iconType === "image";

	const removeMedia = () => {
		props.setAttributes({
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

	const onSelectMedia = (media) => {
		setAttributes({
			imgId: media.id,
			imgUrl: media.url,
			imgAlt: media.alt,
			imgNaturalWidth: media.width,
			imgNaturalHeight: media.height,
			imgWidth: media.width + "px",
			imgHeight: media.height + "px",
			imgWidthUnit: "px",
			imgHeightUnit: "px",
		});
	};

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

					{!useAnImage ? (
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
					) : (
						<>
							<div className="editor-post-featured-image">
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

							<BaseControl>
								<UnitControl
									label={sprintf(
										__("Height (%s)", "beer-blocks"),
										imgHeightUnit
									)}
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
						</>
					)}
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
				<div {...blockProps}>
					<i className={icon}></i>
				</div>
			) : (
				<i {...blockProps}></i>
			)}
		</>
	);
};

export default edit;
