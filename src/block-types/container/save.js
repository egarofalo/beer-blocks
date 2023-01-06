import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import colors from "../../helpers/colors";

const save = (props) => {
	const {
		attributes: { containerType, tagName: TagName },
	} = props;

	const blockProps = useBlockProps.save({
		className: containerType,
		style: {
			...spacing.paddingCssVars(props, "container"),
			...spacing.marginCssVars(props, "container"),
			...colors.cssVars(props, "container"),
		},
	});

	return (
		<TagName {...blockProps}>
			<InnerBlocks.Content />
		</TagName>
	);
};

export default save;
