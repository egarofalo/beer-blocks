import { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
} from "@wordpress/block-editor";
import border from "./../../helpers/border";
import borderRadius from "./../../helpers/border-radius";
import spacing, { PaddingVisualizer } from "./../../helpers/spacing";

const edit = (props) => {
	const {
		setAttributes,
		attributes: { index, id, tabId, selected },
		context: { tabsId, selectedTab },
	} = props;

	useEffect(
		() =>
			setAttributes({
				selected: selectedTab === index,
			}),
		[selectedTab]
	);

	useEffect(
		() =>
			setAttributes({
				id: `${tabsId}-pane-${index}`,
				tabId: `${tabsId}-tab-${index}`,
			}),
		[tabsId]
	);

	const blockProps = useBlockProps({
		style: {
			...border.styles(props),
			...borderRadius.styles(props),
			...spacing.styles(props),
		},
	});

	const innerBlocksPropsConfig = [
		{
			...blockProps,
		},
		{
			renderAppender: false,
			templateLock: false,
			placeholder: __(
				"Add blocks by pressing the following button...",
				"beer-blocks"
			),
		},
	];

	const innerBlocksProps = useInnerBlocksProps
		? useInnerBlocksProps(...innerBlocksPropsConfig)
		: __useInnerBlocksProps(...innerBlocksPropsConfig);

	return (
		<>
			<InspectorControls>
				{border.controls({ props })}
				{borderRadius.controls({ props })}
				{spacing.controls({ props })}
			</InspectorControls>

			<div
				id={id}
				className={`tab-pane fade${selected ? " show active" : ""}`}
				role="tabpanel"
				aria-labelledby={tabId}
			>
				<PaddingVisualizer blockProps={props}>
					<div {...innerBlocksProps}>
						{innerBlocksProps.children}

						<div className="button-block-appender__container">
							<InnerBlocks.ButtonBlockAppender />
						</div>
					</div>
				</PaddingVisualizer>
			</div>
		</>
	);
};

export default edit;
