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
import border from "./../../helpers/border";
import spacing from "./../../helpers/spacing";

/**
 * Block Icon.
 */
import icon from "../../icons/jumbotron.svg";
import borderRadius from "../../helpers/border-radius";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/tab-pane", {
	apiVersion: 2,
	title: _x("Tab Pane", "block title", "beer-blocks"),
	category: "beer-blocks",
	description: _x(
		"Create a Tab pane component.",
		"block description",
		"beer-blocks"
	),
	textdomain: "beer-blocks",
	supports: {
		color: {
			background: true,
			gradients: true,
			text: false,
		},
	},
	parent: ["beer-blocks/tabs"],
	icon: <img src={icon} alt={_x("Tab Pane", "block title", "beer-blocks")} />,
	attributes: {
		index: {
			type: "number",
		},
		id: {
			type: "string",
		},
		tabId: {
			type: "string",
		},
		...border.attributes(),
		...border.attributes({ side: "top" }),
		...border.attributes({ side: "right" }),
		...border.attributes({ side: "bottom" }),
		...border.attributes({ side: "left" }),
		...borderRadius.attributes(),
		...borderRadius.attributes({ corner: "topLeft" }),
		...borderRadius.attributes({ corner: "topRight" }),
		...borderRadius.attributes({ corner: "bottomRight" }),
		...borderRadius.attributes({ corner: "bottomLeft" }),
		...spacing.attributes(),
	},
	usesContext: ["tabsId"],
	edit,
	save,
});
