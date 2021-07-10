const getLineSeparatorDefaultWidth = (unit) => {
	switch (unit) {
		case "em":
		case "rem":
			return `4${unit}`;
		case "px":
		case "%":
			return `100${unit}`;
		default:
			return 0;
	}
};

export { getLineSeparatorDefaultWidth };
