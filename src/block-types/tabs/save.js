import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import flexbox from "./../../helpers/flexbox";
import typography from "./../../helpers/typography";
import border from "./../../helpers/border";
import borderRadius from "./../../helpers/border-radius";

const save = (props) => {
	const {
		attributes: {
			id: tabsId,
			tabsContentId,
			tabsAmount,
			labels: tabsLabels,
			horizontalAlignment,
			fillFreeSpace,
			tabsColor,
			tabsMouseOverColor,
			tabsActiveColor,
			tabsBackground,
			tabsMouseOverBackground,
			tabsActiveBackground,
		},
	} = props;

	const blockProps = useBlockProps.save({
		style: {
			...spacing.styles(props.attributes),
		},
	});

	return (
		<div {...blockProps}>
			<ul
				className={flexbox.justifyContentClass({
					justifyContent: horizontalAlignment,
					prefix: "nav nav-pills",
					suffix: fillFreeSpace,
				})}
				id={tabsId}
				role="tablist"
			>
				{tabsLabels.map((item, index) => (
					<li
						className="nav-item"
						role="presentation"
						key={`${tabsId}-tab-${index}`}
					>
						<RichText.Content
							tagName="a"
							className="nav-link"
							id={`${tabsId}-tab-${index}`}
							data-toggle="tab"
							href={`#${tabsId}-pane-${index}`}
							role="tab"
							aria-controls={`#${tabsId}-pane-${index}`}
							aria-selected="false"
							value={item}
							style={{
								...(tabsColor
									? { "--beer-blocks-tabs-nav-link-color": tabsColor }
									: {}),
								...(tabsMouseOverColor
									? {
											"--beer-blocks-tabs-nav-link-hover-color": tabsMouseOverColor,
									  }
									: {}),
								...(tabsActiveColor
									? {
											"--beer-blocks-tabs-nav-link-active-color": tabsActiveColor,
									  }
									: {}),
								...(tabsBackground
									? {
											"--beer-blocks-tabs-nav-link-background": tabsBackground,
									  }
									: {}),
								...(tabsMouseOverBackground
									? {
											"--beer-blocks-tabs-nav-link-hover-background": tabsMouseOverBackground,
									  }
									: {}),
								...(tabsActiveBackground
									? {
											"--beer-blocks-tabs-nav-link-active-background": tabsActiveBackground,
									  }
									: {}),
								...spacing.styles(props.attributes, "tabs"),
								...typography.styles(props.attributes, "tabs"),
								...border.styles(props.attributes, "tabs"),
								...borderRadius.styles(props.attributes, "tabs"),
							}}
						/>
					</li>
				))}
			</ul>

			<InnerBlocks.Content />
		</div>
	);
};

export default save;
