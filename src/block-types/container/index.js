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
import innerBorder from "./../../helpers/inner-border";

/**
 * Block Icon.
 */
import icon from "./../../icons/container.svg";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/container", {
	apiVersion: 2,
	title: _x("Container", "block title", "beer-blocks"),
	category: "beer-blocks",
	description: _x(
		"Bootstrap Containers wich provide a means to center and horizontally pad your site’s contents.",
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
	icon: <img src={icon} alt={_x("Container", "block title", "beer-blocks")} />,
	attributes: {
		allowedBlocks: {
			type: "array",
			default: [],
		},
		containerType: {
			type: "string",
			default: "container",
		},
		tagName: {
			type: "string",
			default: "div",
		},
		...spacing.attributes({
			breakpoints: true,
			paddingSides: ["top", "bottom"],
		}),
		...innerBorder.attributes(),
	},
	transforms: {
		from: [
			{
				type: "block",
				blocks: ["core/group"],
				transform: (attributes, innerBlocks) =>
					createBlock("beer-blocks/container", {}, innerBlocks),
			},
		],
	},
	edit,
	save,
});
