import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next"],
    rules: {
      // Allow unescaped quotes in JSX
      "react/no-unescaped-entities": "off",
      // Allow using <a> elements for internal navigation (instead of <Link />)
      "@next/next/no-html-link-for-pages": "off",
      // Change unused variables from error to warning
      "@typescript-eslint/no-unused-vars": "warn",
      // Disable custom font warning if you have unused page fonts
      "@next/next/no-page-custom-font": "off",
    },
  }),
];

export default eslintConfig;
