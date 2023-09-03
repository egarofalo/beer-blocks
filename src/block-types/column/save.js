import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import colors from "../../helpers/colors";
import grid from "../../helpers/grid";
import spacing from "../../helpers/spacing";

const save = (props) => {
	const blockProps = useBlockProps.save({
		className: `${grid.getColSizingClasses({
			props,
		})}${colors.cssClasses(props)}${spacing.cssClasses(props)}`,
		style: {
			...spacing.cssVars(props, "column"),
			...colors.cssVars(props, "column"),
		},
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
