import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import grid from "../../helpers/grid";

const edit = (props) => {
	const {
		attributes: { justifyContent, alignItems },
	} = props;

	const blockProps = useBlockProps({
		className: "container-fluid",
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: `p-0 ${grid.getRowClass(justifyContent, alignItems)}`,
		},
		{
			allowedBlocks: ["beer-blocks/instruction"],
			renderAppender: false,
		}
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
