// @flow

import { connect } from "react-redux";
import React, { Component } from "react";

import _ from "lodash";

import PropTypes from "prop-types";

import { Actions } from "react-native-router-flux";

import Carousel, { ParallaxImage } from "react-native-snap-carousel";

import {
  View,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  TouchableHighlight,
  Separator,
  FlatList
} from "react-native";

import Swipeout from "react-native-swipeout";

import { Text } from "../../components";

import { Fonts, Metrics, Colors, Images } from "../../theme";
import styles from "./styles";

const RowTestData = [
  {
    id: 0,
    title: "Vegetables"
  },
  {
    id: 1,
    title: "Fruits"
  },
  {
    id: 2,
    title: "Baby Products"
  },
  {
    id: 3,
    title: "Grocery"
  },
  {
    id: 4,
    title: "Drinkables"
  },
  {
    id: 5,
    title: "Instant Food"
  },
  {
    id: 6,
    title: "Personal Care"
  },
  {
    id: 7,
    title: "Bakery & Dairy"
  },
  {
    id: 8,
    title: "Cooking Essentials"
  },
  {
    id: 9,
    title: "Home Care"
  }
];
class Home extends Component<{}> {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRow(data) {
    let swipeBtns = [
      {
        text: "View",
        backgroundColor: "transparent",
        underlayColor: "rgba(0, 0, 0, 1, 0.6)"
      }
    ];
    return data.map((item, index) => {
      return (
        <Swipeout
          key={index}
          right={swipeBtns}
          autoClose="true"
          backgroundColor="transparent"
        >
          <View
            style={{
              backgroundColor: Colors.carrotOrange,
              marginHorizontal: Metrics.ratio(19),
              marginBottom: Metrics.ratio(10),
              height: Metrics.ratio(60),
              justifyContent: "center",
              borderRadius: Metrics.ratio(2)
            }}
          >
            <Text
              type="AvenirNextDemiBold"
              style={{ marginLeft: Metrics.ratio(10) }}
              color={Colors.color1}
            >
              {item.title}
            </Text>
          </View>
        </Swipeout>
      );
    });
  }

  render() {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        <View style={styles.content}>
          <View style={styles.headTitle}>
            <Text
              style={{ marginLeft: Metrics.ratio(19) }}
              type="AvenirNextMedium"
              color={Colors.carrotOrange}
            >
              Choose Categories
            </Text>
          </View>
          {this.renderRow(RowTestData)}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({});

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(Home);
