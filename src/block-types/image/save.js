import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import size from "../../helpers/size";
import blockAlignment from "../../helpers/block-alignment";
import textAlignment from "../../helpers/text-alignment";
import colors from "../../helpers/colors";
import typography from "../../helpers/typography";
import placeholder from "./../../images/placeholder-image.svg";
import htmlAttrs from "./../../helpers/html-attrs";

const save = (props) => {
	const {
		attributes: { imgId, imgUrl, imgAlt, figcaption, removeFigcaption },
	} = props;

	const blockProps = useBlockProps.save({
		className: spacing.cssClasses(props).trimStart(),
		style: spacing.cssVars(props, "image"),
		...htmlAttrs.blockProps(props),
	});

	return (
		<figure {...blockProps}>
			<img
				className={`d-block img-fluid${size.cssClasses(
					props
				)}${blockAlignment.cssClasses(props)}`}
				style={size.cssVars(props, "image")}
				alt={imgId > 0 ? imgAlt : __("Placeholder image", "beer-blocks")}
				src={imgId > 0 ? imgUrl : placeholder}
			/>

			{!removeFigcaption && (
				<RichText.Content
					className={`d-block${textAlignment.cssClasses(
						props,
						"figcaption"
					)}${typography.cssClasses(props, "figcaption")}${colors.cssClasses(
						props,
						"figcaption"
					)}${spacing.cssClasses(props, "figcaption")}`}
					style={{
						...typography.styles(props, "figcaption"),
						...typography.cssVars(props, "image", "figcaption"),
						...colors.cssVars(props, "image", "figcaption"),
						...spacing.cssVars(props, "image", "figcaption"),
					}}
					tagName="figcaption"
					value={figcaption}
				/>
			)}
		</figure>
	);
};

export default save;
