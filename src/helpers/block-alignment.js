import { BlockAlignmentToolbar } from "@wordpress/block-editor";
import { camelCase } from "lodash";

// Posible values
export const values = ["left", "center", "right"];

// Returns block alignment attribute
export const attribute = ({
	attrPrefix = "",
	defaultValue = "center",
} = {}) => ({
	[camelCase(`${attrPrefix}-alignment`)]: {
		type: "string",
		default: defaultValue,
	},
});

// Returns block alignment toolbar
export const toolbar = ({ props, attrPrefix = "" }) => {
	const attrName = camelCase(`${attrPrefix}-alignment`);

	const {
		setAttributes,
		attributes: { [attrName]: align },
	} = props;

	return (
		<BlockAlignmentToolbar
			value={align}
			onChange={(value) =>
				setAttributes({
					[attrName]: value,
				})
			}
		/>
	);
};

// Returns styles
export const styles = (props, attrPrefix = "") => {
	const {
		attributes: { [camelCase(`${attrPrefix}-alignment`)]: alignment },
	} = props;

	switch (alignment) {
		case "left":
			return { marginLeft: 0, marginRight: "auto" };
		case "right":
			return { marginLeft: "auto", marginRight: 0 };
		case "center":
		default:
			return { marginLeft: "auto", marginRight: "auto" };
	}
};

// Returns block alignment css class
export const cssClass = (props, attrPrefix) => {
	const {
		attributes: { [camelCase(`${attrPrefix}-alignment`)]: alignment },
	} = props;

	switch (alignment) {
		case "left":
			return "mr-auto";
		case "right":
			return "ml-auto";
		case "center":
		default:
			return "mx-auto";
	}
};

export default { values, attribute, toolbar, styles, cssClass };
