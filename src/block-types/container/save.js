import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import colors from "../../helpers/colors";
import htmlAttrs from "./../../helpers/html-attrs";

const save = (props) => {
	const {
		attributes: { containerType, tagName: TagName },
	} = props;

	const blockProps = useBlockProps.save({
		className: `${containerType}${colors.cssClasses(props)}${spacing.cssClasses(
			props
		)}`,
		style: {
			...spacing.cssVars(props, "container"),
			...colors.cssVars(props, "container"),
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
