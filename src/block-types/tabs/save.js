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
			labels: tabsLabels,
			horizontalAlignment,
			fillFreeSpace,
			selectedTab,
			tabsColor,
			tabsMouseOverColor,
			tabsActiveColor,
			tabsBackground,
			tabsMouseOverBackground,
			tabsActiveBackground,
			tabsMouseOverBorderColor,
			tabsActiveBorderColor,
		},
	} = props;

	const blockProps = useBlockProps.save({
		style: spacing.styles(props),
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
							className={`nav-link${selectedTab === index ? " active" : ""}`}
							id={`${tabsId}-tab-${index}`}
							data-toggle="tab"
							href={`#${tabsId}-pane-${index}`}
							role="tab"
							aria-controls={`#${tabsId}-pane-${index}`}
							aria-selected={selectedTab === index ? "true" : "false"}
							value={item}
							style={{
								...(tabsColor
									? { "--wp-beer-blocks-tabs-nav-link-color": tabsColor }
									: {}),
								...(tabsMouseOverColor
									? {
											"--wp-beer-blocks-tabs-nav-link-hover-color": tabsMouseOverColor,
									  }
									: {}),
								...(tabsActiveColor
									? {
											"--wp-beer-blocks-tabs-nav-link-active-color": tabsActiveColor,
									  }
									: {}),
								...(tabsBackground
									? {
											"--wp-beer-blocks-tabs-nav-link-background": tabsBackground,
									  }
									: {}),
								...(tabsMouseOverBackground
									? {
											"--wp-beer-blocks-tabs-nav-link-hover-background": tabsMouseOverBackground,
									  }
									: {}),
								...(tabsActiveBackground
									? {
											"--wp-beer-blocks-tabs-nav-link-active-background": tabsActiveBackground,
									  }
									: {}),
								...(tabsMouseOverBorderColor
									? {
											"--wp-beer-blocks-tabs-nav-link-hover-border-color": tabsMouseOverBorderColor,
									  }
									: {}),
								...(tabsActiveBorderColor
									? {
											"--wp-beer-blocks-tabs-nav-link-active-border-color": tabsActiveBorderColor,
									  }
									: {}),
								...spacing.styles(props, "tabs"),
								...typography.fontFamilyStyles(props, "tab"),
								...typography.fontWeightStyles(props, "tab"),
								...typography.fontSizeCssVars({
									props,
									blockName: "tabs",
									attrPrefix: "tab",
								}),
								...typography.lineHeightCssVars({
									props,
									blockName: "tabs",
									attrPrefix: "tab",
								}),
								...border.styles(props.attributes, "tabs"),
								...borderRadius.styles(props.attributes, "tabs"),
							}}
						/>
					</li>
				))}
			</ul>

			<div className="tab-content" id={tabsContentId}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default save;
