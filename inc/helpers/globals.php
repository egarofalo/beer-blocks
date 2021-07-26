<?php

namespace BeerBlocks\Helpers\Globals;

/**
 * Create Beer Block category (before WordPress 5.8).
 */
function create_blocks_category__deprecated($categories, $post)
{
	return array_merge(
		$categories,
		[
			[
				'slug' => PLUGIN_SLUG,
				'title' => PLUGIN_NAME,
			],
		]
	);
}

/**
 * Create Beer Block category (since WordPress 5.8).
 */
function create_blocks_category($block_categories, $editor_context)
{
	if (!empty($editor_context->post)) {
		array_push(
			$block_categories,
			[
				'slug' => PLUGIN_SLUG,
				'title' => PLUGIN_NAME,
			],
		);
	}

	return $block_categories;
}

/**
 * Enqueue the editor.js and editor.css files wich include the necessary code for block types customization, styles and others.
 */
function enqueue_editor_assets()
{
	$plugin_url = PLUGIN_DIR_URL;
	$asset_file = include PLUGIN_DIR_PATH . '/build/editor.asset.php';

	wp_enqueue_script(
		'beer-blocks-editor',
		"{$plugin_url}/build/editor.js",
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	wp_enqueue_style(
		'beer-blocks-editor',
		"{$plugin_url}/build/editor.css",
		[],
		filemtime(PLUGIN_DIR_PATH . '/build/editor.css')
	);
}

/**
 * Register all block types using the metadata loaded from the .json files.
 */
function register_block_types()
{
	$plugin_dir = PLUGIN_DIR_PATH;
	$metadata = json_decode(file_get_contents("{$plugin_dir}/blocks.json"), true);

	foreach ($metadata['blocks_metadata'] as $blockMetadata) {
		register_block_type_from_metadata("{$plugin_dir}/" . ltrim($blockMetadata, '/'));
	}
}

/**
 * Add the menu link settings page.
 */
function add_settings_menu_page()
{
	add_menu_page(
		__('Beer Blocks Settings', TEXT_DOMAIN),
		PLUGIN_NAME,
		'manage_options',
		SETTINGS_PAGE_SLUG,
		function () {
			// check user capabilities
			if (!current_user_can('manage_options')) {
				return;
			}

			include PLUGIN_DIR_PATH . '/inc/beer-blocks-admin-page.php';
		}
	);
}

/**
 * Load the input text field with a custom description.
 */
function input_text_setting_field(array $args = [])
{
	$option = get_option($args['label_for']);
	extract($args);
	include PLUGIN_DIR_PATH . '/inc/settings-fields/input-text.php';
}

/**
 * Load the checkbox field with value = yes|no and a custom description.
 */
function input_checkbox_setting_field(array $args = [])
{
	$option = get_option($args['label_for']);
	extract($args);
	include PLUGIN_DIR_PATH . '/inc/settings-fields/input-checkbox.php';
}

/**
 * Update settings on form submit.
 */
function form_submit()
{
	// check if the user submit form
	if (
		filter_input(INPUT_POST, 'option_page') !== SETTINGS_PAGE_SLUG or
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
			__('<p>Security alert: <b>NONCE CHECK FAILED</b></p>', TEXT_DOMAIN)
		);
		return;
	}

	// check nonce
	if (!wp_verify_nonce($nonce, 'beer_blocks_settings_page-options')) {
		add_settings_error(
			'beer_blocks_settings_messages',
			'beer_blocks_settings_error_message',
			__('<p>Security alert: <b>NONCE CHECK FAILED</b></p>', TEXT_DOMAIN)
		);
		return;
	}

	// get submited data
	$bootstrap_in_editor = filter_input(INPUT_POST, BOOTSTRAP_IN_EDITOR_SETTING, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
	$bootstrap_in_front = filter_input(INPUT_POST, BOOTSTRAP_IN_FRONT_SETTING, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
	$fa_in_editor = filter_input(INPUT_POST, FONTAWESOME_IN_EDITOR_SETTING, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
	$fa_in_front = filter_input(INPUT_POST, FONTAWESOME_IN_EDITOR_SETTING, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
	$google_fonts_api_key = filter_input(INPUT_POST, GOOGLE_FONTS_API_KEY, FILTER_SANITIZE_STRING);

	// update data
	if (is_bool($bootstrap_in_editor)) {
		update_option(BOOTSTRAP_IN_EDITOR_SETTING, ($bootstrap_in_editor ? 'yes' : 'no'));
	}

	if (is_bool($bootstrap_in_front)) {
		update_option(BOOTSTRAP_IN_FRONT_SETTING, ($bootstrap_in_front ? 'yes' : 'no'));
	}

	if (is_bool($fa_in_editor)) {
		update_option(FONTAWESOME_IN_EDITOR_SETTING, ($fa_in_editor ? 'yes' : 'no'));
	}

	if (is_bool($fa_in_front)) {
		update_option(FONTAWESOME_IN_FRONT_SETTING, ($fa_in_front ? 'yes' : 'no'));
	}

	if (is_bool($fa_in_front)) {
		update_option(FONTAWESOME_IN_FRONT_SETTING, ($fa_in_front ? 'yes' : 'no'));
	}

	if (is_string($google_fonts_api_key)) {
		update_option(GOOGLE_FONTS_API_KEY, $google_fonts_api_key);
	}

	// add success message
	add_settings_error(
		'beer_blocks_settings_messages',
		'beer_blocks_settings_success_message',
		__('Settings updated successfully!!', TEXT_DOMAIN),
		'success'
	);
}

/**
 * Plugin clean-up rutines.
 */
function uninstall()
{
	delete_option(BOOTSTRAP_IN_EDITOR_SETTING);
	delete_option(BOOTSTRAP_IN_FRONT_SETTING);
	delete_option(FONTAWESOME_IN_EDITOR_SETTING);
	delete_option(FONTAWESOME_IN_FRONT_SETTING);
	delete_option(GOOGLE_FONTS_API_KEY);
}
