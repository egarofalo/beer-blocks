const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const blocks = require("./blocks.json");
const entry = {
	...blocks.entries,
	editor: "./src/editor.js",
	"vendor/bootstrap/editor": "./src/vendor/bootstrap/editor.js",
	"vendor/bootstrap/front": "./src/vendor/bootstrap/front.js",
};

module.exports = {
	...defaultConfig,
	entry,
};
