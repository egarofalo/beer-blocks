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
import flexbox from "../../helpers/flexbox";
import colors from "../../helpers/colors";
import spacing from "../../helpers/spacing";

/**
 * Block Icon.
 */
import icon from "../../icons/instructions.svg";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/instructions", {
	apiVersion: 2,
	title: _x("Instructions", "block title", "beer-blocks"),
	category: "beer-blocks",
	description: _x(
		"Create an instructions list.",
		"block description",
		"beer-blocks"
	),
	textdomain: "beer-blocks",
	icon: (
		<img src={icon} alt={_x("Instructions", "block title", "beer-blocks")} />
	),
	attributes: {
		id: {
			type: "string",
		},
		containerType: {
			type: "string",
			default: "container",
		},
		...flexbox.attributes({ flexDirectionAttr: false }),
		...colors.attributes({ colorAttr: false }),
		...spacing.attributes({
			paddingSides: false,
			marginSides: ["top", "bottom"],
		}),
	},
	providesContext: {
		instructionsId: "id",
	},
	edit,
	save,
});
