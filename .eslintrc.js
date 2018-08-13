const path = require('path');
module.exports = {
	"parser": "babel-eslint",
	"extends": "airbnb",
	
	settings: {
		'import/resolver': {
				webpack: { config: path.resolve('./config/webpack.config.dev.js'), },
		},
	 },
	"globals": {
		"localStorage":true,
	},
};