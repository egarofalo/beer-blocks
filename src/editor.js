import "./editor.scss";
import "./store";
import "./post-settings-panel";
import icon from "./icons/iso.svg";

(function () {
	wp.blocks.updateCategory("beer-blocks", {
		icon: (
			<img
				src={icon}
				alt="Beer Blocks"
				style={{ width: "25px", height: "auto" }}
			/>
		),
	});
})();
