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
import textAlignment from "./../../helpers/text-alignment";
import colors from "./../../helpers/colors";
import size from "./../../helpers/size";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

/**
 * Block Icon.
 */
import icon from "./../../icons/header.svg";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/header", {
	apiVersion: 2,
	title: _x("Header", "block title", "beer-blocks"),
	category: "beer-blocks",
	description: _x(
		"Create header with custom typography, margin and padding.",
		"block description",
		"beer-blocks"
	),
	textdomain: "beer-blocks",
	icon: <img src={icon} alt={_x("Header", "block title", "beer-blocks")} />,
	attributes: {
		headingLevel: {
			type: "number",
			default: 2,
		},
		content: {
			type: "html",
		},
		placeholder: {
			type: "string",
			default: __("Write your header here...", "beer-blocks"),
		},
		...typography.attributes(),
		...textAlignment.attributesWithBreakpoints(),
		...colors.attributes(),
		...size.attributes({
			maxWidthAttr: true,
			heightAttr: false,
			autoHeightAttr: false,
		}),
		...spacing.attributes({ horizontalCenteringAttr: true }),
		...htmlAttrs.attributes(),
	},
	transforms: {
		from: [
			{
				type: "block",
				blocks: ["core/heading"],
				transform: (attributes) =>
					createBlock("beer-blocks/header", {
						...attributes,
						headingLevel: attributes.level,
					}),
			},
		],
	},
	edit,
	save,
});
