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
		className: `card${spacing.cssClasses(props)}${colors.cssClasses(props)}${border.cssClasses(props)}`,
		style: {
			...spacing.cssVars(props, "accordion-item"),
			...colors.cssVars(props, "accordion-item"),
			...border.cssVars(props, "accordion-item"),
		},
	});

	const HeadingTag = `h${headingLevel}`;

	return (
		<div {...blockProps}>
			<div
				className={`card-header p-0${colors.cssClasses(props, "heading")}${border.cssClasses(props, "heading")}`}
				id={headingId}
				style={{
					...colors.cssVars(props, "accordion-item", "heading"),
					...border.cssVars(props, "accordion-item", "heading"),
				}}
			>
				<HeadingTag className="p-0 m-0">
					<button
						className={`btn btn-link btn-block m-0 has-text-align-${headingTextAlign}${colors.cssClasses(
							props,
							"heading"
						)}${spacing.cssClasses(props, "heading")}${typography.cssClasses(
							props,
							"heading"
						)}`}
						type="button"
						data-toggle="collapse"
						data-target={`#${id}`}
						aria-expanded={show ? "true" : "false"}
						aria-controls={id}
						style={{
							...spacing.cssVars(props, "accordion-item", "heading"),
							...typography.styles(props, "heading"),
							...typography.cssVars(props, "accordion-item", "heading"),
							...colors.cssVars(props, "accordion-item", "heading"),
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
				<div
					className={`card-body${spacing.cssClasses(props, "body")}`}
					style={spacing.cssVars(props, "accordion-item", "body")}
				>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
};

export default save;
