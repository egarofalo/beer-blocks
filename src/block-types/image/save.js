import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import dimension from "../../helpers/dimension";
import blockAlignment from "../../helpers/block-alignment";
import typography from "../../helpers/typography";
import placeholder from "./../../images/placeholder-image.svg";

const save = (props) => {
	const {
		attributes: {
			imgId,
			imgUrl,
			imgAlt,
			figcaption,
			removeFigcaption,
			figcaptionTextAlign,
		},
	} = props;

	const blockProps = useBlockProps.save({
		style: spacing.marginCssVars(props, "image"),
	});

	return (
		<figure {...blockProps}>
			<img
				className="img-fluid d-block"
				style={{
					...blockAlignment.styles(props),
					...dimension.widthCssVars(props, "image"),
					...dimension.heightCssVars(props, "image"),
				}}
				alt={imgId > 0 ? imgAlt : __("Placeholder image", "beer-blocks")}
				src={imgId > 0 ? imgUrl : placeholder}
			/>

			{!removeFigcaption && (
				<RichText.Content
					className={`d-block${
						figcaptionTextAlign !== undefined
							? ` text-${figcaptionTextAlign}`
							: ""
					}`}
					style={{
						...typography.fontFamilyStyles(props, "figcaption"),
						...typography.fontWeightStyles(props, "figcaption"),
						...typography.fontSizeCssVars(props, "image", "figcaption"),
						...typography.lineHeightCssVars(props, "image", "figcaption"),
					}}
					tagName="figcaption"
					value={figcaption}
				/>
			)}
		</figure>
	);
};

export default save;
