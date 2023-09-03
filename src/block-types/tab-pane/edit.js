import { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
} from "@wordpress/block-editor";
import colors from "./../../helpers/colors";
import border from "./../../helpers/border";
import spacing from "./../../helpers/spacing";

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
		className: `${colors.cssClasses(props)}${spacing.cssClasses(
			props
		)}`.trimStart(),
		style: {
			...colors.cssVars(props, "tab-pane"),
			...border.cssVars(props, "tab-pane"),
			...spacing.cssVars(props, "tab-pane"),
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
				{colors.controls({ props })}
				{border.controls({ props })}
				{spacing.controls({ props })}
			</InspectorControls>

			<div
				id={id}
				className={`tab-pane fade${selected ? " show active" : ""}`}
				role="tabpanel"
				aria-labelledby={tabId}
			>
				<div {...innerBlocksProps}>
					{innerBlocksProps.children}

					<div className="button-block-appender__container">
						<InnerBlocks.ButtonBlockAppender />
					</div>
				</div>
			</div>
		</>
	);
};

export default edit;
