import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import border from "./../../helpers/border";

const save = (props) => {
	const {
		attributes: {
			id,
			headingId,
			parentId,
			show,
			headingLevel,
			headingTextAlign,
			headingColor,
			headingBackground,
			headingContent,
			bodyBackground,
		},
	} = props;

	const blockProps = useBlockProps.save({
		className: "card",
		style: {
			...spacing.paddingCssVars({
				props,
				blockName: "accordion-item",
				breakpoints: true,
			}),
			...spacing.marginCssVars({
				props,
				blockName: "accordion-item",
				breakpoints: true,
			}),
			...border.styles(props.attributes),
		},
	});

	const HeadingTag = `h${headingLevel}`;

	return (
		<div {...blockProps}>
			<div
				className="card-header"
				id={headingId}
				style={{
					backgroundColor: headingBackground,
					padding: 0,
					...border.styles(props.attributes, "heading"),
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
							color: headingColor,
							textAlign: headingTextAlign,
							...spacing.styles(props, "heading"),
							...typography.fontFamilyStyles(props, "heading"),
							...typography.fontWeightStyles(props, "heading"),
							...typography.fontSizeCssVars({
								props,
								blockName: "accordion-item",
								attrPrefix: "heading",
							}),
							...typography.lineHeightCssVars({
								props,
								blockName: "accordion-item",
								attrPrefix: "heading",
							}),
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
				style={{ backgroundColor: bodyBackground }}
			>
				<div
					className="card-body"
					style={{
						...spacing.styles(props, "body"),
						...border.styles(props.attributes, "body"),
					}}
				>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
};

export default save;
