import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import colors from "../../helpers/colors";
import grid from "../../helpers/grid";
import spacing from "../../helpers/spacing";
import htmlAttrs from "../../helpers/html-attrs";

const save = (props) => {
	const blockProps = useBlockProps.save({
		className: `${grid.getColSizingClasses({
			props,
		})}${colors.cssClasses(props)}${spacing.cssClasses(props)}`,
		style: {
			...spacing.cssVars(props, "column"),
			...colors.cssVars(props, "column"),
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
