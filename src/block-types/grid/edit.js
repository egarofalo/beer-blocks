import {
	useBlockProps,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import colors from "../../helpers/colors";
import spacing from "./../../helpers/spacing";

const edit = (props) => {
	const blockProps = useBlockProps({
		className: `${colors.cssClasses(props)}${spacing.cssClasses(
			props
		)}`.trimStart(),
		style: {
			...colors.cssVars(props, "grid"),
			...spacing.cssVars(props, "grid"),
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
			<InspectorControls>
				{colors.controls({ props })}
				{spacing.controls({ props })}
			</InspectorControls>

			<div {...innerBlocksProps} />
		</>
	);
};

export default edit;
