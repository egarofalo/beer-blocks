<?php

namespace BeerBlocks;

define('BEERB_PLUGIN_DIR_PATH', rtrim(plugin_dir_path(__FILE__), '/'));
define('BEERB_PLUGIN_DIR_URL', rtrim(plugin_dir_url(__FILE__), '/'));
define('BEERB_BS_HELPERS_NS', __NAMESPACE__ . '\\Helpers\\Bootstrap');
define('BEERB_FA_HELPERS_NS', __NAMESPACE__ . '\\Helpers\\Fontawesome');
define('BEERB_GF_HELPERS_NS', __NAMESPACE__ . '\\Helpers\\GoogleFonts');
define('BEERB_GLOBALS_HELPERS_NS', __NAMESPACE__ . '\\Helpers\\Globals');
define('BEERB_PLUGIN_NAME', 'Beer Blocks');
define('BEERB_PLUGIN_SLUG', 'beer-blocks');
define('BEERB_SETTINGS_PAGE_SLUG', 'beer_blocks_settings_page');

include BEERB_PLUGIN_DIR_PATH . "/beer-blocks-helpers.php";

// Loading the Text Domain
add_action('plugins_loaded', function () {
	$plugin_rel_path = basename(dirname(__FILE__)) . '/languages';
	load_plugin_textdomain('beer-blocks', false, $plugin_rel_path);
});


// Create Beer Blocks Category
if (class_exists('\\WP_Block_Editor_Context')) {
	add_filter('block_categories_all', BEERB_GLOBALS_HELPERS_NS . '\\create_blocks_category', 1, 2);
} else {
	add_filter('block_categories', BEERB_GLOBALS_HELPERS_NS . '\\create_blocks_category__deprecated', 1, 2);
}

// Enqueue Bootstrap in the editor
add_action('enqueue_block_editor_assets', BEERB_BS_HELPERS_NS . '\\enqueue_editor_assets');

// Enqueue Bootstrap in frontend
add_action('wp_enqueue_scripts', BEERB_BS_HELPERS_NS . '\\enqueue_front_assets');

// Register Bootstrap settings
add_action('admin_init', BEERB_BS_HELPERS_NS . '\\add_settings_section');
add_action('admin_init', BEERB_BS_HELPERS_NS . '\\register_settings');
add_action('admin_init', BEERB_BS_HELPERS_NS . '\\add_settings_fields');

// Enqueue Font Awesome in the editor
add_action('enqueue_block_editor_assets', BEERB_FA_HELPERS_NS . '\\enqueue_editor_assets');

// Enqueue Font Awesome in Frontend
add_action('wp_enqueue_scripts', BEERB_FA_HELPERS_NS . '\\enqueue_front_assets');

// Register Font Awesome settings
add_action('admin_init', BEERB_FA_HELPERS_NS . '\\add_settings_section');
add_action('admin_init', BEERB_FA_HELPERS_NS . '\\register_settings');
add_action('admin_init', BEERB_FA_HELPERS_NS . '\\add_settings_fields');

// Add integrity check attribute to html links tags
add_filter('style_loader_tag', BEERB_FA_HELPERS_NS . '\\filters_html_link_tags', 11, 4);

// Register Google Fonts settings
add_action('admin_init', BEERB_GF_HELPERS_NS . '\\add_settings_section');
add_action('admin_init', BEERB_GF_HELPERS_NS . '\\register_api_key_setting');
add_action('rest_api_init', BEERB_GF_HELPERS_NS . '\\register_api_key_setting');
add_action('admin_init', BEERB_GF_HELPERS_NS . '\\add_api_key_setting_field');
add_action('init', BEERB_GF_HELPERS_NS . '\\register_selected_fonts_setting');
add_action('rest_api_init', BEERB_GF_HELPERS_NS . '\\register_selected_fonts_setting');
add_action('enqueue_block_assets', BEERB_GF_HELPERS_NS . '\\enqueue_selected_font_families');
add_filter('style_loader_tag', BEERB_GF_HELPERS_NS . '\\add_beer_blocks_name_attr', 10, 2);

// Register block types
add_action('init', BEERB_GLOBALS_HELPERS_NS . '\\register_block_types');

// Add plugin settings page
add_action('admin_menu', BEERB_GLOBALS_HELPERS_NS . '\\add_settings_menu_page');

// Run uninstall tasks
register_uninstall_hook(__FILE__, BEERB_GLOBALS_HELPERS_NS . '\\uninstall');
