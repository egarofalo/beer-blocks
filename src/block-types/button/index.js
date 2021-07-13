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

/**
 * Block Icon.
 */
import icon from "../../icons/codevelopers.tech.icon";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/button", {
	apiVersion: 2,
	icon,
	attributes: {
		content: {
			type: "string",
			source: "text",
		},
		url: {
			type: "string",
			default: "#",
		},
		opensInNewTab: {
			type: "boolean",
			default: false,
		},
		rel: {
			type: "string",
			default: "noopener",
		},
		variant: {
			type: "string",
			default: "primary",
		},
		outline: {
			type: "boolean",
			default: false,
		},
		size: {
			type: "string",
			default: "",
		},
		blockLevel: {
			type: "boolean",
			default: false,
		},
	},
	edit,
	save,
});
