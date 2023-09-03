import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import size from "../../helpers/size";
import blockAlignment from "../../helpers/block-alignment";
import colors from "../../helpers/colors";
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
		className: spacing.cssClasses(props).trimStart(),
		style: spacing.cssVars(props, "image"),
	});

	return (
		<figure {...blockProps}>
			<img
				className={`img-fluid d-block${size.cssClasses(props)}`}
				style={{
					...blockAlignment.styles(props),
					...size.cssVars(props, "image"),
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
					}${typography.cssClasses(props, "figcaption")}${colors.cssClasses(
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
