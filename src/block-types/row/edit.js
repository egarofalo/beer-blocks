import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import spacing from "../../helpers/spacing";
import flexbox from "../../helpers/flexbox";

const edit = (props) => {
	const {
		clientId,
		setAttributes,
		attributes: { removeGutters },
	} = props;

	const { hasChildBlocks } = useSelect(
		(select) => {
			const { getBlockOrder } = select("core/block-editor");

			return {
				hasChildBlocks: getBlockOrder(clientId).length > 0,
			};
		},
		[clientId]
	);

	const blockProps = useBlockProps({
		className: spacing.cssClasses(props).trimStart(),
		style: spacing.cssVars(props, "row"),
	});

	const innerBlocksPropsConfig = [
		{
			className: `row${removeGutters ? " no-gutters" : ""}${flexbox.cssClasses(
				props
			)}`,
		},
		{
			allowedBlocks: ["beer-blocks/column"],
			renderAppender: false,
		},
	];

	const innerBlocksProps = useInnerBlocksProps
		? useInnerBlocksProps(...innerBlocksPropsConfig)
		: __useInnerBlocksProps(...innerBlocksPropsConfig);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Row settings", "beer-blocks")}>
					<ToggleControl
						label={__("Remove gutters", "beer-blocks")}
						help={__(
							"Enable this toggle field to remove gutters between columns.",
							"beer-blocks"
						)}
						checked={removeGutters}
						onChange={() => setAttributes({ removeGutters: !removeGutters })}
					/>

					{flexbox.controls({ props, panelBody: false })}
				</PanelBody>

				{spacing.controls({
					props,
					paddingSides: false,
					marginSides: ["top", "bottom"],
				})}
			</InspectorControls>

			<div {...blockProps}>
				<div {...innerBlocksProps} />

				<div
					className={`button-block-appender__container${
						hasChildBlocks ? " has-child-blocks" : ""
					}`}
				>
					<InnerBlocks.ButtonBlockAppender />
				</div>
			</div>
		</>
	);
};

export default edit;
