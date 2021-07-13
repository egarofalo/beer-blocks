import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import grid from "../../helpers/grid";

const save = (props) => {
	const {
		attributes: { sizing },
	} = props;

	const blockProps = useBlockProps.save({
		className: grid.getColClass(sizing),
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
