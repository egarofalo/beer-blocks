import { __ } from "@wordpress/i18n";
import { camelCase } from "lodash";
import {
	PanelBody,
	__experimentalHeading as Heading,
} from "@wordpress/components";
import {
	borderStyleStyles,
	borderColorStyles,
	borderWidthStyles,
	innerControls,
} from "./border";

const sectionTitle = (side) =>
	({
		top: (
			<Heading align="center" level="3">
				{__("INNER BORDER TOP", "beer-blocks")}
			</Heading>
		),
		bottom: (
			<Heading align="center" level="3">
				{__("INNER BORDER BOTTOM", "beer-blocks")}
			</Heading>
		),
	}[side]);

export const attributes = (attrPrefixName = "") => ({
	[camelCase(`${attrPrefixName}-inner-border-top-style`)]: {
		type: "string",
		default: "",
	},
	[camelCase(`${attrPrefixName}-inner-border-top-width`)]: {
		type: "string",
		default: "",
	},
	[camelCase(`${attrPrefixName}-inner-border-top-color`)]: {
		type: "string",
		default: "",
	},
	[camelCase(`${attrPrefixName}-inner-border-bottom-style`)]: {
		type: "string",
		default: "",
	},
	[camelCase(`${attrPrefixName}-inner-border-bottom-width`)]: {
		type: "string",
		default: "",
	},
	[camelCase(`${attrPrefixName}-inner-border-bottom-color`)]: {
		type: "string",
		default: "",
	},
});

export const controls = ({
	props,
	initialOpen = false,
	attrPrefixName = "",
}) => (
	<PanelBody
		title={__("Inner Border", "beer-blocks")}
		initialOpen={initialOpen}
	>
		{innerControls({
			props,
			attrPrefixName: `${attrPrefixName}-inner`,
			side: "top",
			sectionTitle: sectionTitle("top"),
		})}
		{innerControls({
			props,
			attrPrefixName: `${attrPrefixName}-inner`,
			side: "bottom",
			sectionTitle: sectionTitle("bottom"),
		})}
	</PanelBody>
);

export const borderTopHtml = (attributes, attrPrefixName = "") => {
	const {
		[camelCase(`${attrPrefixName}-inner-border-top-style`)]: borderTopStyle,
		[camelCase(`${attrPrefixName}-inner-border-top-width`)]: borderTopWidth,
		[camelCase(`${attrPrefixName}-inner-border-top-color`)]: borderTopColor,
	} = attributes;

	const styles = {
		display: "block",
		height: 0,
		width: "100%",
		...borderStyleStyles(borderTopStyle, "top"),
		...borderWidthStyles(borderTopWidth, "top"),
		...borderColorStyles(borderTopColor, "top"),
	};

	return <div style={styles}></div>;
};

export const borderBottomHtml = (attributes, attrPrefixName = "") => {
	const {
		[camelCase(
			`${attrPrefixName}-inner-border-bottom-style`
		)]: borderBottomStyle,
		[camelCase(
			`${attrPrefixName}-inner-border-bottom-width`
		)]: borderBottomWidth,
		[camelCase(
			`${attrPrefixName}-inner-border-bottom-color`
		)]: borderBottomColor,
	} = attributes;

	const styles = {
		display: "block",
		height: 0,
		width: "100%",
		...borderStyleStyles(borderBottomStyle, "top"),
		...borderWidthStyles(borderBottomWidth, "top"),
		...borderColorStyles(borderBottomColor, "top"),
	};

	return <div style={styles}></div>;
};

export default {
	attributes,
	controls,
	borderTopHtml,
	borderBottomHtml,
};
