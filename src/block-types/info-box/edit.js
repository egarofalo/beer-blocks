import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
} from "@wordpress/block-editor";
import { BLOCK_LEVEL_ELEMENT } from "./../../helpers/fa-icons";
import spacing from "./../../helpers/spacing";

const edit = (props) => {
	const blockProps = useBlockProps({
		style: {
			...spacing.styles(props.attributes),
		},
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			...blockProps,
		},
		{
			renderAppender: false,
			templateLock: "all",
			template: [
				[
					"beer-blocks/fa-icon",
					{
						placeholder: __("Chose an icon...", "beer-blocks"),
						htmlElementType: BLOCK_LEVEL_ELEMENT,
						textAlign: "center",
						iconSize: "2rem",
					},
				],
				[
					"beer-blocks/paragraph",
					{
						placeholder: __("Write prefix here...", "beer-blocks"),
						lineHeight: 1.1,
						marginTop: "0.5rem",
						textAlign: "center",
					},
				],
				[
					"beer-blocks/header",
					{
						placeholder: __("Write title here...", "beer-blocks"),
						lineHeight: 1.1,
						marginTop: "0.5rem",
						textAlign: "center",
					},
				],
				[
					"beer-blocks/separator",
					{
						height: 2,
						align: "center",
						marginTop: "0.5rem",
					},
				],
				[
					"beer-blocks/paragraph",
					{
						placeholder: __("Write short description here...", "beer-blocks"),
						lineHeight: 1.1,
						marginTop: "0.5rem",
						textAlign: "center",
					},
				],
			],
		}
	);

	return (
		<>
			<InspectorControls>{spacing.controls({ props })}</InspectorControls>

			{spacing.visualizer(props, <div {...innerBlocksProps} />)}
		</>
	);
};

export default edit;
