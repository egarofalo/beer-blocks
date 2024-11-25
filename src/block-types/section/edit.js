import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import { SelectControl, PanelBody } from "@wordpress/components";
import colors from "./../../helpers/colors";
import border from "./../../helpers/border";
import blockAlignment from "./../../helpers/block-alignment";
import size from "./../../helpers/size";
import spacing from "./../../helpers/spacing";
import sectioningTags from "./../../helpers/sectioning-tags";
import htmlAttrs from "./../../helpers/html-attrs";

const edit = (props) => {
	const {
		attributes: { tagName: TagName },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		className: `${colors.cssClasses(props)}${border.cssClasses(
			props,
		)}${blockAlignment.cssClasses(props)}${size.cssClasses(
			props,
		)}${spacing.cssClasses(props)}`.trimStart(),
		style: {
			...colors.cssVars(props, "section"),
			...border.cssVars(props, "section"),
			...size.cssVars(props, "section"),
			...spacing.cssVars(props, "section"),
		},
		...htmlAttrs.blockProps(props),
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Section settings", "beer-blocks")}>
					<SelectControl
						label={__("HTML Tag", "beer-blocks")}
						options={[
							...sectioningTags.map((tag) => ({
								label: `<${tag}>`,
								value: tag,
							})),
						]}
						value={TagName}
						onChange={(value) => setAttributes({ tagName: value })}
					/>
				</PanelBody>

				{colors.controls({ props })}
				{border.controls({ props })}
				{blockAlignment.controlsWithBreakpoints({ props })}
				{size.controls({ props })}
				{spacing.controls({ props })}
				{htmlAttrs.controls({ props })}
			</InspectorControls>

			<TagName {...blockProps}>
				<InnerBlocks />
			</TagName>
		</>
	);
};

export default edit;
