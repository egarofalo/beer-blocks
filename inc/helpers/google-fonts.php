<?php

namespace BeerBlocks\Helpers\GoogleFonts;

define('GOOGLE_FONTS_API_KEY', 'beer_blocks_google_fonts_api_key');
define('GOOGLE_FONTS_SELECTED_FONTS', '_beer_blocks_selected_fonts');
define('GOOGLE_FONTS_SETTINGS_SECTION', 'beer_blocks_google_fonts_settings_section');
define('GOOGLE_FONTS_STYLSHEET_NAME', 'beer_blocks_google_fonts_stylesheet_name');

/**
 * Add Google Fonts settings section.
 */
function add_settings_section()
{
	\add_settings_section(
		GOOGLE_FONTS_SETTINGS_SECTION,
		__('Google Fonts Settings', 'beer-blocks'),
		null,
		SETTINGS_PAGE_SLUG
	);
}

/**
 * Register API Key setting.
 */
function register_api_key_setting()
{
	register_setting(SETTINGS_PAGE_SLUG, GOOGLE_FONTS_API_KEY, [
		'type' => 'string',
		'show_in_rest' => true,
		'sanitize_callback' => 'sanitize_text_field',
		'default' => ''
	]);
}

/**
 * Add API Key setting field.
 */
function add_api_key_setting_field()
{
	add_settings_field(
		GOOGLE_FONTS_API_KEY,
		__('Google Fonts API Key', 'beer-blocks'),
		GLOBALS_HELPERS_NS . '\\input_text_setting_field',
		SETTINGS_PAGE_SLUG,
		GOOGLE_FONTS_SETTINGS_SECTION,
		[
			'label_text' => __('Google Fonts API Key', 'beer-blocks'),
			'label_for' => GOOGLE_FONTS_API_KEY,
			'description' => __('Copy and paste here the Google Fonts API Key to obtain the full dropdown list of all available fonts.<br>This feature apply only in each blocks that you can change the typography.', 'beer-blocks'),
		]
	);
}

/**
 * Register selected fonts post meta.
 */
function register_selected_fonts_setting()
{
	$variants = [
		"regular",
		"italic",
		...range(100, 900, 100),
		...array_map(function ($value) {
			return "{$value}italic";
		}, range(100, 900, 100))
	];

	register_post_meta('', GOOGLE_FONTS_SELECTED_FONTS, [
		'single' => true,
		'type' => 'array',
		'default' => [],
		'auth_callback' => function () {
			return current_user_can('edit_posts');
		},
		'sanitize_callback' => function ($items) use ($variants) {
			return array_map(
				function ($item) use ($variants) {
					return [
						'family' => sanitize_text_field($item['family']),
						'variants' => array_filter(
							$item['variants'],
							function ($variant) use ($variants) {
								return in_array($variant, $variants);
							}
						),
					];
				},
				$items
			);
		},
		'show_in_rest' => [
			'schema' => [
				'items' => [
					'type' => 'object',
					'properties' => [
						'family' => [
							'type' => 'string',
						],
						'variants' => [
							'type' => 'array',
							'items' => [
								'type' => 'string'
							]
						]
					]
				]
			]
		],
	]);
}

/**
 * Enqueue selected font families.
 */
function enqueue_selected_font_families()
{
	global $post;

	if (get_class($post) !== \WP_Post::class) {
		return;
	}

	$selected_fonts = get_post_meta($post->ID, GOOGLE_FONTS_SELECTED_FONTS, true);

	if (empty($selected_fonts)) {
		return;
	}

	$src = 'https://fonts.googleapis.com/css?family=' . implode('|', array_map(
		function ($item) {
			return "{$item['family']}:" . substr(
				array_reduce(
					$item['variants'],
					function ($variants, $variant) {
						return $variants . $variant . ',';
					},
					''
				),
				0,
				-1
			);
		},
		$selected_fonts
	));

	wp_enqueue_style(GOOGLE_FONTS_STYLSHEET_NAME, $src);
}
