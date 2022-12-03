import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";

export const reset = ({
	label = __("Reset values", "beer-blocks"),
	onClick = () => {},
}) => (
	<Button
		isDestructive={true}
		onClick={() => onClick()}
		style={{
			width: "100%",
			textTransform: "uppercase",
			marginTop: "20px",
			display: "block",
			textAlign: "center",
		}}
	>
		{label}
	</Button>
);

export default { reset };
