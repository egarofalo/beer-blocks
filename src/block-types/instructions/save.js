import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "../../helpers/spacing";
import colors from "../../helpers/colors";
import flexbox from "../../helpers/flexbox";
import htmlAttrs from "../../helpers/html-attrs";

const save = (props) => {
	const {
		attributes: { containerType },
	} = props;

	const blockProps = useBlockProps.save({
		className: `${containerType}${colors.cssClasses(props)}${spacing.cssClasses(
			props
		)}`,
		style: {
			...colors.cssVars(props, "instructions"),
			...spacing.cssVars(props, "instructions"),
		},
		...htmlAttrs.blockProps(props),
	});

	return (
		<div {...blockProps}>
			<ul className={`p-0 mb-0 row${flexbox.cssClasses(props)}`}>
				<InnerBlocks.Content />
			</ul>
		</div>
	);
};

export default save;
