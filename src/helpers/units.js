const units = [
	{ value: "px", label: "PX" },
	{ value: "em", label: "EM" },
	{ value: "rem", label: "REM" },
	{ value: "%", label: "%" },
];

const only = (units = ["px"]) =>
	units.map((unit) => ({ value: unit, label: unit.toUpperCase() }));

export { units, only };

export default units;
