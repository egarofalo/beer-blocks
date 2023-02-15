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
import colors from "./../../helpers/colors";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import border from "./../../helpers/border";

/**
 * Block Icon.
 */
import icon from "../../icons/accordion-item.svg";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/accordion-item", {
	apiVersion: 2,
	title: _x("Accordion Item", "block title", "beer-blocks"),
	category: "beer-blocks",
	description: _x(
		"Create an accordion item.",
		"block description",
		"beer-blocks"
	),
	textdomain: "beer-blocks",
	parent: ["beer-blocks/accordion"],
	icon: (
		<img src={icon} alt={_x("Accordion Item", "block title", "beer-blocks")} />
	),
	attributes: {
		show: {
			type: "boolean",
			default: false,
		},
		headingLevel: {
			type: "string",
			default: 2,
		},
		headingTextAlign: {
			type: "string",
			default: "left",
		},
		headingContent: {
			type: "html",
			default: "",
		},
		...colors.attributes({ colorAttr: false }),
		...colors.attributes({ attrPrefix: "heading" }),
		...border.attributes({ attrPrefix: "heading", borderRadius: true }),
		...spacing.attributes({ attrPrefix: "heading", marginSides: false }),
		...typography.attributes({ attrPrefix: "heading", breakpoints: true }),
		...spacing.attributes({ attrPrefix: "body", marginSides: false }),
		id: {
			type: "string",
			default: undefined,
		},
		headingId: {
			type: "string",
			default: undefined,
		},
		parentId: {
			type: "string",
			default: undefined,
		},
		...spacing.attributes({ breakpoints: true }),
		...border.attributes({ borderRadius: true }),
	},
	usesContext: ["accordionId"],
	edit,
	save,
});
