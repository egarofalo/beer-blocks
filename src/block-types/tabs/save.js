import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import spacing from "./../../helpers/spacing";
import flexbox from "./../../helpers/flexbox";
import typography from "./../../helpers/typography";
import border from "./../../helpers/border";
import colors from "../../helpers/colors";
import statuses from "./../../helpers/statuses";

const save = (props) => {
	const {
		attributes: {
			id: tabsId,
			tabsContentId,
			labels: tabsLabels,
			fillFreeSpace,
			selectedTab,
		},
	} = props;

	const blockProps = useBlockProps.save({
		style: {
			...spacing.marginCssVars(props, "tabs"),
			...spacing.paddingCssVars(props, "tabs"),
		},
	});

	return (
		<div {...blockProps}>
			<ul
				className={`nav nav-pills${
					fillFreeSpace ? ` ${fillFreeSpace}` : ""
				} ${flexbox.cssClasses({ props, attrPrefix: "tab" })}`.trimEnd()}
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
							className={`nav-link${
								selectedTab === index ? " active" : ""
							} ${statuses.cssClasses(props, "tab")}`}
							id={`${tabsId}-tab-${index}`}
							data-toggle="pill"
							href={`#${tabsId}-pane-${index}`}
							role="tab"
							aria-controls={`#${tabsId}-pane-${index}`}
							aria-selected={selectedTab === index ? "true" : "false"}
							value={item}
							style={{
								...typography.fontFamilyStyles(props, "tab"),
								...typography.fontWeightStyles(props, "tab"),
								...typography.fontSizeCssVars(props, "tabs", "tab"),
								...typography.lineHeightCssVars(props, "tabs", "tab"),
								...spacing.paddingCssVars(props, "tabs", "tab"),
								...spacing.marginCssVars(props, "tabs", "tab"),
								...colors.cssVars(props, "tabs", "tab"),
								...border.cssVars(props, "tabs", "tab"),
								...statuses.cssVars(props, "tabs", "tab"),
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
