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
import "./style.scss";

/**
 * Styles applied only in the editor.
 */
import "./editor.scss";

/**
 * Internal dependencies.
 */
import edit from "./edit";
import save from "./save";
import blockAlignment from "./../../helpers/block-alignment";
import dimension from "./../../helpers/dimension";
import spacing from "./../../helpers/spacing";
import borderRadius from "./../../helpers/border-radius";

/**
 * Block Icon.
 */
import icon from "./../../icons/fa-icon.svg";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/image", {
	apiVersion: 2,
	title: _x("Image", "block title", "beer-blocks"),
	category: "beer-blocks",
	description: _x(
		"Create a responsive image.",
		"block description",
		"beer-blocks"
	),
	textdomain: "beer-blocks",
	icon: <img src={icon} alt={_x("Image", "block title", "beer-blocks")} />,
	attributes: {
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
			default: 0,
		},
		imgNaturalHeight: {
			type: "number",
			default: 0,
		},
		figacption: {
			type: "html",
		},
		removeFigcaption: {
			type: "boolean",
			default: false,
		},
		...blockAlignment.attribute(),
		...dimension.attributes({
			breakpoints: true,
			defaultWidth: "200px",
			defaultHeight: "auto",
		}),
		...spacing.attributes({
			breakpoints: true,
			paddingSides: false,
			marginSides: ["top", "bottom"],
		}),
	},
	edit,
	save,
});