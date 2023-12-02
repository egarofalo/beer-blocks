## [1.8.0] - 2023-12-02

- Add **letter spacing** feature to `typography` helper
- Add **Remove gutters** field in `row` block type which allows remove gutters between columns
- Add **Flex direction** feature in `row` block type (include _Stacked contents_ and _Reverse order_ fields)
- Add **vertical margin** feature in `row` block type
- Fix styles in `row` block type
- Remove parent relation in `row` block type

## [1.7.0] - 2023-10-26

- Add new helper features using the new `html-attrs` helper
- Add `html-attrs` helper in all blocks
- Update `react-icons` package from `4.6.0` to `4.10.1`
- Improves in `colors` helper wich allows remove default background and color values in block styles
- Improves in `spacing` helper
- Improves in `typography` helper
- Improves in `size` helper
- Improves in `border` helper
- Improves in `flexbox` helper
- Improves in `statuses` helper
- Fix all blocks styles due to helpers improves
- Fixes in `button` block
- Set `margin-top: revert` and `margin-bottom: revert` to all blocks in the editor view
- Remove `buttons` block

## [1.6.1] - 2023-03-06

- Fix [!issue #5](https://github.com/egarofalo/beer-blocks/issues/5)

## [1.6.0] - 2023-03-06

- Update Fontawesome version `5.15.3` to `5.15.4`
- Fix editor styles in `paragraph` block type when using line height control
- Fix [!issue #4](https://github.com/egarofalo/beer-blocks/issues/4)
- Code improves in `flexbox` helper
- Code improves in `grid` helper
- Apply changes and improves in row and column block types

## [1.5.0] - 2023-02-15

- Fix sass files
- Add new block `beer-blocks/image`
- Add new translations in `es_ES` language
- Add new features and helpers in all blocks
- Update Bootstrap version `4.6.1` to `4.6.2`
- Major changes
- Code improvements

## [1.4.1] - 2022-05-07

- Add `verticalMarginRules` mixin in `helpers.scss` file
- Remove left and right margin settings in `beer-blocks/container` block type
- Remove left and right margin settings in `beer-blocks/instruction` block type
- Fix `beer-blocks/section` js error bug
- Fix `beer-blocks/info-box` spacing settings bug
- Fix `beer-blocks/separator` bug in `styles.scss`
- Fix `beer-blocks/tabs` and `beer-blocks/tab-pane` js error bug
- Code improvements

## [1.4.0] - 2022-05-05

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

## [1.3.2] - 2022-03-17

- Add frontend styles to `beer-blocks/accordion` block type
- Add frontend styles to `beer-blocks/tab-pane` block type
- Add new translations in `es_ES` language
- Fix block types dependencies array in the `register_block_types` function

## [1.3.1] - 2022-03-15

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

## [1.3.0] - 2022-03-10

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

## [1.2.5] - 2022-03-01

- Code improvements in `beer-blocks/accordion` block type
- Code improvements in `beer-blocks/instructions` block type
- Remove extra padding in `beer-blocks/header` when set background color
- Remove extra padding in `beer-blocks/paragraph` when set background color

## [1.2.4] - 2022-02-19

- Code improvements
- Update Bootstrap version `4.6.0` to `4.6.1`
- Update translations in `es_ES` language
- Fix [!issue #1](https://github.com/egarofalo/beer-blocks/issues/1)
- Fix [!issue #2](https://github.com/egarofalo/beer-blocks/issues/2)
- Fix [!issue #3](https://github.com/egarofalo/beer-blocks/issues/3)

## [1.2.3] - 2021-11-30

- Code improvements
- Add `inner-border.js` helper wich allows to create an inner border inside blocks in top and bottom sides
- Add traductions in `es_ES`
- Add new features in `border.js` helper
- Add `inner-border.js` controls in `beer-blocks/container` block type for create inner borders

## [1.2.2] - 2021-11-19

- Code improvements
- Fix **Load Google Fonts** checkbox field in plugin page settings

## [1.2.1] - 2021-11-16

- Add clear button on font families dropdown
- Fix controls styles in **Instruction** block type

## [1.2.0] - 2021-11-15

- Code improvements
- Remove **Google Fonts API Key** settings and fields as it is no longer necessary
- Remove **Beer Blocks Post Settings Panel** in the block editor
- Replace the **Font Family** text field, used in blocks, with a dropdown wich has font families from Google Fonts and web safe fonts families
- Add **Load Google Fonts** settings with a checkbox field
- Fix javascript errors in Widget Admin Area
- Added new translations in `es_ES` language
- Update `README.md` file

## [1.1.1] - 2021-10-11

- Code improvements
- Remove `BeerBlocks\Helpers\Globals\enqueue_editor_assets` helper function hooked in `enqueue_block_editor_assets` action
- Fix `BeerBlocks\Helpers\Globals\create_blocks_category` helper function
- Add `BeerBlocks\Helpers\Globals\register_shared_dependencies` function used in `BeerBlocks\Helpers\Globals\register_block_types` helper to register `beer-blocks-editor-script` and `beer-blocks-editor-style` dependencies of all block types
- Add **Beer Blocks** svg icon into the post settings panel

## [1.1.0] - 2021-10-04

- Fixed `accordion-item` block type markup bug
- Added **Opened** toggle field in `accordion-item` block type for show the accordion item contents as default
- Added body border setting fields in `accordion-item` block type
- Improves in `fa-icon` block type
- Added **Block level element type** toggle field in `fa-icon` for display it as an _Inline Element_ or _Block Element_
- Fixed `border.js` helper bug
- Removed `parent` attribute in `fa-icon` block type
- Added new translations in `es_ES` language
- Updated `readme.txt`

## [1.0.1] - 2021-09-29

- Fix fa-icon block type

## [1.0.0] - 2021-09-29

- First release
