import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const save = (props) => {
	const {
		attributes: { id, tabId },
	} = props;

	const blockProps = useBlockProps.save();

	return (
		<div
			id={id}
			className="tab-pane fade"
			role="tabpanel"
			aria-labelledby={tabId}
		>
			<div {...blockProps}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default save;
