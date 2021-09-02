module.exports = {
  stories: ["../src/**/*.stories.mdx"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
        backgrounds: false,
        viewport: false,
        toolbars: false,
      },
    },
  ],
};
