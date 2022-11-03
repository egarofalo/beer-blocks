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
import typography from "./../../helpers/typography";
import border from "./../../helpers/border";
import borderRadius from "./../../helpers/border-radius";
import spacing from "./../../helpers/spacing";
import transition from "./../../helpers/transition";

/**
 * Block Icon.
 */
import icon from "../../icons/button.svg";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/button", {
	apiVersion: 2,
	title: _x("Button", "block title", "beer-blocks"),
	category: "beer-blocks",
	description: _x(
		"Create Bootstrap button with support for multiple sizes, states, and more.",
		"block description",
		"beer-blocks"
	),
	textdomain: "beer-blocks",
	icon: <img src={icon} alt={_x("Button", "block title", "beer-blocks")} />,
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
		align: {
			type: "string",
			default: "left",
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
		...typography.attributes({ breakpoints: true }),
		...colors.attributes({
			mouseOverColorAttr: true,
			activeColorAttr: true,
			focusColorAttr: true,
			mouseOverBackgroundAttr: true,
			activeBackgroundAttr: true,
			focusBackgroundAttr: true,
			mouseOverBorderColorAttr: true,
			activeBorderColorAttr: true,
			transitionAttr: true,
		}),
		...border.attributes(),
		...borderRadius.attributes({ corner: "all" }),
		...spacing.attributes({ breakpoints: true }),
	},
	edit,
	save,
});
