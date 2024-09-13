const { createGlobPatternsForDependencies } = require("@nx/angular/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@spartan-ng/ui-core/hlm-tailwind-preset")],
  content: [
    // join(__dirname, "src/**/!(*.stories|*.spec).{ts,html,scss}"),
    // ...createGlobPatternsForDependencies(__dirname),
    "./src/**/*.{html,ts}",
    "./libs/ui/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
