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
		attributes: { height, widthUnit, width, color, align },
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

	return (
		<>
			<InspectorControls>
				<PanelBody title="Dimensions">
					<div style={{ paddingBottom: "20px" }}>
						<RangeControl
							label="Height"
							value={height}
							onChange={(height) => setAttributes({ height })}
							min={1}
							max={10}
							step={1}
							style={{ paddingBottom: 0, marginBottom: 0 }}
						/>
					</div>

					<UnitControl
						label={`Width (${widthUnit})`}
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

				<PanelBody title="Color">
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
						Background color <ColorIndicator colorValue={color} />
					</Text>

					<ColorPalette
						colors={variants}
						value={color}
						onChange={(color) => setAttributes({ color })}
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

			<div {...blockProps}></div>
		</>
	);
};

export default edit;
