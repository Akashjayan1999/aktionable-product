import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-next",
    "@storybook/addon-next-router",
  ],
   framework: '@storybook/nextjs', 
  "staticDirs": [
    "../public"
  ],
  "viteFinal": async (config) => {
    // Ensure CSS is processed correctly
    config.css = {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer')
        ]
      }
    };
    
    return config;
  }
};

export default config;