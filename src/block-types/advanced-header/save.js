import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import colors from "./../../helpers/colors";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

const save = (props) => {
	const blockProps = useBlockProps.save({
		className: `${spacing.cssClasses(props)}${colors.cssClasses(
			props
		)}`.trimStart(),
		style: {
			...colors.cssVars(props, "advanced-header"),
			...spacing.cssVars(props, "advanced-header"),
		},
		...htmlAttrs.blockProps(props),
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
