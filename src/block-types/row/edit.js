import { __, sprintf } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
} from "@wordpress/block-editor";
import { PanelBody, TabPanel, SelectControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import grid from "../../helpers/grid";

const edit = (props) => {
	const {
		attributes: { justifyContent, alignItems },
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

	const blockProps = useBlockProps();

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: grid.getRowClass(justifyContent, alignItems),
		},
		{
			allowedBlocks: ["beer-blocks/column"],
			renderAppender: false,
		}
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Row configuration", "beer-blocks")}>
					<TabPanel
						className="beer-blocks-breakpoints-panel"
						activeClass="active-tab"
						initialTabName="xs"
						tabs={[
							{
								name: "xs",
								title: "XS",
								className: "beer-blocks-breakpoint-tab",
							},
							{
								name: "sm",
								title: "SM",
								className: "beer-blocks-breakpoint-tab",
							},
							{
								name: "md",
								title: "MD",
								className: "beer-blocks-breakpoint-tab",
							},
							{
								name: "lg",
								title: "LG",
								className: "beer-blocks-breakpoint-tab",
							},
							{
								name: "xl",
								title: "XL",
								className: "beer-blocks-breakpoint-tab",
							},
						]}
					>
						{(tab) => (
							<>
								<SelectControl
									label={sprintf(
										__("Justify Content (%s)", "beer-blocks"),
										tab.name.toUpperCase()
									)}
									value={justifyContent[tab.name]}
									options={grid.justifyContentOptions}
									onChange={(value) =>
										setAttributes({
											justifyContent: {
												...justifyContent,
												[tab.name]: value,
											},
										})
									}
								/>

								<SelectControl
									label={sprintf(
										__("Align Items (%s)", "beer-blocks"),
										tab.name.toUpperCase()
									)}
									value={alignItems[tab.name]}
									options={grid.alignItemsOptions}
									onChange={(value) =>
										setAttributes({
											alignItems: {
												...alignItems,
												[tab.name]: value,
											},
										})
									}
								/>
							</>
						)}
					</TabPanel>
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
