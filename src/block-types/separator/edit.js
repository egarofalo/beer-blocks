import { sprintf, __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	BlockAlignmentToolbar,
} from "@wordpress/block-editor";
import {
	PanelBody,
	RangeControl,
	__experimentalUnitControl as UnitControl,
	__experimentalText as Text,
	ColorPalette,
	ColorIndicator,
} from "@wordpress/components";
import blockAlignment from "./../../helpers/block-alignment";
import spacing from "./../../helpers/spacing";
import units from "./../../helpers/units";
import { variantsColorPallet as variants } from "./../../helpers/bootstrap-variants";
import { getLineSeparatorDefaultWidth } from "./helpers";

const edit = (props) => {
	const {
		attributes: { height, widthUnit, width, color, align, arrow },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		style: {
			height,
			width,
			backgroundColor: color,
			...blockAlignment.styles(align),
			...spacing.styles(props.attributes),
		},
	});

	const triangleHypot = Math.sqrt(
		Math.pow(parseFloat(width.replace(/px|rem|em|%/, "")), 2) / 2
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Dimensions", "beer-blocks")}>
					<div style={{ paddingBottom: "20px" }}>
						<RangeControl
							label={__("Height", "beer-blocks")}
							value={height}
							onChange={(height) => setAttributes({ height })}
							min={1}
							max={10}
							step={1}
							style={{ paddingBottom: 0, marginBottom: 0 }}
						/>
					</div>

					<UnitControl
						label={sprintf(__(`Width (%s)`, "beer-blocks"), widthUnit)}
						value={width}
						onChange={(width) => setAttributes({ width })}
						onUnitChange={(widthUnit) =>
							setAttributes({
								widthUnit,
								width: getLineSeparatorDefaultWidth(widthUnit),
							})
						}
						units={units}
						style={{ paddingBottom: 0, marginBottom: 0 }}
					/>
				</PanelBody>

				<PanelBody title={__("Color", "beer-blocks")}>
					<Text
						as="label"
						variant="label"
						style={{
							marginBottom: "10px",
							display: "block",
							fontSize: "unset",
							fontWeight: "unset",
							display: "flex",
							alignItems: "center",
						}}
					>
						{__("Background color", "beer-blocks")}{" "}
						<ColorIndicator colorValue={color} />
					</Text>

					<ColorPalette
						colors={variants}
						value={color}
						onChange={(color) => setAttributes({ color })}
					/>
				</PanelBody>

				<PanelBody title={__("Triangle", "beer-blocks")}>
					<RangeControl
						label={__("Width", "beer-blocks")}
						value={arrow.width}
						onChange={(value) =>
							setAttributes({ arrow: { ...arrow, width: value } })
						}
						min={0}
						max={triangleHypot}
						step={1}
						style={{ paddingBottom: 0, marginBottom: 0 }}
					/>

					<Text
						as="label"
						variant="label"
						style={{
							marginBottom: "10px",
							display: "block",
							fontSize: "unset",
							fontWeight: "unset",
							display: "flex",
							alignItems: "center",
						}}
					>
						{__("Background color", "beer-blocks")}{" "}
						<ColorIndicator colorValue={arrow.background} />
					</Text>

					<ColorPalette
						colors={variants}
						value={color}
						onChange={(color) =>
							setAttributes({ arrow: { ...arrow, background: color } })
						}
					/>
				</PanelBody>

				{spacing.controls({ props })}
			</InspectorControls>

			<BlockControls>
				<BlockAlignmentToolbar
					value={align}
					onChange={(align) => setAttributes({ align })}
				/>
			</BlockControls>

			<div {...blockProps}>
				{arrow.width > 0 && (
					<div
						className="wp-beer-blocks-separator-triangle"
						style={{
							width: `${arrow.width}px`,
							height: `${arrow.width}px`,
							backgroundColor: arrow.background,
							"--wp-block-beer-blocks-separator-triangle-translate": `-${
								(arrow.width - height) / 2
							}px`,
							"--wp-block-beer-blocks-separator-triangle-color": color,
							"--wp-block-beer-blocks-separator-triangle-border-width": `${height}px`,
						}}
					></div>
				)}
			</div>
		</>
	);
};

export default edit;
