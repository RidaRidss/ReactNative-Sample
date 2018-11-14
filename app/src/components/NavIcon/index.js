import React from "react";
import PropTypes from "prop-types";
import { Image, ImageBackground, View } from "react-native";
import { TabButtonRight, Text } from "../../components";
import { Images, Metrics, Colors } from "../../theme";

import IconBadge from "react-native-icon-badge";

const NavIcon = ({ cartData, onPress, icon }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <IconBadge
      MainElement={
        <TabButtonRight imagesArray={["cart"]} actions={[onPress]} />
      }
      BadgeElement={
        <Text color="white" size="ten" type="AvenirNextBold">
          {cartData.length}
        </Text>
      }
      IconBadgeStyle={{
        // width: Metrics.image.tiny,
        // height: Metrics.image.tiny3,
        width: 18,
        height: 18,
        marginRight: Metrics.ratio(25),
        backgroundColor: Colors.badgeCart,
        borderRadius: Metrics.ratio(2),
        marginTop: Metrics.ratio(5),
        borderColor: Colors.white,
        borderWidth: Metrics.ratio(2),
        borderRadius: Metrics.ratio(5)
      }}
      Hidden={cartData.length == 0}
    />
  </View>
);

NavIcon.propTypes = {
  cartData: PropTypes.array,
  onPress: PropTypes.func
};

export default NavIcon;
