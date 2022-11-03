import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import typography from "./../../helpers/typography";
import border from "./../../helpers/border";
import borderRadius from "./../../helpers/border-radius";
import spacing from "./../../helpers/spacing";
import colors from "./../../helpers/colors";

const save = (props) => {
	const {
		attributes: {
			content,
			url,
			opensInNewTab,
			rel,
			align,
			variant,
			outline,
			size,
			blockLevel,
		},
	} = props;

	const blockStyle = {
		...spacing.paddingCssVars({ props, blockName: "button" }),
		...spacing.marginCssVars({ props, blockName: "button" }),
		...(variant === ""
			? {
					...border.cssVars({ props, blockName: "button" }),
					...borderRadius.styles(props),
					...colors.cssVars({ props, blockName: "button" }),
					...typography.fontSizeCssVars({ props, blockName: "button" }),
					...typography.lineHeightCssVars({ props, blockName: "button" }),
			  }
			: {}),
		...(align ? { textAlign: align } : {}),
	};

	const btnStyle = {
		...typography.fontFamilyStyles(props),
		...typography.fontWeightStyles(props),
		...(blockLevel ? { textAlign: "center" } : { display: "inline-block" }),
	};

	const className =
		variant !== ""
			? `btn btn-${outline ? "outline-" : ""}${variant}${
					size ? ` ${size}` : ""
			  }${blockLevel ? " btn-block" : ""}`
			: "wp-beer-blocks-btn-custom-styles";

	const blockProps = useBlockProps.save({ style: blockStyle });

	return (
		<div {...blockProps}>
			<RichText.Content
				className={className}
				style={btnStyle}
				tagName="a"
				href={url}
				rel={rel}
				value={content}
				target={opensInNewTab ? "_blank" : "_self"}
			/>
		</div>
	);
};

export default save;
