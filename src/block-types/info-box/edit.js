import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { BLOCK_LEVEL_ELEMENT } from "./../../helpers/fa-icons";
import spacing from "./../../helpers/spacing";
import grid from "./../../helpers/grid";

const edit = (props) => {
	const {
		attributes: { removeIconPrefix, removeLineSeparator, removeDescription },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		style: {
			...spacing.paddingCssVars({ props, blockName: "info-box" }),
			...spacing.marginCssVars({ props, blockName: "info-box" }),
		},
	});

	let template = [
		[
			"beer-blocks/fa-icon",
			{
				placeholder: __("Chose an icon...", "beer-blocks"),
				showHtmlElementTypeToggleField: false,
				htmlElementType: BLOCK_LEVEL_ELEMENT,
				textAlign: "center",
				iconFontSize: grid.breakpointsAttributeValue("2rem"),
			},
		],
		...(!removeIconPrefix
			? [
					[
						"beer-blocks/paragraph",
						{
							placeholder: __("Write prefix here...", "beer-blocks"),
							lineHeight: grid.breakpointsAttributeValue(1.1),
							textAlign: "center",
						},
					],
			  ]
			: []),
		[
			"beer-blocks/header",
			{
				placeholder: __("Write title here...", "beer-blocks"),
				lineHeight: grid.breakpointsAttributeValue(1.1),
				textAlign: "center",
			},
		],
		...(!removeLineSeparator
			? [
					[
						"beer-blocks/separator",
						{
							height: grid.breakpointsAttributeValue(2),
							align: "center",
						},
					],
			  ]
			: []),
		...(!removeDescription
			? [
					[
						"beer-blocks/paragraph",
						{
							placeholder: __("Write short description here...", "beer-blocks"),
							lineHeight: grid.breakpointsAttributeValue(1.1),
							textAlign: "center",
						},
					],
			  ]
			: []),
	];

	const innerBlocksPropsConfig = [
		{
			...blockProps,
		},
		{
			renderAppender: false,
			templateLock: "all",
			template,
		},
	];

	const innerBlocksProps = useInnerBlocksProps
		? useInnerBlocksProps(...innerBlocksPropsConfig)
		: __useInnerBlocksProps(...innerBlocksPropsConfig);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Inner blocks visibility", "beer-blocks")}>
					<ToggleControl
						label={__("Remove icon prefix", "beer-blocks")}
						checked={removeIconPrefix}
						onChange={() =>
							setAttributes({
								removeIconPrefix: !removeIconPrefix,
							})
						}
					/>

					<ToggleControl
						label={__("Remove line separator", "beer-blocks")}
						checked={removeLineSeparator}
						onChange={() =>
							setAttributes({
								removeLineSeparator: !removeLineSeparator,
							})
						}
					/>

					<ToggleControl
						label={__("Remove icon description", "beer-blocks")}
						checked={removeDescription}
						onChange={() =>
							setAttributes({
								removeDescription: !removeDescription,
							})
						}
					/>
				</PanelBody>

				{spacing.breakpointsControls({ props })}
			</InspectorControls>

			<div {...innerBlocksProps} />
		</>
	);
};

export default edit;
