// @flow
import React from "react";
import PropTypes from "prop-types";
import { View, ViewPropTypes } from "react-native";
import { Text, ButtonView } from "../../components";
import styles from "./styles";
import { Metrics } from "../../theme";

export default class TabButton extends React.Component {
  static propTypes = {
    keyword: PropTypes.string,
    displayText: PropTypes.string,
    customStyle: ViewPropTypes.style,
    isEnabled: PropTypes.bool,
    onPress: PropTypes.func
  };

  static defaultProps = {
    keyword: "",
    displayText: "",
    customStyle: {},
    isEnabled: false,
    onPress: () => {}
  };

  render() {
    const {
      keyword,
      displayText,
      customStyle,
      onPress,
      isEnabled
    } = this.props;

    return (
      <ButtonView
        onPress={onPress}
        style={[
          styles.cartButton,
          isEnabled ? styles.tabSelectedStyle : styles.tabUnselectedStyle,
          {
            position: "absolute",
            top: 0,
            bottom: 0,
            height: Metrics.ratio(40),
            width: (Metrics.screenWidth * 0.8) / 2 + Metrics.ratio(5)
          },
          customStyle
        ]}
      >
        <Text
          type="AvenirNextDemiBold"
          size="thirteen"
          color={isEnabled ? "white" : "primary"}
        >
          {displayText}
        </Text>
      </ButtonView>
    );
  }
}
