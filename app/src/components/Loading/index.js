// @flow

import React from "react";
import PropTypes from "prop-types";
import Modal from "react-native-modal";
import { View, StatusBar, ActivityIndicator , Text } from "react-native";
import styles from "./styles";
import {Colors} from "../../theme"

export default class Loading extends React.Component {
  static propTypes = {
    loading: PropTypes.bool
  };

  static defaultProps = {
    loading: false
  };

  render() {
    const { loading } = this.props;
    return (
      <View>
        <StatusBar networkActivityIndicatorVisible={loading} />
        <Modal
          style={{ margin: 0 }}
          backdropOpacity={0.1}
          animationIn="fadeIn"
          isVisible={loading}
        >
          <View style={styles.container}>
        <ActivityIndicator animating color={Colors.darkStaleBlue} size="large" />           
            </View>
            </Modal>
            </View>
          );
        }
      }
      
      // <Text color="primary">Loading . . .</Text>