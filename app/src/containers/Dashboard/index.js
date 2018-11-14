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

import { Grocery } from "../../controls";
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

const grocery = [
  {
    key: "services",
    title: "Dairy",
    service: "https://image.ibb.co/kXyOEf/dairy.png"
  },
  {
    key: "locations",
    title: "Grocery",
    service: "https://image.ibb.co/isVOfL/groentemand.png"
  },
  {
    key: "deals",
    title: "Drinking",
    service: "https://image.ibb.co/hRoZLL/Drinking.png"
  }
];

class Dashboard extends Component<{}> {
  static propTypes = {
    grocery: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderGroceryHorizontalGrid = () => {
    return (
      <View>
        <View
          style={[
            { marginLeft: Metrics.ratio(20), marginRight: Metrics.ratio(20) },
            styles.Heading1
          ]}
        >
          <Text
            style={{
              lineHeight: Metrics.ratio(30)
            }}
            color="dis"
            type="AvenirNextDemiBold"
            size="eighteen"
          >
            Images
          </Text>
        </View>
        <FlatList
          data={grocery}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <Grocery
                data={item}
                index={index}
                containerStyle={[
                  styles.view2,
                  index == 0
                    ? styles.view2IstItem
                    : index == grocery.length - 1
                    ? styles.view2lastItem
                    : null
                ]}
              />
            );
          }}
        />
      </View>
    );
  };
  render() {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        <View style={styles.content}>{this.renderGroceryHorizontalGrid()}</View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({});

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
