import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import spacing from "../../helpers/spacing";
import colors from "../../helpers/colors";
import flexbox from "../../helpers/flexbox";

const save = (props) => {
	const {
		attributes: { containerType },
	} = props;

	const blockProps = useBlockProps.save({
		className: containerType,
		style: {
			...colors.cssVars(props, "instructions"),
			...spacing.marginCssVars(props, "instructions"),
		},
	});

	return (
		<div {...blockProps}>
			<ul className={`p-0 row ${flexbox.cssClasses({ props })}`.trimEnd()}>
				<InnerBlocks.Content />
			</ul>
		</div>
	);
};

export default save;
