import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import typography from "./../../helpers/typography";
import border from "./../../helpers/border";
import borderRadius from "./../../helpers/border-radius";
import spacing from "./../../helpers/spacing";
import statuses from "./../../helpers/statuses";
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
		...spacing.marginCssVars({ props, blockName: "button" }),
		...(!blockLevel ? { textAlign: align } : {}),
	};

	const btnStyle = {
		...spacing.paddingCssVars({ props, blockName: "button" }),
		...(!blockLevel
			? { display: "inline-block" }
			: { display: "block", textAlign: "center" }),
		...(!variant
			? {
					...typography.fontSizeCssVars({ props, blockName: "button" }),
					...typography.lineHeightCssVars({ props, blockName: "button" }),
					...colors.cssVars({ props, blockName: "button" }),
					...border.cssVars({ props, blockName: "button" }),
					...statuses.cssVars({ props, blockName: "button" }),
					...borderRadius.styles(props),
					...typography.fontFamilyStyles(props),
					...typography.fontWeightStyles(props),
			  }
			: {}),
	};

	const className = variant
		? `btn btn-${outline ? "outline-" : ""}${variant}${size ? ` ${size}` : ""}${
				blockLevel ? " btn-block" : ""
		  }`
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
