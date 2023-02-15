import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import grid from "./../../helpers/grid";
import spacing from "../../helpers/spacing";
import colors from "../../helpers/colors";

const edit = (props) => {
	const {
		attributes: { sizing },
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
		className: grid.getColClass(sizing),
		style: {
			...spacing.paddingCssVars(props, "column"),
			...spacing.marginCssVars(props, "column"),
			...colors.cssVars(props, "column"),
		},
	});

	const innerBlocksPropsConfig = [
		{
			...blockProps,
		},
		{
			renderAppender: !hasChildBlocks
				? InnerBlocks.ButtonBlockAppender
				: undefined,
		},
	];

	const innerBlocksProps = useInnerBlocksProps
		? useInnerBlocksProps(...innerBlocksPropsConfig)
		: __useInnerBlocksProps(...innerBlocksPropsConfig);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Responsive settings", "beer-blocks")}>
					{grid.getColControls(props)}
				</PanelBody>

				{colors.controls({ props })}
				{spacing.breakpointsControls({ props })}
			</InspectorControls>

			<div {...innerBlocksProps} />
		</>
	);
};

export default edit;
