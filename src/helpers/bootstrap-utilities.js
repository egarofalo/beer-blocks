import { camelCase, capitalize } from "lodash";

// Flexbox
export const flex = {
	// Display
	display: Object.assign(
		{},
		...["flex", "inline-flex"].map((item) => ({
			[camelCase(item)]: `d-${item}`,
			[camelCase(`sm-${item}`)]: `d-sm-${item}`,
			[camelCase(`md-${item}`)]: `d-md-${item}`,
			[camelCase(`lg-${item}`)]: `d-lg-${item}`,
			[camelCase(`xl-${item}`)]: `d-xl-${item}`,
		}))
	),
	// Justify Content
	justifyContent: Object.assign(
		{},
		...["start", "end", "center", "between", "around"].map((item) => ({
			item: `justify-content-${item}`,
			[`sm${capitalize(item)}`]: `justify-content-sm-${item}`,
			[`md${capitalize(item)}`]: `justify-content-md-${item}`,
			[`lg${capitalize(item)}`]: `justify-content-lg-${item}`,
			[`xl${capitalize(item)}`]: `justify-content-xl-${item}`,
		}))
	),
};

export default { flex };
