import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import { SelectControl, PanelBody } from "@wordpress/components";
import spacing, { PaddingVisualizer } from "./../../helpers/spacing";
import sectioningTags from "./../../helpers/sectioning-tags";

const edit = (props) => {
	const {
		attributes: { tagName: TagName },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		style: {
			...spacing.paddingCssVars({ props, blockName: "section" }),
			...spacing.marginCssVars({ props, blockName: "section" }),
		},
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

				{spacing.breakpointsControls({ props })}
			</InspectorControls>

			<PaddingVisualizer blockProps={props}>
				<TagName {...blockProps}>
					<InnerBlocks />
				</TagName>
			</PaddingVisualizer>
		</>
	);
};

export default edit;
