<?php

namespace BeerBlocks\Helpers\GoogleFonts;

define('BEERB_LOAD_GOOGLE_FONTS_SETTING', 'beer_blocks_load_google_fonts');
define('BEERB_GOOGLE_FONTS_FAMILIES_SETTING', 'beer_blocks_google_fonts_families');
define('BEERB_GOOGLE_FONTS_FAMILIES_FILTER', 'beer_blocks_google_fonts_families');
define('BEERB_GOOGLE_FONTS_SETTINGS_SECTION', 'beer_blocks_google_fonts_settings_section');
define('BEERB_GOOGLE_FONTS_STYLSHEET_HANDLE', 'beer_blocks_google_fonts_stylesheet');

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
	register_setting(BEERB_SETTINGS_PAGE_SLUG, BEERB_GOOGLE_FONTS_FAMILIES_SETTING, [
		'type' => 'array',
		'show_in_rest' => [
			'schema' => [
				'items' => [
					'type' => 'object',
					'properties' => [
						'family' => [
							'type' => 'string',
						],
						'fallback' => [
							'type' => 'string',
						],
						'variants' => [
							'type' => 'object',
							'properties' => [
								'normal' => [
									'type' => 'array',
								],
								'italic' => [
									'type' => 'array'
								],
							]
						]
					]
				]
			],
		],
		'default' => []
	]);
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
 * Enqueue Google Fonts Families.
 */
function enqueue_font_families()
{
	$option = filter_var(get_option(BEERB_LOAD_GOOGLE_FONTS_SETTING), FILTER_VALIDATE_BOOLEAN);
	$fontFamilies = apply_filters(BEERB_GOOGLE_FONTS_FAMILIES_FILTER, []);
	update_option(BEERB_GOOGLE_FONTS_FAMILIES_SETTING, $fontFamilies);

	if (!$option or empty($fontFamilies)) {
		return;
	}

	$src = array_reduce(
		$fontFamilies,
		function ($carry, $fontFamily) {
			$fontFamily = $fontFamily;
			$qryArg = $fontFamily['family'];

			if (!empty($fontFamily['variants'])) {
				$italicVariants = array_map(function ($variant) {
					return "1,{$variant}";
				}, $fontFamily['variants']['italic'] ?? []);

				$normalVariants = array_map(function ($variant) use ($italicVariants) {
					return !empty($italicVariants) ? "0,{$variant}" : $variant;
				}, $fontFamily['variants']['normal'] ?? []);

				$variants = [...$normalVariants, ...$italicVariants];
				$qryArg .= ':' . (!empty($italicVariants) ? 'ital,' : '') . 'wght@' . implode(";", $variants);
			}

			return $carry . ltrim(add_query_arg('family', $qryArg, ''), '?') . '&';
		},
		'https://fonts.googleapis.com/css2?'
	);

	wp_enqueue_style(BEERB_GOOGLE_FONTS_STYLSHEET_HANDLE, esc_url("{$src}display=swap"), [], null);
}

/**
 * Add link tag with rel=preconnect attribute before load Google Fonts.
 */
function filters_html_link_tags($html, $handle, $href, $media)
{
	switch ($handle) {
		case BEERB_GOOGLE_FONTS_STYLSHEET_HANDLE:
			$html = '<link rel="preconnect" href="https://fonts.googleapis.com">' .
				'<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' . $html;
			break;
	}

	return $html;
}
