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

/**
 * Block Icon.
 */
import icon from "../../icons/instruction.svg";
import typography from "../../helpers/typography";

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
	supports: {
		color: {
			background: true,
			gradients: false,
			text: false,
		},
	},
	icon: (
		<img src={icon} alt={_x("Instruction", "block title", "beer-blocks")} />
	),
	attributes: {
		id: {
			type: "string",
		},
		stackedContents: {
			type: "object",
			default: grid.breakpointsAttributeValue(false),
		},
		sizing: {
			type: "object",
			default: grid.getColSizingAttributes({
				xsSizingType: grid.autoSizingEqualWidth,
			}),
		},
		justifyContent: {
			type: "object",
			default: grid.getJustifyContentAttributes(),
		},
		alignItems: {
			type: "object",
			default: grid.getAlignItemsAttributes(),
		},
		numeration: {
			type: "number",
			default: 1,
		},
		numerationBackground: {
			type: "string",
			default: "#eaeaea",
		},
		numerationColor: {
			type: "string",
			default: "",
		},
		numerationWidth: {
			type: "string",
			default: "50px",
		},
		numerationWidthUnit: {
			type: "string",
			default: "px",
		},
		numerationHeight: {
			type: "string",
			default: "50px",
		},
		numerationHeightUnit: {
			type: "string",
			default: "px",
		},
		numerationBorderRadius: {
			type: "string",
			default: "50%",
		},
		numerationBorderRadiusUnit: {
			type: "string",
			default: "%",
		},
		numerationHorizontalAlignment: {
			type: "string",
			default: "center",
		},
		numerationVerticalAlignment: {
			type: "string",
			default: "center",
		},
		...spacing.attributes({ breakpoints: true }),
		...typography.attributes({
			fontSize: "18px",
			attrPrefix: "numeration",
			breakpoints: true,
			breakpointsBehaviorAttrPrefix: "numeration",
			includeLineHeightAttr: false,
		}),
	},
	usesContext: ["instructionsId"],
	edit,
	save,
});
