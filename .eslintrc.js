module.exports = {
	env: {
		browser: true,
		es6: true, // можно указать и es6, если es2021 не работает
	},
	parserOptions: {
		ecmaVersion: 12, // 12 соответствует ECMAScript 2021
		sourceType: 'module',
	},
	rules: {
		// ваши правила
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