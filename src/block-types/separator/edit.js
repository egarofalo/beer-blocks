import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	CardDivider,
	ColorPalette,
	SelectControl,
	BaseControl,
	RadioControl,
} from "@wordpress/components";
import blockAlignment from "./../../helpers/block-alignment";
import spacing from "./../../helpers/spacing";
import { variantsColorPallet as variants } from "./../../helpers/bootstrap-variants";
import size from "./../../helpers/size";
import { reset } from "../../helpers/buttons";
import grid from "../../helpers/grid";
import htmlAttrs from "../../helpers/html-attrs";

const edit = (props) => {
	const {
		attributes: { style, color, triangleBackground, triangleDirection },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		className: `${blockAlignment.cssClass(props)}${size.cssClasses(
			props
		)}${spacing.marginCssClasses(props)}`.trimStart(),
		style: {
			...size.cssVars(props, "separator"),
			...spacing.marginCssVars(props, "separator"),
			...(style ? { "--wp-beer-blocks-separator-style": style } : {}),
			...(color ? { "--wp-beer-blocks-separator-color": color } : {}),
		},
		...htmlAttrs.blockProps(props),
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Line settings", "beer-blocks")}>
					{size.controls({
						props,
						minHeight: 1,
						maxHeight: 50,
						panelBody: false,
					})}

					<CardDivider />

					<BaseControl label={__("Line style", "beer-blocks")}>
						<SelectControl
							value={style}
							options={Object.entries({
								solid: "Solid",
								doted: "Dotted",
								dashed: "Dashed",
							}).map((borderStyle) => ({
								label: borderStyle[1],
								value: borderStyle[0],
							}))}
							onChange={(color) => setAttributes({ color })}
						></SelectControl>
					</BaseControl>

					<BaseControl label={__("Line color", "beer-blocks")}>
						<ColorPalette
							colors={variants}
							value={color}
							onChange={(color) => setAttributes({ color })}
							clearable={false}
						/>
					</BaseControl>

					{reset({
						onClick: () =>
							setAttributes({
								style: undefined,
								color: undefined,
								width: grid.breakpointsAttributeValue(undefined),
								height: grid.breakpointsAttributeValue(undefined),
								sizeBreakpointsBehavior: grid.breakpointsAttributeValue(
									grid.sameBehavior
								),
							}),
					})}
				</PanelBody>

				<PanelBody title={__("Triangle", "beer-blocks")}>
					{size.controls({
						props,
						attrPrefix: "triangle",
						widthType: "number",
						maxWidth: 500,
						panelBody: false,
					})}

					<CardDivider />

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
							clearable={false}
						/>
					</BaseControl>

					{reset({
						onClick: () =>
							setAttributes({
								triangleWidth: grid.breakpointsAttributeValue(undefined),
								triangleWidthBreakpointsBehavior:
									grid.breakpointsAttributeValue(grid.sameBehavior),
								triangleDirection: "down",
								triangleBackground: undefined,
							}),
					})}
				</PanelBody>

				{spacing.controls({
					props,
					paddingSides: false,
					marginSides: ["top", "bottom"],
				})}
				{htmlAttrs.controls({ props })}
			</InspectorControls>

			<BlockControls>
				{blockAlignment.toolbar({
					props,
					label: __("Line separator alignment", "beer-blocks"),
				})}
			</BlockControls>

			<div {...blockProps}>
				<div
					className={`wp-beer-blocks-separator-triangle wp-beer-blocks-separator-triangle-${triangleDirection}${size.cssClasses(
						props,
						"triangle"
					)}${size.heightCssClasses(props)}`}
					style={{
						background: triangleBackground,
						...size.cssVars(props, "separator", "triangle"),
					}}
				></div>
			</div>
		</>
	);
};

export default edit;
