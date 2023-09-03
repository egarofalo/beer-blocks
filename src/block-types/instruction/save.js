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
		className: `${grid.getColSizingClasses({
			props,
		})}${colors.cssClasses(props)}${spacing.marginCssClasses(props)}`,
		style: {
			listStyle: "none",
			...colors.cssVars(props, "instruction"),
			...spacing.marginCssVars(props, "instruction"),
		},
	});

	return (
		<li {...blockProps}>
			<div
				className={`wp-block-beer-blocks-instruction-contents d-flex h-100${flexbox.cssClasses(
					props
				)}${spacing.paddingCssClasses(props)}`}
				style={spacing.paddingCssVars(props, "instruction")}
			>
				<div
					className={`wp-block-beer-blocks-instruction-numeration d-inline-flex${flexbox.cssClasses(
						props,
						"numeration"
					)}${colors.cssClasses(props, "numeration")}${size.cssClasses(
						props,
						"numeration"
					)}${typography.cssClasses(props, "numeration")}`}
					style={{
						...colors.cssVars(props, "instruction", "numeration"),
						...size.cssVars(props, "instruction", "numeration"),
						...typography.styles(props, "numeration"),
						...typography.cssVars(props, "instruction", "numeration"),
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
