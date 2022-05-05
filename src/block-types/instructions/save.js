import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import grid from "../../helpers/grid";
import spacing from "../../helpers/spacing";

const save = (props) => {
	const {
		attributes: { containerType, justifyContent, alignItems },
	} = props;

	const blockProps = useBlockProps.save({
		className: containerType,
		style: spacing.marginCssVars({ props, blockName: "instructions" }),
	});

	return (
		<div {...blockProps}>
			<ul className={`p-0 ${grid.getRowClass(justifyContent, alignItems)}`}>
				<InnerBlocks.Content />
			</ul>
		</div>
	);
};

export default save;
