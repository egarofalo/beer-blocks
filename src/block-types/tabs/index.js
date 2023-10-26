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
import flexbox from "../../helpers/flexbox";
import colors from "./../../helpers/colors";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import border from "./../../helpers/border";
import statuses from "./../../helpers/statuses";
import htmlAttrs from "../../helpers/html-attrs";

/**
 * Block Icon.
 */
import icon from "../../icons/tabs.svg";

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
		"Create tabbable panes with custom content.",
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
		fillFreeSpace: {
			type: "string",
			default: "",
		},
		selectedTab: {
			type: "number",
			default: -1,
		},
		...flexbox.attributes({ alignItemsAttr: false, attrPrefix: "tab" }),
		...colors.attributes({ attrPrefix: "tab" }),
		...border.attributes({ attrPrefix: "tab", borderRadius: true }),
		...spacing.attributes({ attrPrefix: "tab" }),
		...spacing.attributes(),
		...typography.attributes({ attrPrefix: "tab" }),
		...statuses.attributes({
			attrPrefix: "tab",
			hoverColorAttr: true,
			hoverBackgroundAttr: true,
			hoverBorderColorAttr: true,
			activeColorAttr: true,
			activeBackgroundAttr: true,
			activeBorderColorAttr: true,
			transitionAttr: true,
		}),
		...htmlAttrs.attributes(),
	},
	providesContext: {
		tabsId: "id",
		selectedTab: "selectedTab",
	},
	edit,
	save,
});
