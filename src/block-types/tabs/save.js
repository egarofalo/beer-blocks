import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";

const save = (props) => {
	const {
		attributes: { id: tabsId, labels: tabsLabels },
	} = props;

	const blockProps = useBlockProps.save({
		style: {
			...spacing.styles(props.attributes),
		},
	});

	return (
		<div {...blockProps}>
			<ul className="nav nav-tabs" id={tabsId} role="tablist">
				{tabsLabels.map((item, index) => (
					<li
						className="nav-item"
						role="presentation"
						key={`${tabsId}-tab-${index}`}
					>
						<RichText
							tagName="a"
							className="nav-link"
							id={`${tabsId}-tab-${index}`}
							data-toggle="tab"
							href={`#${tabsId}-pane-${index}`}
							role="tab"
							aria-controls={`#${tabsId}-pane-${index}`}
							aria-selected="false"
							value={item}
						/>
					</li>
				))}
			</ul>

			<InnerBlocks.Content />
		</div>
	);
};

export default save;
