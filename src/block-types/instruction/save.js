import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import grid from "../../helpers/grid";
import typography from "../../helpers/typography";
import spacing from "../../helpers/spacing";

const save = (props) => {
	const {
		attributes: {
			stackedContents,
			sizing,
			justifyContent,
			alignItems,
			numeration,
			numerationBackground,
			numerationColor,
			numerationWidth,
			numerationHeight,
			numerationBorderRadius,
			numerationHorizontalAlignment,
			numerationVerticalAlignment,
		},
	} = props;

	const blockProps = useBlockProps.save({
		className: grid.getColClass(sizing),
		style: {
			listStyle: "none",
			...spacing.marginCssVars({
				props,
				blockName: "instruction",
			}),
		},
	});

	return (
		<li {...blockProps}>
			<div
				className={`wp-block-beer-blocks-instruction-contents d-flex${Object.entries(
					stackedContents
				).reduce((classes, [key, value]) => {
					const breakpoint = key !== "xs" ? `-${key}` : "";

					return `${classes} flex${breakpoint}-${
						value ? "column" : "row"
					} justify-content${breakpoint}-${
						justifyContent[key]
					} align-items${breakpoint}-${alignItems[key]}`;
				}, "")}`}
				style={spacing.paddingCssVars({
					props,
					blockName: "instruction",
				})}
			>
				<div
					className={`wp-block-beer-blocks-instruction-numeration d-inline-flex flex-grow-0 justify-content-${numerationHorizontalAlignment} align-items-${numerationVerticalAlignment}`}
					style={{
						...(numerationBackground
							? { backgroundColor: numerationBackground }
							: {}),
						...(numerationColor ? { color: numerationColor } : {}),
						...(numerationWidth
							? { width: numerationWidth, minWidth: numerationWidth }
							: {}),
						...(numerationHeight ? { height: numerationHeight } : {}),
						...(numerationBorderRadius
							? { borderRadius: numerationBorderRadius }
							: {}),
						...typography.fontFamilyStyles(props, "numeration"),
						...typography.fontWeightStyles(props, "numeration"),
						...typography.fontSizeCssVars({
							props,
							blockName: "instruction",
							attrPrefix: "numeration",
						}),
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
