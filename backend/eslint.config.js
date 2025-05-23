import { fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

const project = "./tsconfig.json";
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
    ],
    files: ["**/*.{js,ts}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
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
      semi: ["error", "always"],
    },
  }
);
