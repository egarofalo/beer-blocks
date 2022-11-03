import { useBlockProps } from "@wordpress/block-editor";
import dimension from "./../../helpers/dimension";
import spacing from "./../../helpers/spacing";
import blockAlignment from "./../../helpers/block-alignment";

const save = (props) => {
	const {
		attributes: { color, triangleBackground, triangleDirection },
	} = props;

	const blockProps = useBlockProps.save({
		style: {
			...dimension.widthCssVars({
				props,
				blockName: "separator",
			}),
			...dimension.heightCssVars({
				props,
				blockName: "separator",
			}),
			...spacing.marginCssVars({
				props,
				blockName: "separator",
			}),
			"--wp-beer-blocks-separator-border-color": color,
			...blockAlignment.styles(props),
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
					}),
					...dimension.heightCssVars({
						props,
						blockName: "separator",
					}),
				}}
			></div>
		</div>
	);
};

export default save;
