import nextConfig from "eslint-config-next";
import prettierConfig from "eslint-config-prettier";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  ...nextConfig,
  prettierConfig,
  {
    plugins: {
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/jsx-key": "off",
      "tailwindcss/no-custom-classname": "off",
    },
    settings: {
      tailwindcss: {
        callees: ["cn"],
        config: "tailwind.config.js",
      },
    },
  },
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/**",
    ],
  },
];

export default config;
