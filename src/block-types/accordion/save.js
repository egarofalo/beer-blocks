import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

const save = (props) => {
	const {
		attributes: { id },
	} = props;

	const blockProps = useBlockProps.save({
		className: spacing.cssClasses(props).trimStart(),
		style: spacing.cssVars(props, "accordion"),
		...htmlAttrs.blockProps(props),
	});

	return (
		<div {...blockProps}>
			<div className="accordion" id={`accordion-${id}`}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default save;
