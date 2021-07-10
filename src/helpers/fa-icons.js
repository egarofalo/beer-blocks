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

export default {
	BLOCK_LEVEL_ELEMENT,
	INLINE_ELEMENT,
	farIcons,
	fasIcons,
	fabIcons,
	farIconsClasses,
	fasIconsClasses,
	fabIconsClasses,
};
