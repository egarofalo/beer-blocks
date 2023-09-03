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
import colors from "./../../helpers/colors";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

/**
 * Block Icon.
 */
import icon from "../../icons/advanced-header.svg";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/advanced-header", {
	apiVersion: 2,
	title: _x("Advanced Header", "block title", "beer-blocks"),
	category: "beer-blocks",
	description: _x(
		"Create headers with title, line separator and subtitle.",
		"block description",
		"beer-blocks"
	),
	textdomain: "beer-blocks",
	icon: (
		<img src={icon} alt={_x("Advanced Header", "block title", "beer-blocks")} />
	),
	attributes: {
		...colors.attributes({ colorAttr: false }),
		...spacing.attributes(),
		...htmlAttrs.attributes(),
	},
	edit,
	save,
});
