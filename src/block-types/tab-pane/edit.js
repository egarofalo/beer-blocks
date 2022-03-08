import { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
} from "@wordpress/block-editor";

const edit = (props) => {
	const {
		setAttributes,
		attributes: { index, id, tabId },
		context: { tabsId },
	} = props;

	useEffect(
		() =>
			setAttributes({
				id: `${tabsId}-pane-${index}`,
				tabId: `${tabsId}-tab-${index}`,
			}),
		[tabsId]
	);

	const blockProps = useBlockProps();

	const innerBlocksPropsConfig = [
		{
			...blockProps,
		},
		{
			renderAppender: false,
			templateLock: false,
		},
	];

	const innerBlocksProps = useInnerBlocksProps
		? useInnerBlocksProps(...innerBlocksPropsConfig)
		: __useInnerBlocksProps(...innerBlocksPropsConfig);

	return (
		<div
			id={id}
			className="tab-pane fade"
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
	);
};

export default edit;
