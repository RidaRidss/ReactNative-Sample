// @flow
import { StyleSheet, Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { Colors, Metrics, Fonts } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(20, 32, 46, 1)"
  },
  content: {
    marginTop: Metrics.ratio(40)
  },
  headTitle: {
    justifyContent: "center",
    height: Metrics.ratio(50)
  }
});
