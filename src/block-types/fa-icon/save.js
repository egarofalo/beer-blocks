import { useBlockProps } from "@wordpress/block-editor";
import { BLOCK_LEVEL_ELEMENT } from "./../../helpers/fa-icons";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import colors from "../../helpers/colors";

const save = (props) => {
	const {
		attributes: { icon, htmlElementType, textAlign },
	} = props;

	const blockProps = useBlockProps.save({
		className:
			htmlElementType === BLOCK_LEVEL_ELEMENT
				? `has-text-align-${textAlign}`
				: "d-inline-block",
		style: {
			...typography.fontSizeCssVars(props, "fa-icon"),
			...typography.lineHeightCssVars(props, "fa-icon"),
			...colors.colorCssVars(props, "fa-icon"),
			...spacing.marginCssVars(props, "fa-icon"),
		},
	});

	const iconElem = (
		<div {...blockProps}>
			<i className={icon}></i>
		</div>
	);

	return iconElem;
};

export default save;
