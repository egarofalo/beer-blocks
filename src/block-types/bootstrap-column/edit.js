import { __, sprintf } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TabPanel,
	RangeControl,
	RadioControl,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import grid from "./../../helpers/bootstrap-grid";

const edit = (props) => {
	const {
		attributes: { sizing },
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
				<PanelBody title={__("Column configuration", "beer-blocks")}>
					<TabPanel
						className="beer-blocks-breakpoints-panel"
						activeClass="active-tab"
						initialTabName="xs"
						tabs={grid.breakpointsOptions}
					>
						{(tab) => (
							<>
								<RadioControl
									label={sprintf(
										__("Column sizing type (%s)", "beer-blocks"),
										tab.name.toUpperCase()
									)}
									help={
										<div style={{ marginTop: "5px" }}>
											{sprintf(
												__(
													"Settings applied from %s resolution and up",
													"beer-blocks"
												),
												tab.name.toUpperCase()
											)}
										</div>
									}
									selected={sizing[tab.name].sizingType}
									options={grid.colSizingTypeOptions(tab.name)}
									onChange={(option) => {
										setAttributes({
											sizing: {
												...sizing,
												[tab.name]: {
													...sizing[tab.name],
													sizingType: option,
												},
											},
										});
									}}
								/>

								{sizing[tab.name].sizingType === grid.manualSizing && (
									<RangeControl
										label={sprintf(
											__(
												`Column sizing${sizing[tab.name].size ? " (%s)" : ""}`,
												"beer-blocks"
											),
											sizing[tab.name].size
										)}
										value={sizing[tab.name].size}
										onChange={(width) => {
											setAttributes({
												sizing: {
													...sizing,
													[tab.name]: {
														...sizing[tab.name],
														size: width,
													},
												},
											});
										}}
										min={1}
										max={12}
										step={1}
										style={{ paddingBottom: 0, marginBottom: 0 }}
									/>
								)}
							</>
						)}
					</TabPanel>
				</PanelBody>
			</InspectorControls>

			<div {...innerBlocksProps} />
		</>
	);
};

export default edit;
