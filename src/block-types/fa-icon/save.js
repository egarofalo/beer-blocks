import { useBlockProps } from "@wordpress/block-editor";
import { BLOCK_LEVEL_ELEMENT, INLINE_ELEMENT } from "./../../helpers/fa-icons";

const save = (props) => {
	const {
		attributes: {
			iconType,
			icon,
			iconSize,
			htmlElementType,
			textAlign,
			imgAlt,
			imgUrl,
			imgWidth,
			imgHeight,
		},
	} = props;

	const useAnImage = iconType === "image";

	const style = {
		...(!useAnImage && iconSize ? { fontSize: iconSize } : {}),
		...(useAnImage ? { width: imgWidth, height: imgHeight } : {}),
	};

	const blockProps = useBlockProps.save({
		...(htmlElementType === BLOCK_LEVEL_ELEMENT
			? {
					className: `has-text-align-${textAlign}${
						useAnImage ? " img-fluid" : ""
					}`,
			  }
			: {}),
		...(htmlElementType === INLINE_ELEMENT
			? {
					className: icon,
					style,
			  }
			: {}),
	});

	const imgElem =
		htmlElementType === BLOCK_LEVEL_ELEMENT ? (
			<img
				className="img-fluid"
				style={{ width: imgWidth, height: imgHeight }}
				alt={imgAlt}
				src={imgUrl}
			/>
		) : (
			<img alt={imgAlt} src={imgUrl} {...blockProps} />
		);

	const iconElem =
		htmlElementType === BLOCK_LEVEL_ELEMENT ? (
			<i className={icon} style={style}></i>
		) : (
			<i {...blockProps}></i>
		);

	const result = !useAnImage ? iconElem : imgElem;

	return htmlElementType === BLOCK_LEVEL_ELEMENT ? (
		<div {...blockProps}>{result}</div>
	) : (
		result
	);
};

export default save;
