import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

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

	const blockProps = useBlockProps.save({
		className: `btn btn-${outline ? "outline-" : ""}${variant}${
			size ? ` ${size}` : ""
		}${blockLevel ? " btn-block" : ""}`,
	});

	return (
		<RichText.Content
			{...blockProps}
			tagName="a"
			href={url}
			rel={rel}
			value={content}
			target={opensInNewTab ? "_blank" : "_self"}
		/>
	);
};

export default save;
