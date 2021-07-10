import { dispatch, select } from "@wordpress/data";
import { select as selectControl } from "@wordpress/data-controls";
import { STORE_NAME } from "./constants";
import {
	setFontFamilies,
	setFontFamiliesError,
	setSelectedFonts,
	setSelectedFontsError,
} from "./actions";
import { fetch } from "./controls";

export function* getGoogleFontsApiKey() {
	const apiKey = select(STORE_NAME).googleFontsApiKey();

	if (apiKey) {
		return;
	}

	dispatch(STORE_NAME).setGoogleFontsApiKeyLoading(true);
	const {
		beer_blocks_google_fonts_api_key: fetchedApiKey,
	} = yield selectControl("core", "getEntityRecord", "root", "site");
	dispatch(STORE_NAME).setGoogleFontsApiKey(fetchedApiKey);
	dispatch(STORE_NAME).setGoogleFontsApiKeyLoading(false);
}

export function* getFontFamilies(apiKey) {
	dispatch(STORE_NAME).setFontFamiliesLoading(true);
	dispatch(STORE_NAME).setFontFamiliesError(null);

	try {
		const path = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`;
		const fontFamilies = yield fetch(path);
		dispatch(STORE_NAME).setFontFamiliesLoading(false);

		return setFontFamilies(
			fontFamilies.hasOwnProperty("items") ? fontFamilies.items : []
		);
	} catch (error) {
		dispatch(STORE_NAME).setFontFamiliesLoading(false);

		return setFontFamiliesError(error);
	}
}

export function* getSelectedFonts() {
	dispatch(STORE_NAME).setSelectedFontsLoading(true);
	dispatch(STORE_NAME).setSelectedFontsError(null);

	try {
		const {
			meta: { _beer_blocks_selected_fonts: selectedFonts },
		} = yield selectControl("core/editor", "getCurrentPost");
		dispatch(STORE_NAME).setSelectedFontsLoading(false);

		return setSelectedFonts(selectedFonts);
	} catch (error) {
		dispatch(STORE_NAME).setSelectedFontsLoading(false);

		return setSelectedFontsError(error);
	}
}
