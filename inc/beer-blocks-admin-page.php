<?php

use function BeerBlocks\Helpers\Globals\form_submit;

?>
<div class="wrap">
	<h1><?php esc_html_e(get_admin_page_title(), 'beer-blocks') ?></h1>

	<?php form_submit() ?>
	<?php settings_errors('beer_blocks_settings_messages') ?>

	<form method="post">
		<?php settings_fields(BEERB_SETTINGS_PAGE_SLUG) ?>
		<?php do_settings_sections(BEERB_SETTINGS_PAGE_SLUG) ?>
		<?php submit_button(__('Save Settings', 'beer-blocks')); ?>
	</form>
</div>
