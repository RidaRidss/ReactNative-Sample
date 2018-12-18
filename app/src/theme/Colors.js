// ============ Define Colors Variables here ========== //

import { Platform } from "react-native";

const white = "#FFFFFF";
const black = "#000000";
const grey = Platform.select({
  ios: "#F4F4F4",
  android: "#FAFAFA"
});

// app generic colors

const primary = "#000000";
const secondary = "#e89225";
const tertiary = "#44517c";
const quaternary = "#ecedf2";
const punch = "#999ca1";

const semiTransparent = "rgba(0,0,0,0.7)";
const border = "#f2f2f2";
const separator = tertiary;
const indicator = "#6ed7d0";
const windowTint = "rgba(0, 0, 0, 0.4)";
const windowTintWhite = "rgba(255, 255, 255, 0.1)";
const transparent = "rgba(0,0,0,0)";

// app theme colors
const color1 = "rgba(20, 32, 46, 1)";
const color2 = "#ffaa3d";

// ====================================================

// app generic components colors

const background = {
  primary,
  secondary,
  actionItem: secondary,
  tertiary: "#00000057"
};

const text = {
  dis: "#949494",

  primary: primary,
  secondary: secondary,
  tertiary: tertiary,
  quaternary: quaternary,
  punch: punch,
  white: white
};

const navbar = {
  background: color1,
  text: color2
};

export default {
  punch,

  color1,
  color2,
  // ===============

  primary,
  secondary,
  tertiary,
  quaternary,

  text,
  background,
  navbar,
  tabInactive: "#a3aab4",

  white,
  black,
  grey,
  transparent,
  semiTransparent,

  border,
  separator,
  windowTint,
  windowTintWhite,
  indicator,

  warning: "#feb401",
  danger: "#ed1c4d",
  success: "#b76c94"
};
