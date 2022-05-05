import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import { SelectControl, PanelBody } from "@wordpress/components";
import spacing from "./../../helpers/spacing";
import sectioningTags from "./../../helpers/sectioning-tags";

const edit = (props) => {
	const {
		attributes: { tagName: TagName },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		style: {
			...spacing.styles(props.attributes),
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

				{spacing.controls({ props })}
			</InspectorControls>

			{spacing.visualizer({
				props,
				children: (
					<TagName {...blockProps}>
						<InnerBlocks />
					</TagName>
				),
			})}
		</>
	);
};

export default edit;
