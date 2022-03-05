import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
} from "@wordpress/block-editor";

const edit = (props) => {
	const {
		attributes: { id, tabId },
	} = props;

	const blockProps = useBlockProps();

	const innerBlocksPropsConfig = [
		{
			...blockProps,
		},
		{
			renderAppender: false,
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
			<div {...innerBlocksProps} />

			<div className="button-block-appender__container">
				<InnerBlocks.ButtonBlockAppender />
			</div>
		</div>
	);
};

export default edit;
