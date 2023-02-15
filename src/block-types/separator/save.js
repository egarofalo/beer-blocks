import { useBlockProps } from "@wordpress/block-editor";
import size from "./../../helpers/size";
import spacing from "./../../helpers/spacing";
import blockAlignment from "./../../helpers/block-alignment";

const save = (props) => {
	const {
		attributes: { style, color, triangleBackground, triangleDirection },
	} = props;

	const blockProps = useBlockProps.save({
		style: {
			...size.cssVars(props, "separator"),
			...spacing.marginCssVars(props, "separator"),
			...(style ? { "--wp-beer-blocks-separator-style": style } : {}),
			...(color ? { "--wp-beer-blocks-separator-color": color } : {}),
			...blockAlignment.styles(props),
		},
	});

	return (
		<div {...blockProps}>
			<div
				className={`wp-beer-blocks-separator-triangle wp-beer-blocks-separator-triangle-${triangleDirection}`}
				style={{
					background: triangleBackground,
					...size.cssVars(props, "separator", "triangle"),
				}}
			></div>
		</div>
	);
};

export default save;
