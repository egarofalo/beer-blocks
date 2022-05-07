=== Beer Blocks ===

Contributors: egarofalo
Tags: block, design, blocks, gutenberg, blockeditor
Donate link: https://www.paypal.com/donate?hosted_button_id=8XSCNEV5WA5TU
Requires at least: 5.5.0
Tested up to: 5.8.2
Requires PHP: 7.3
Stable tag: 1.4.0
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Extend the block editor with advanced and powerful blocks that help you build beautifull websites more faster!

== Description ==

Beer Blocks

Power-up the Gutenberg editor with advanced and powerful blocks that help you build websites very fast! Beer blocks is free, and always will be!

Beer Blocks implements the grid system and components of the Bootstrap 4 Framework. It also contains a block that allows you to insert Font Awesome 5 icons, and contain other usefull blocks, such as, Info Box, Advanced Header, Section, etc. Finally you can use Google Fonts font families in paragraphs, headers and other block types of Beer Blocks.

Simply select a block within the Beer Blocks category and you will notice that it will allow you customize it very easily.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/beer-blocks` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the Plugins screen in WordPress.
3. And that's all! Enjoy the plugin!

== Frequently Asked Questions ==

= What do you mean with "implements Bootstrap 4 components"? =

Beer Blocks come with many blocks that represent the components of Bootstrap 4, such as Alert, Jumbotron, Accordion, Button, etc.

= What do you mean with "implements Bootstrap 4 grid system"? =

The Bootstrap 4 framework has a powerful grid system, which allows us to create beautiful responsive websites. Beer Blocks has four types of blocks that perfectly represent Bootstrap's grid system: Grid, Container, Row, and Col.

= Has Beer Blocks a block type that allow us insert some icons in the editor? =

The answer is yes!! It has a block type with all Font Awesome 5 free icons available in Font Awesome web page.

= Can I change the font family and font weight of blocks that have text? =

Yes, of course! You can choose any of the font families available in Google Fonts.

== Screenshots ==

1. screenshot-1.jpg

== Changelog ==

= 1.0.0 =
* Release
= 1.0.1 =
* Fix fa-icon block type
= 1.1.0 =
* Fixed `accordion-item` block type markup bug
* Added **Opened** toggle field in `accordion-item` block type for show the accordion item contents as default
* Added body border setting fields in `accordion-item` block type
* Improves in `fa-icon` block type
* Added **Block level element type** toggle field in `fa-icon` for display it as an _Inline Element_ or _Block Element_
* Fixed `border.js` helper bug
* Removed `parent` attribute in `fa-icon` block type
* Added new translations in `es_ES` language
* Updated `readme.txt`
= 1.1.1 =
* Code improvements
* Remove `BeerBlocks\Helpers\Globals\enqueue_editor_assets` helper function hooked in `enqueue_block_editor_assets` action
* Fix `BeerBlocks\Helpers\Globals\create_blocks_category` helper function
* Add `BeerBlocks\Helpers\Globals\register_shared_dependencies` function used in `BeerBlocks\Helpers\Globals\register_block_types` helper to register `beer-blocks-editor-script` and `beer-blocks-editor-style` dependencies of all block types
* Add **Beer Blocks** svg icon into the post settings panel
= 1.2.0 =
* Code improvements
* Remove **Google Fonts API Key** settings and fields as it is no longer necessary
* Remove **Beer Blocks Post Settings Panel** in the block editor
* Replace the **Font Family** text field, used in blocks, with a dropdown wich has font families from Google Fonts and web safe fonts families
* Add **Load Google Fonts** settings with a checkbox field
* Fix javascript errors in Widget Admin Area
* Added new translations in `es_ES` language
* Update `README.md` file
= 1.2.1 =
* Add clear button on font families dropdown
* Fix controls styles in **Instruction** block type
= 1.2.2 =
* Code improvements
* Fix **Load Google Fonts** checkbox field in plugin page settings
= 1.2.3 =
* Code improvements
* Add `inner-border.js` helper wich allows to create an inner border inside blocks in top and bottom sides
* Add traductions in `es_ES`
* Add new features in `border.js` helper
* Add `inner-border.js` controls in `beer-blocks/container` block type for create inner borders
= 1.2.4 =
* Code improvements
* Update Bootstrap version `4.6.0` to `4.6.1`
* Update translations in `es_ES` language
* Fix [!issue #1](https://github.com/egarofalo/beer-blocks/issues/1)
* Fix [!issue #2](https://github.com/egarofalo/beer-blocks/issues/2)
* Fix [!issue #3](https://github.com/egarofalo/beer-blocks/issues/3)
= 1.2.5 =
- Code improvements in `beer-blocks/accordion` block type
- Code improvements in `beer-blocks/instructions` block type
- Remove extra padding in `beer-blocks/header` when set background color
- Remove extra padding in `beer-blocks/paragraph` when set background color
= 1.3.0 =
- Add `beer-blocks/tabs` and `beer-blocks/tab-pane` blocks
- Add new features in **Borders** panel settings section
- Add **Load Bootstrap scripts in Editor** settings field
- Update settings fields labels and descriptions
- Update translations in `es_ES` language
- Update README.md
- Change `beer-blocks/jumbotron` block type icon
- Code improvements in `border.js` helper
- Remove unused styles
- Remove `build` directory from git workflow
= 1.3.1 =
- Add default margin-top and margin-bottom (`0px`) to the following blocks for the editor view only:
  - `beer-blocks/button`
- Add default margin-top and margin-bottom (`20px`) to the following blocks for the editor view only:
  - `beer-blocks/row`
  - `beer-blocks/header`
  - `beer-blocks/paragraph`
- Add default margin-top and margin-bottom (`0px`) to the following blocks for the frontend only:
  - `beer-blocks/row`
- Add default margin-top and margin-bottom (`20px`) to the following blocks for the editor view and the frontend:
  - `beer-blocks/tabs`
  - `beer-blocks/fa-icon`
  - `beer-blocks/separator`
  - `beer-blocks/grid`
  - `beer-blocks/container`
  - `beer-blocks/advanced-header`
  - `beer-blocks/accordion`
  - `beer-blocks/alert`
  - `beer-blocks/buttons`
  - `beer-blocks/section`
  - `beer-blocks/jumbotron`
- Add default margin-top and margin-bottom (`0px`) to the following blocks for the editor view and the frontend:
  - `beer-blocks/tab-pane`
  - `beer-blocks/column`
- Add spacing settings in `beer-blocks/fa-icon` block
- Add the Beer Blocks icon in the menu item linked to the plugin settings page
- Remove margin styles in the global `editor.css` stylesheet, which was removing the default extra margins of wordpress blocks
= 1.3.2 =
- Add frontend styles to `beer-blocks/accordion` block type
- Add frontend styles to `beer-blocks/tab-pane` block type
- Add new translations in `es_ES` language
- Fix block types dependencies array in the `register_block_types` function
= 1.4.0 =
- Add **Default selected tab** setting in `beer-blocks/tabs` block type
- Add new grid breakpoint: `XXL` (more than 1400px)
- Add **Direction** option (up or down) to **Triangle** settings on **Separator** block type
- Add **Typography** responsive feature to all block types
- Add **Dimension** responsive feature to all block types
- Add **Spacing** responsive feature to all block types
- Add new translations in `es_ES` language
- Update Bootstrap 4 reboot styles in editor view
- Change buttons icons in **Border** panel settings
- Change buttons icons in **Border Radius** panel settings
- Fix `beer-blocks/separator` styles in frontend and editor view
- Code improvements
= 1.4.1 =
- Add `verticalMarginRules` mixin in `helpers.scss` file
- Remove left and right margin settings in `beer-blocks/container` block type
- Remove left and right margin settings in `beer-blocks/instruction` block type
- Fix `beer-blocks/section` js error bug
- Fix `beer-blocks/info-box` spacing settings bug
- Fix `beer-blocks/separator` bug in `styles.scss`
- Fix `beer-blocks/tabs` and `beer-blocks/tab-pane` js error bug
- Code improvements

== Upgrade Notice ==

There is no need to upgrade just yet.
