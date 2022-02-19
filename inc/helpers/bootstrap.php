<?php

namespace BeerBlocks\Helpers\Bootstrap;

define('BEERB_BOOTSTRAP_IN_EDITOR_SETTING', 'beer_blocks_load_bootstrap_in_editor');
define('BEERB_BOOTSTRAP_IN_EDITOR_ASSET', 'beer-blocks-bootstrap-in-editor');
define('BEERB_BOOTSTRAP_IN_FRONT_SETTING', 'beer_blocks_load_bootstrap_in_front');
define('BEERB_BOOTSTRAP_IN_FRONT_ASSET', 'beer-blocks-bootstrap-in-front');
define('BEERB_BOOTSTRAP_SETTINGS_SECTION', 'beer_blocks_bootstrap_settings_section');

/**
 * Register Bootstrap assets in the editor.
 */
function register_editor_assets()
{
	$option = filter_var(get_option(BEERB_BOOTSTRAP_IN_EDITOR_SETTING), FILTER_VALIDATE_BOOLEAN);

	if ($option) {
		$plugin_url = BEERB_PLUGIN_DIR_URL;
		$asset_file = include BEERB_PLUGIN_DIR_PATH . '/build/vendor/bootstrap/editor.asset.php';

		wp_register_script(
			BEERB_BOOTSTRAP_IN_EDITOR_ASSET,
			"{$plugin_url}/build/vendor/bootstrap/editor.js",
			$asset_file['dependencies'],
			$asset_file['version'],
			true
		);

		wp_register_style(
			BEERB_BOOTSTRAP_IN_EDITOR_ASSET,
			"{$plugin_url}/build/vendor/bootstrap/editor.css",
			[],
			filemtime(BEERB_PLUGIN_DIR_PATH . '/build/vendor/bootstrap/editor.css')
		);

		return BEERB_BOOTSTRAP_IN_EDITOR_ASSET;
	}

	return false;
}

/**
 * Enqueue Bootstrap assets in the frontend.
 */
function enqueue_front_assets()
{
	$option = filter_var(get_option(BEERB_BOOTSTRAP_IN_FRONT_SETTING), FILTER_VALIDATE_BOOLEAN);

	if ($option) {
		$plugin_url = BEERB_PLUGIN_DIR_URL;
		$asset_file = include BEERB_PLUGIN_DIR_PATH . '/build/vendor/bootstrap/front.asset.php';

		wp_enqueue_script(
			BEERB_BOOTSTRAP_IN_FRONT_ASSET,
			"{$plugin_url}/build/vendor/bootstrap/front.js",
			$asset_file['dependencies'],
			$asset_file['version'],
			true
		);

		wp_enqueue_style(
			BEERB_BOOTSTRAP_IN_FRONT_ASSET,
			"{$plugin_url}/build/vendor/bootstrap/front.css",
			[],
			filemtime(BEERB_PLUGIN_DIR_PATH . '/build/vendor/bootstrap/front.css')
		);
	}
}

/**
 * Add Bootstrap settings section.
 */
function add_settings_section()
{
	\add_settings_section(
		BEERB_BOOTSTRAP_SETTINGS_SECTION,
		__('Bootstrap Settings (v4.6.1)', 'beer-blocks'),
		null,
		BEERB_SETTINGS_PAGE_SLUG
	);
}

/**
 * Register Bootstrap settings.
 */
function register_settings()
{
	register_setting(BEERB_SETTINGS_PAGE_SLUG, BEERB_BOOTSTRAP_IN_EDITOR_SETTING);
	register_setting(BEERB_SETTINGS_PAGE_SLUG, BEERB_BOOTSTRAP_IN_FRONT_SETTING);
}

/**
 * Add Bootstrap settings fields in the settings section.
 */
function add_settings_fields()
{
	// Create Bootstrap settings fields
	add_settings_field(
		BEERB_BOOTSTRAP_IN_EDITOR_SETTING,
		__('Load Bootstrap in the Editor', 'beer-blocks'),
		BEERB_GLOBALS_HELPERS_NS . '\\input_checkbox_setting_field',
		BEERB_SETTINGS_PAGE_SLUG,
		BEERB_BOOTSTRAP_SETTINGS_SECTION,
		[
			'label_text' => __('Load Bootstrap in the Editor', 'beer-blocks'),
			'label_for' => BEERB_BOOTSTRAP_IN_EDITOR_SETTING,
			'description' => __('Enqueue Bootstrap styles in the Block editor.', 'beer-blocks'),
		]
	);
	add_settings_field(
		BEERB_BOOTSTRAP_IN_FRONT_SETTING,
		__('Load Bootstrap in Front', 'beer-blocks'),
		BEERB_GLOBALS_HELPERS_NS . '\\input_checkbox_setting_field',
		BEERB_SETTINGS_PAGE_SLUG,
		BEERB_BOOTSTRAP_SETTINGS_SECTION,
		[
			'label_text' => __('Load Bootstrap in Front', 'beer-blocks'),
			'label_for' => BEERB_BOOTSTRAP_IN_FRONT_SETTING,
			'description' => __('Enqueue Bootstrap styles and scripts in the Frontend.', 'beer-blocks'),
		]
	);
}
