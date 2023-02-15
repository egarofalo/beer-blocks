import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import colors from "./../../helpers/colors";
import spacing from "../../helpers/spacing";

const save = (props) => {
	const blockProps = useBlockProps.save({
		className: "jumbotron",
		style: {
			...colors.cssVars(props, "jumbotron"),
			...spacing.paddingCssVars(props, "jumbotron"),
			...spacing.marginCssVars(props, "jumbotron"),
		},
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
