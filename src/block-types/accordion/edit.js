import { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
} from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import "bootstrap/js/src/collapse";

const edit = (props) => {
	const {
		clientId,
		setAttributes,
		attributes: { id },
	} = props;
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(
		{},
		{
			allowedBlocks: ["beer-blocks/accordion-item"],
			renderAppender: InnerBlocks.ButtonBlockAppender,
		}
	);

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
				</div>
			)}
		</>
	);
};

export default edit;
