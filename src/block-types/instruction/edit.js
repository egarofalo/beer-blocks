import { __ } from "@wordpress/i18n";
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
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import grid from "./../../helpers/grid";
import typography from "../../helpers/typography";

const edit = (props) => {
	const {
		attributes: {
			numeration,
			numerationBackground,
			numerationColor,
			numerationWidth,
			numerationWidthUnit,
			numerationHeight,
			numerationHeightUnit,
			numerationBorderRadius,
			numerationBorderRadiusUnit,
			stackedContents,
			sizing,
		},
		setAttributes,
	} = props;

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
				<PanelBody title={__("Responsive settings", "beer-blocks")}>
					{grid.getColControls(props, (breakpoint) => (
						<CheckboxControl
							label={__("Stacked contents?", "beer-blocks")}
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
					))}
				</PanelBody>

				<PanelBody title={__("Numeration settings", "beer-blocks")}>
					{typography.innerControls(props)}

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
			</InspectorControls>

			<li {...blockProps}>
				<div
					className={`d-flex${Object.entries(stackedContents).reduce(
						(classes, [key, value]) =>
							`${classes} flex${key !== "xs" ? `-${key}` : ""}-${
								value ? "column" : "row"
							}`,
						""
					)}`}
				>
					<span
						className="d-inline-flex justify-content-center align-items-center flex-grow-0"
						style={{
							...(numerationBackground
								? { backgroundColor: numerationBackground }
								: {}),
							...(numerationColor ? { color: numerationColor } : {}),
							...(numerationWidth ? { width: numerationWidth } : {}),
							...(numerationHeight ? { height: numerationHeight } : {}),
							...(numerationBorderRadius
								? { borderRadius: numerationBorderRadius }
								: {}),
							...typography.styles(props.attributes),
						}}
					>
						{numeration}
					</span>

					<InnerBlocks template={template} templateLock="all" />
				</div>
			</li>
		</>
	);
};

export default edit;
