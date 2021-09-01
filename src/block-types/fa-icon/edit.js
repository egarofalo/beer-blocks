import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import {
	PanelBody,
	__experimentalUnitControl as UnitControl,
	BaseControl,
} from "@wordpress/components";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import { defaultUnits } from "./../../helpers/typography";
import {
	farIconsClasses,
	fasIconsClasses,
	fabIconsClasses,
	BLOCK_LEVEL_ELEMENT,
	INLINE_ELEMENT,
} from "./../../helpers/fa-icons";

const edit = (props) => {
	const {
		attributes: { icon, iconSize, htmlElementType, textAlign },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		...(htmlElementType === BLOCK_LEVEL_ELEMENT
			? {
					className: `has-text-align-${textAlign}`,
			  }
			: {}),
		...(htmlElementType === INLINE_ELEMENT
			? {
					className: icon,
			  }
			: {}),
		style: {
			...(iconSize ? { fontSize: iconSize } : {}),
		},
	});

	const icons = [...farIconsClasses, ...fasIconsClasses, ...fabIconsClasses];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Icon settings", "beer-blocks")}>
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

					<BaseControl label={`Icon Size${iconSize ? ` (${iconSize})` : ""}`}>
						<UnitControl
							value={iconSize}
							onChange={(iconSize) => setAttributes({ iconSize })}
							onUnitChange={() =>
								setAttributes({
									iconSize: "",
								})
							}
							units={defaultUnits}
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls>

			{htmlElementType === BLOCK_LEVEL_ELEMENT && (
				<BlockControls>
					<AlignmentToolbar
						value={textAlign}
						onChange={(textAlign) => setAttributes({ textAlign })}
					/>
				</BlockControls>
			)}

			{htmlElementType === BLOCK_LEVEL_ELEMENT ? (
				<div {...blockProps}>
					<i className={icon}></i>
				</div>
			) : (
				<i {...blockProps}></i>
			)}
		</>
	);
};

export default edit;
