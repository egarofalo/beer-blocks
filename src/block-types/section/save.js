import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import colors from "./../../helpers/colors";
import border from "./../../helpers/border";
import blockAlignment from "./../../helpers/block-alignment";
import size from "./../../helpers/size";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

const save = (props) => {
	const {
		attributes: { tagName: TagName },
	} = props;

	const blockProps = useBlockProps.save({
		className: `${colors.cssClasses(props)}${border.cssClasses(
			props,
		)}${blockAlignment.cssClasses(props)}${size.cssClasses(
			props,
		)}${spacing.cssClasses(props)}`.trimStart(),
		style: {
			...colors.cssVars(props, "section"),
			...border.cssVars(props, "section"),
			...size.cssVars(props, "section"),
			...spacing.cssVars(props, "section"),
		},
		...htmlAttrs.blockProps(props),
	});

	return (
		<TagName {...blockProps}>
			<InnerBlocks.Content />
		</TagName>
	);
};

export default save;
