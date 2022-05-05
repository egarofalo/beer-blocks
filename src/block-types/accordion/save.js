import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";

const save = (props) => {
	const {
		attributes: { id },
	} = props;

	const blockProps = useBlockProps.save({
		style: {
			...spacing.paddingCssVars({ props, blockName: "accordion" }),
			...spacing.marginCssVars({ props, blockName: "accordion" }),
		},
	});

	return (
		<>
			<div {...blockProps}>
				<div className="accordion" id={`accordion-${id}`}>
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
};

export default save;
