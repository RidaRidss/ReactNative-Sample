// @flow
import { StyleSheet, Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { Colors, Metrics, Fonts, ApplicationStyles } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(20, 32, 46, 1)"
  },

  swipeRow: {
    backgroundColor: Colors.color2,
    marginBottom: Metrics.ratio(10),
    height: Metrics.ratio(60),
    justifyContent: "center",
    borderRadius: Metrics.ratio(2)
  },
  headTitle: {
    justifyContent: "center",
    height: Metrics.ratio(50)
  },
  rowText: { marginLeft: Metrics.ratio(10) }
});
