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
import tags from "./../../helpers/sectioning-tags";
import grid from "../../helpers/grid";
import colors from "../../helpers/colors";
import border from "./../../helpers/border";
import size from "./../../helpers/size";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

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
		className: `${containerType}${colors.cssClasses(props)}${border.cssClasses(
			props
		)}${size.cssClasses(props)}${spacing.cssClasses(props)}`,
		style: {
			...colors.cssVars(props, "container"),
			...border.cssVars(props, "container"),
			...size.cssVars(props, "container"),
			...spacing.cssVars(props, "container"),
		},
		...htmlAttrs.blockProps(props),
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

				{colors.controls({ props })}
				{border.controls({ props })}
				{size.controls({ props })}
				{spacing.controls({
					props,
					paddingSides: ["top", "bottom"],
					marginSides: ["top", "bottom"],
				})}
				{htmlAttrs.controls({ props })}
			</InspectorControls>

			<TagName {...innerBlocksProps}>
				{innerBlocksProps.children}

				<div
					className={`button-block-appender__container${
						hasChildBlocks ? " has-child-blocks" : ""
					}`}
				>
					<InnerBlocks.ButtonBlockAppender />
				</div>
			</TagName>
		</>
	);
};

export default edit;
