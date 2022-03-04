import { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as __useInnerBlocksProps,
} from "@wordpress/block-editor";

const edit = (props) => {
	const {
		clientId,
		setAttributes,
		attributes: { id, tabsContentId },
	} = props;

	useEffect(
		() =>
			setAttributes({
				id: `tabs-${clientId}`,
				tabsContentId: `tabs-content-${clientId}`,
			}),
		[clientId]
	);

	const blockProps = useBlockProps();

	const innerBlocksPropsConfig = [
		{
			id: tabsContentId,
			className: "tab-content",
		},
		{
			allowedBlocks: ["beer-blocks/tab-pane"],
			renderAppender: false,
			templateLock: "all",
			template: [
				[
					"beer-blocks/tab-pane",
					{
						placeholder: "Insert here pane contents...",
						id: "home-pane",
						tabId: "home-tab",
					},
				],
				[
					"beer-blocks/tab-pane",
					{
						placeholder: "Insert here pane contents...",
						id: "profile-pane",
						tabId: "profile-tab",
					},
				],
			],
		},
	];

	const innerBlocksProps = useInnerBlocksProps
		? useInnerBlocksProps(...innerBlocksPropsConfig)
		: __useInnerBlocksProps(...innerBlocksPropsConfig);

	return (
		<div {...blockProps}>
			<ul className="nav nav-tabs" id={id} role="tablist">
				<li className="nav-item" role="presentation">
					<a
						className="nav-link"
						id="home-tab"
						data-toggle="tab"
						href="#home-pane"
						role="tab"
						aria-controls="#home-pane"
						aria-selected="false"
					>
						HOME
					</a>
				</li>

				<li className="nav-item" role="presentation">
					<a
						className="nav-link"
						id="profile-tab"
						data-toggle="tab"
						href="#profile-pane"
						role="tab"
						aria-controls="#profile-pane"
						aria-selected="false"
					>
						PROFILE
					</a>
				</li>
			</ul>

			<div {...innerBlocksProps} />
		</div>
	);
};

export default edit;
