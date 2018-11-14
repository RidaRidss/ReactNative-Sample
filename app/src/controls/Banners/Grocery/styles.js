// @flow
import { StyleSheet } from "react-native";
import { Metrics, Colors } from "../../../theme";

export default StyleSheet.create({
  serviceImagePlaceholder: {
    flex: 1,
    resizeMode: "contain",
    backgroundColor: "white"
  },
  servicingImage: {
    resizeMode: "contain",
    flex: 1
  },
  serviceTitles: {
    alignItems: "center",
    height: Metrics.ratio(39),
    color: Colors.primary
  }
});
