import { useBlockProps } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import blockAlignment from "./../../helpers/block-alignment";

const save = (props) => {
	const {
		attributes: { height, width, color, align, arrow },
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

	return (
		<div {...blockProps}>
			{arrow.width > 0 && (
				<div
					className="wp-beer-blocks-separator-triangle"
					style={{
						width: `${arrow.width}px`,
						height: `${arrow.width}px`,
						backgroundColor: arrow.background,
						"--wp-block-beer-blocks-separator-triangle-translate": `-${
							(arrow.width - 1) / 2
						}px`,
						"--wp-block-beer-blocks-separator-triangle-color": color,
					}}
				></div>
			)}
		</div>
	);
};

export default save;
