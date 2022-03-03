<?php

namespace BeerBlocks\Helpers\GoogleFonts;

define('BEERB_LOAD_GOOGLE_FONTS_SETTING', 'beer_blocks_load_google_fonts');
define('BEERB_GOOGLE_FONTS_SETTINGS_SECTION', 'beer_blocks_google_fonts_settings_section');
define('BEERB_GOOGLE_FONTS_STYLSHEET_NAME', 'beer_blocks_google_fonts_stylesheet_name');

$fontFamilies = array_merge(
	json_decode(
		file_get_contents(BEERB_PLUGIN_DIR_PATH . '/src/helpers/safe-fonts.json')
	),
	json_decode(
		file_get_contents(BEERB_PLUGIN_DIR_PATH . '/src/helpers/google-fonts.json')
	)
);

/**
 * Add Google Fonts settings section.
 */
function add_settings_section()
{
	\add_settings_section(
		BEERB_GOOGLE_FONTS_SETTINGS_SECTION,
		__('Google Fonts Settings', 'beer-blocks'),
		null,
		BEERB_SETTINGS_PAGE_SLUG
	);
}

/**
 * Register Google Fonts settings.
 */
function register_settings()
{
	register_setting(BEERB_SETTINGS_PAGE_SLUG, BEERB_LOAD_GOOGLE_FONTS_SETTING);
}

/**
 * Add Google Fonts settings fields in the settings section.
 */
function add_settings_fields()
{
	add_settings_field(
		BEERB_LOAD_GOOGLE_FONTS_SETTING,
		__('Load Google Fonts', 'beer-blocks'),
		BEERB_GLOBALS_HELPERS_NS . '\\input_checkbox_setting_field',
		BEERB_SETTINGS_PAGE_SLUG,
		BEERB_GOOGLE_FONTS_SETTINGS_SECTION,
		[
			'label_text' => __('Load Google Fonts', 'beer-blocks'),
			'label_for' => BEERB_LOAD_GOOGLE_FONTS_SETTING,
			'description' => __('Load Google fonts on the frontend. Uncheck this option if you want to enqueue the selected fonts manually in the active theme.', 'beer-blocks'),
		]
	);
}

/**
 * Enqueue Google Fonts during the block render callback.
 */
function enqueue_selected_font_family($selectedFontFamily)
{
	global $fontFamilies;

	$option = filter_var(
		get_option(BEERB_LOAD_GOOGLE_FONTS_SETTING),
		FILTER_VALIDATE_BOOLEAN
	);

	if (!$option) {
		return;
	}

	if (empty($selectedFontFamily)) {
		return;
	}

	foreach ($fontFamilies as $fontFamily) {
		if ($fontFamily->family === $selectedFontFamily) {
			if ($fontFamily->is_safe) {
				return;
			}

			$qry_args = $fontFamily->family . (property_exists($fontFamily, 'variants') ? ':' . implode(',', $fontFamily->variants) : '');
			$handle = BEERB_GOOGLE_FONTS_STYLSHEET_NAME . "_" . sanitize_title($fontFamily->family);

			add_action('get_footer', function () use ($handle, $qry_args) {
				if (!wp_style_is($handle)) {
					wp_enqueue_style(
						$handle,
						add_query_arg(
							[
								'family' => $qry_args
							],
							'//fonts.googleapis.com/css'
						)
					);
				}
			});

			return;
		}
	}
}
