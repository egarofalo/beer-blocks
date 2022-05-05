import { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
} from "@wordpress/block-editor";
import spacing, { PaddingVisualizer } from "./../../helpers/spacing";

const edit = (props) => {
	const {
		clientId,
		setAttributes,
		attributes: { id },
	} = props;

	const blockProps = useBlockProps({
		style: {
			...spacing.paddingCssVars({ props, blockName: "accordion" }),
			...spacing.marginCssVars({ props, blockName: "accordion" }),
		},
	});

	const innerBlocksPropsConfig = [
		{
			id: `accordion-${id}`,
			className: "accordion",
		},
		{
			allowedBlocks: ["beer-blocks/accordion-item"],
			renderAppender: false,
		},
	];

	const innerBlocksProps = useInnerBlocksProps
		? useInnerBlocksProps(...innerBlocksPropsConfig)
		: __useInnerBlocksProps(...innerBlocksPropsConfig);

	useEffect(
		() =>
			setAttributes({
				id: clientId,
			}),
		[clientId]
	);

	return (
		<>
			<InspectorControls>
				{spacing.breakpointsControls({ props })}
			</InspectorControls>

			<PaddingVisualizer blockProps={props}>
				<div {...blockProps}>
					<div {...innerBlocksProps} />

					<div className="button-block-appender__container">
						<InnerBlocks.ButtonBlockAppender />
					</div>
				</div>
			</PaddingVisualizer>
		</>
	);
};

export default edit;
