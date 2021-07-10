// API Key
export const getGoogleFontsApiKey = (state) => state.googleFonts.apiKey;
export const googleFontsApiKey = (state) => state.googleFonts.apiKey;
export const googleFontsApiKeyLoading = (state) =>
	state.googleFonts.apiKeyLoading;
// Font Families
export const getFontFamilies = (state, apiKey) =>
	state.googleFonts.fontFamilies;
export const fontFamilies = (state) => state.googleFonts.fontFamilies;
export const fontFamiliesLoading = (state) =>
	state.googleFonts.fontFamiliesLoading;
export const fontFamiliesError = (state) => state.googleFonts.fontFamiliesError;
// Selected Fonts
export const getSelectedFonts = (state) => state.googleFonts.selectedFonts;
export const selectedFonts = (state) => state.googleFonts.selectedFonts;
export const selectedFontsLoading = (state) =>
	state.googleFonts.selectedFontsLoading;
export const selectedFontsError = (state) =>
	state.googleFonts.selectedFontsError;
export const updateSelectedFontsLoading = (state) =>
	state.googleFonts.updateSelectedFontsLoading;
export const updateSelectedFontsError = (state) =>
	state.googleFonts.updateSelectedFontsError;
