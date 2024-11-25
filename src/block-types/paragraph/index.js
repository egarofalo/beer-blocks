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
import typography from "./../../helpers/typography";
import blockAlignment from "./../../helpers/block-alignment";
import textAlignment from "./../../helpers/text-alignment";
import colors from "./../../helpers/colors";
import size from "./../../helpers/size";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

/**
 * Block Icon.
 */
import icon from "./../../icons/paragraph.svg";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/paragraph", {
	apiVersion: 2,
	title: _x("Paragraph", "block title", "beer-blocks"),
	category: "beer-blocks",
	description: _x(
		"Create paragraph with custom typography, margin and padding.",
		"block description",
		"beer-blocks",
	),
	textdomain: "beer-blocks",
	icon: <img src={icon} alt={_x("Paragraph", "block title", "beer-blocks")} />,
	attributes: {
		content: {
			type: "html",
		},
		placeholder: {
			type: "string",
			default: __("Write your paragraph here...", "beer-blocks"),
		},
		...typography.attributes(),
		...blockAlignment.attributesWithBreakpoints(),
		...textAlignment.attributesWithBreakpoints(),
		...colors.attributes(),
		...size.attributes({
			maxWidthAttr: true,
			heightAttr: false,
			autoHeightAttr: false,
		}),
		...spacing.attributes(),
		...htmlAttrs.attributes(),
	},
	transforms: {
		from: [
			{
				type: "block",
				blocks: ["core/paragraph"],
				transform: (attributes) =>
					createBlock("beer-blocks/paragraph", {
						...attributes,
					}),
			},
		],
	},
	edit,
	save,
});
