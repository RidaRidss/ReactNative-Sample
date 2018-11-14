// @flow
import { StyleSheet } from "react-native";
import { Metrics, Colors } from "../../../theme/index";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height:
      Metrics.screenHeight - Metrics.navBarHeight - Metrics.screenHeight / 3
    // marginTop: Metrics.doubleBaseMargin * 2.5
  }
});
