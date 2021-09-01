import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import grid from "./../../helpers/grid";

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
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			...blockProps,
		},
		{
			renderAppender: !hasChildBlocks
				? InnerBlocks.ButtonBlockAppender
				: undefined,
		}
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Responsive settings", "beer-blocks")}>
					{grid.getColControls(props)}
				</PanelBody>
			</InspectorControls>

			<div {...innerBlocksProps} />
		</>
	);
};

export default edit;
