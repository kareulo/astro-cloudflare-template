/** @type {import("prettier").Config} */
export default {
  importOrder: ["^astro(:.+|/.+)?$", "^@astrojs(/.+)?$", "<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  printWidth: 120,
  semi: false,
}
