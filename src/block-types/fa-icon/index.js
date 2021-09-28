/**
 * Internationalization.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/internationalization
 */
import { _x } from "@wordpress/i18n";

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import "./style.scss";

/**
 * Styles applied only in the editor.
 */
import "./editor.scss";

/**
 * Internal dependencies.
 */
import edit from "./edit";
import save from "./save";
import { INLINE_ELEMENT } from "./../../helpers/fa-icons";

/**
 * Block Icon.
 */
import icon from "../../icons/fa-icon.svg";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/fa-icon", {
	apiVersion: 2,
	title: _x("Font Awesome Icon", "block title", "beer-blocks"),
	category: "beer-blocks",
	description: _x(
		"Create a Font Awesome icon.",
		"block description",
		"beer-blocks"
	),
	textdomain: "beer-blocks",
	parent: ["beer-blocks/info-box"],
	supports: {
		color: {
			text: true,
			background: false,
		},
	},
	icon: (
		<img
			src={icon}
			alt={_x("Font Awesome Icon", "block title", "beer-blocks")}
		/>
	),
	attributes: {
		iconType: {
			type: "string",
			default: "fa",
		},
		icon: {
			type: "string",
			default: "fa fa-star",
		},
		iconSize: {
			type: "string",
			default: "",
		},
		htmlElementType: {
			type: "number",
			default: INLINE_ELEMENT,
		},
		textAlign: {
			type: "string",
			default: "left",
		},
		imgId: {
			type: "number",
			default: 0,
		},
		imgAlt: {
			type: "string",
			default: "",
		},
		imgUrl: {
			type: "string",
		},
		imgNaturalWidth: {
			type: "number",
		},
		imgNaturalHeight: {
			type: "number",
		},
		imgWidth: {
			type: "string",
		},
		imgHeight: {
			type: "string",
		},
		imgWidthUnit: {
			type: "string",
			default: "px",
		},
		imgHeightUnit: {
			type: "string",
			default: "px",
		},
	},
	edit,
	save,
});
