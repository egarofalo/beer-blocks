import { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import grid from "../../helpers/grid";

const edit = (props) => {
	const {
		clientId,
		setAttributes,
		attributes: { justifyContent, alignItems },
	} = props;

	const blockProps = useBlockProps({
		className: "container-fluid",
	});

	const innerBlocksPropsConfig = [
		{
			className: `p-0 ${grid.getRowClass(justifyContent, alignItems)}`,
		},
		{
			allowedBlocks: ["beer-blocks/instruction"],
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
				<PanelBody title={__("Instructions settings", "beer-blocks")}>
					{grid.getRowControls(props)}
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<ul {...innerBlocksProps} />

				<div className="button-block-appender__container">
					<InnerBlocks.ButtonBlockAppender />
				</div>
			</div>
		</>
	);
};

export default edit;
