import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

const save = (props) => {
	const {
		attributes: { alertType },
	} = props;

	const blockProps = useBlockProps.save({
		className: `${alertType}${spacing.cssClasses(props)}`,
		style: spacing.cssVars(props, "alert"),
		...htmlAttrs.blockProps(props),
	});

	return (
		<div {...blockProps} role="alert">
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
