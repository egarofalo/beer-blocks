import { __ } from "@wordpress/i18n";
import {
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
		{},
		{
			allowedBlocks: ["*"],
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
			<div {...blockProps}>
				<div {...innerBlocksProps} />
			</div>
		</div>
	);
};

export default edit;
