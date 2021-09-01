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
import spacing from "../../helpers/spacing";

/**
 * Block Icon.
 */
import icon from "../../icons/instructions.svg";
import grid from "../../helpers/grid";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/instructions", {
	apiVersion: 2,
	title: _x("Instructions", "block title", "beer-blocks"),
	category: "beer-blocks",
	description: _x(
		"Create an instructions list.",
		"block description",
		"beer-blocks"
	),
	textdomain: "beer-blocks",
	supports: {
		color: {
			background: true,
			gradients: false,
			text: false,
		},
	},
	icon: (
		<img src={icon} alt={_x("Instructions", "block title", "beer-blocks")} />
	),
	attributes: {
		justifyContent: {
			type: "object",
			default: grid.getJustifyContentAttributes(),
		},
		alignItems: {
			type: "object",
			default: grid.getAlignItemsAttributes(),
		},
		...spacing.attributes(),
	},
	edit,
	save,
});
