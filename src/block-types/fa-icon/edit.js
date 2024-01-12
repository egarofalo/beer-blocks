import { __, sprintf } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	BaseControl,
	ToggleControl,
	CardDivider,
} from "@wordpress/components";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import {
	farIconsClasses,
	fasIconsClasses,
	fabIconsClasses,
	BLOCK_LEVEL_ELEMENT,
	INLINE_ELEMENT,
} from "./../../helpers/fa-icons";
import textAlignment from "./../../helpers/text-alignment";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import colors from "./../../helpers/colors";
import htmlAttrs from "./../../helpers/html-attrs";

const edit = (props) => {
	const {
		attributes: { icon, showHtmlElementTypeToggleField, htmlElementType },
		setAttributes,
	} = props;

	const icons = [...farIconsClasses, ...fasIconsClasses, ...fabIconsClasses];
	const isBlockElement = htmlElementType === BLOCK_LEVEL_ELEMENT;

	const blockProps = useBlockProps({
		className: `${
			isBlockElement ? textAlignment.cssClasses(props) : "d-inline-block"
		}${spacing.cssClasses(props)}`.trimStart(),
		style: spacing.cssVars(props, "fa-icon"),
		...htmlAttrs.blockProps(props),
	});

	const iconElem = (
		<div {...blockProps}>
			<i
				className={`${icon}${colors.cssClasses(props)}${typography.cssClasses(
					props
				)}`}
				style={{
					...colors.cssVars(props, "fa-icon"),
					...typography.cssVars(props, "fa-icon"),
				}}
			></i>
		</div>
	);

	const iconControls = (
		<>
			<BaseControl label={__("Choose an Icon", "beer-blocks")}>
				<FontIconPicker
					icons={icons}
					onChange={(icon) => setAttributes({ icon })}
					value={icon}
					renderUsing="class"
					isMulti={false}
					theme="beer-blocks"
				/>
			</BaseControl>

			<CardDivider />

			{colors.controls({
				props,
				colorControlLabel: __("Icon color", "beer-blocks"),
				panelBody: false,
			})}

			<CardDivider />

			{typography.controls({
				props,
				panelBody: false,
				fontSizeControlLabel: (breakpoint) =>
					sprintf(
						__("Icon size (%s)", "beer-blocks"),
						breakpoint.toUpperCase()
					),
			})}

			{isBlockElement && (
				<>
					<CardDivider />
					{textAlignment.controlsWithBreakpoints({
						props,
						textAlignControlLabel: (breakpoint) =>
							sprintf(
								__("Icon align (%s)", "beer-blocks"),
								breakpoint.toUpperCase()
							),
						excludeTextAlignControls: ["justify"],
						panelBody: false,
					})}
				</>
			)}
		</>
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Icon settings", "beer-blocks")}>
					{showHtmlElementTypeToggleField && (
						<ToggleControl
							label={__("Block level element type", "beer-blocks")}
							checked={isBlockElement}
							onChange={() =>
								setAttributes({
									htmlElementType: isBlockElement
										? INLINE_ELEMENT
										: BLOCK_LEVEL_ELEMENT,
								})
							}
							help={__(
								"Disable this toggle field if you want to display the icon as an inline element.",
								"beer-blocks"
							)}
						/>
					)}

					{iconControls}
				</PanelBody>

				{spacing.controls({ props, paddingSides: false })}
				{htmlAttrs.controls({ props })}
			</InspectorControls>

			{iconElem}
		</>
	);
};

export default edit;
