<?php

namespace BeerBlocks;

define('PLUGIN_DIR_PATH', rtrim(plugin_dir_path(__FILE__), '/'));
define('PLUGIN_DIR_URL', rtrim(plugin_dir_url(__FILE__), '/'));
define('BS_HELPERS_NS', __NAMESPACE__ . '\\Helpers\\Bootstrap');
define('FA_HELPERS_NS', __NAMESPACE__ . '\\Helpers\\Fontawesome');
define('GF_HELPERS_NS', __NAMESPACE__ . '\\Helpers\\GoogleFonts');
define('GLOBALS_HELPERS_NS', __NAMESPACE__ . '\\Helpers\\Globals');
define('PLUGIN_NAME', 'Beer Blocks');
define('PLUGIN_SLUG', 'beer-blocks');
define('TEXT_DOMAIN', 'beer-blocks');
define('SETTINGS_PAGE_SLUG', 'beer_blocks_settings_page');

include PLUGIN_DIR_PATH . "/beer-blocks-helpers.php";

// Create Beer Blocks Category
if (class_exists('\\WP_Block_Editor_Context')) {
	add_filter('block_categories_all', GLOBALS_HELPERS_NS . '\\create_blocks_category', 10, 2);
} else {
	add_filter('block_categories', GLOBALS_HELPERS_NS . '\\create_blocks_category__deprecated', 10, 2);
}

// Enqueue Bootstrap in the editor
add_action('enqueue_block_editor_assets', BS_HELPERS_NS . '\\enqueue_editor_assets');

// Enqueue Bootstrap in frontend
add_action('wp_enqueue_scripts', BS_HELPERS_NS . '\\enqueue_front_assets');

// Register Bootstrap settings
add_action('admin_init', BS_HELPERS_NS . '\\add_settings_section');
add_action('admin_init', BS_HELPERS_NS . '\\register_settings');
add_action('admin_init', BS_HELPERS_NS . '\\add_settings_fields');

// Enqueue Font Awesome in the editor
add_action('enqueue_block_editor_assets', FA_HELPERS_NS . '\\enqueue_editor_assets');

// Enqueue Font Awesome in Frontend
add_action('wp_enqueue_scripts', FA_HELPERS_NS . '\\enqueue_front_assets');

// Register Font Awesome settings
add_action('admin_init', FA_HELPERS_NS . '\\add_settings_section');
add_action('admin_init', FA_HELPERS_NS . '\\register_settings');
add_action('admin_init', FA_HELPERS_NS . '\\add_settings_fields');

// Add integrity check attribute to html links tags
add_filter('style_loader_tag', FA_HELPERS_NS . '\\filters_html_link_tags', 11, 4);

// Register Google Fonts settings
add_action('admin_init', GF_HELPERS_NS . '\\add_settings_section');
add_action('admin_init', GF_HELPERS_NS . '\\register_api_key_setting');
add_action('rest_api_init', GF_HELPERS_NS . '\\register_api_key_setting');
add_action('admin_init', GF_HELPERS_NS . '\\add_api_key_setting_field');
add_action('init', GF_HELPERS_NS . '\\register_selected_fonts_setting');
add_action('rest_api_init', GF_HELPERS_NS . '\\register_selected_fonts_setting');
add_action('wp_enqueue_scripts', GF_HELPERS_NS . '\\enqueue_selected_font_families');

// Enqueue block types assets.
add_action('enqueue_block_editor_assets', GLOBALS_HELPERS_NS . '\\enqueue_block_types_assets');

// Enqueue editor.js and editor.css
add_action('enqueue_block_editor_assets', GLOBALS_HELPERS_NS . '\\enqueue_editor_assets');

// Add plugin settings page
add_action('admin_menu', GLOBALS_HELPERS_NS . '\\add_settings_menu_page');

// Run uninstall tasks
register_uninstall_hook(__FILE__, GLOBALS_HELPERS_NS . '\\uninstall');
