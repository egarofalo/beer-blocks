import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import grid from "../../helpers/grid";
import spacing from "../../helpers/spacing";

const save = (props) => {
	const {
		attributes: { sizing },
	} = props;

	const blockProps = useBlockProps.save({
		className: grid.getColClass(sizing),
		style: {
			...spacing.paddingCssVars({ props, blockName: "column" }),
			...spacing.marginCssVars({ props, blockName: "column" }),
		},
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
