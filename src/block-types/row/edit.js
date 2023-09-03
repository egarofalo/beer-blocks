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
import flexbox from "../../helpers/flexbox";

const edit = (props) => {
	const { clientId } = props;

	const { hasChildBlocks } = useSelect(
		(select) => {
			const { getBlockOrder } = select("core/block-editor");

			return {
				hasChildBlocks: getBlockOrder(clientId).length > 0,
			};
		},
		[clientId]
	);

	const blockProps = useBlockProps();

	const innerBlocksPropsConfig = [
		{
			className: `row${flexbox.cssClasses(props)}`,
		},
		{
			allowedBlocks: ["beer-blocks/column"],
			renderAppender: false,
		},
	];

	const innerBlocksProps = useInnerBlocksProps
		? useInnerBlocksProps(...innerBlocksPropsConfig)
		: __useInnerBlocksProps(...innerBlocksPropsConfig);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Row settings", "beer-blocks")}>
					{flexbox.controls({ props, panelBody: false })}
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div {...innerBlocksProps} />

				<div
					className={`button-block-appender__container${
						hasChildBlocks ? " has-child-blocks" : ""
					}`}
				>
					<InnerBlocks.ButtonBlockAppender />
				</div>
			</div>
		</>
	);
};

export default edit;
