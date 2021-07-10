import { ACTION_TYPES } from "./constants";

const INITIAL_STATE = {
	googleFonts: {
		apiKey: undefined,
		apiKeyLoading: true,
		fontFamilies: [],
		fontFamiliesLoading: false,
		fontFamiliesError: undefined,
		selectedFonts: [],
		selectedFontsLoading: false,
		selectedFontsError: undefined,
		updateSelectedFontsLoading: false,
		updateSelectedFontsError: false,
	},
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ACTION_TYPES.SET_GOOGLE_FONTS_API_KEY:
			return {
				...state,
				googleFonts: {
					...state.googleFonts,
					apiKey: action.apiKey,
				},
			};
		case ACTION_TYPES.SET_GOOGLE_FONTS_API_KEY_LOADING:
			return {
				...state,
				googleFonts: {
					...state.googleFonts,
					apiKeyLoading: action.loading,
				},
			};
		case ACTION_TYPES.SET_FONT_FAMILIES:
			return {
				...state,
				googleFonts: {
					...state.googleFonts,
					fontFamilies: action.fontFamilies,
				},
			};
		case ACTION_TYPES.SET_FONT_FAMILIES_LOADING:
			return {
				...state,
				googleFonts: {
					...state.googleFonts,
					fontFamiliesLoading: action.loading,
				},
			};
		case ACTION_TYPES.SET_FONT_FAMILIES_ERROR:
			return {
				...state,
				googleFonts: {
					...state.googleFonts,
					fontFamiliesError: action.error,
				},
			};
		case ACTION_TYPES.SET_SELECTED_FONTS:
			return {
				...state,
				googleFonts: {
					...state.googleFonts,
					selectedFonts: action.selectedFonts,
				},
			};
		case ACTION_TYPES.SET_SELECTED_FONTS_LOADING:
			return {
				...state,
				googleFonts: {
					...state.googleFonts,
					selectedFontsLoading: action.loading,
				},
			};
		case ACTION_TYPES.SET_SELECTED_FONTS_ERROR:
			return {
				...state,
				googleFonts: {
					...state.googleFonts,
					selectedFontsError: action.error,
				},
			};
		case ACTION_TYPES.SET_UPDATE_SELECTED_FONTS_LOADING:
			return {
				...state,
				googleFonts: {
					...state.googleFonts,
					updateSelectedFontsLoading: action.loading,
				},
			};
		case ACTION_TYPES.SET_UPDATE_SELECTED_FONTS_ERROR:
			return {
				...state,
				googleFonts: {
					...state.googleFonts,
					updateSelectedFontsError: action.error,
				},
			};
		default:
			return state;
	}
};

export default reducer;
