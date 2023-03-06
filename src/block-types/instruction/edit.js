import { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	BaseControl,
	CardDivider,
	__experimentalUnitControl as UnitControl,
	__experimentalHeading as Heading,
} from "@wordpress/components";
import { select } from "@wordpress/data";
import grid from "./../../helpers/grid";
import typography from "../../helpers/typography";
import spacing from "../../helpers/spacing";
import colors from "../../helpers/colors";
import size from "../../helpers/size";
import flexbox from "../../helpers/flexbox";
import { units } from "../../helpers/units";
import { reset as resetButton } from "../../helpers/buttons";
import { camelCase } from "lodash";

const edit = (props) => {
	const {
		attributes: { numeration, numerationBorderRadius },
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
		className: grid.getColSizingClasses({ props }),
		style: {
			listStyle: "none",
			...colors.cssVars(props, "instruction"),
			...spacing.marginCssVars(props, "instruction"),
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
					{grid.getColSizingControls({ props })}
				</PanelBody>

				{flexbox.controls({ props })}

				<PanelBody
					title={__("Numeration settings", "beer-blocks")}
					initialOpen={false}
				>
					<Heading
						level="3"
						upperCase={true}
						className="wp-beer-blocks__text-center"
					>
						{__("Typography", "beer-blocks")}
					</Heading>

					{typography.breakpointsControls({
						props,
						attrPrefix: "numeration",
						panelBody: false,
						includeLineHeightControl: false,
					})}

					{resetButton({
						onClick: () =>
							setAttributes({
								[camelCase("numeration-font-size")]:
									grid.breakpointsAttributeValue(undefined),
								[camelCase("numeration-font-breakpoints-behavior")]:
									grid.breakpointsBehaviorAttributeValue(grid.sameBehavior),
								[camelCase("numeration-font-family")]: undefined,
								[camelCase("numeration-font-weight")]: undefined,
							}),
					})}

					<CardDivider />

					<Heading
						level="3"
						upperCase={true}
						className="wp-beer-blocks__text-center"
					>
						{__("Colors", "beer-blocks")}
					</Heading>

					{colors.controls({
						props,
						attrPrefix: "numeration",
						panelBody: false,
					})}

					<CardDivider />

					<Heading
						level="3"
						upperCase={true}
						className="wp-beer-blocks__text-center"
					>
						{__("Size", "beer-blocks")}
					</Heading>

					{size.controls({
						props,
						attrPrefix: "numeration",
						breakpoints: true,
						panelBody: false,
					})}

					{resetButton({
						onClick: () =>
							setAttributes({
								[camelCase("numeration-width")]:
									grid.breakpointsAttributeValue(undefined),
								[camelCase("numeration-height")]:
									grid.breakpointsAttributeValue(undefined),
								[camelCase("numeration-size-breakpoints-behavior")]:
									grid.breakpointsBehaviorAttributeValue(grid.sameBehavior),
							}),
					})}

					<CardDivider />

					<Heading
						level="3"
						upperCase={true}
						className="wp-beer-blocks__text-center"
					>
						{__("Alignment", "beer-blocks")}
					</Heading>

					{flexbox.controls({
						props,
						attrPrefix: "numeration",
						panelBody: false,
						justifyContentControlOptions: flexbox.justifyContentOptions.filter(
							(option) => ["", "start", "center", "end"].includes(option.value)
						),
						alignItemsControlOption: flexbox.alignItemsOptions.filter(
							(option) => ["", "start", "center", "end"].includes(option.value)
						),
					})}

					{resetButton({
						onClick: () =>
							setAttributes({
								[camelCase("numeration-justify-content")]:
									grid.breakpointsAttributeValue(""),
								[camelCase("numeration-align-items")]:
									grid.breakpointsAttributeValue(""),
								[camelCase("numeration-flexbox")]:
									grid.breakpointsBehaviorAttributeValue(grid.sameBehavior),
							}),
					})}

					<CardDivider />

					<Heading
						level="3"
						upperCase={true}
						className="wp-beer-blocks__text-center"
					>
						{__("Border", "beer-blocks")}
					</Heading>

					<BaseControl label={__("Border Radius", "beer-blocks")}>
						<UnitControl
							value={numerationBorderRadius}
							onChange={(numerationBorderRadius) =>
								setAttributes({ numerationBorderRadius })
							}
							onUnitChange={() =>
								setAttributes({ numerationBorderRadius: undefined })
							}
							units={[...units, { value: "%", label: "%" }]}
						></UnitControl>
					</BaseControl>

					{resetButton({
						onClick: () => setAttributes({ numerationBorderRadius: "50%" }),
					})}
				</PanelBody>

				{colors.controls({ props })}
				{spacing.breakpointsControls({ props })}
			</InspectorControls>

			<li {...blockProps}>
				<div
					className={`wp-block-beer-blocks-instruction-contents d-flex h-100 ${flexbox.cssClasses(
						{
							props,
						}
					)}`.trimEnd()}
					style={spacing.paddingCssVars(props, "instruction")}
				>
					<div
						className={`wp-block-beer-blocks-instruction-numeration d-inline-flex ${flexbox.cssClasses(
							{ props, attrPrefix: "numeration" }
						)}`.trimEnd()}
						style={{
							...colors.cssVars(props, "instruction", "numeration"),
							...size.cssVars(props, "instruction", "numeration"),
							...typography.fontFamilyStyles(props, "numeration"),
							...typography.fontWeightStyles(props, "numeration"),
							...typography.fontSizeCssVars(props, "instruction", "numeration"),
							...(numerationBorderRadius
								? { borderRadius: numerationBorderRadius }
								: {}),
						}}
					>
						{numeration}
					</div>

					<div>
						<InnerBlocks template={template} templateLock="all" />
					</div>
				</div>
			</li>
		</>
	);
};

export default edit;
