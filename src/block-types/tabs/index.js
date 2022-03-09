/**
 * Internationalization.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/internationalization
 */
import { _x, __, sprintf } from "@wordpress/i18n";

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
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import border from "./../../helpers/border";
import borderRadius from "./../../helpers/border-radius";

/**
 * Block Icon.
 */
import icon from "../../icons/jumbotron.svg";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/tabs", {
	apiVersion: 2,
	title: _x("Tabs", "block title", "beer-blocks"),
	category: "beer-blocks",
	description: _x(
		"Create a Tabs component.",
		"block description",
		"beer-blocks"
	),
	textdomain: "beer-blocks",
	icon: <img src={icon} alt={_x("Tabs", "block title", "beer-blocks")} />,
	attributes: {
		id: {
			type: "string",
		},
		tabsContentId: {
			type: "string",
		},
		tabsAmount: {
			type: "number",
			default: 3,
		},
		labels: {
			type: "array",
			default: [
				sprintf(__("Tab %d", "beer-blocks"), 1),
				sprintf(__("Tab %d", "beer-blocks"), 2),
				sprintf(__("Tab %d", "beer-blocks"), 3),
			],
		},
		horizontalAlignment: {
			type: "string",
			default: "start",
		},
		fillFreeSpace: {
			type: "string",
			default: "",
		},
		tabsColor: {
			type: "string",
		},
		tabsMouseoverColor: {
			type: "string",
		},
		tabsActiveColor: {
			type: "string",
		},
		tabsBackground: {
			type: "string",
		},
		tabsMouseOverBackground: {
			type: "string",
		},
		tabsActiveBackground: {
			type: "string",
		},
		tabsBorderColor: {
			type: "string",
		},
		tabsMouseOverBorderColor: {
			type: "string",
		},
		tabsActiveBorderColor: {
			type: "string",
		},
		...border.attributes({ attrPrefixName: "tabs" }),
		...border.attributes({ attrPrefixName: "tabs", side: "top" }),
		...border.attributes({ attrPrefixName: "tabs", side: "right" }),
		...border.attributes({ attrPrefixName: "tabs", side: "bottom" }),
		...border.attributes({ attrPrefixName: "tabs", side: "left" }),
		...border.attributes({ attrPrefixName: "tabsMouseOver", side: "top" }),
		...border.attributes({ attrPrefixName: "tabsMouseOver", side: "right" }),
		...border.attributes({ attrPrefixName: "tabsMouseOver", side: "bottom" }),
		...border.attributes({ attrPrefixName: "tabsMouseOver", side: "left" }),
		...border.attributes({ attrPrefixName: "tabsActive", side: "top" }),
		...border.attributes({ attrPrefixName: "tabsActive", side: "right" }),
		...border.attributes({ attrPrefixName: "tabsActive", side: "bottom" }),
		...border.attributes({ attrPrefixName: "tabsActive", side: "left" }),
		...borderRadius.attributes({ attrPrefixName: "tabs" }),
		...borderRadius.attributes({ attrPrefixName: "tabs", corner: "topLeft" }),
		...borderRadius.attributes({ attrPrefixName: "tabs", corner: "topRight" }),
		...borderRadius.attributes({
			attrPrefixName: "tabs",
			corner: "bottomRight",
		}),
		...borderRadius.attributes({
			attrPrefixName: "tabs",
			corner: "bottomLeft",
		}),
		...spacing.attributes({ attrPrefixName: "tabs" }),
		...spacing.attributes(),
		...typography.attributes({ attrPrefixName: "tabs" }),
	},
	providesContext: {
		tabsId: "id",
	},
	edit,
	save,
});
