// @flow
import { StyleSheet, Platform } from "react-native";
import { Fonts, Colors, Metrics } from "../theme";
// import Utils from "../util";

export default StyleSheet.create({
  header: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    backgroundColor: Colors.navbar.background
  },
  title: {
    fontWeight: Platform.OS === "ios" ? "200" : "100",
    width:
      Metrics.screenWidth - (Metrics.doubleBaseMargin + Metrics.baseMargin),
    textAlign: "center",
    fontSize: Fonts.size.sixteen,
    fontFamily: Fonts.type.AvenirNextDemiBold,
    color: Colors.darkStaleBlue
  },
  tabBarStyle: {
    borderTopColor: Colors.border,
    borderTopWidth: Metrics.horizontalLineHeight,
    backgroundColor: Colors.navbar.background
  },
  menuButton: {
    width: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  rightButtonStyle: {
    marginRight: Metrics.smallMargin,
    width: Metrics.ratio(30),
    height: Metrics.ratio(30)
  }
});
