<?php

namespace BeerBlocks\Helpers\Globals;

use function BeerBlocks\Helpers\Bootstrap\register_editor_styles as register_bootstrap_editor_styles;
use function BeerBlocks\Helpers\Bootstrap\register_editor_scripts as register_bootstrap_editor_scripts;
use function BeerBlocks\Helpers\Fontawesome\register_editor_assets as register_fontawesome_editor_assets;
use function BeerBlocks\Helpers\GoogleFonts\enqueue_selected_font_family;

/**
 * Create Beer Block category (before WordPress 5.8).
 */
function create_blocks_category__deprecated($categories, $post)
{
	return array_merge(
		$categories,
		[
			[
				'slug' => BEERB_PLUGIN_SLUG,
				'title' => BEERB_PLUGIN_NAME,
			],
		]
	);
}

/**
 * Create Beer Block category (since WordPress 5.8).
 */
function create_blocks_category($block_categories, $editor_context)
{
	array_push(
		$block_categories,
		[
			'slug' => BEERB_PLUGIN_SLUG,
			'title' => BEERB_PLUGIN_NAME,
		]
	);

	return $block_categories;
}

/**
 * Register block types dependencies.
 */
function register_shared_dependencies()
{
	$asset_file = include BEERB_PLUGIN_DIR_PATH . '/build/editor.asset.php';

	wp_register_script(
		'beer-blocks-editor',
		BEERB_PLUGIN_DIR_URL . '/build/editor.js',
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	wp_set_script_translations(
		'beer-blocks-editor',
		'beer-blocks',
		BEERB_PLUGIN_DIR_PATH . '/languages'
	);

	wp_register_style(
		'beer-blocks-editor',
		BEERB_PLUGIN_DIR_URL . '/build/editor.css',
		[],
		filemtime(BEERB_PLUGIN_DIR_PATH . '/build/editor.css')
	);
}

/**
 * Register block types.
 */
function register_block_types()
{
	// Register block types dependencies
	register_shared_dependencies();
	$bootstrap_editor_scripts = register_bootstrap_editor_scripts();
	$bootstrap_editor_styles = register_bootstrap_editor_styles();
	$fontawesome_editor_assets = register_fontawesome_editor_assets();

	// Block Types scripts dependencies
	$block_types_scripts_dependencies = array_merge(
		['beer-blocks-editor'],
		$bootstrap_editor_scripts ? [$bootstrap_editor_scripts] : []
	);

	// Block Types styles dependencies
	$block_types_styles_dependencies = array_merge(
		['beer-blocks-editor'],
		$bootstrap_editor_styles ? [$bootstrap_editor_styles] : [],
		$fontawesome_editor_assets ? [$fontawesome_editor_assets] : []
	);

	// Register all block types
	$manifest = json_decode(file_get_contents(BEERB_PLUGIN_DIR_PATH . '/manifest.json'), true);

	foreach ($manifest['block_types'] as $block_type) {
		$asset_file = include BEERB_PLUGIN_DIR_PATH . "/build/{$block_type}/index.asset.php";
		$editor_script_handle = "beer-blocks-{$block_type}-editor-script";
		$editor_style_handle = "beer-blocks-{$block_type}-editor-style";
		$style_handle = "beer-blocks-{$block_type}-style";
		$render_callback = function ($attributes, $content) {
			foreach ($attributes as $attr => $fontFamily) {
				if (preg_match('/[fF]ontFamily$/', $attr)) {
					enqueue_selected_font_family($fontFamily);
				}
			}

			return $content;
		};

		$block_type_params = [
			'api_version' => 2,
			'editor_script' => $editor_script_handle,
			'editor_style' => $editor_style_handle,
			'render_callback' => $render_callback,
		];

		if (file_exists(BEERB_PLUGIN_DIR_PATH . "/build/{$block_type}/style-index.css")) {
			$block_type_params['style'] = $style_handle;
		}

		wp_register_script(
			$editor_script_handle,
			BEERB_PLUGIN_DIR_URL . "/build/{$block_type}/index.js",
			array_merge($asset_file['dependencies'], $block_types_scripts_dependencies),
			$asset_file['version'],
			true
		);

		wp_register_style(
			$editor_style_handle,
			BEERB_PLUGIN_DIR_URL . "/build/{$block_type}/index.css",
			$block_types_styles_dependencies,
			filemtime(BEERB_PLUGIN_DIR_PATH . "/build/{$block_type}/index.css")
		);

		if (isset($block_type_params['style'])) {
			wp_register_style(
				$style_handle,
				BEERB_PLUGIN_DIR_URL . "/build/{$block_type}/style-index.css",
				[],
				filemtime(BEERB_PLUGIN_DIR_PATH . "/build/{$block_type}/style-index.css")
			);
		}

		wp_set_script_translations(
			"beer-blocks-{$block_type}-editor-script",
			'beer-blocks',
			BEERB_PLUGIN_DIR_PATH . '/languages'
		);

		register_block_type("beer-blocks/{$block_type}", $block_type_params);
	}
}

/**
 * Add the menu link settings page.
 */
function add_settings_menu_page()
{
	$plugin_path = BEERB_PLUGIN_DIR_PATH;

	add_menu_page(
		__('Beer Blocks Settings', 'beer-blocks'),
		BEERB_PLUGIN_NAME,
		'manage_options',
		BEERB_SETTINGS_PAGE_SLUG,
		function () {
			// check user capabilities
			if (!current_user_can('manage_options')) {
				return;
			}

			include BEERB_PLUGIN_DIR_PATH . '/inc/beer-blocks-admin-page.php';
		},
		'data:image/svg+xml;base64,' . base64_encode(
			file_get_contents("{$plugin_path}/assets/iso.svg")
		)
	);
}

/**
 * Load the input text field with a custom description.
 */
function input_text_setting_field(array $args = [])
{
	$option = get_option($args['label_for']);
	extract($args);
	include BEERB_PLUGIN_DIR_PATH . '/inc/settings-fields/input-text.php';
}

/**
 * Load the checkbox field with value = yes|no and a custom description.
 */
function input_checkbox_setting_field(array $args = [])
{
	$option = get_option($args['label_for']);
	extract($args);
	include BEERB_PLUGIN_DIR_PATH . '/inc/settings-fields/input-checkbox.php';
}

/**
 * Update settings on form submit.
 */
function form_submit()
{
	// check if the user submit form
	if (
		filter_input(INPUT_POST, 'option_page') !== BEERB_SETTINGS_PAGE_SLUG or
		filter_input(INPUT_POST, 'action') !== 'update'
	) {
		return;
	}

	// check if nonce exists
	$nonce = filter_input(INPUT_POST, '_wpnonce');
	if (empty($nonce)) {
		add_settings_error(
			'beer_blocks_settings_messages',
			'beer_blocks_settings_error_message',
			__('<p>Security alert: <b>NONCE CHECK FAILED</b></p>', 'beer-blocks')
		);
		return;
	}

	// check nonce
	if (!wp_verify_nonce($nonce, 'beer_blocks_settings_page-options')) {
		add_settings_error(
			'beer_blocks_settings_messages',
			'beer_blocks_settings_error_message',
			__('<p>Security alert: <b>NONCE CHECK FAILED</b></p>', 'beer-blocks')
		);
		return;
	}

	// get submited data
	$bootstrap_in_editor_styles = filter_input(
		INPUT_POST,
		BEERB_BOOTSTRAP_IN_EDITOR_SETTING,
		FILTER_VALIDATE_BOOLEAN,
		FILTER_NULL_ON_FAILURE
	);
	$bootstrap_in_editor_scripts = filter_input(
		INPUT_POST,
		BEERB_BOOTSTRAP_SCRIPTS_IN_EDITOR_SETTING,
		FILTER_VALIDATE_BOOLEAN,
		FILTER_NULL_ON_FAILURE
	);
	$bootstrap_in_front = filter_input(
		INPUT_POST,
		BEERB_BOOTSTRAP_IN_FRONT_SETTING,
		FILTER_VALIDATE_BOOLEAN,
		FILTER_NULL_ON_FAILURE
	);
	$fa_in_editor = filter_input(
		INPUT_POST,
		BEERB_FONTAWESOME_IN_EDITOR_SETTING,
		FILTER_VALIDATE_BOOLEAN,
		FILTER_NULL_ON_FAILURE
	);
	$fa_in_front = filter_input(
		INPUT_POST,
		BEERB_FONTAWESOME_IN_EDITOR_SETTING,
		FILTER_VALIDATE_BOOLEAN,
		FILTER_NULL_ON_FAILURE
	);
	$load_google_fonts = filter_input(
		INPUT_POST,
		BEERB_LOAD_GOOGLE_FONTS_SETTING,
		FILTER_VALIDATE_BOOLEAN,
		FILTER_NULL_ON_FAILURE
	);

	// update data
	if (is_bool($bootstrap_in_editor_styles)) {
		update_option(BEERB_BOOTSTRAP_IN_EDITOR_SETTING, ($bootstrap_in_editor_styles ? 'yes' : 'no'));
	}

	if (is_bool($bootstrap_in_editor_scripts)) {
		update_option(BEERB_BOOTSTRAP_SCRIPTS_IN_EDITOR_SETTING, ($bootstrap_in_editor_scripts ? 'yes' : 'no'));
	}

	if (is_bool($bootstrap_in_front)) {
		update_option(BEERB_BOOTSTRAP_IN_FRONT_SETTING, ($bootstrap_in_front ? 'yes' : 'no'));
	}

	if (is_bool($fa_in_editor)) {
		update_option(BEERB_FONTAWESOME_IN_EDITOR_SETTING, ($fa_in_editor ? 'yes' : 'no'));
	}

	if (is_bool($fa_in_front)) {
		update_option(BEERB_FONTAWESOME_IN_FRONT_SETTING, ($fa_in_front ? 'yes' : 'no'));
	}

	if (is_bool($fa_in_front)) {
		update_option(BEERB_FONTAWESOME_IN_FRONT_SETTING, ($fa_in_front ? 'yes' : 'no'));
	}

	if (is_bool($load_google_fonts)) {
		update_option(BEERB_LOAD_GOOGLE_FONTS_SETTING, ($load_google_fonts ? 'yes' : 'no'));
	}

	// add success message
	add_settings_error(
		'beer_blocks_settings_messages',
		'beer_blocks_settings_success_message',
		__('Settings updated successfully!!', 'beer-blocks'),
		'success'
	);
}

/**
 * Plugin clean-up rutines.
 */
function uninstall()
{
	delete_option(BEERB_BOOTSTRAP_IN_EDITOR_SETTING);
	delete_option(BEERB_BOOTSTRAP_SCRIPTS_IN_EDITOR_SETTING);
	delete_option(BEERB_BOOTSTRAP_IN_FRONT_SETTING);
	delete_option(BEERB_FONTAWESOME_IN_EDITOR_SETTING);
	delete_option(BEERB_FONTAWESOME_IN_FRONT_SETTING);
	delete_option(BEERB_LOAD_GOOGLE_FONTS_SETTING);
}
