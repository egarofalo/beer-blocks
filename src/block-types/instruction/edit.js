import { useEffect } from "react";
import { sprintf, __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	CheckboxControl,
	ColorPicker,
	BaseControl,
	SelectControl,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { select } from "@wordpress/data";
import grid from "./../../helpers/grid";
import typography from "../../helpers/typography";
import spacing from "../../helpers/spacing";

const edit = (props) => {
	const {
		attributes: {
			stackedContents,
			sizing,
			justifyContent,
			alignItems,
			padding,
			numeration,
			numerationBackground,
			numerationColor,
			numerationWidth,
			numerationWidthUnit,
			numerationHeight,
			numerationHeightUnit,
			numerationBorderRadius,
			numerationBorderRadiusUnit,
			numerationHorizontalAlignment,
			numerationVerticalAlignment,
		},
		setAttributes,
		clientId,
		context: { instructionsId },
	} = props;

	useEffect(() => {
		const blockEditorData = select("core/block-editor");

		setAttributes({
			numeration: blockEditorData.getBlockIndex(clientId, instructionsId) + 1,
		});
	}, [instructionsId]);

	const blockProps = useBlockProps({
		className: grid.getColClass(sizing),
		style: {
			listStyle: "none",
		},
	});

	const template = [
		[
			"beer-blocks/header",
			{ placeholder: __("Write title here...", "beer-blocks") },
		],
		[
			"beer-blocks/paragraph",
			{ placeholder: __("Write instructions here...", "beer-blocks") },
		],
	];

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Responsive settings", "beer-blocks")}
					initialOpen={false}
				>
					{grid.getColControls(props, (breakpoint) => (
						<>
							<CheckboxControl
								label={sprintf(
									__("Stacked contents? (%s)", "beer-blocks"),
									breakpoint.toUpperCase()
								)}
								checked={stackedContents[breakpoint]}
								onChange={(checked) => {
									setAttributes({
										stackedContents: {
											...stackedContents,
											[breakpoint]: checked,
										},
									});
								}}
							/>

							{grid.justifyContentControl({ props, breakpoint })}
							{grid.alignItemsControl({ props, breakpoint })}
						</>
					))}
				</PanelBody>

				<PanelBody
					title={__("Numeration settings", "beer-blocks")}
					initialOpen={false}
				>
					{typography.innerControls(props, "numeration")}

					<SelectControl
						label={__("Horizontal alignment", "beer-blocks")}
						value={numerationHorizontalAlignment}
						options={grid.justifyContentOptions.filter((element) =>
							["start", "end", "center"].includes(element.value)
						)}
						onChange={(value) =>
							setAttributes({ numerationHorizontalAlignment: value })
						}
					/>

					<SelectControl
						label={__("Vertical alignment", "beer-blocks")}
						value={numerationVerticalAlignment}
						options={grid.alignItemsOptions.filter((element) =>
							["start", "end", "center"].includes(element.value)
						)}
						onChange={(value) =>
							setAttributes({ numerationVerticalAlignment: value })
						}
					/>

					<BaseControl label={__("Background color", "beer-blocks")}>
						<ColorPicker
							color={numerationBackground}
							onChangeComplete={(value) => {
								setAttributes({ numerationBackground: value.hex });
							}}
							disableAlpha
						/>
					</BaseControl>

					<BaseControl label={__("Font color", "beer-blocks")}>
						<ColorPicker
							color={numerationColor}
							onChangeComplete={(value) => {
								setAttributes({ numerationColor: value.hex });
							}}
							disableAlpha
						/>
					</BaseControl>

					<BaseControl
						label={sprintf(
							__("Width (%s)", "beer-blocks"),
							numerationWidthUnit
						)}
					>
						<UnitControl
							value={numerationWidth}
							onChange={(numerationWidth) => setAttributes({ numerationWidth })}
							onUnitChange={(numerationWidthUnit) =>
								setAttributes({
									numerationWidthUnit,
									numerationWidth: "",
								})
							}
							units={typography.defaultUnits}
						></UnitControl>
					</BaseControl>

					<BaseControl
						label={sprintf(
							__("Height (%s)", "beer-blocks"),
							numerationHeightUnit
						)}
					>
						<UnitControl
							value={numerationHeight}
							onChange={(numerationHeight) =>
								setAttributes({ numerationHeight })
							}
							onUnitChange={(numerationHeightUnit) =>
								setAttributes({
									numerationHeightUnit,
									numerationHeight: "",
								})
							}
							units={typography.defaultUnits}
						></UnitControl>
					</BaseControl>

					<BaseControl
						label={sprintf(
							__("Border Radius (%s)", "beer-blocks"),
							numerationBorderRadiusUnit
						)}
					>
						<UnitControl
							value={numerationBorderRadius}
							onChange={(numerationBorderRadius) =>
								setAttributes({ numerationBorderRadius })
							}
							onUnitChange={(numerationBorderRadiusUnit) =>
								setAttributes({
									numerationBorderRadiusUnit,
									numerationBorderRadius: "",
								})
							}
							units={[...typography.defaultUnits, { value: "%", label: "%" }]}
						></UnitControl>
					</BaseControl>
				</PanelBody>

				<PanelBody title={__("Spacing", "beer-blocks")} initialOpen={false}>
					{spacing.paddingControl({ props })}
				</PanelBody>
			</InspectorControls>

			<li {...blockProps}>
				{spacing.visualizer(
					props,
					<div
						className={`d-flex${Object.entries(stackedContents).reduce(
							(classes, [key, value]) => {
								const breakpoint = key !== "xs" ? `-${key}` : "";

								return `${classes} flex${breakpoint}-${
									value ? "column" : "row"
								} justify-content${breakpoint}-${
									justifyContent[key]
								} align-items${breakpoint}-${alignItems[key]}`;
							},
							""
						)}`}
						style={spacing.paddingStyles(padding)}
					>
						<div
							className={`d-inline-flex flex-grow-0 justify-content-${numerationHorizontalAlignment} align-items-${numerationVerticalAlignment}`}
							style={{
								...(numerationBackground
									? { backgroundColor: numerationBackground }
									: {}),
								...(numerationColor ? { color: numerationColor } : {}),
								...(numerationWidth
									? { width: numerationWidth, minWidth: numerationWidth }
									: {}),
								...(numerationHeight ? { height: numerationHeight } : {}),
								...(numerationBorderRadius
									? { borderRadius: numerationBorderRadius }
									: {}),
								...typography.styles(props.attributes, "numeration"),
							}}
						>
							{numeration}
						</div>

						<div>
							<InnerBlocks template={template} templateLock="all" />
						</div>
					</div>
				)}
			</li>
		</>
	);
};

export default edit;
