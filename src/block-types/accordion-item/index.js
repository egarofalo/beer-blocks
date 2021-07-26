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
// import "./style.scss";

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
import typography from "./../../helpers/typography";
import border from "./../../helpers/border";

/**
 * Block Icon.
 */
import icon from "../../icons/codevelopers.tech.icon";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("beer-blocks/accordion-item", {
	apiVersion: 2,
	icon,
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
		headingPadding: spacing.paddingAttribute(),
		headingPaddingVisualizer: spacing.visualizerAttribute(),
		headingColor: {
			type: "string",
		},
		headingBackground: {
			type: "string",
		},
		headingContent: {
			type: "html",
		},
		bodyPadding: spacing.paddingAttribute(),
		bodyPaddingVisualizer: spacing.visualizerAttribute(),
		bodyBackground: {
			type: "string",
		},
		id: {
			type: "string",
		},
		headingId: {
			type: "string",
		},
		parentId: {
			type: "string",
		},
		...spacing.attributes(),
		...typography.attributes(),
		...border.attributes(),
	},
	edit,
	save,
});
