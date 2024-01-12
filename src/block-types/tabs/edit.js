import { useEffect } from "react";
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
	SelectControl,
	CardDivider,
} from "@wordpress/components";
import { MdAdsClick } from "react-icons/md";
import spacing from "./../../helpers/spacing";
import flexbox from "./../../helpers/flexbox";
import typography from "./../../helpers/typography";
import border from "./../../helpers/border";
import colors from "../../helpers/colors";
import statuses from "./../../helpers/statuses";
import htmlAttrs from "../../helpers/html-attrs";

const edit = (props) => {
	const {
		clientId,
		setAttributes,
		attributes: {
			id: tabsId,
			tabsContentId,
			tabsAmount,
			labels: tabsLabels,
			fillFreeSpace,
			selectedTab,
		},
	} = props;

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
		className: spacing.cssClasses(props).trimStart(),
		style: spacing.cssVars(props, "tabs"),
		...htmlAttrs.blockProps(props),
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

					<SelectControl
						label={__("Default selected tab", "beer-blocks")}
						onChange={(value) =>
							setAttributes({ selectedTab: parseInt(value) })
						}
						value={selectedTab}
						options={[
							{ label: __("Unselected", "beer-blocks"), value: -1 },
							...tabsLabels.map((label, value) => ({ label, value })),
						]}
					/>

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

					<CardDivider />

					{flexbox.controls({
						props,
						attrPrefix: "tab",
						panelBody: false,
					})}
				</PanelBody>

				{colors.controls({
					props,
					attrPrefix: "tab",
					title: __("Tabs colors", "beer-blocks"),
				})}

				{typography.controls({
					props,
					attrPrefix: "tab",
					title: __("Tabs typography", "beer-blocks"),
				})}

				{border.controls({
					props,
					attrPrefix: "tab",
					title: __("Tabs borders", "beer-blocks"),
				})}

				{statuses.controls({
					props,
					attrPrefix: "tab",
					title: (
						<>
							<MdAdsClick className="components-panel__header-icon" />{" "}
							{__("Tabs statuses", "beer-blocks")}
						</>
					),
				})}

				{spacing.controls({
					props,
					attrPrefix: "tab",
					title: __("Tabs spacing", "beer-blocks"),
				})}

				{spacing.controls({ props })}
				{htmlAttrs.controls({ props })}
			</InspectorControls>

			<div {...blockProps}>
				<ul
					className={`nav nav-pills${
						fillFreeSpace ? ` ${fillFreeSpace}` : ""
					}${flexbox.cssClasses(props, "tab")}`}
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
								}${typography.cssClasses(props, "tab")}${spacing.cssClasses(
									props,
									"tab"
								)}${colors.cssClasses(props, "tab")}${border.cssClasses(
									props,
									"tab"
								)}${statuses.cssClasses(props, "tab")}`}
								id={`${tabsId}-tab-${index}`}
								data-toggle="pill"
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
									...typography.styles(props, "tab"),
									...typography.cssVars(props, "tabs", "tab"),
									...spacing.cssVars(props, "tabs", "tab"),
									...colors.cssVars(props, "tabs", "tab"),
									...border.cssVars(props, "tabs", "tab"),
									...statuses.cssVars(props, "tabs", "tab"),
								}}
							/>
						</li>
					))}
				</ul>

				<div {...innerBlocksProps} />
			</div>
		</>
	);
};

export default edit;
