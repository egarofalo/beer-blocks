import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";

const edit = (props) => {
	const blockProps = useBlockProps({
		style: {
			...spacing.styles(props.attributes),
		},
	});

	const templates = [
		[
			"beer-blocks/header",
			{
				placeholder: __("Write title here...", "beer-blocks"),
				textAlign: "center",
			},
		],
		[
			"beer-blocks/separator",
			{
				height: 2,
				marginTop: "1rem",
				marginBottom: "1rem",
				align: "center",
			},
		],
		[
			"beer-blocks/paragraph",
			{
				placeholder: __("Write subtitle here...", "beer-blocks"),
				textAlign: "center",
			},
		],
	];

	return (
		<>
			<InspectorControls>{spacing.controls({ props })}</InspectorControls>

			{spacing.visualizer(
				props,
				<div {...blockProps}>
					<InnerBlocks template={templates} templateLock="all" />
				</div>
			)}
		</>
	);
};

export default edit;
