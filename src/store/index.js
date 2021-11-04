import { registerStore } from "@wordpress/data";
import { controls as wpControls } from "@wordpress/data-controls";
import * as selectors from "./selectors";
import * as actions from "./actions";
import localControls from "./controls";
import * as resolvers from "./resolvers";
import reducer from "./reducer";
import { STORE_NAME } from "./constants";

registerStore(STORE_NAME, {
	selectors,
	actions,
	resolvers,
	reducer,
	controls: { ...wpControls, ...localControls },
});
