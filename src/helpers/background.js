import { __ } from "@wordpress/i18n";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { camelCase } from "lodash";

// returns attribute name
const attrName = (attr, attrPrefix = "") => camelCase(`${attrPrefix}-${attr}`);

// Default values
const DEFAULT_VALUES = {
	backgroundImage: { id: null, url: null },
	backgroundPosition: "center center",
	backgroundSize: "auto",
	backgroundRepeat: "no-repeat",
};

// returns block's background image attribute
const backgroundImageAttribute = (attrPrefix = "") => ({
	[attrName("background-image", attrPrefix)]: {
		type: "object",
		default: DEFAULT_VALUES.backgroundImage,
	},
});

// returns block's background position attribute
const backgroundPositionAttribute = (attrPrefix = "") =>
	grid.attributes({
		attrName: attrName("background-position", attrPrefix),
		breakpoints: true,
		breakpointsBehavior: false,
		defaultValue: DEFAULT_VALUES.backgroundPosition,
		type: "string",
	});

// returns block's background size attribute
const backgroundSizeAttribute = (attrPrefix = "") =>
	grid.attributes({
		attrName: attrName("background-size", attrPrefix),
		breakpoints: true,
		breakpointsBehavior: false,
		defaultValue: DEFAULT_VALUES.backgroundSize,
		type: "string",
	});

// returns block's background repeat attribute
const backgroundRepeatAttribute = (attrPrefix = "") => ({
	[attrName("background-repeat", attrPrefix)]: {
		type: "string",
		default: DEFAULT_VALUES.backgroundRepeat,
	},
});

// returns block's backgrounds attributes
export const attributes = ({
	attrPrefix = "",
	backgroundImageAttr = true,
	backgroundPositionAttr = true,
	backgroundSizeAttr = true,
	backgroundRepeatAttr = true,
} = {}) => ({
	...(backgroundImageAttr ? backgroundImageAttribute(attrPrefix) : {}),
	...(backgroundPositionAttr ? backgroundPositionAttribute(attrPrefix) : {}),
	...(backgroundSizeAttr ? backgroundSizeAttribute(attrPrefix) : {}),
	...(backgroundRepeatAttr ? backgroundRepeatAttribute(attrPrefix) : {}),
});
