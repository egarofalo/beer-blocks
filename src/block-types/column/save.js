import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import colors from "../../helpers/colors";
import grid from "../../helpers/grid";
import spacing from "../../helpers/spacing";

const save = (props) => {
	const {
		attributes: { sizing },
	} = props;

	const blockProps = useBlockProps.save({
		className: grid.getColClass(sizing),
		style: {
			...spacing.paddingCssVars(props, "column"),
			...spacing.marginCssVars(props, "column"),
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
