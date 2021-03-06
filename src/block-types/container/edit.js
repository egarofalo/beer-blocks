import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
	InnerBlocks,
} from "@wordpress/block-editor";
import { SelectControl, PanelBody } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import spacing, { PaddingVisualizer } from "./../../helpers/spacing";
import tags from "./../../helpers/sectioning-tags";
import innerBorder from "../../helpers/inner-border";
import grid from "../../helpers/grid";

const edit = (props) => {
	const {
		attributes: { containerType, tagName: TagName, allowedBlocks },
		setAttributes,
		clientId,
	} = props;

	const { hasChildBlocks } = useSelect(
		(select) => {
			const { getBlockOrder } = select("core/block-editor");

			return {
				hasChildBlocks: getBlockOrder(clientId).length > 0,
			};
		},
		[clientId]
	);

	const blockProps = useBlockProps({
		className: containerType,
		style: {
			...spacing.paddingCssVars({ props, blockName: "container" }),
			...spacing.marginCssVars({ props, blockName: "container" }),
		},
	});

	const innerBlocksPropsConfig = [
		{
			...blockProps,
		},
		{
			renderAppender: false,
			...(allowedBlocks.length > 0
				? {
						allowedBlocks,
				  }
				: {}),
		},
	];

	const innerBlocksProps = useInnerBlocksProps
		? useInnerBlocksProps(...innerBlocksPropsConfig)
		: __useInnerBlocksProps(...innerBlocksPropsConfig);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Container settings", "beer-blocks")}>
					<SelectControl
						label={__("Container type", "beer-blocks")}
						value={containerType}
						options={grid.containerTypesOptions}
						onChange={(value) => setAttributes({ containerType: value })}
					/>

					<SelectControl
						label={__("HTML Tag", "beer-blocks")}
						options={[
							...tags.map((tag) => ({
								label: `<${tag}>`,
								value: tag,
							})),
						]}
						value={TagName}
						onChange={(value) => setAttributes({ tagName: value })}
					/>
				</PanelBody>

				{spacing.breakpointsControls({ props })}
				{innerBorder.controls({ props })}
			</InspectorControls>

			<PaddingVisualizer blockProps={props}>
				<TagName {...innerBlocksProps}>
					{innerBorder.borderTopHtml(props.attributes)}
					{innerBlocksProps.children}

					<div
						className={`button-block-appender__container${
							hasChildBlocks ? " has-child-blocks" : ""
						}`}
					>
						<InnerBlocks.ButtonBlockAppender />
					</div>
					{innerBorder.borderBottomHtml(props.attributes)}
				</TagName>
			</PaddingVisualizer>
		</>
	);
};

export default edit;
