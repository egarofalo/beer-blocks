import grid from "./grid";

// return dimensions block attributes
const attributes = ({
	attrName,
	breakpoints,
	breakpointsBehavior,
	defaultValue = undefined,
	type,
}) =>
	breakpoints
		? grid.breakpointsAttribute({
				attrName,
				breakpointsBehaviorAttributes: breakpointsBehavior,
				...(defaultValue !== undefined ? { defaultValue } : {}),
		  })
		: {
				[attrName]: {
					type,
					...(defaultValue !== undefined
						? {
								default: defaultValue,
						  }
						: {}),
				},
		  };

export default { attributes };
