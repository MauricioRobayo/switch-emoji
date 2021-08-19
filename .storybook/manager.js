import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
  showNav: false,
  toolbar: {
    zoom: { hidden: true },
    eject: { hidden: true },
    fullscreen: { hidden: true },
  },
  theme: create({
    base: "dark",
    brandTitle: "ReEmoji",
    brandUrl: "https://github.com/MauricioRobayo/re-emoji",
  }),
});
