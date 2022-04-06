import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	BlockAlignmentToolbar,
} from "@wordpress/block-editor";
import {
	PanelBody,
	__experimentalText as Text,
	ColorPalette,
	ColorIndicator,
	RadioControl,
} from "@wordpress/components";
import blockAlignment from "./../../helpers/block-alignment";
import spacing from "./../../helpers/spacing";
import { variantsColorPallet as variants } from "./../../helpers/bootstrap-variants";
import dimension from "./../../helpers/dimension";
import grid from "./../../helpers/grid";

const edit = (props) => {
	const {
		attributes: { color, align, triangleBackground, triangleDirection },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		style: {
			...dimension.widthCssVars({
				props,
				blockName: "separator",
				breakpoints: true,
			}),
			...dimension.heightCssVars({
				props,
				blockName: "separator",
				breakpoints: true,
			}),
			"--wp-beer-blocks-separator-border-color": color,
			...blockAlignment.styles(align),
			...spacing.styles(props.attributes),
		},
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Dimensions", "beer-blocks")}>
					{grid.getBreakpointsTabs((breakpoint) => (
						<>
							{grid.getBreakpointsBehaviorControl({
								props,
								attrPrefix: "heightWidth",
								breakpoint,
								affectedAttrs: ["height", "width"],
							})}

							{dimension.widthBreakpointsControl({
								props,
								breakpoint,
								attrBreakpointsBehaviorName: "heightWidth",
								style: { marginBottom: "15px" },
							})}

							{dimension.heightBreakpointsControl({
								props,
								breakpoint,
								attrBreakpointsBehaviorName: "heightWidth",
								minHeight: 1,
								maxHeight: 50,
							})}
						</>
					))}
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
					{grid.getBreakpointsTabs((breakpoint) => (
						<>
							{grid.getBreakpointsBehaviorControl({
								props,
								attrPrefix: "triangleWidth",
								breakpoint,
								affectedAttrs: ["triangleWidth"],
							})}

							{dimension.widthBreakpointsControl({
								props,
								attrPrefix: "triangle",
								breakpoint,
								attrBreakpointsBehaviorName: "triangleWidth",
								type: "number",
								maxWidth: 500,
							})}
						</>
					))}

					<RadioControl
						label={__("Direction", "beer-blocks")}
						help={__("Set triangle direction (up or down)", "beer-blocks")}
						options={[
							{
								label: __("Up", "beer-blocks"),
								value: "up",
							},
							{
								label: __("Down", "beer-blocks"),
								value: "down",
							},
						]}
						selected={triangleDirection}
						onChange={(value) =>
							setAttributes({
								triangleDirection: value,
							})
						}
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
						<ColorIndicator colorValue={triangleBackground} />
					</Text>

					<ColorPalette
						colors={variants}
						value={color}
						onChange={(color) => setAttributes({ triangleBackground: color })}
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
				<div
					className={`wp-beer-blocks-separator-triangle wp-beer-blocks-separator-triangle-${triangleDirection}`}
					style={{
						background: triangleBackground,
						...dimension.widthCssVars({
							props,
							blockName: "separator",
							attrPrefix: "triangle",
							breakpoints: true,
						}),
					}}
				></div>
			</div>
		</>
	);
};

export default edit;
