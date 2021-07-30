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
} from "@wordpress/components";
import grid from "./../../helpers/grid";
import typography from "../../helpers/typography";

const edit = (props) => {
	const {
		attributes: {
			numeration,
			numerationBackground,
			numerationColor,
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
					<span>{numeration}</span>

					<InnerBlocks template={template} templateLock="all" />
				</div>
			</li>
		</>
	);
};

export default edit;
