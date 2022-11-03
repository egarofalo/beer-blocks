import { capitalize } from "lodash";

export const variants = {
	primary: "#007bff",
	secondary: "#6c757d",
	success: "#28a745",
	info: "#17a2b8",
	warning: "#ffc107",
	danger: "#dc3545",
	light: "#f8f9fa",
	dark: "#343a40",
};

export const variantsColorPallet = [
	...Object.entries(variants).map((value) => ({
		name: capitalize(value[0]),
		color: value[1],
	})),
];

export const options = [
	{
		value: "primary",
		label: "Primary",
	},
	{
		value: "secondary",
		label: "Secondary",
	},
	{
		value: "success",
		label: "Success",
	},
	{
		value: "danger",
		label: "Danger",
	},
	{
		value: "warning",
		label: "Warning",
	},
	{
		value: "info",
		label: "Info",
	},
	{
		value: "light",
		label: "Light",
	},
	{
		value: "dark",
		label: "Dark",
	},
];

export default { variants, variantsColorPallet, options };
