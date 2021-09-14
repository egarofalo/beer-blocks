<?php

namespace BeerBlocks\Helpers\Bootstrap;

define('BOOTSTRAP_IN_EDITOR_SETTING', 'beer_blocks_load_bootstrap_in_editor');
define('BOOTSTRAP_IN_EDITOR_ASSET', 'beer-blocks-bootstrap-in-editor');
define('BOOTSTRAP_IN_FRONT_SETTING', 'beer_blocks_load_bootstrap_in_front');
define('BOOTSTRAP_IN_FRONT_ASSET', 'beer-blocks-bootstrap-in-front');
define('BOOTSTRAP_SETTINGS_SECTION', 'beer_blocks_bootstrap_settings_section');

/**
 * Enqueue Bootstrap assets in the editor.
 */
function enqueue_editor_assets()
{
    $option = filter_var(get_option(BOOTSTRAP_IN_EDITOR_SETTING), FILTER_VALIDATE_BOOLEAN);

    if ($option) {
        $plugin_url = PLUGIN_DIR_URL;
        $asset_file = include PLUGIN_DIR_PATH . '/build/vendor/bootstrap/editor.asset.php';

        wp_enqueue_script(
            BOOTSTRAP_IN_EDITOR_ASSET,
            "{$plugin_url}/build/vendor/bootstrap/editor.js",
            $asset_file['dependencies'],
            $asset_file['version'],
            true
        );

        wp_enqueue_style(
            BOOTSTRAP_IN_EDITOR_ASSET,
            "{$plugin_url}/build/vendor/bootstrap/editor.css",
            [],
            filemtime(PLUGIN_DIR_PATH . '/build/vendor/bootstrap/editor.css')
        );
    }
}

/**
 * Enqueue Bootstrap assets in the frontend.
 */
function enqueue_front_assets()
{
    $option = filter_var(get_option(BOOTSTRAP_IN_FRONT_SETTING), FILTER_VALIDATE_BOOLEAN);

    if ($option) {
        $plugin_url = PLUGIN_DIR_URL;
        $asset_file = include PLUGIN_DIR_PATH . '/build/vendor/bootstrap/front.asset.php';

        wp_enqueue_script(
            BOOTSTRAP_IN_FRONT_ASSET,
            "{$plugin_url}/build/vendor/bootstrap/front.js",
            $asset_file['dependencies'],
            $asset_file['version'],
            true
        );

        wp_enqueue_style(
            BOOTSTRAP_IN_FRONT_ASSET,
            "{$plugin_url}/build/vendor/bootstrap/front.css",
            [],
            filemtime(PLUGIN_DIR_PATH . '/build/vendor/bootstrap/front.css')
        );
    }
}

/**
 * Add Bootstrap settings section.
 */
function add_settings_section()
{
    \add_settings_section(
        BOOTSTRAP_SETTINGS_SECTION,
        __('Bootstrap Settings (v4.6.0)', 'beer-blocks'),
        null,
        SETTINGS_PAGE_SLUG
    );
}

/**
 * Register Bootstrap settings.
 */
function register_settings()
{
    register_setting(SETTINGS_PAGE_SLUG, BOOTSTRAP_IN_EDITOR_SETTING);
    register_setting(SETTINGS_PAGE_SLUG, BOOTSTRAP_IN_FRONT_SETTING);
}

/**
 * Add Bootstrap settings fields in the settings section.
 */
function add_settings_fields()
{
    // Create Bootstrap settings fields
    add_settings_field(
        BOOTSTRAP_IN_EDITOR_SETTING,
        __('Load Bootstrap in the Editor', 'beer-blocks'),
        GLOBALS_HELPERS_NS . '\\input_checkbox_setting_field',
        SETTINGS_PAGE_SLUG,
        BOOTSTRAP_SETTINGS_SECTION,
        [
            'label_text' => __('Load Bootstrap in the Editor', 'beer-blocks'),
            'label_for' => BOOTSTRAP_IN_EDITOR_SETTING,
            'description' => __('Enqueue Bootstrap styles in the Block editor.', 'beer-blocks'),
        ]
    );
    add_settings_field(
        BOOTSTRAP_IN_FRONT_SETTING,
        __('Load Bootstrap in Front', 'beer-blocks'),
        GLOBALS_HELPERS_NS . '\\input_checkbox_setting_field',
        SETTINGS_PAGE_SLUG,
        BOOTSTRAP_SETTINGS_SECTION,
        [
            'label_text' => __('Load Bootstrap in Front', 'beer-blocks'),
            'label_for' => BOOTSTRAP_IN_FRONT_SETTING,
            'description' => __('Enqueue Bootstrap styles and scripts in the Frontend.', 'beer-blocks'),
        ]
    );
}
