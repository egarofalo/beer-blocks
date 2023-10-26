import { __ } from "@wordpress/i18n";
import { TextareaControl, TextControl, PanelBody } from "@wordpress/components";
import { camelCase, has, isString } from "lodash";

// returns attributes name
const attrName = (attr, attrPrefix = "") => camelCase(`${attrPrefix}-${attr}`);

// returns ID attribute
const idAttribute = ({ attrPrefix = "", defaultValue = undefined } = {}) => ({
	[attrName("id-attr", attrPrefix)]: {
		type: "string",
		default: defaultValue,
	},
});

// returns html attributes
const htmlAttributes = ({
	attrPrefix = "",
	defaultValue = undefined,
} = {}) => ({
	[attrName("html-attrs", attrPrefix)]: {
		type: "string",
		default: defaultValue,
	},
});

// returns id and other html block attributes
export const attributes = ({
	attrPrefix = "",
	defaultId = undefined,
	defaultHtmlAttrs = undefined,
} = {}) => ({
	...idAttribute({ attrPrefix, defaultValue: defaultId }),
	...htmlAttributes({ attrPrefix, defaultValue: defaultHtmlAttrs }),
});

// returns id control
const idControl = ({
	props,
	attrPrefix = "",
	label = __("ID attribute", "beer-blocks"),
}) => {
	const attr = attrName("id-attr", attrPrefix);
	const { setAttributes, attributes } = props;

	if (!has(attributes, attr)) {
		return null;
	}

	return (
		<TextControl
			label={label}
			value={attributes[attr]}
			help={__("Set the HTML ID attribute.", "beer-blocks")}
			onChange={(value) => setAttributes({ [attr]: value })}
		/>
	);
};

// returns html attribute's control
const htmlAttrsControl = ({
	props,
	attrPrefix = "",
	label = __("HTML attributes", "beer-blocks"),
}) => {
	const attr = attrName("html-attrs", attrPrefix);
	const { setAttributes, attributes } = props;

	if (!has(attributes, attr)) {
		return null;
	}

	return (
		<TextareaControl
			label={label}
			value={attributes[attr]}
			help={__(
				"Add one or more HTML attributes separated with a new line. Each line must have the `attrName : value` format.",
				"beer-blocks"
			)}
			rows="6"
			onChange={(value) => setAttributes({ [attr]: value })}
		/>
	);
};

// returns controls for id and html attributes
export const controls = ({
	props,
	attrPrefix = "",
	idControlLabel = __("ID attribute", "beer-blocks"),
	htmlAttrsControlLabel = __("HTML attributes", "beer-blocks"),
	panelBody = true,
	title = __("HTML settings", "beer-blocks"),
	initialOpen = false,
}) => {
	const { attributes } = props;
	const idAttrName = attrName("id-attr", attrPrefix);
	const htmlAttrsName = attrName("html-attrs", attrPrefix);

	if (has(attributes, idAttrName) || has(attributes, htmlAttrsName)) {
		const innerControls = (
			<>
				{idControl({
					props,
					attrPrefix,
					label: idControlLabel,
				})}
				{htmlAttrsControl({
					props,
					attrPrefix,
					label: htmlAttrsControlLabel,
				})}
			</>
		);

		return panelBody ? (
			<PanelBody title={title} initialOpen={initialOpen}>
				{innerControls}
			</PanelBody>
		) : (
			innerControls
		);
	}

	return null;
};

// convert htmlAttrs string attribute to a plain object
const htmlAttrsToObject = (attr) => {
	const lines = isString(attr) ? attr.split(/\n/) : [];
	const attrs = lines
		.map((htmlAttr) => {
			if (!/^[a-zA-Z\-]{2,}\s*:\s*[a-zA-Z\-_0-9 ]{2,}$/.test(htmlAttr)) {
				return false;
			}

			let entry = htmlAttr.split(/\s*:\s*/);

			return [entry[0], entry[1].trim()];
		})
		.filter((value) => value);

	return Object.fromEntries(attrs);
};

// returns block props for id and html attributes
export const blockProps = (props, attrPrefix = "") => {
	const { attributes } = props;
	const idAttrName = attrName("id-attr", attrPrefix);
	const htmlAttrsName = attrName("html-attrs", attrPrefix);
	let blockProps = {};

	if (has(attributes, idAttrName)) {
		blockProps = {
			...blockProps,
			...(attributes[idAttrName] ? { id: attributes[idAttrName] } : {}),
		};
	}

	if (has(attributes, htmlAttrsName)) {
		blockProps = {
			...blockProps,
			...htmlAttrsToObject(attributes[htmlAttrsName]),
		};
	}

	return blockProps;
};

export default {
	attributes,
	controls,
	blockProps,
};
