import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";

const save = (props) => {
	const {
		attributes: {
			parentId,
			id,
			show,
			headingLevel,
			headingTextAlign,
			headingContent,
		},
	} = props;

	const blockProps = useBlockProps.save({
		className: "card",
	});

	const HeadingTag = `h${headingLevel}`;

	return (
		<div {...blockProps}>
			<div className="card-header" id={`heading-${id}`}>
				<HeadingTag style={spacing.styles(props.attributes)}>
					<button
						class={`btn btn-link btn-block has-text-align-${headingTextAlign}`}
						type="button"
						data-toggle="collapse"
						data-target={`#collapse-${id}`}
						aria-expanded="true"
						aria-controls={`collapse-${id}`}
					>
						<RichText.Content tagName="span" value={headingContent} />
					</button>
				</HeadingTag>
			</div>

			<div
				id={`collapse-${id}`}
				className={`collapse${show ? " show" : ""}`}
				aria-labelledby={`heading-${id}`}
				data-parent={`#${parentId}`}
			>
				<div className="card-body">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
};

export default save;
