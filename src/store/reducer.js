import { ACTION_TYPES } from "./constants";

const INITIAL_STATE = {
	googleFonts: {
		selectedFonts: undefined,
		selectedFontsLoading: false,
		selectedFontsError: undefined,
		updateSelectedFontsLoading: false,
		updateSelectedFontsError: undefined,
	},
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
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
