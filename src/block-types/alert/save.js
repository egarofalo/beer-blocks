import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import size from "./../../helpers/size";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

const save = (props) => {
	const {
		attributes: { alertType },
	} = props;

	const blockProps = useBlockProps.save({
		className: `${alertType}}${size.cssClasses(props)}${spacing.cssClasses(
			props
		)}`,
		style: {
			...size.cssVars(props, "alert"),
			...spacing.cssVars(props, "alert"),
		},
		...htmlAttrs.blockProps(props),
	});

	return (
		<div {...blockProps} role="alert">
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
