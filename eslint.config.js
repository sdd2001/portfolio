import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [".astro/**", "dist/**"],
  },
  eslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
    },
  },
  {
    // TypeScript already reports undefined names, and no-undef doesn't know
    // Astro's ambient globals such as ImageMetadata.
    files: ["**/*.ts", "**/*.astro"],
    rules: {
      "no-undef": "off",
    },
  },
  eslintConfigPrettier,
);
