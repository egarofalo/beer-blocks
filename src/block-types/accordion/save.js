import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";

const save = (props) => {
	const { clientId } = props;
	const blockProps = useBlockProps.save();

	return (
		<>
			<div {...blockProps}>
				<div
					className="accordion"
					id={`accordion-${clientId}`}
					style={spacing.styles(props.attributes)}
				>
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
};

export default save;
