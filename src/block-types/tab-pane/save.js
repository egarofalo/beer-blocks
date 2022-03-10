import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import border from "./../../helpers/border";
import borderRadius from "./../../helpers/border-radius";
import spacing from "./../../helpers/spacing";

const save = (props) => {
	const {
		attributes: { id, tabId },
	} = props;

	const blockProps = useBlockProps.save({
		style: {
			...border.styles(props.attributes),
			...borderRadius.styles(props.attributes),
			...spacing.styles(props.attributes),
		},
	});

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
