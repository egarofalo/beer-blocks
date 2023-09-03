import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import flexbox from "../../helpers/flexbox";

const save = (props) => {
	const blockProps = useBlockProps.save({
		className: `row${flexbox.cssClasses(props)}`,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
