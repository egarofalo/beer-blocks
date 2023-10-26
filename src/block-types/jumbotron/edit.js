import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import colors from "./../../helpers/colors";
import spacing from "./../../helpers/spacing";
import htmlAttrs from "./../../helpers/html-attrs";

const edit = (props) => {
	const blockProps = useBlockProps({
		className: `jumbotron${colors.cssClasses(props)}${spacing.cssClasses(
			props
		)}`,
		style: {
			...colors.cssVars(props, "jumbotron"),
			...spacing.cssVars(props, "jumbotron"),
		},
		...htmlAttrs.blockProps(props),
	});

	return (
		<>
			<InspectorControls>
				{colors.controls({ props })}
				{spacing.controls({ props })}
				{htmlAttrs.controls({ props })}
			</InspectorControls>

			<div {...blockProps}>
				<InnerBlocks />
			</div>
		</>
	);
};

export default edit;
