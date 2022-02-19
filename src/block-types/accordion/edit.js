import { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
} from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";

const edit = (props) => {
	const {
		clientId,
		setAttributes,
		attributes: { id },
	} = props;

	const blockProps = useBlockProps();

	const innerBlocksPropsConfig = [
		{},
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
		[]
	);

	return (
		<>
			<InspectorControls>{spacing.controls({ props })}</InspectorControls>

			{spacing.visualizer(
				props,
				<div {...blockProps}>
					<div
						className="accordion"
						id={`accordion-${id}`}
						style={spacing.styles(props.attributes)}
					>
						<div {...innerBlocksProps} />
					</div>

					<div className="button-block-appender__container">
						<InnerBlocks.ButtonBlockAppender />
					</div>
				</div>
			)}
		</>
	);
};

export default edit;
