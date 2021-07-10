import { useBlockProps } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import blockAlignment from "./../../helpers/block-alignment";

const save = (props) => {
	const {
		attributes: { height, width, color, align },
	} = props;

	const blockProps = useBlockProps.save({
		style: {
			height,
			width,
			backgroundColor: color,
			...blockAlignment.styles(align),
			...spacing.styles(props.attributes),
		},
	});

	return <div {...blockProps}></div>;
};

export default save;
