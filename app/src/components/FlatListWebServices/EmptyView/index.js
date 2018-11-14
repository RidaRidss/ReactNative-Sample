// @flow

import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";
import { Text } from "../../";

export default class EmptyView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text type="AvenirNextDemiBold" color="white" size="fourteen">
          {this.props.emptyListMessage
            ? this.props.emptyListMessage
            : isRTL
              ? "لا يوجد سجلات"
              : "No Records Found"}
        </Text>
      </View>
    );
  }
}
