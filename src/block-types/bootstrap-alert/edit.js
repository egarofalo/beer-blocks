import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import { SelectControl, PanelBody } from "@wordpress/components";
import { options as optionsVariant } from "./../../helpers/bootstrap-variants";
import spacing from "./../../helpers/spacing";

const edit = (props) => {
	const {
		attributes: { alertType },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		className: alertType,
		style: {
			...spacing.styles(props.attributes),
		},
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Alert configuration", "beer-blocks")}>
					<SelectControl
						label={__("Select an alert type", "beer-blocks")}
						value={alertType}
						options={optionsVariant.map((option) => ({
							...option,
							value: `alert alert-${option.value}`,
						}))}
						onChange={(value) => setAttributes({ alertType: value })}
						style={{ paddingBottom: 0, marginBottom: 0 }}
					/>
				</PanelBody>
				{spacing.controls({ props })}
			</InspectorControls>

			{spacing.visualizer(
				props,
				<div {...blockProps} role="alert">
					<InnerBlocks />
				</div>
			)}
		</>
	);
};

export default edit;
