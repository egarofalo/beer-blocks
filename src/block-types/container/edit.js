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
import innerBorder from "../../helpers/inner-border";

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
				<PanelBody title={__("Container settings", "beer-blocks")}>
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
				{innerBorder.controls({ props })}
			</InspectorControls>

			{spacing.visualizer(
				props,
				<TagName {...innerBlocksProps}>
					{innerBorder.borderTopHtml(props.attributes)}
					{innerBlocksProps.children}

					<div
						className={`button-block-appender__container${
							hasChildBlocks ? " has-child-blocks" : ""
						}`}
					>
						<InnerBlocks.ButtonBlockAppender />
					</div>
					{innerBorder.borderBottomHtml(props.attributes)}
				</TagName>
			)}
		</>
	);
};

export default edit;
