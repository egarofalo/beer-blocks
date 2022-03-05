import { useEffect } from "react";
import { __, sprintf } from "@wordpress/i18n";
import {
	InspectorControls,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
} from "@wordpress/block-editor";
import { RangeControl, PanelBody } from "@wordpress/components";

const edit = (props) => {
	const {
		clientId,
		setAttributes,
		attributes: { id: tabsId, tabsContentId, tabsAmount, labels: tabsLabels },
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
				labels: [
					tabsLabels.length > tabsAmount
						? tabsLabels.slice(-1)
						: [
								...tabsLabels,
								sprintf(__("Tab %d", "beer-blocks"), tabsLabels.length + 1),
						  ],
				],
			}),
		[tabsAmount]
	);

	const blockProps = useBlockProps();

	const innerBlocksPropsConfig = [
		{
			id: tabsContentId,
			className: "tab-content",
		},
		{
			renderAppender: false,
			template: [
				tabsLabels.map((item, index) => [
					"beer-blocks/tab-pane",
					{
						placeholder: __("Insert here pane contents...", "beer-blocks"),
						id: `${tabsId}-pane-${index}`,
						tabId: `${tabsId}-tab-${index}`,
					},
				]),
			],
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
						onChange={(value) =>
							setAttributes({
								tabsAmount: value,
							})
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<ul className="nav nav-tabs" id={tabsId} role="tablist">
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
