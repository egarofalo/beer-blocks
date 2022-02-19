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

const edit = (props) => {
	const {
		attributes: { removeIconPrefix, removeLineSeparator, removeDescription },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		style: {
			...spacing.styles(props.attributes),
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
				iconSize: "2rem",
			},
		],
		...(!removeIconPrefix
			? [
					[
						"beer-blocks/paragraph",
						{
							placeholder: __("Write prefix here...", "beer-blocks"),
							lineHeight: 1.1,
							marginTop: "0.5rem",
							textAlign: "center",
						},
					],
			  ]
			: []),
		[
			"beer-blocks/header",
			{
				placeholder: __("Write title here...", "beer-blocks"),
				lineHeight: 1.1,
				marginTop: "0.5rem",
				textAlign: "center",
			},
		],
		...(!removeLineSeparator
			? [
					[
						"beer-blocks/separator",
						{
							height: 2,
							align: "center",
							marginTop: "0.5rem",
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
							lineHeight: 1.1,
							marginTop: "0.5rem",
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

				{spacing.controls({ props })}
			</InspectorControls>

			{spacing.visualizer(props, <div {...innerBlocksProps} />)}
		</>
	);
};

export default edit;
