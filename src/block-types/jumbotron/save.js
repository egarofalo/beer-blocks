import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import colors from "./../../helpers/colors";
import spacing from "../../helpers/spacing";

const save = (props) => {
	const blockProps = useBlockProps.save({
		className: `jumbotron${colors.cssClasses(props)}${spacing.cssClasses(
			props
		)}`,
		style: {
			...colors.cssVars(props, "jumbotron"),
			...spacing.cssVars(props, "jumbotron"),
		},
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
