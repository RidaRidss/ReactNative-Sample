// @flow
import { StyleSheet, Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { Colors, Metrics, Fonts } from "../../theme";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1
  },
  view2: {
    width: Metrics.image.oneonenine,
    height: Metrics.image.oneonenine,
    marginTop: Metrics.ratio(23),
    borderRadius: Metrics.ratio(5),
    borderWidth: Metrics.ratio(1),
    borderColor: "#ca9755",
    marginLeft: Metrics.ratio(9)
  },
  view2lastItem: {
    marginLeft: Metrics.ratio(9),
    marginRight: Metrics.ratio(15)
  },
  view2IstItem: {
    marginLeft: Metrics.ratio(15)
  },
  view2tems: {
    marginHorizontal: Metrics.ratio(5)
  }
});
