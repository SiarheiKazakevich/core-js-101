const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
	languageOptions: {
		parserOptions: {
			ecmaVersion: 12, // или 2020
			sourceType: 'module',
		},
	},
	rules: {
		// ваши правила
	},
});
/*module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'script',
	},
	rules: {
		// ваши правила
	},
};*/