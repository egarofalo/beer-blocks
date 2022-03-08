import { useEffect, useState } from "react";
import { __, sprintf } from "@wordpress/i18n";
import {
	InspectorControls,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
} from "@wordpress/block-editor";
import {
	RangeControl,
	PanelBody,
	RadioControl,
	ColorPalette,
	BaseControl,
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
} from "@wordpress/components";
import spacing from "./../../helpers/spacing";
import flexbox from "./../../helpers/flexbox";
import typography from "./../../helpers/typography";
import border from "./../../helpers/border";
import borderRadius from "./../../helpers/border-radius";
import { variantsColorPallet as variants } from "./../../helpers/bootstrap-variants";

const tabStates = {
	normal: __("Normal", "beer-blocks"),
	mouseover: __("Mouse over", "beer-blocks"),
	active: __("Active", "beer-blocks"),
};

const edit = (props) => {
	const {
		clientId,
		setAttributes,
		attributes: {
			id: tabsId,
			tabsContentId,
			tabsAmount,
			labels: tabsLabels,
			horizontalAlignment,
			fillFreeSpace,
			tabsColor,
			tabsMouseOverColor,
			tabsActiveColor,
			tabsBackground,
			tabsMouseOverBackground,
			tabsActiveBackground,
		},
	} = props;

	const [tabState, setTabState] = useState("normal");

	useEffect(
		() =>
			setAttributes({
				id: `tabs-${clientId}`,
				tabsContentId: `tabs-content-${clientId}`,
			}),
		[clientId]
	);

	useEffect(
		() =>
			setAttributes({
				labels:
					tabsLabels.length > tabsAmount
						? tabsLabels.slice(-1)
						: tabsLabels.length < tabsAmount
						? [
								...tabsLabels,
								sprintf(__("Tab %d", "beer-blocks"), tabsLabels.length + 1),
						  ]
						: tabsLabels,
			}),
		[tabsAmount]
	);

	const blockProps = useBlockProps({
		style: {
			...spacing.styles(props.attributes),
		},
	});

	const innerBlocksPropsConfig = [
		{
			id: tabsContentId,
			className: "tab-content",
		},
		{
			renderAppender: false,
			templateLock: "all",
			template: tabsLabels.map((item, index) => [
				"beer-blocks/tab-pane",
				{
					placeholder: __("Insert here pane contents...", "beer-blocks"),
					index,
				},
			]),
		},
	];

	const innerBlocksProps = useInnerBlocksProps
		? useInnerBlocksProps(...innerBlocksPropsConfig)
		: __useInnerBlocksProps(...innerBlocksPropsConfig);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("General settings", "beer-blocks")}>
					<RangeControl
						label={__("Tabs amount", "beer-blocks")}
						value={tabsAmount}
						min={1}
						max={10}
						onChange={(value) =>
							setAttributes({
								tabsAmount: value,
							})
						}
					/>

					{flexbox.justifyContentControl({
						props,
						attrName: "horizontalAlignment",
						label: __("Horizontal alignment", "beer-blocks"),
					})}

					<RadioControl
						label={__("Fill free space", "beer-blocks")}
						selected={fillFreeSpace}
						options={[
							{
								label: __("No", "beer-blocks"),
								value: "",
							},
							{
								label: __("Yes", "beer-blocks"),
								value: "nav-fill",
							},
							{
								label: __("Same width tabs", "beer-blocks"),
								value: "nav-justified",
							},
						]}
						onChange={(value) => setAttributes({ fillFreeSpace: value })}
					/>
				</PanelBody>

				<PanelBody title={__("Tabs color", "beer-blocks")}>
					<BaseControl
						label={sprintf(
							__("Select tab status (%s)", "beer-blocks"),
							tabStates[tabState]
						)}
					>
						<RadioGroup onChange={setTabState} checked={tabState}>
							<Radio value="normal">{tabStates.normal}</Radio>
							<Radio value="mouseover">{tabStates.mouseover}</Radio>
							<Radio value="active">{tabStates.active}</Radio>
						</RadioGroup>
					</BaseControl>

					{tabState === "normal" && (
						<>
							<BaseControl label={__("Font color", "beer-blocks")}>
								<ColorPalette
									colors={variants}
									value={tabsColor}
									onChange={(color) => setAttributes({ tabsColor: color })}
								/>
							</BaseControl>

							<BaseControl label={__("Background color", "beer-blocks")}>
								<ColorPalette
									colors={variants}
									value={tabsBackground}
									onChange={(color) => setAttributes({ tabsBackground: color })}
								/>
							</BaseControl>
						</>
					)}

					{tabState === "mouseover" && (
						<>
							<BaseControl label={__("Font color", "beer-blocks")}>
								<ColorPalette
									colors={variants}
									value={tabsMouseOverColor}
									onChange={(color) =>
										setAttributes({ tabsMouseOverColor: color })
									}
								/>
							</BaseControl>

							<BaseControl label={__("Background color", "beer-blocks")}>
								<ColorPalette
									colors={variants}
									value={tabsMouseOverBackground}
									onChange={(color) =>
										setAttributes({ tabsMouseOverBackground: color })
									}
								/>
							</BaseControl>
						</>
					)}

					{tabState === "active" && (
						<>
							<BaseControl label={__("Font color", "beer-blocks")}>
								<ColorPalette
									colors={variants}
									value={tabsActiveColor}
									onChange={(color) =>
										setAttributes({ tabsActiveColor: color })
									}
								/>
							</BaseControl>

							<BaseControl label={__("Background color", "beer-blocks")}>
								<ColorPalette
									colors={variants}
									value={tabsActiveBackground}
									onChange={(color) =>
										setAttributes({ tabsActiveBackground: color })
									}
								/>
							</BaseControl>
						</>
					)}
				</PanelBody>

				{typography.controls({
					props,
					title: __("Tabs typography"),
					attrPrefixName: "tabs",
				})}

				{border.controls({
					props,
					attrPrefixName: "tabs",
					title: __("Tabs borders", "beer-blocks"),
				})}

				{borderRadius.controls({
					props,
					attrPrefixName: "tabs",
					title: __("Tabs border radius", "beer-blocks"),
				})}

				{spacing.controls({
					props,
					attrPrefixName: "tabs",
					title: __("Tabs spacing"),
				})}

				{spacing.controls({ props })}
			</InspectorControls>

			{spacing.visualizer(
				props,
				<div {...blockProps}>
					<ul
						className={flexbox.justifyContentClass({
							justifyContent: horizontalAlignment,
							prefix: "nav nav-pills",
							suffix: fillFreeSpace,
						})}
						id={tabsId}
						role="tablist"
					>
						{tabsLabels.map((item, index) => (
							<li
								className="nav-item"
								role="presentation"
								key={`${tabsId}-tab-${index}`}
							>
								<RichText
									tagName="a"
									className="nav-link"
									id={`${tabsId}-tab-${index}`}
									data-toggle="tab"
									href={`#${tabsId}-pane-${index}`}
									role="tab"
									aria-controls={`#${tabsId}-pane-${index}`}
									aria-selected="false"
									value={item}
									allowedFormats={["core/bold", "core/italic"]}
									onChange={(content) =>
										setAttributes({
											tabsLabels: [
												...tabsLabels.slice(0, index),
												content,
												...tabsLabels.slice(index + 1),
											],
										})
									}
									style={{
										...(tabsColor
											? { "--beer-blocks-tabs-nav-link-color": tabsColor }
											: {}),
										...(tabsMouseOverColor
											? {
													"--beer-blocks-tabs-nav-link-hover-color": tabsMouseOverColor,
											  }
											: {}),
										...(tabsActiveColor
											? {
													"--beer-blocks-tabs-nav-link-active-color": tabsActiveColor,
											  }
											: {}),
										...(tabsBackground
											? {
													"--beer-blocks-tabs-nav-link-background": tabsBackground,
											  }
											: {}),
										...(tabsMouseOverBackground
											? {
													"--beer-blocks-tabs-nav-link-hover-background": tabsMouseOverBackground,
											  }
											: {}),
										...(tabsActiveBackground
											? {
													"--beer-blocks-tabs-nav-link-active-background": tabsActiveBackground,
											  }
											: {}),
										...spacing.styles(props.attributes, "tabs"),
										...typography.styles(props.attributes, "tabs"),
										...border.styles(props.attributes, "tabs"),
										...borderRadius.styles(props.attributes, "tabs"),
									}}
								/>
							</li>
						))}
					</ul>

					<div {...innerBlocksProps} />
				</div>
			)}
		</>
	);
};

export default edit;
