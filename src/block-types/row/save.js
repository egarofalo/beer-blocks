import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "../../helpers/spacing";
import flexbox from "../../helpers/flexbox";

const save = (props) => {
	const {
		attributes: { removeGutters },
	} = props;

	const blockProps = useBlockProps.save({
		className: `row${removeGutters ? " no-gutters" : ""}${flexbox.cssClasses(
			props
		)}${spacing.cssClasses(props)}`,
		style: spacing.cssVars(props, "row"),
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
