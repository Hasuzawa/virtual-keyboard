module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prettier"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		// "plugin:prettier/recommended",
	],
	rules: {
		"@typescript-eslint/no-empty-interface": 1,
	},
}