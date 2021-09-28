import { far } from "@fortawesome/free-regular-svg-icons/index";
import { fas } from "@fortawesome/free-solid-svg-icons/index";
import { fab } from "@fortawesome/free-brands-svg-icons/index";

export const BLOCK_LEVEL_ELEMENT = 1;
export const INLINE_ELEMENT = 2;

export const farIcons = Object.values(far);
export const fasIcons = Object.values(fas);
export const fabIcons = Object.values(fab);

export const farIconsClasses = farIcons.map(
	(icon) => `${icon.prefix} fa-${icon.iconName}`
);

export const fasIconsClasses = fasIcons.map(
	(icon) => `${icon.prefix} fa-${icon.iconName}`
);

export const fabIconsClasses = fabIcons.map(
	(icon) => `${icon.prefix} fa-${icon.iconName}`
);

export const removeMedia = (props) => {
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

export const onSelectMedia = (media, props) =>
	props.setAttributes({
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

export const setOriginalImageSize = (props) =>
	props.setAttributes({
		imgWidth: `${props.imgNaturalWidth}px`,
		imgHeight: `${props.imgNaturalHeight}px`,
	});

export default {
	BLOCK_LEVEL_ELEMENT,
	INLINE_ELEMENT,
	farIcons,
	fasIcons,
	fabIcons,
	farIconsClasses,
	fasIconsClasses,
	fabIconsClasses,
	removeMedia,
	onSelectMedia,
	setOriginalImageSize,
};
