import { BlockAlignmentToolbar } from "@wordpress/block-editor";
import { camelCase } from "lodash";

export const values = ["left", "center", "right"];

export const attribute = ({
	attrPrefix = "",
	defaultValue = "center",
} = {}) => ({
	[camelCase(`${attrPrefix}-alignment`)]: {
		type: "string",
		default: defaultValue,
	},
});

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

export default { values, attribute, toolbar, styles };
