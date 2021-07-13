import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";

const save = (props) => {
	const {
		attributes: { alertType },
	} = props;

	const blockProps = useBlockProps.save({
		className: alertType,
		style: {
			...spacing.styles(props.attributes),
		},
	});

	return (
		<div {...blockProps} role="alert">
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
