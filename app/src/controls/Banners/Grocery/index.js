// @flow
import React from "react";
import PropTypes from "prop-types";
import { View, ViewPropTypes } from "react-native";
import ImageLoad from "react-native-image-placeholder";
import { Actions } from "react-native-router-flux";

import { Text, ButtonView, Separator } from "../../../components";
import { Images } from "../../../theme";
import styles from "./styles";
import Utils from "../../../util";

export default class Grocery extends React.Component {
  static propTypes = {
    containerStyle: ViewPropTypes.style,
    data: PropTypes.array,
    index: PropTypes.number
  };

  static defaultProps = { containerStyle: {}, data: [], index: -1 };

  render() {
    const { data, index, containerStyle } = this.props;

    return (
      <ButtonView
        key={index}
        style={[containerStyle]}
        onPress={() => {
          if (data.key === "services") {
            Utils.showToast("Feature in development");
          } else {
            Utils.showToast("Feature in development");
          }
        }}
      >
        <ImageLoad
          loadingStyle={{ size: "large", color: "#fcfcfc" }}
          isShowActivity
          placeholderStyle={styles.serviceImagePlaceholder}
          source={{ uri: data.service }}
          placeholderSource={Images.loadingState}
          style={styles.servicingImage}
        />
        <View style={styles.serviceTitles}>
          <Text
            type="AvenirNextDemiBold"
            color="primary"
            size="fourteen"
            numberOfLines={1}
          >
            {data.title}
          </Text>
        </View>
      </ButtonView>
    );
  }
}
