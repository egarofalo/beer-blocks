import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import colors from "./../../helpers/colors";
import border from "./../../helpers/border";
import spacing from "./../../helpers/spacing";

const save = (props) => {
	const {
		attributes: { id, tabId, selected },
	} = props;

	const blockProps = useBlockProps.save({
		style: {
			...colors.cssVars(props, "tab-pane"),
			...border.cssVars(props, "tab-pane"),
			...spacing.paddingCssVars(props, "tab-pane"),
			...spacing.marginCssVars(props, "tab-pane"),
		},
	});

	return (
		<div
			id={id}
			className={`tab-pane fade${selected ? " show active" : ""}`}
			role="tabpanel"
			aria-labelledby={tabId}
		>
			<div {...blockProps}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default save;
