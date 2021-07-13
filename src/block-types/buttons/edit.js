import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const edit = () => {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<InnerBlocks allowedBlocks={["beer-blocks/button"]} />
		</div>
	);
};

export default edit;
