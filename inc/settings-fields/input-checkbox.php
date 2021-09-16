<span>
	<input name="<?php echo esc_attr($label_for) ?>" type="checkbox" id="<?php echo esc_attr($label_for) ?>" value="yes" <?php checked($option, 'yes') ?>><?php echo esc_html($label_text) ?>
</span>

<p class="description">
	<?php echo esc_html($description) ?>
</p>
