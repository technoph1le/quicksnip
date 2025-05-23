import { fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

const project = "./tsconfig.app.json";
// eslint flat structure backwards compatibility
const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
});

function legacyPlugin(name, alias = name) {
  const plugin = compat.plugins(name)[0]?.plugins?.[alias];
  if (!plugin) {
    throw new Error(`Unable to resolve plugin ${name} and/or alias ${alias}`);
  }
  return fixupPluginRules(plugin);
}

export default tseslint.config(
  { ignores: ["node_modules", "dist", "coverage"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettier,
      ...compat.extends("plugin:import/typescript"),
      reactPlugin.configs.flat.recommended,
    ],
    files: ["**/*.{js,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: legacyPlugin("eslint-plugin-import", "import"),
    },
    settings: {
      "import/resolver": {
        typescript: {
          project,
          alwaysTryTypes: true,
        },
      },
      react: {
        version: "detect",
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
            "type",
            "unknown",
          ],
          pathGroups: [
            {
              pattern: "@*",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin", "internal"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      semi: ["error", "always"],
    },
  }
);
