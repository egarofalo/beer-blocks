import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "../../helpers/spacing";
import colors from "../../helpers/colors";
import htmlAttrs from "../../helpers/html-attrs";

const save = (props) => {
	const blockProps = useBlockProps.save({
		className: `${colors.cssClasses(props)}${spacing.cssClasses(
			props
		)}`.trimStart(),
		style: {
			...colors.cssVars(props, "grid"),
			...spacing.cssVars(props, "grid"),
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
