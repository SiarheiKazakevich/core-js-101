module.exports = {
	env: {
		es2021: true,  // Убедитесь, что это указано
		node: true,
		browser: true,
	},
	parserOptions: {
		ecmaVersion: 12,  // Убедитесь, что ecmaVersion поддерживает ES2021 (или более поздние версии)
		sourceType: 'module',  // Обязательно укажите, что используется модульная система ECMAScript
	},
	rules: {
		// Ваши правила ESLint
	},
};
/*module.exports = {
  "env": {
	 "browser": true,
	 "es6": true,
	 "node": true
  },
  "extends": "eslint:recommended",
  "globals": {
	 "Atomics": "readonly",
	 "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
	 "ecmaVersion": 2018,
	 "sourceType": "module"
  },
  "rules": {
  }
};
module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: "eslint:recommended",
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	rules: {
		// Ваши правила здесь
	},
};
*/