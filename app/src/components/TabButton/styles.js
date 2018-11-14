// @flow
import { StyleSheet } from "react-native";
import { Colors, Metrics } from "../../theme";

export default StyleSheet.create({
  cartButton: {
    borderWidth: Metrics.ratio(1),
    borderRadius: Metrics.ratio(5),
    borderColor: "#bfc3d2",
    alignItems: "center",
    justifyContent: "center"
  },
  tabUnselectedStyle: {
    backgroundColor: "#ecedf2",
    width: Metrics.ratio(135),
    height: Metrics.ratio(40)
  },
  tabSelectedStyle: {
    width: Metrics.ratio(135),
    height: Metrics.ratio(40),
    backgroundColor: Colors.darkStaleBlue,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4
  }
});
