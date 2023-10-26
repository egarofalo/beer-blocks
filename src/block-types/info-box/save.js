import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import colors from "./../../helpers/colors";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

const save = (props) => {
	const blockProps = useBlockProps.save({
		className: `${colors.cssClasses(props)}${spacing.cssClasses(
			props
		)}`.trimStart(),
		style: {
			...colors.cssVars(props, "info-box"),
			...spacing.cssVars(props, "info-box"),
		},
		...htmlAttrs.blockProps(props),
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
