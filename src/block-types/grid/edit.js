import {
	useBlockProps,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";

const edit = (props) => {
	const blockProps = useBlockProps({
		style: {
			...spacing.styles(props.attributes),
		},
	});

	const innerBlocksPropsConfig = [
		{ ...blockProps },
		{
			renderAppender: false,
			template: [
				[
					"beer-blocks/container",
					{
						allowedBlocks: ["beer-blocks/row"],
					},
					[
						[
							"beer-blocks/row",
							{},
							[["beer-blocks/column"], ["beer-blocks/column"]],
						],
					],
				],
			],
		},
	];

	const innerBlocksProps = useInnerBlocksProps
		? useInnerBlocksProps(...innerBlocksPropsConfig)
		: __useInnerBlocksProps(...innerBlocksPropsConfig);

	return (
		<>
			<InspectorControls>{spacing.controls({ props })}</InspectorControls>

			{spacing.visualizer(props, <div {...innerBlocksProps} />)}
		</>
	);
};

export default edit;
