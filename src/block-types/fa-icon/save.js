import { useBlockProps } from "@wordpress/block-editor";
import { BLOCK_LEVEL_ELEMENT, INLINE_ELEMENT } from "./../../helpers/fa-icons";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import dimension from "./../../helpers/dimension";

const save = (props) => {
	const {
		attributes: { iconType, icon, htmlElementType, textAlign, imgAlt, imgUrl },
	} = props;

	const useAnImage = iconType === "image";

	let blockPropsParam = { style: spacing.styles(props) };

	const dimensionCssVars = {
		...dimension.widthCssVars(props, "fa-icon", "img"),
		...dimension.heightCssVars(props, "fa-icon", "img"),
	};

	if (useAnImage) {
		blockPropsParam = {
			...blockPropsParam,
			style: {
				...blockPropsParam.style,
				...(htmlElementType === INLINE_ELEMENT ? dimensionCssVars : {}),
			},
			className:
				htmlElementType === BLOCK_LEVEL_ELEMENT
					? `has-text-align-${textAlign}`
					: "img-fluid wp-block-beer-blocks-fa-icon-image",
		};
	} else {
		blockPropsParam = {
			...blockPropsParam,
			className:
				htmlElementType === BLOCK_LEVEL_ELEMENT
					? `has-text-align-${textAlign}`
					: icon,
			style: {
				...blockPropsParam.style,
				...typography.fontSizeCssVars(props, "fa-icon", "icon"),
				...typography.lineHeightCssVars(props, "fa-icon", "icon"),
			},
		};
	}

	const blockProps = useBlockProps.save(blockPropsParam);

	const imgElem =
		htmlElementType === BLOCK_LEVEL_ELEMENT ? (
			<div {...blockProps}>
				<img
					className="img-fluid wp-block-beer-blocks-fa-icon-image"
					alt={imgAlt}
					src={imgUrl}
					style={{
						...dimension.widthCssVars(props, "fa-icon", "img"),
						...dimension.heightCssVars(props, "fa-icon", "img"),
					}}
				/>
			</div>
		) : (
			<img alt={imgAlt} src={imgUrl} {...blockProps} />
		);

	const iconElem =
		htmlElementType === BLOCK_LEVEL_ELEMENT ? (
			<div {...blockProps}>
				<i className={icon}></i>
			</div>
		) : (
			<i {...blockProps}></i>
		);

	return !useAnImage ? iconElem : imgElem;
};

export default save;
