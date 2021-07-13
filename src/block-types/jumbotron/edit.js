import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";

const edit = (props) => {
	const blockProps = useBlockProps({
		className: "jumbotron",
		style: {
			...spacing.styles(props.attributes),
		},
	});

	return (
		<>
			<InspectorControls>{spacing.controls({ props })}</InspectorControls>

			<div {...blockProps}>
				<InnerBlocks />
			</div>
		</>
	);
};

export default edit;
