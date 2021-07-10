import { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import { registerPlugin } from "@wordpress/plugins";
import { PluginDocumentSettingPanel } from "@wordpress/edit-post";
import { BaseControl, Spinner, Notice } from "@wordpress/components";
import { dispatch, useSelect } from "@wordpress/data";
import Select from "react-select";
import WebFont from "webfontloader";
import { STORE_NAME } from "./store/constants";

const BeerBlocksPluginDocumentSettingPanel = () => {
	const {
		apiKey,
		apiKeyLoading,
		fontFamilies,
		fontFamiliesLoading,
		fontFamiliesError,
		selectedFonts,
		selectedFontsLoading,
		selectedFontsError,
		updateSelectedFontsLoading,
		updateSelectedFontsError,
	} = useSelect((select) => {
		const store = select(STORE_NAME);
		const apiKey = store.getGoogleFontsApiKey();

		let data = {
			apiKey,
			apiKeyLoading: store.googleFontsApiKeyLoading(),
		};

		if (apiKey) {
			data = {
				...data,
				fontFamilies: store.getFontFamilies(apiKey),
				fontFamiliesLoading: store.fontFamiliesLoading(),
				fontFamiliesError: store.fontFamiliesError(),
				selectedFonts: store.getSelectedFonts(),
				selectedFontsLoading: store.selectedFontsLoading(),
				selectedFontsError: store.selectedFontsError(),
				updateSelectedFontsLoading: store.updateSelectedFontsLoading(),
				updateSelectedFontsError: store.updateSelectedFontsError(),
			};
		}

		return data;
	});

	useEffect(() => {
		if (Array.isArray(selectedFonts) && selectedFonts.length > 0) {
			WebFont.load({
				google: {
					families: selectedFonts.map(
						(font) => `${font.family}:${font.variants.join(",")}`
					),
				},
			});
		}
	}, [selectedFonts]);

	let result = "";

	if (apiKeyLoading) {
		result = (
			<>
				<p>Font Families:</p>

				<Notice isDismissible={false}>
					<Spinner />

					<br />
					{__(
						"Getting Google Maps API Key from Beer Blocks configuration...",
						"beer-blocks"
					)}
				</Notice>
			</>
		);
	} else if (!apiKey) {
		result = (
			<>
				<p>Font Families:</p>

				<Notice status="warning" isDismissible={false}>
					{__(
						"You must enter a Google Fonts Api Key to activate the font families dropdown list.",
						"beer-blocks"
					)}
				</Notice>
			</>
		);
	} else {
		result = (
			<>
				<BaseControl
					label={__("Font Families:", "beer-blocks")}
					help={__(
						"Choose one or more font families to load them in the post or page.",
						"beer-blocks"
					)}
				>
					<div style={{ marginTop: "8px" }}>
						<Select
							name="beer-blocks-selected-font-families"
							options={fontFamilies.map(({ family, variants }) => ({
								value: {
									family,
									variants,
								},
								label: family,
							}))}
							isMulti="true"
							isDisabled={
								!fontFamilies ||
								fontFamiliesLoading ||
								selectedFontsLoading ||
								updateSelectedFontsLoading
							}
							isLoading={
								fontFamiliesLoading ||
								selectedFontsLoading ||
								updateSelectedFontsLoading
							}
							noOptionsMessage={() =>
								__("No font family options", "beer-blocks")
							}
							placeholder={__("Select...", "beer-blocks")}
							onChange={(selectedOptions) =>
								dispatch(STORE_NAME).updateSelectedFonts(
									selectedOptions.map((option) => option.value)
								)
							}
							value={selectedFonts.map((font) => ({
								label: font.family,
								value: font,
							}))}
						/>
					</div>
				</BaseControl>

				{fontFamiliesError && (
					<Notice status="error" isDismissible={false}>
						{fontFamiliesError.message}
					</Notice>
				)}

				{selectedFontsError && (
					<Notice status="error" isDismissible={false}>
						{selectedFontsError.message}
					</Notice>
				)}

				{updateSelectedFontsLoading && (
					<Notice status="info" isDismissible={false}>
						{__("Updating selected fonts...", "beer-blocks")}
					</Notice>
				)}

				{updateSelectedFontsError && (
					<Notice status="error" isDismissible={false}>
						{updateSelectedFontsError.message}
					</Notice>
				)}
			</>
		);
	}

	return (
		<PluginDocumentSettingPanel
			name="beer-blocks-post-settings-panel"
			title={__("Beer Blocks - Post Settings", "beer-blocks")}
			icon="palmtree"
		>
			<div className="beer-blocks__notices">{result}</div>
		</PluginDocumentSettingPanel>
	);
};

registerPlugin("beer-blocks-post-settings-panel", {
	render: BeerBlocksPluginDocumentSettingPanel,
});
