/**
 * Internationalization.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/internationalization
 */
import { __, _x } from "@wordpress/i18n";

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
import blockAlignment from "../../helpers/block-alignment";
import size from "../../helpers/size";
import spacing from "../../helpers/spacing";

/**
 * Block Icon.
 */
import icon from "./../../icons/separator.svg";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/separator", {
	apiVersion: 2,
	title: _x("Separator Line", "block title", "beer-blocks"),
	category: "beer-blocks",
	description: _x(
		"Create a separator line with custom color, width, height and margins.",
		"block description",
		"beer-blocks"
	),
	textdomain: "beer-blocks",
	icon: (
		<img src={icon} alt={_x("Separator Line", "block title", "beer-blocks")} />
	),
	attributes: {
		...size.attributes({
			breakpoints: true,
			heightType: "number",
			autoHeightAttr: false,
		}),
		style: {
			type: "string",
		},
		color: {
			type: "string",
		},
		...blockAlignment.attribute(),
		...size.attributes({
			attrPrefix: "triangle",
			breakpointsBehaviorAttrPrefix: "triangleWidth",
			breakpoints: true,
			widthType: "number",
			heightAttr: false,
			autoHeightAttr: false,
		}),
		triangleBackground: {
			type: "string",
		},
		triangleDirection: {
			type: "string",
			default: "down",
		},
		...spacing.attributes({
			paddingSides: false,
			marginSides: ["top", "bottom"],
			breakpoints: true,
		}),
	},
	edit,
	save,
});
