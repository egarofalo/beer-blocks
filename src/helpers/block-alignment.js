export const values = ["left", "center", "right"];

export const styles = (value) => {
	switch (value) {
		case "left":
			return { marginLeft: 0, marginRight: "auto" };
		case "right":
			return { marginLeft: "auto", marginRight: 0 };
		case "center":
		default:
			return { marginLeft: "auto", marginRight: "auto" };
	}
};

export default { values, styles };
