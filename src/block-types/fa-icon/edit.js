import { __, sprintf } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import { PanelBody, BaseControl, ToggleControl } from "@wordpress/components";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import {
	farIconsClasses,
	fasIconsClasses,
	fabIconsClasses,
	BLOCK_LEVEL_ELEMENT,
	INLINE_ELEMENT,
} from "./../../helpers/fa-icons";
import spacing from "./../../helpers/spacing";
import typography from "./../../helpers/typography";
import colors from "./../../helpers/colors";

const edit = (props) => {
	const {
		attributes: {
			icon,
			showHtmlElementTypeToggleField,
			htmlElementType,
			textAlign,
		},
		setAttributes,
	} = props;

	const icons = [...farIconsClasses, ...fasIconsClasses, ...fabIconsClasses];

	const blockProps = useBlockProps({
		className: `${
			htmlElementType === BLOCK_LEVEL_ELEMENT
				? `has-text-align-${textAlign}`
				: "d-inline-block"
		}${spacing.cssClasses(props)}`,
		style: spacing.cssVars(props, "fa-icon"),
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

			{colors.controls({
				props,
				colorControlLabel: __("Icon color", "beer-blocks"),
				panelBody: false,
			})}

			{typography.controls({
				props,
				panelBody: false,
				fontSizeControlLabel: (breakpoint) =>
					sprintf(
						__("Icon size (%s)", "beer-blocks"),
						breakpoint.toUpperCase()
					),
			})}
		</>
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Icon settings", "beer-blocks")}>
					{showHtmlElementTypeToggleField && (
						<ToggleControl
							label={__("Block level element type", "beer-blocks")}
							checked={htmlElementType === BLOCK_LEVEL_ELEMENT}
							onChange={() =>
								setAttributes({
									htmlElementType:
										htmlElementType === BLOCK_LEVEL_ELEMENT
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
			</InspectorControls>

			{htmlElementType === BLOCK_LEVEL_ELEMENT && (
				<BlockControls>
					<AlignmentToolbar
						value={textAlign}
						onChange={(textAlign) => setAttributes({ textAlign })}
					/>
				</BlockControls>
			)}

			{iconElem}
		</>
	);
};

export default edit;
