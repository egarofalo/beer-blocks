import { __, sprintf } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TabPanel,
	RangeControl,
	RadioControl,
} from "@wordpress/components";
import grid from "./../../helpers/grid";

const edit = (props) => {
	const {
		attributes: { numeration, sizing },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		className: grid.getColClass(sizing),
		style: {
			listStyle: "none",
		},
	});

	const template = [
		[
			"beer-blocks/header",
			{ placeholder: __("Write title here...", "beer-blocks") },
		],
		[
			"beer-blocks/paragraph",
			{ placeholder: __("Write instructions here...", "beer-blocks") },
		],
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Item configuration", "beer-blocks")}>
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
										__("Item sizing type (%s)", "beer-blocks"),
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
												`Item sizing${sizing[tab.name].size ? " (%s)" : ""}`,
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

			<li {...blockProps}>
				<div className="d-flex">
					<span>{numeration}</span>

					<InnerBlocks template={template} templateLock="all" />
				</div>
			</li>
		</>
	);
};

export default edit;
