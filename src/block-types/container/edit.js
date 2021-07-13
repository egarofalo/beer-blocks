import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
	InnerBlocks,
} from "@wordpress/block-editor";
import { SelectControl, PanelBody } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import spacing from "./../../helpers/spacing";
import tags from "./../../helpers/sectioning-tags";

const edit = (props) => {
	const {
		attributes: { containerType, tagName: TagName, allowedBlocks },
		setAttributes,
		clientId,
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
		className: containerType,
		style: {
			...spacing.styles(props.attributes),
		},
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			...blockProps,
		},
		{
			renderAppender: false,
			...(allowedBlocks.length > 0
				? {
						allowedBlocks,
				  }
				: {}),
		}
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Container configuration", "beer-blocks")}>
					<SelectControl
						label={__("Container type", "beer-blocks")}
						value={containerType}
						options={[
							{ value: "container", label: "Container" },
							{
								value: "container-fluid",
								label: "Container Fluid",
							},
							{
								value: "container-sm",
								label: "Container SM",
							},
							{
								value: "container-md",
								label: "Container MD",
							},
							{
								value: "container-lg",
								label: "Container LG",
							},
							{
								value: "container-xl",
								label: "Container XL",
							},
						]}
						onChange={(value) => setAttributes({ containerType: value })}
					/>

					<SelectControl
						label={__("HTML Tag", "beer-blocks")}
						options={[
							...tags.map((tag) => ({
								label: `<${tag}>`,
								value: tag,
							})),
						]}
						value={TagName}
						onChange={(value) => setAttributes({ tagName: value })}
					/>
				</PanelBody>

				{spacing.controls({ props })}
			</InspectorControls>

			{spacing.visualizer(
				props,
				<TagName {...innerBlocksProps}>
					{innerBlocksProps.children}

					<div
						className={`button-block-appender__container${
							hasChildBlocks ? " has-child-blocks" : ""
						}`}
					>
						<InnerBlocks.ButtonBlockAppender />
					</div>
				</TagName>
			)}
		</>
	);
};

export default edit;
