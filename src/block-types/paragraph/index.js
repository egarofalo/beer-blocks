/**
 * Internationalization.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/internationalization
 */
import { __ } from "@wordpress/i18n";

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType, createBlock } from "@wordpress/blocks";

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
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";

/**
 * Block Icon.
 */
import icon from "./../../icons/codevelopers.tech.icon";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/paragraph", {
	apiVersion: 2,
	icon,
	attributes: {
		content: {
			type: "html",
		},
		textAlign: {
			type: "string",
			default: "left",
		},
		placeholder: {
			type: "string",
			default: __("Write your paragraph here...", "beer-blocks"),
		},
		...spacing.attributes(),
		...typography.attributes(),
	},
	transforms: {
		from: [
			{
				type: "block",
				blocks: ["core/paragraph"],
				transform: (attributes) =>
					createBlock("beer-blocks/paragraph", {
						...attributes,
					}),
			},
		],
	},
	edit,
	save,
});
