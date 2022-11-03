import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	__experimentalDivider as Divider,
	ColorPalette,
	BaseControl,
	RadioControl,
} from "@wordpress/components";
import blockAlignment from "./../../helpers/block-alignment";
import spacing from "./../../helpers/spacing";
import { variantsColorPallet as variants } from "./../../helpers/bootstrap-variants";
import dimension from "./../../helpers/dimension";

const edit = (props) => {
	const {
		attributes: { color, triangleBackground, triangleDirection },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		style: {
			...dimension.widthCssVars({
				props,
				blockName: "separator",
			}),
			...dimension.heightCssVars({
				props,
				blockName: "separator",
			}),
			...spacing.marginCssVars({
				props,
				blockName: "separator",
			}),
			"--wp-beer-blocks-separator-border-color": color,
			...blockAlignment.styles(props),
		},
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Dimensions", "beer-blocks")}>
					{dimension.breakpointsControls({
						props,
						heightType: "number",
						minHeight: 1,
						maxHeight: 50,
					})}
				</PanelBody>

				<PanelBody title={__("Color", "beer-blocks")}>
					<BaseControl label={__("Background color", "beer-blocks")}>
						<ColorPalette
							colors={variants}
							value={color}
							onChange={(color) => setAttributes({ color })}
						/>
					</BaseControl>
				</PanelBody>

				<PanelBody title={__("Triangle", "beer-blocks")}>
					{dimension.breakpointsControls({
						props,
						attrPrefix: "triangle",
						breakpointsBehaviorAttrPrefix: "triangleWidth",
						widthType: "number",
						maxWidth: 500,
					})}

					<Divider />

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

					<BaseControl label={__("Background color", "beer-blocks")}>
						<ColorPalette
							colors={variants}
							value={triangleBackground}
							onChange={(color) => setAttributes({ triangleBackground: color })}
						/>
					</BaseControl>
				</PanelBody>

				{spacing.breakpointsControls({ props })}
			</InspectorControls>

			<BlockControls>{blockAlignment.toolbar({ props })}</BlockControls>

			<div {...blockProps}>
				<div
					className={`wp-beer-blocks-separator-triangle wp-beer-blocks-separator-triangle-${triangleDirection}`}
					style={{
						background: triangleBackground,
						...dimension.widthCssVars({
							props,
							blockName: "separator",
							attrPrefix: "triangle",
						}),
						...dimension.heightCssVars({
							props,
							blockName: "separator",
						}),
					}}
				></div>
			</div>
		</>
	);
};

export default edit;
