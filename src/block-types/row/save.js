import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import grid from "../../helpers/grid";

const save = (props) => {
	const {
		attributes: { justifyContent, alignItems },
	} = props;

	const blockProps = useBlockProps.save({
		className: grid.getRowClass(justifyContent, alignItems),
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
