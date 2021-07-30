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
import grid from "./../../helpers/grid";

/**
 * Block Icon.
 */
import icon from "../../icons/codevelopers.tech.icon";
import typography from "../../helpers/typography";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/instruction", {
	apiVersion: 2,
	icon,
	attributes: {
		numeration: {
			type: "number",
			default: 1,
		},
		...typography.attributes(),
		numerationBackground: {
			type: "string",
			default: "",
		},
		numerationColor: {
			type: "string",
			default: "",
		},
		stackedContents: {
			type: "object",
			default: {
				xs: false,
				sm: false,
				md: false,
				lg: false,
				xl: false,
			},
		},
		sizing: {
			type: "object",
			default: {
				...grid.getColSizingAttributes({
					xsSizingType: grid.autoSizingEqualWidth,
				}),
			},
		},
	},
	edit,
	save,
});
