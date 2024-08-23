import js from "@eslint/js";
import react from "eslint-plugin-react";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config({
	extends: [
		js.configs.recommended,
		...tseslint.configs.recommendedTypeChecked,
		// This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
		// Make sure it's always the last config, so it gets the chance to override other configs.
		prettier,
	],
	files: ["**/*.{ts,tsx}"],
	ignores: ["dist"],
	languageOptions: {
		ecmaVersion: 2020,
		globals: globals.browser,
		parserOptions: {
			project: ["./tsconfig.node.json", "./tsconfig.app.json"],
			tsconfigRootDir: import.meta.dirname,
		},
	},
	settings: { react: { version: "18.3" } },
	plugins: {
		react,
		"react-hooks": reactHooks,
		"react-refresh": reactRefresh,
	},
	rules: {
		...react.configs.recommended.rules,
		...react.configs["jsx-runtime"].rules,
		...reactHooks.configs.recommended.rules,
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
});
