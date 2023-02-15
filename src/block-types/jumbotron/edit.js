import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import colors from "./../../helpers/colors";
import spacing from "./../../helpers/spacing";

const edit = (props) => {
	const blockProps = useBlockProps({
		className: "jumbotron",
		style: {
			...colors.cssVars(props, "jumbotron"),
			...spacing.paddingCssVars(props, "jumbotron"),
			...spacing.marginCssVars(props, "jumbotron"),
		},
	});

	return (
		<>
			<InspectorControls>
				{colors.controls({ props })}
				{spacing.breakpointsControls({ props })}
			</InspectorControls>

			<div {...blockProps}>
				<InnerBlocks />
			</div>
		</>
	);
};

export default edit;
