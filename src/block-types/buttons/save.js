import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const save = () => {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
