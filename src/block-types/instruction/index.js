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
import grid from "./../../helpers/grid";
import spacing from "./../../helpers/spacing";
import typography from "../../helpers/typography";
import colors from "../../helpers/colors";
import size from "../../helpers/size";
import flexbox from "../../helpers/flexbox";

/**
 * Block Icon.
 */
import icon from "../../icons/instruction.svg";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/instruction", {
	apiVersion: 2,
	title: _x("Instruction", "block title", "beer-blocks"),
	category: "beer-blocks",
	description: _x(
		"Create a list item with a numeration, title and paragraph.",
		"block description",
		"beer-blocks"
	),
	textdomain: "beer-blocks",
	parent: ["beer-blocks/instructions"],
	icon: (
		<img src={icon} alt={_x("Instruction", "block title", "beer-blocks")} />
	),
	attributes: {
		id: {
			type: "string",
		},
		...grid.getColSizingAttribute(),
		...flexbox.attributes(),
		numeration: {
			type: "number",
			default: 1,
		},
		...colors.attributes({ attrPrefix: "numeration" }),
		...size.attributes({
			attrPrefix: "numeration",
			autoHeightAttr: false,
		}),
		numerationBorderRadius: {
			type: "string",
			default: "50%",
		},
		...flexbox.attributes({
			attrPrefix: "numeration",
			flexDirectionAttr: false,
		}),
		...colors.attributes({ colorAttr: false }),
		...spacing.attributes({
			marginSides: ["top", "bottom"],
		}),
		...typography.attributes({
			attrPrefix: "numeration",
			lineHeightAttr: false,
		}),
	},
	usesContext: ["instructionsId"],
	edit,
	save,
});
