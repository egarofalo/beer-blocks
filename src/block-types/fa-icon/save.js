import { useBlockProps } from "@wordpress/block-editor";
import { BLOCK_LEVEL_ELEMENT, INLINE_ELEMENT } from "./../../helpers/fa-icons";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";

const save = (props) => {
	const {
		attributes: {
			iconType,
			icon,
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
		...(!useAnImage
			? {
					...typography.fontSizeCssVars({
						props,
						blockName: "fa-icon",
						attrPrefix: "icon",
						breakpoints: true,
					}),
					...typography.lineHeightCssVars({
						props,
						blockName: "fa-icon",
						attrPrefix: "icon",
						breakpoints: true,
					}),
			  }
			: {
					...(imgWidth ? { width: imgWidth } : {}),
					...(imgHeight ? { height: imgHeight } : {}),
			  }),
	};

	const blockProps = useBlockProps.save({
		...(htmlElementType === BLOCK_LEVEL_ELEMENT
			? {
					className: `has-text-align-${textAlign}`,
					style: spacing.styles(props.attributes),
			  }
			: {}),
		...(htmlElementType === INLINE_ELEMENT
			? {
					className: useAnImage ? "img-fluid" : icon,
					style: {
						...style,
						...spacing.styles(props.attributes),
					},
			  }
			: {}),
	});

	const imgElem =
		htmlElementType === BLOCK_LEVEL_ELEMENT ? (
			<div {...blockProps}>
				<img className="img-fluid" style={style} alt={imgAlt} src={imgUrl} />
			</div>
		) : (
			<img alt={imgAlt} src={imgUrl} {...blockProps} />
		);

	const iconElem =
		htmlElementType === BLOCK_LEVEL_ELEMENT ? (
			<div {...blockProps}>
				<i className={icon} style={style}></i>
			</div>
		) : (
			<i {...blockProps}></i>
		);

	return !useAnImage ? iconElem : imgElem;
};

export default save;
