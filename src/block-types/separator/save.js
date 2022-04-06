import { useBlockProps } from "@wordpress/block-editor";
import dimension from "./../../helpers/dimension";
import spacing from "./../../helpers/spacing";
import blockAlignment from "./../../helpers/block-alignment";

const save = (props) => {
	const {
		attributes: { color, align, triangleBackground, triangleDirection },
	} = props;

	const blockProps = useBlockProps.save({
		style: {
			...dimension.widthCssVars({
				props,
				blockName: "separator",
				breakpoints: true,
			}),
			...dimension.heightCssVars({
				props,
				blockName: "separator",
				breakpoints: true,
			}),
			"--wp-beer-blocks-separator-border-color": color,
			...blockAlignment.styles(align),
			...spacing.styles(props.attributes),
		},
	});

	return (
		<div {...blockProps}>
			<div
				className={`wp-beer-blocks-separator-triangle wp-beer-blocks-separator-triangle-${triangleDirection}`}
				style={{
					background: triangleBackground,
					...dimension.widthCssVars({
						props,
						blockName: "separator",
						attrPrefix: "triangle",
						breakpoints: true,
					}),
				}}
			></div>
		</div>
	);
};

export default save;
