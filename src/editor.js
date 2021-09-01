import "./editor.scss";
import "./store";
import "./post-settings-panel";
import icon from "./icons/logo.svg";

(function () {
	wp.blocks.updateCategory("beer-blocks", {
		icon: (
			<img
				src={icon}
				alt="Beer Blocks"
				style={{ width: "50px", height: "auto" }}
			/>
		),
	});
})();
