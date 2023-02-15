import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import border from "./../../helpers/border";
import colors from "./../../helpers/colors";

const save = (props) => {
	const {
		attributes: {
			id,
			headingId,
			parentId,
			show,
			headingLevel,
			headingTextAlign,
			headingContent,
		},
	} = props;

	const blockProps = useBlockProps.save({
		className: "card",
		style: {
			...spacing.paddingCssVars(props, "accordion-item"),
			...spacing.marginCssVars(props, "accordion-item"),
			...colors.backgroundCssVars(props, "accordion-item"),
			...border.cssVars(props, "accordion-item"),
		},
	});

	const HeadingTag = `h${headingLevel}`;

	return (
		<div {...blockProps}>
			<div
				className="card-header"
				id={headingId}
				style={{
					padding: 0,
					...colors.backgroundCssVars(props, "accordion-item", "heading"),
					...border.cssVars(props, "accordion-item", "heading"),
				}}
			>
				<HeadingTag style={{ margin: 0, padding: 0 }}>
					<button
						class={`btn btn-link btn-block has-text-align-${headingTextAlign}`}
						type="button"
						data-toggle="collapse"
						data-target={`#${id}`}
						aria-expanded={show ? "true" : "false"}
						aria-controls={id}
						style={{
							margin: 0,
							textAlign: headingTextAlign,
							...spacing.styles(props, "heading"),
							...typography.fontFamilyStyles(props, "heading"),
							...typography.fontWeightStyles(props, "heading"),
							...typography.fontSizeCssVars(props, "accordion-item", "heading"),
							...typography.lineHeightCssVars(
								props,
								"accordion-item",
								"heading"
							),
							...colors.colorCssVars(props, "accordion-item", "heading"),
						}}
					>
						<RichText.Content tagName="span" value={headingContent} />
					</button>
				</HeadingTag>
			</div>

			<div
				id={id}
				className={`collapse${show ? " show" : ""}`}
				aria-labelledby={headingId}
				data-parent={`#${parentId}`}
			>
				<div className="card-body" style={spacing.styles(props, "body")}>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
};

export default save;
