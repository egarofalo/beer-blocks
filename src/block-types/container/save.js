import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import colors from "../../helpers/colors";
import border from "./../../helpers/border";
import size from "./../../helpers/size";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

const save = (props) => {
	const {
		attributes: { containerType, tagName: TagName },
	} = props;

	const blockProps = useBlockProps.save({
		className: `${containerType}${colors.cssClasses(props)}${border.cssClasses(
			props
		)}${size.cssClasses(props)}${spacing.cssClasses(props)}`,
		style: {
			...colors.cssVars(props, "container"),
			...border.cssVars(props, "container"),
			...size.cssVars(props, "container"),
			...spacing.cssVars(props, "container"),
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
