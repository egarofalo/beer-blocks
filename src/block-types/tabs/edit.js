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
	Button,
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
} from "@wordpress/components";
import spacing, { PaddingVisualizer } from "./../../helpers/spacing";
import flexbox from "./../../helpers/flexbox";
import typography from "./../../helpers/typography";
import border from "./../../helpers/border";
import borderRadius from "./../../helpers/border-radius";
import { variantsColorPallet as variants } from "./../../helpers/bootstrap-variants";

const tabStatuses = {
	normal: __("Normal", "beer-blocks"),
	mouseover: __("Mouse over", "beer-blocks"),
	active: __("Active", "beer-blocks"),
};

const getRadioGroupTabsStatus = (tabStatus, setTabStatus) => (
	<BaseControl
		label={sprintf(
			__("Select tab status (%s)", "beer-blocks"),
			tabStatuses[tabStatus]
		)}
	>
		<RadioGroup onChange={setTabStatus} checked={tabStatus}>
			<Radio value="normal">{tabStatuses.normal}</Radio>
			<Radio value="mouseover">{tabStatuses.mouseover}</Radio>
			<Radio value="active">{tabStatuses.active}</Radio>
		</RadioGroup>
	</BaseControl>
);

const getRadioGroupSelectedTab = (tabs, selectedTab, setAttributes) => (
	<BaseControl label={__("Default selected tab", "beer-blocks")}>
		<RadioGroup
			onChange={(value) => setAttributes({ selectedTab: value })}
			checked={selectedTab}
		>
			{tabs.map((tabLabel, index) => (
				<Radio value={index}>{tabLabel}</Radio>
			))}
		</RadioGroup>

		<div style={{ textAlign: "right", marginTop: "10px" }}>
			<Button
				onClick={() => setAttributes({ selectedTab: -1 })}
				variant="primary"
				isSmall={true}
			>
				{__("Uncheck all", "beer-blocks")}
			</Button>
		</div>
	</BaseControl>
);

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
			selectedTab,
			tabsColor,
			tabsMouseOverColor,
			tabsActiveColor,
			tabsBackground,
			tabsMouseOverBackground,
			tabsActiveBackground,
			tabsBorderColor,
			tabsMouseOverBorderColor,
			tabsActiveBorderColor,
		},
	} = props;

	const [tabStatus, setTabStatus] = useState("normal");

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
						? tabsLabels.slice(0, -1)
						: tabsLabels.length < tabsAmount
						? [
								...tabsLabels,
								sprintf(__("Tab %d", "beer-blocks"), tabsLabels.length + 1),
						  ]
						: tabsLabels,
			}),
		[tabsAmount]
	);

	useEffect(() => {
		if (selectedTab > -1) {
			document
				.querySelectorAll(`#${tabsId} > .nav-item > .nav-link.active`)
				.forEach((tabLink) => {
					if (!tabLink.id.endsWith(`tab-${selectedTab}`)) {
						tabLink.classList.remove("active");
						tabLink.setAttribute("aria-selected", "false");
						document
							.querySelector(tabLink.getAttribute("href"))
							.classList.remove("active", "show");
					}
				});
		}
	}, [selectedTab]);

	const blockProps = useBlockProps({
		style: spacing.styles(props),
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

					{getRadioGroupSelectedTab(tabsLabels, selectedTab, setAttributes)}

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
					{getRadioGroupTabsStatus(tabStatus, setTabStatus)}

					{tabStatus === "normal" && (
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

							<BaseControl label={__("Border color", "beer-blocks")}>
								<ColorPalette
									colors={variants}
									value={tabsBorderColor}
									onChange={(color) =>
										setAttributes({ tabsBorderColor: color })
									}
								/>
							</BaseControl>
						</>
					)}

					{tabStatus === "mouseover" && (
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

							<BaseControl label={__("Border color", "beer-blocks")}>
								<ColorPalette
									colors={variants}
									value={tabsMouseOverBorderColor}
									onChange={(color) =>
										setAttributes({ tabsMouseOverBorderColor: color })
									}
								/>
							</BaseControl>
						</>
					)}

					{tabStatus === "active" && (
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

							<BaseControl label={__("Border color", "beer-blocks")}>
								<ColorPalette
									colors={variants}
									value={tabsActiveBorderColor}
									onChange={(color) =>
										setAttributes({ tabsActiveBorderColor: color })
									}
								/>
							</BaseControl>
						</>
					)}
				</PanelBody>

				{typography.breakpointsControls({
					props,
					attrPrefix: "tab",
					breakpoints: true,
					attrBreakpointsBehaviorPrefix: "tab",
					title: __("Tabs typography", "beer-blocks"),
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
					attrPrefix: "tabs",
					title: __("Tabs spacing", "beer-blocks"),
				})}

				{spacing.controls({ props })}
			</InspectorControls>

			<PaddingVisualizer blockProps={props}>
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
									className={`nav-link${
										selectedTab === index ? " active" : ""
									}`}
									id={`${tabsId}-tab-${index}`}
									data-toggle="tab"
									href={`#${tabsId}-pane-${index}`}
									role="tab"
									aria-controls={`#${tabsId}-pane-${index}`}
									aria-selected={selectedTab === index ? "true" : "false"}
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
											? { "--wp-beer-blocks-tabs-nav-link-color": tabsColor }
											: {}),
										...(tabsMouseOverColor
											? {
													"--wp-beer-blocks-tabs-nav-link-hover-color": tabsMouseOverColor,
											  }
											: {}),
										...(tabsActiveColor
											? {
													"--wp-beer-blocks-tabs-nav-link-active-color": tabsActiveColor,
											  }
											: {}),
										...(tabsBackground
											? {
													"--wp-beer-blocks-tabs-nav-link-background": tabsBackground,
											  }
											: {}),
										...(tabsMouseOverBackground
											? {
													"--wp-beer-blocks-tabs-nav-link-hover-background": tabsMouseOverBackground,
											  }
											: {}),
										...(tabsActiveBackground
											? {
													"--wp-beer-blocks-tabs-nav-link-active-background": tabsActiveBackground,
											  }
											: {}),
										...(tabsMouseOverBorderColor
											? {
													"--wp-beer-blocks-tabs-nav-link-hover-border-color": tabsMouseOverBorderColor,
											  }
											: {}),
										...(tabsActiveBorderColor
											? {
													"--wp-beer-blocks-tabs-nav-link-active-border-color": tabsActiveBorderColor,
											  }
											: {}),
										...spacing.styles(props, "tabs"),
										...typography.fontFamilyStyles(props, "tab"),
										...typography.fontWeightStyles(props, "tab"),
										...typography.fontSizeCssVars({
											props,
											blockName: "tabs",
											attrPrefix: "tab",
										}),
										...typography.lineHeightCssVars({
											props,
											blockName: "tabs",
											attrPrefix: "tab",
										}),
										...border.styles(props, "tabs"),
										...borderRadius.styles(props, "tabs"),
									}}
								/>
							</li>
						))}
					</ul>

					<div {...innerBlocksProps} />
				</div>
			</PaddingVisualizer>
		</>
	);
};

export default edit;
