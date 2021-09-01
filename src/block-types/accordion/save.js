import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";

const save = (props) => {
	const {
		attributes: { id },
	} = props;

	const blockProps = useBlockProps.save();

	return (
		<>
			<div {...blockProps}>
				<div
					className="accordion"
					id={`accordion-${id}`}
					style={spacing.styles(props.attributes)}
				>
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
};

export default save;
