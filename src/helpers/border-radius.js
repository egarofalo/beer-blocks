import { useState } from "react";
import { __, sprintf } from "@wordpress/i18n";
import {
	PanelBody,
	BaseControl,
	__experimentalUnitControl as UnitControl,
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
} from "@wordpress/components";
import { camelCase, upperFirst } from "lodash";
import {
	BsBoxArrowInUpLeft,
	BsBoxArrowInUpRight,
	BsBoxArrowInDownRight,
	BsBoxArrowInDownLeft,
	BsArrowsFullscreen,
} from "react-icons/bs";

const defaultUnits = [
	{ value: "px", label: "PX" },
	{ value: "em", label: "EM" },
	{ value: "rem", label: "REM" },
	{ value: "%", label: "%" },
];

const cornersLabels = {
	all: __("All corners", "beer-blocks"),
	topLeft: __("Top left corner", "beer-blocks"),
	topRight: __("Top right corner", "beer-blocks"),
	bottomRight: __("Bottom right corner", "beer-blocks"),
	bottomLeft: __("Bottom left corner", "beer-blocks"),
};

export const borderRadiusAttribute = () => ({ type: "string", default: "" });

export const borderRadiusControl = ({
	props,
	attrName = "borderRadius",
	label = __("Border radius", "beer-blocks"),
}) => {
	const {
		setAttributes,
		attributes: { [attrName]: borderRadius = undefined },
	} = props;

	return borderRadius !== undefined ? (
		<UnitControl
			label={label}
			value={borderRadius}
			onChange={(value) => setAttributes({ [attrName]: value })}
			onUnitChange={() =>
				setAttributes({
					[attrName]: "",
				})
			}
			units={defaultUnits}
		/>
	) : null;
};

export const borderRadiusStyles = (borderRadius, corner = "") =>
	borderRadius ? { [`border${upperFirst(corner)}Radius`]: borderRadius } : {};

export const attributes = ({ attrPrefixName = "", corner = "" } = {}) => ({
	[camelCase(
		`${attrPrefixName}-border-${corner}-radius`
	)]: borderRadiusAttribute(),
});

export const innerControls = ({ props, attrPrefixName = "", corner = "" }) =>
	borderRadiusControl({
		props,
		attrName: camelCase(`${attrPrefixName}-border-${corner}-radius`),
	});

export const controls = ({
	props,
	initialOpen = false,
	attrPrefixName = "",
	title = __("Border radius", "beer-blocks"),
}) => {
	const {
		[camelCase(`${attrPrefixName}-border-radius`)]: borderRadius = undefined,
		[camelCase(
			`${attrPrefixName}-border-top-left-radius`
		)]: borderTopLeftRadius = undefined,
		[camelCase(
			`${attrPrefixName}-border-top-right-radius`
		)]: borderTopRightRadius = undefined,
		[camelCase(
			`${attrPrefixName}-border-bottom-right-radius`
		)]: borderBottomRightRadius = undefined,
		[camelCase(
			`${attrPrefixName}-border-bottom-left-radius`
		)]: borderBottomLeftRadius = undefined,
	} = props.attributes;

	const selectedCorner = () => {
		if (borderRadius !== undefined) {
			return "all";
		}

		if (borderTopLeftRadius !== undefined) {
			return "topLeft";
		}

		if (borderTopRightRadius !== undefined) {
			return "topRight";
		}

		if (borderBottomRightRadius !== undefined) {
			return "bottomRight";
		}

		if (borderBottomLeftRadius !== undefined) {
			return "bottomLeft";
		}

		return "";
	};

	const [corner, setCorner] = useState(selectedCorner());

	const result = (
		<>
			<BaseControl
				label={sprintf(
					__("Select corner (%s)", "beer-blocks"),
					cornersLabels[corner]
				)}
			>
				<RadioGroup
					onChange={setCorner}
					checked={corner}
					style={{ display: "block", marginTop: "8px" }}
				>
					{borderRadius !== undefined && (
						<Radio value="all">
							<BsArrowsFullscreen style={{ fontSize: "1.2rem" }} />
						</Radio>
					)}

					{borderTopLeftRadius !== undefined && (
						<Radio value="topLeft">
							<BsBoxArrowInUpLeft style={{ fontSize: "1.2rem" }} />
						</Radio>
					)}

					{borderTopRightRadius !== undefined && (
						<Radio value="topRight">
							<BsBoxArrowInUpRight style={{ fontSize: "1.2rem" }} />
						</Radio>
					)}

					{borderBottomRightRadius !== undefined && (
						<Radio value="bottomRight">
							<BsBoxArrowInDownRight style={{ fontSize: "1.2rem" }} />
						</Radio>
					)}

					{borderBottomLeftRadius !== undefined && (
						<Radio value="bottomLeft">
							<BsBoxArrowInDownLeft style={{ fontSize: "1.2rem" }} />
						</Radio>
					)}
				</RadioGroup>
			</BaseControl>

			{corner === "all"
				? innerControls({ props, attrPrefixName })
				: innerControls({ props, attrPrefixName, corner })}
		</>
	);

	return title ? (
		<PanelBody title={title} initialOpen={initialOpen}>
			{result}
		</PanelBody>
	) : (
		result
	);
};

export const styles = (attributes, attrPrefixName = "") => {
	const {
		[camelCase(`${attrPrefixName}-border-radius`)]: borderRadius = undefined,
		[camelCase(
			`${attrPrefixName}-border-top-left-radius`
		)]: borderTopLeftRadius = undefined,
		[camelCase(
			`${attrPrefixName}-border-top-right-radius`
		)]: borderTopRightRadius = undefined,
		[camelCase(
			`${attrPrefixName}-border-bottom-right-radius`
		)]: borderBottomRightRadius = undefined,
		[camelCase(
			`${attrPrefixName}-border-bottom-left-radius`
		)]: borderBottomLeftRadius = undefined,
	} = attributes;

	return {
		...borderRadiusStyles(borderRadius),
		...borderRadiusStyles(borderTopLeftRadius, "topLeft"),
		...borderRadiusStyles(borderTopRightRadius, "topRight"),
		...borderRadiusStyles(borderBottomRightRadius, "bottomRight"),
		...borderRadiusStyles(borderBottomLeftRadius, "bottomLeft"),
	};
};

export default {
	borderRadiusAttribute,
	borderRadiusControl,
	borderRadiusStyles,
	attributes,
	innerControls,
	controls,
	styles,
};
