import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import { SelectControl, PanelBody } from "@wordpress/components";
import { options as optionsVariant } from "./../../helpers/bootstrap-variants";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

const edit = (props) => {
	const {
		attributes: { alertType },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		className: `${alertType}${spacing.cssClasses(props)}`,
		style: spacing.cssVars(props, "alert"),
		...htmlAttrs.blockProps(props),
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Alert settings", "beer-blocks")}>
					<SelectControl
						label={__("Select an alert type", "beer-blocks")}
						value={alertType}
						options={optionsVariant.map((option) => ({
							...option,
							value: `alert alert-${option.value}`,
						}))}
						onChange={(value) => setAttributes({ alertType: value })}
					/>
				</PanelBody>

				{spacing.controls({ props })}
				{htmlAttrs.controls({ props })}
			</InspectorControls>

			<div {...blockProps} role="alert">
				<InnerBlocks />
			</div>
		</>
	);
};

export default edit;
