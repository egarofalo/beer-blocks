import { __ } from "@wordpress/i18n";
import { Toolbar, Dropdown, ToolbarButton } from "@wordpress/components";
import { DOWN } from "@wordpress/keycodes";
import HeadingLevelIcon from "./../icons/heading-level.icon";

export const headingLevels = [1, 2, 3, 4, 5, 6];

export const headingLevelDropdown = (props) => {
	const {
		attributes: { headingLevel },
		setAttributes,
	} = props;

	return (
		<Dropdown
			icon={<HeadingLevelIcon level={headingLevel} />}
			renderToggle={({ onToggle, isOpen }) => {
				const openOnArrowDown = (event) => {
					if (!isOpen && event.keyCode === DOWN) {
						event.preventDefault();
						event.stopPropagation();
						onToggle();
					}
				};

				return (
					<ToolbarButton
						aria-expanded={isOpen}
						aria-haspopup="true"
						icon={<HeadingLevelIcon level={headingLevel} />}
						label={__("Change heading level", "beer-blocks")}
						onClick={onToggle}
						onKeyDown={openOnArrowDown}
						showTooltip
					/>
				);
			}}
			renderContent={() => (
				<Toolbar label={__("Change heading level", "beer-blocks")}>
					{headingLevels.map((targetLevel) => (
						<ToolbarButton
							icon={
								<HeadingLevelIcon
									level={targetLevel}
									isPressed={targetLevel === headingLevel}
								/>
							}
							label={__(`Heading ${targetLevel}`, "beer-blocks")}
							onClick={() =>
								setAttributes({
									headingLevel: targetLevel,
								})
							}
						/>
					))}
				</Toolbar>
			)}
		/>
	);
};

export default { headingLevels, headingLevelDropdown };
