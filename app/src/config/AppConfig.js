import { Platform } from "react-native";

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,
  allowIQKeyboardManager: true,
  allowIQKeyboardManagerToolbar: true,
  gMapAPIKey:
    Platform.OS === "android"
      ? "AIzaSyCy3J06bX6DVrZK4hOn0Lnakw-Zzt-qyMQ"
      : "AIzaSyC-XOFKypx0K0ORhf1JwtROD_8ZC-G_Mio"
};
