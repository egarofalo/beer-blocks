import { dispatch, select } from "@wordpress/data";
import { select as selectControl } from "@wordpress/data-controls";
import { STORE_NAME } from "./constants";
import { setSelectedFonts, setSelectedFontsError } from "./actions";

export function* selectedFonts() {
	dispatch(STORE_NAME).setSelectedFontsLoading(true);
	dispatch(STORE_NAME).setSelectedFontsError(null);

	try {
		const editor = select("core/editor");

		if (editor) {
			const {
				meta: { _beer_blocks_selected_fonts: selectedFonts },
			} = yield selectControl("core/editor", "getCurrentPost");
			dispatch(STORE_NAME).setSelectedFontsLoading(false);

			return setSelectedFonts(selectedFonts);
		} else {
			dispatch(STORE_NAME).setSelectedFontsLoading(false);

			return setSelectedFonts([]);
		}
	} catch (error) {
		dispatch(STORE_NAME).setSelectedFontsLoading(false);

		return setSelectedFontsError(error);
	}
}
