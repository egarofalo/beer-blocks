import { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
} from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

const edit = (props) => {
	const {
		clientId,
		setAttributes,
		attributes: { id },
	} = props;

	const blockProps = useBlockProps({
		className: spacing.cssClasses(props).trimStart(),
		style: spacing.cssVars(props, "accordion"),
		...htmlAttrs.blockProps(props),
	});

	const innerBlocksPropsConfig = [
		{
			id: `accordion-${id}`,
			className: "accordion",
		},
		{
			allowedBlocks: ["beer-blocks/accordion-item"],
			renderAppender: false,
		},
	];

	const innerBlocksProps = useInnerBlocksProps
		? useInnerBlocksProps(...innerBlocksPropsConfig)
		: __useInnerBlocksProps(...innerBlocksPropsConfig);

	useEffect(
		() =>
			setAttributes({
				id: clientId,
			}),
		[clientId]
	);

	return (
		<>
			<InspectorControls>
				{spacing.controls({ props })}
				{htmlAttrs.controls({ props })}
			</InspectorControls>

			<div {...blockProps}>
				<div {...innerBlocksProps} />

				<div className="button-block-appender__container">
					<InnerBlocks.ButtonBlockAppender />
				</div>
			</div>
		</>
	);
};

export default edit;
