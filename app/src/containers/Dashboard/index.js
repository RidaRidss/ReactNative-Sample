// @flow

import { connect } from "react-redux";
import React, { Component } from "react";

import PropTypes from "prop-types";

import { Actions } from "react-native-router-flux";

import SwipeCards from "react-native-swipe-cards";

import { View, ScrollView, FlatList } from "react-native";

import { Text } from "../../components";

import { Fonts, Colors, ApplicationStyles } from "../../theme";

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

    this.state = {
      cards: [
        {
          text: "Quick & Easy & Convinent Shopping Experience",
          backgroundColor: "#ffd834"
        },
        { text: "Best Product & Best Price", backgroundColor: "#ffb234" },
        {
          text: "Easily Search & Find Your Favourites",
          backgroundColor: "#ff8b5a"
        },
        { text: "We Cream Our Own Luck", backgroundColor: "#ec417a" },
        {
          text: "Shop Quickly & Never Miss A Thing!",
          backgroundColor: "#78c8a1"
        },
        { text: "Save More With Deals", backgroundColor: "#4f2ea9" },
        { text: "All You Need Is Less", backgroundColor: "#7d57c1" },
        {
          text: "Pickup Days Vary By Market",
          backgroundColor: "#aed787"
        }
      ]
    };
  }

  renderGroceryHorizontalGrid = () => {
    return (
      <View>
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
  renderAdmob = () => {
    return (
      <SwipeCards
        loop={true}
        cards={this.state.cards}
        renderCard={cardData => (
          <View
            style={[styles.card, { backgroundColor: cardData.backgroundColor }]}
          >
            <Text
              size="fourteen"
              type="SourceSansProSemiboldIt"
              color={Colors.white}
            >
              {cardData.text}
            </Text>
          </View>
        )}
        yupText="one tap shop"
        showNope={false}
        yupStyle={{
          borderColor: Colors.transparent
        }}
        yupTextStyle={{
          color: Colors.dis,
          fontFamily: Fonts.type.AvenirNextMedium,
          borderWidth: 0,
          fontSize: Fonts.size.small,
          border: 0
        }}
      />
    );
  };
  renderIntroSection = () => {
    return (
      <View style={ApplicationStyles.marginHorizontal}>
        <Text color="dis" type="SourceSansProSemiboldIt" size="large">
          Introducing Grocery App
        </Text>
      </View>
    );
  };
  render() {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        <View style={styles.content}>
          {this.renderAdmob()}
          {this.renderGroceryHorizontalGrid()}
          {this.renderIntroSection()}
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
)(Dashboard);
