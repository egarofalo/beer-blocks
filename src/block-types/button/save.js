import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import textAlignment from "./../../helpers/text-alignment";
import typography from "./../../helpers/typography";
import border from "./../../helpers/border";
import spacing from "./../../helpers/spacing";
import statuses from "./../../helpers/statuses";
import colors from "./../../helpers/colors";
import htmlAttrs from "./../../helpers/html-attrs";

const save = (props) => {
	const {
		attributes: {
			content,
			url,
			opensInNewTab,
			rel,
			variant,
			outline,
			size,
			blockLevel,
		},
	} = props;

	const blockStyle = spacing.marginCssVars(props, "button");
	const blockClassName = `${
		!blockLevel ? textAlignment.cssClasses(props) : ""
	}${spacing.marginCssClasses(props)}`.trimStart();

	const btnStyle = {
		...spacing.paddingCssVars(props, "button"),
		...(!variant
			? {
					...colors.cssVars(props, "button"),
					...border.cssVars(props, "button"),
					...statuses.cssVars(props, "button"),
					...typography.cssVars(props, "button"),
					...typography.styles(props),
			  }
			: {}),
	};

	const btnDisplayClass = blockLevel
		? `text-center ${variant ? "btn-block" : "d-block"}`
		: "d-inline-block";

	const btnClassName = `${
		variant
			? `btn btn-${outline ? "outline-" : ""}${variant}${
					size ? ` ${size}` : ""
			  } ${btnDisplayClass}`
			: `wp-beer-blocks-btn-custom-styles ${btnDisplayClass}${colors.cssClasses(
					props
			  )}${typography.cssClasses(props)}${border.cssClasses(
					props
			  )}${statuses.cssClasses(props)}`
	}${spacing.paddingCssClasses(props)}`;

	const blockProps = useBlockProps.save({
		className: blockClassName,
		style: blockStyle,
		...htmlAttrs.blockProps(props),
	});

	return (
		<div {...blockProps}>
			<RichText.Content
				className={btnClassName}
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
