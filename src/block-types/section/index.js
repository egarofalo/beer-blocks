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
import colors from "./../../helpers/colors";
import border from "./../../helpers/border";
import size from "./../../helpers/size";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

/**
 * Block Icon.
 */
import icon from "./../../icons/section.svg";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/section", {
	apiVersion: 2,
	title: _x("Section", "block title", "beer-blocks"),
	category: "beer-blocks",
	description: _x(
		"Create a section element with custom paddings and margins.",
		"block description",
		"beer-blocks"
	),
	textdomain: "beer-blocks",
	icon: <img src={icon} alt={_x("Section", "block title", "beer-blocks")} />,
	attributes: {
		tagName: {
			type: "string",
			default: "section",
		},
		...colors.attributes({ colorAttr: false }),
		...border.attributes({ borderRadius: true }),
		...size.attributes({ maxWidthAttr: true, minHeightAttr: true }),
		...spacing.attributes({ horizontalCenteringAttr: true }),
		...htmlAttrs.attributes(),
	},
	transforms: {
		from: [
			{
				type: "block",
				blocks: ["core/group"],
				transform: (attributes, innerBlocks) =>
					createBlock("beer-blocks/section", attributes, innerBlocks),
			},
		],
	},
	edit,
	save,
});
