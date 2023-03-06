import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import grid from "../../helpers/grid";
import typography from "../../helpers/typography";
import spacing from "../../helpers/spacing";
import colors from "../../helpers/colors";
import size from "../../helpers/size";
import flexbox from "../../helpers/flexbox";

const save = (props) => {
	const {
		attributes: { numeration, numerationBorderRadius },
	} = props;

	const blockProps = useBlockProps.save({
		className: grid.getColSizingClasses({ props }),
		style: {
			listStyle: "none",
			...colors.cssVars(props, "instruction"),
			...spacing.marginCssVars(props, "instruction"),
		},
	});

	return (
		<li {...blockProps}>
			<div
				className={`wp-block-beer-blocks-instruction-contents d-flex h-100 ${flexbox.cssClasses(
					{
						props,
					}
				)}`.trimEnd()}
				style={spacing.paddingCssVars(props, "instruction")}
			>
				<div
					className={`wp-block-beer-blocks-instruction-numeration d-inline-flex ${flexbox.cssClasses(
						{ props, attrPrefix: "numeration" }
					)}`.trimEnd()}
					style={{
						...colors.cssVars(props, "instruction", "numeration"),
						...size.cssVars(props, "instruction", "numeration"),
						...typography.fontFamilyStyles(props, "numeration"),
						...typography.fontWeightStyles(props, "numeration"),
						...typography.fontSizeCssVars(props, "instruction", "numeration"),
						...(numerationBorderRadius
							? { borderRadius: numerationBorderRadius }
							: {}),
					}}
				>
					{numeration}
				</div>

				<div>
					<InnerBlocks.Content />
				</div>
			</div>
		</li>
	);
};

export default save;
