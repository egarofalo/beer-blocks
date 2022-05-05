import { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
} from "@wordpress/block-editor";
import { PanelBody, CardDivider, SelectControl } from "@wordpress/components";
import grid from "../../helpers/grid";
import spacing from "../../helpers/spacing";

const edit = (props) => {
	const {
		clientId,
		setAttributes,
		attributes: { containerType, justifyContent, alignItems },
	} = props;

	const blockProps = useBlockProps({
		className: containerType,
		style: spacing.marginCssVars({ props, blockName: "instructions" }),
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
					<SelectControl
						label={__("Container type", "beer-blocks")}
						value={containerType}
						options={grid.containerTypesOptions}
						onChange={(value) => setAttributes({ containerType: value })}
					/>

					<CardDivider />

					{grid.getRowControls(props)}
				</PanelBody>

				{spacing.breakpointsControls({ props })}
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
