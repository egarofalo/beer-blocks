import { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const save = (props) => {
	const {
		clientId,
		setAttributes,
		attributes: { id, tabsContentId },
	} = props;

	const blockProps = useBlockProps.save();

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

				<li className="nav-item" role="presentation">
					<a
						className="nav-link"
						id="contact-tab"
						data-toggle="tab"
						href="#contact-pane"
						role="tab"
						aria-controls="#contact-pane"
						aria-selected="false"
					>
						CONTACT
					</a>
				</li>
			</ul>

			<div id={tabsContentId} className="tab-content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default save;
