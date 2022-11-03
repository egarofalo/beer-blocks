import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import dimension from "../../helpers/dimension";
import blockAlignment from "../../helpers/block-alignment";
import placeholder from "./../../images/placeholder-image.svg";

const save = (props) => {
	const {
		attributes: { imgId, imgUrl, imgAlt, figcaption },
	} = props;

	const blockProps = useBlockProps.save({
		style: spacing.marginCssVars({ props, blockName: "image" }),
	});

	return (
		<figure {...blockProps}>
			<img
				className="img-fluid d-block"
				style={{
					...blockAlignment.styles(props),
					...dimension.widthCssVars({
						props,
						blockName: "image",
					}),
					...dimension.heightCssVars({
						props,
						blockName: "image",
					}),
				}}
				alt={imgId > 0 ? imgAlt : __("Placeholder image", "beer-blocks")}
				src={imgId > 0 ? imgUrl : placeholder}
			/>

			{figcaption && (
				<RichText.Content tagName="figcaption" value={figcaption} />
			)}
		</figure>
	);
};

export default save;
