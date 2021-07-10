import { useBlockProps } from "@wordpress/block-editor";
import { BLOCK_LEVEL_ELEMENT, INLINE_ELEMENT } from "./../../helpers/fa-icons";

const save = (props) => {
	const {
		attributes: { icon, iconSize, htmlElementType, textAlign },
	} = props;

	const blockProps = useBlockProps.save({
		...(htmlElementType === BLOCK_LEVEL_ELEMENT
			? {
					className: `has-text-align-${textAlign}`,
			  }
			: {}),
		...(htmlElementType === INLINE_ELEMENT
			? {
					className: icon,
			  }
			: {}),
		style: {
			...(iconSize ? { fontSize: iconSize } : {}),
		},
	});

	return htmlElementType === BLOCK_LEVEL_ELEMENT ? (
		<div {...blockProps}>
			<i className={icon}></i>
		</div>
	) : (
		<i {...blockProps}></i>
	);
};

export default save;
