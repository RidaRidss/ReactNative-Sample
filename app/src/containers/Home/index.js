// @flow

import { connect } from "react-redux";
import React, { Component } from "react";

import { Actions } from "react-native-router-flux";

import { View, ScrollView } from "react-native";

import Swipeout from "react-native-swipeout";

import { Text } from "../../components";

import { Colors, ApplicationStyles } from "../../theme";

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
          <View style={[styles.swipeRow, ApplicationStyles.marginHorizontal]}>
            <Text
              type="AvenirNextDemiBold"
              style={styles.rowText}
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
        <View>
          <View style={styles.headTitle}>
            <Text
              style={ApplicationStyles.marginHorizontal}
              type="AvenirNextMedium"
              color={Colors.color2}
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
