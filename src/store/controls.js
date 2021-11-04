export const fetch = (path, options = {}) => {
	if (options.body) {
		options.body = JSON.stringify(options.body);
		options.headers = { "Content-Type": "application/json" };
	}
	// ensures things work with cors.
	options.credentials = "omit";

	return {
		type: "FETCH",
		path,
		options,
	};
};

export default {
	FETCH({ path, options }) {
		return new Promise((resolve, reject) =>
			window
				.fetch(path, options)
				.then((response) => response.json())
				.then((result) => resolve(result))
				.catch((error) => reject(error))
		);
	},
};
