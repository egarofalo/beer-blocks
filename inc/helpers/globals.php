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
    if (!empty($editor_context->post)) {
        array_push(
            $block_categories,
            [
                'slug' => BEERB_PLUGIN_SLUG,
                'title' => BEERB_PLUGIN_NAME,
            ]
        );
    }

    return $block_categories;
}

/**
 * Enqueue block types assets.
 */
function enqueue_block_types_assets()
{
    $manifest = json_decode(file_get_contents(BEERB_PLUGIN_DIR_PATH . '/manifest.json'), true);

    foreach ($manifest['block_types'] as $block_type) {
        $asset_file = include BEERB_PLUGIN_DIR_PATH . "/build/{$block_type}/index.asset.php";

        wp_enqueue_script(
            "beer-blocks-{$block_type}-editor",
            BEERB_PLUGIN_DIR_URL . "/build/{$block_type}/index.js",
            $asset_file['dependencies'],
            $asset_file['version'],
            true
        );

        wp_enqueue_style(
            "beer-blocks-{$block_type}-editor",
            BEERB_PLUGIN_DIR_URL . "/build/{$block_type}/index.css",
            [],
            filemtime(BEERB_PLUGIN_DIR_PATH . '/build/editor.css')
        );

        wp_set_script_translations(
            "beer-blocks-{$block_type}-editor",
            'beer-blocks',
            BEERB_PLUGIN_DIR_PATH . '/languages'
        );
    }
}

/**
 * Enqueue the editor.js and editor.css files wich include the necessary code for block types customization, styles and others.
 */
function enqueue_editor_assets()
{
    $asset_file = include BEERB_PLUGIN_DIR_PATH . '/build/editor.asset.php';

    wp_enqueue_script(
        'beer-blocks-editor',
        BEERB_PLUGIN_DIR_URL . '/build/editor.js',
        $asset_file['dependencies'],
        $asset_file['version'],
        true
    );

    wp_enqueue_style(
        'beer-blocks-editor',
        BEERB_PLUGIN_DIR_URL . '/build/editor.css',
        [],
        filemtime(BEERB_PLUGIN_DIR_PATH . '/build/editor.css')
    );

    wp_set_script_translations(
        'beer-blocks-editor',
        'beer-blocks',
        BEERB_PLUGIN_DIR_PATH . '/languages'
    );
}

/**
 * Add the menu link settings page.
 */
function add_settings_menu_page()
{
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
    $bootstrap_in_editor = filter_input(INPUT_POST, BEERB_BOOTSTRAP_IN_EDITOR_SETTING, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
    $bootstrap_in_front = filter_input(INPUT_POST, BEERB_BOOTSTRAP_IN_FRONT_SETTING, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
    $fa_in_editor = filter_input(INPUT_POST, BEERB_FONTAWESOME_IN_EDITOR_SETTING, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
    $fa_in_front = filter_input(INPUT_POST, BEERB_FONTAWESOME_IN_EDITOR_SETTING, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
    $google_fonts_api_key = filter_input(INPUT_POST, BEERB_GOOGLE_FONTS_API_KEY, FILTER_SANITIZE_STRING);

    // update data
    if (is_bool($bootstrap_in_editor)) {
        update_option(BEERB_BOOTSTRAP_IN_EDITOR_SETTING, ($bootstrap_in_editor ? 'yes' : 'no'));
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

    if (is_string($google_fonts_api_key)) {
        update_option(BEERB_GOOGLE_FONTS_API_KEY, $google_fonts_api_key);
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
    delete_option(BEERB_BOOTSTRAP_IN_FRONT_SETTING);
    delete_option(BEERB_FONTAWESOME_IN_EDITOR_SETTING);
    delete_option(BEERB_FONTAWESOME_IN_FRONT_SETTING);
    delete_option(BEERB_GOOGLE_FONTS_API_KEY);
}
