const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const manifest = require("./manifest.json");

const entry = {
	...manifest.entries,
	editor: "./src/editor.js",
	"vendor/bootstrap/editor": "./src/vendor/bootstrap/editor.js",
	"vendor/bootstrap/front": "./src/vendor/bootstrap/front.js",
};

module.exports = {
	...defaultConfig,
	entry,
};
