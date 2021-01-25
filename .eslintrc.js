module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	globals: {
		wx: true,
		App: true,
		Page: true,
		Component: true,
		getApp: true,
		getCurrentPages: true,
		Behavior: true,
		global: true,
		__wxConfig: true,
		requirePlugin: true,
		module: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'no-multi-spaces': 'error',
		'no-multiple-empty-lines': ['error', { max: 1 }], //空行最多不能超过1行
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		'no-unused-vars': 0,
	},
}
