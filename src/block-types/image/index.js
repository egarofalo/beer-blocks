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
import blockAlignment from "./../../helpers/block-alignment";
import size from "../../helpers/size";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import colors from "./../../helpers/colors";

/**
 * Block Icon.
 */
import icon from "./../../icons/image.svg";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/image", {
	apiVersion: 2,
	title: _x("Image", "block title", "beer-blocks"),
	category: "beer-blocks",
	description: _x(
		"Create a responsive image.",
		"block description",
		"beer-blocks"
	),
	textdomain: "beer-blocks",
	icon: <img src={icon} alt={_x("Image", "block title", "beer-blocks")} />,
	attributes: {
		imgId: {
			type: "number",
			default: 0,
		},
		imgAlt: {
			type: "string",
			default: "",
		},
		imgUrl: {
			type: "string",
			default: "",
		},
		imgNaturalWidth: {
			type: "number",
			default: 200,
		},
		imgNaturalHeight: {
			type: "number",
			default: 0,
		},
		showRemoveFigcaptionToggleField: {
			type: "boolean",
			default: true,
		},
		figcaption: {
			type: "html",
		},
		removeFigcaption: {
			type: "boolean",
			default: false,
		},
		figcaptionTextAlign: {
			type: "string",
			default: "center",
		},
		...blockAlignment.attribute(),
		...size.attributes({
			widthDefaultValue: {
				xs: "200px",
			},
			autoHeightDefaultValue: {
				xs: true,
			},
		}),
		...spacing.attributes({ paddingSides: false }),
		...typography.attributes({ attrPrefix: "figcaption" }),
		...colors.attributes({
			attrPrefix: "figcaption",
			backgroundAttr: false,
		}),
		...spacing.attributes({
			attrPrefix: "figcaption",
			paddingSides: false,
			marginSides: ["top", "bottom"],
		}),
	},
	edit,
	save,
});
