import { useBlockProps } from "@wordpress/block-editor";
import { BLOCK_LEVEL_ELEMENT } from "./../../helpers/fa-icons";
import textAlignment from "./../../helpers/text-alignment";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import colors from "../../helpers/colors";
import htmlAttrs from "./../../helpers/html-attrs";

const save = (props) => {
	const {
		attributes: { icon, htmlElementType },
	} = props;

	const isBlockElement = htmlElementType === BLOCK_LEVEL_ELEMENT;

	const blockProps = useBlockProps.save({
		className: `${
			isBlockElement ? textAlignment.cssClasses(props) : "d-inline-block"
		}${spacing.cssClasses(props)}`.trimStart(),
		style: spacing.cssVars(props, "fa-icon"),
		...htmlAttrs.blockProps(props),
	});

	const iconElem = (
		<div {...blockProps}>
			<i
				className={`${icon}${colors.cssClasses(props)}${typography.cssClasses(
					props
				)}`}
				style={{
					...colors.cssVars(props, "fa-icon"),
					...typography.cssVars(props, "fa-icon"),
				}}
			></i>
		</div>
	);

	return iconElem;
};

export default save;
