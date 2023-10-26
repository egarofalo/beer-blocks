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
import flexbox from "../../helpers/flexbox";
import colors from "../../helpers/colors";
import spacing from "../../helpers/spacing";
import grid from "../../helpers/grid";
import htmlAttrs from "../../helpers/html-attrs";

const edit = (props) => {
	const {
		clientId,
		setAttributes,
		attributes: { containerType },
	} = props;

	const blockProps = useBlockProps({
		className: `${containerType}${colors.cssClasses(props)}${spacing.cssClasses(
			props
		)}`,
		style: {
			...colors.cssVars(props, "instructions"),
			...spacing.cssVars(props, "instructions"),
		},
		...htmlAttrs.blockProps(props),
	});

	const innerBlocksPropsConfig = [
		{
			className: `p-0 mb-0 row${flexbox.cssClasses(props)}`,
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

					{flexbox.controls({ props, panelBody: false })}
				</PanelBody>

				{colors.controls({ props })}
				{spacing.controls({
					props,
					paddingSides: false,
					marginSides: ["top", "bottom"],
				})}
				{htmlAttrs.controls({ props })}
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
