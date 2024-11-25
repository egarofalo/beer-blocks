/**
 * Internationalization.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/internationalization
 */
import { _x, __ } from "@wordpress/i18n";

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
import size from "./../../helpers/size";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

/**
 * Block Icon.
 */
import icon from "./../../icons/alert.svg";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/alert", {
	apiVersion: 2,
	title: _x("Alert", "block title", "beer-blocks"),
	category: "beer-blocks",
	description: _x(
		"Represents Bootstrap Alerts that provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.",
		"block description",
		"beer-blocks",
	),
	textdomain: "beer-blocks",
	icon: <img src={icon} alt={_x("Alert", "block title", "beer-blocks")} />,
	attributes: {
		contents: {
			type: "html",
		},
		alertType: {
			type: "string",
			default: "alert alert-light",
		},
		...blockAlignment.attributesWithBreakpoints(),
		...size.attributes({ maxWidthAttr: true, minHeightAttr: true }),
		...spacing.attributes(),
		...htmlAttrs.attributes(),
	},
	edit,
	save,
});
