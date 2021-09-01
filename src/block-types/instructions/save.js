import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import grid from "../../helpers/grid";

const save = (props) => {
	const {
		attributes: { justifyContent, alignItems },
	} = props;

	const blockProps = useBlockProps.save({
		className: "container-fluid",
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
