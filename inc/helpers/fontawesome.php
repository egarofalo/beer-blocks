<?php

namespace BeerBlocks\Helpers\Fontawesome;

define('BEERB_FONTAWESOME_IN_EDITOR_SETTING', 'beer_blocks_load_fontawesome_in_editor');
define('BEERB_FONTAWESOME_IN_EDITOR_ASSET', 'beer-blocks-fontawesome-in-editor');
define('BEERB_FONTAWESOME_IN_FRONT_SETTING', 'beer_blocks_load_fontawesome_in_front');
define('BEERB_FONTAWESOME_IN_FRONT_ASSET', 'beer-blocks-fontawesome-in-front');
define('BEERB_FONTAWESOME_SETTINGS_SECTION', 'beer_blocks_fontawesome_settings_section');

/**
 * Register Font Awesome assets in the editor.
 */
function register_editor_assets()
{
	$option = filter_var(get_option(BEERB_FONTAWESOME_IN_EDITOR_SETTING), FILTER_VALIDATE_BOOLEAN);

	if ($option) {
		wp_register_style(
			BEERB_FONTAWESOME_IN_EDITOR_ASSET,
			'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
		);

		return BEERB_FONTAWESOME_IN_EDITOR_ASSET;
	}

	return false;
}

/**
 * Enqueue Font Awesome assets in the frontend.
 */
function enqueue_front_assets()
{
	$option = filter_var(get_option(BEERB_FONTAWESOME_IN_FRONT_SETTING), FILTER_VALIDATE_BOOLEAN);

	if ($option) {
		wp_enqueue_style(
			BEERB_FONTAWESOME_IN_FRONT_ASSET,
			'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
		);
	}
}

/**
 * Add integrity check attribute to html link tags.
 */
function filters_html_link_tags($html, $handle, $href, $media)
{
	switch ($handle) {
		case BEERB_FONTAWESOME_IN_EDITOR_ASSET:
		case BEERB_FONTAWESOME_IN_FRONT_ASSET:
			$integrity = 'sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==';
			$html = preg_replace(
				"/(>| \/>)$/",
				" integrity=\"{$integrity}\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"$1",
				$html
			);
			break;
	}

	return $html;
}

/**
 * Add Font Awesome settings section.
 */
function add_settings_section()
{
	\add_settings_section(
		BEERB_FONTAWESOME_SETTINGS_SECTION,
		__('Font Awesome Settings (v5.15.3)', 'beer-blocks'),
		null,
		BEERB_SETTINGS_PAGE_SLUG
	);
}

/**
 * Register Font Awesome settings.
 */
function register_settings()
{
	register_setting(BEERB_SETTINGS_PAGE_SLUG, BEERB_FONTAWESOME_IN_EDITOR_SETTING);
	register_setting(BEERB_SETTINGS_PAGE_SLUG, BEERB_FONTAWESOME_IN_FRONT_SETTING);
}

/**
 * Add Font Awesome settings fields in the settings section.
 */
function add_settings_fields()
{
	// Create Fontawesome settings fields
	add_settings_field(
		BEERB_FONTAWESOME_IN_EDITOR_SETTING,
		__('Load Font Awesome in the Editor', 'beer-blocks'),
		BEERB_GLOBALS_HELPERS_NS . '\\input_checkbox_setting_field',
		BEERB_SETTINGS_PAGE_SLUG,
		BEERB_FONTAWESOME_SETTINGS_SECTION,
		[
			'label_text' => __('Load Font Awesome in the Editor', 'beer-blocks'),
			'label_for' => BEERB_FONTAWESOME_IN_EDITOR_SETTING,
			'description' => __('Enqueue Font Awesome styles in the Block editor.', 'beer-blocks'),
		]
	);
	add_settings_field(
		BEERB_FONTAWESOME_IN_FRONT_SETTING,
		__('Load FontAwesome in Front', 'beer-blocks'),
		BEERB_GLOBALS_HELPERS_NS . '\\input_checkbox_setting_field',
		BEERB_SETTINGS_PAGE_SLUG,
		BEERB_FONTAWESOME_SETTINGS_SECTION,
		[
			'label_text' => __('Load Font Awesome in Front', 'beer-blocks'),
			'label_for' => BEERB_FONTAWESOME_IN_FRONT_SETTING,
			'description' => __('Enqueue Font Awesome styles in the Frontend.', 'beer-blocks'),
		]
	);
}
