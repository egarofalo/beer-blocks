import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import border from "./../../helpers/border";
import borderRadius from "./../../helpers/border-radius";
import spacing from "./../../helpers/spacing";

const save = (props) => {
	const {
		attributes: { id, tabId, selected },
	} = props;

	const blockProps = useBlockProps.save({
		style: {
			...border.styles(props),
			...borderRadius.styles(props),
			...spacing.styles(props),
		},
	});

	return (
		<div
			id={id}
			className={`tab-pane fade${selected ? " show active" : ""}`}
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
