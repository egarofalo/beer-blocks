import { __ } from "@wordpress/i18n";
import { dispatch as dispatchControl } from "@wordpress/data-controls";
import { dispatch, select } from "@wordpress/data";
import { STORE_NAME, ACTION_TYPES } from "./constants";

export const setGoogleFontsApiKey = (apiKey) => ({
	type: ACTION_TYPES.SET_GOOGLE_FONTS_API_KEY,
	apiKey,
});

export const setGoogleFontsApiKeyLoading = (loading) => ({
	type: ACTION_TYPES.SET_GOOGLE_FONTS_API_KEY_LOADING,
	loading,
});

export const setFontFamilies = (fontFamilies) => ({
	type: ACTION_TYPES.SET_FONT_FAMILIES,
	fontFamilies,
});

export const setFontFamiliesLoading = (loading) => ({
	type: ACTION_TYPES.SET_FONT_FAMILIES_LOADING,
	loading,
});

export const setFontFamiliesError = (error) => ({
	type: ACTION_TYPES.SET_FONT_FAMILIES_ERROR,
	error,
});

export const setSelectedFonts = (selectedFonts) => {
	const uniqueSelectedFonts = selectedFonts.reduce((accArr, value) => {
		if (!accArr.find((element) => element.family === value.family)) {
			accArr.push(value);
		}

		return accArr;
	}, []);

	return {
		type: ACTION_TYPES.SET_SELECTED_FONTS,
		selectedFonts: uniqueSelectedFonts,
	};
};

export const setSelectedFontsLoading = (loading) => ({
	type: ACTION_TYPES.SET_SELECTED_FONTS_LOADING,
	loading,
});

export const setSelectedFontsError = (error) => ({
	type: ACTION_TYPES.SET_FONT_FAMILIES_ERROR,
	error,
});

export const setUpdateSelectedFontsLoading = (loading) => ({
	type: ACTION_TYPES.SET_UPDATE_SELECTED_FONTS_LOADING,
	loading,
});

export const setUpdateSelectedFontsError = (error) => ({
	type: ACTION_TYPES.SET_UPDATE_SELECTED_FONTS_ERROR,
	error,
});

export function* updateSelectedFonts(selectedFonts) {
	dispatch(STORE_NAME).setUpdateSelectedFontsLoading(true);
	dispatch(STORE_NAME).setUpdateSelectedFontsError(null);

	try {
		dispatch(STORE_NAME).setSelectedFonts(selectedFonts);
		yield dispatchControl("core/editor", "editPost", {
			meta: { _beer_blocks_selected_fonts: select(STORE_NAME).selectedFonts() },
		});

		return setUpdateSelectedFontsLoading(false);
	} catch (error) {
		dispatch(STORE_NAME).setUpdateSelectedFontsError(error);

		return setUpdateSelectedFontsLoading(false);
	}
}
