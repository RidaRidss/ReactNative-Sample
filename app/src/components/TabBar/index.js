const React = require("react");
const { ViewPropTypes } = (ReactNative = require("react-native"));
const PropTypes = require("prop-types");
const createReactClass = require("create-react-class");
const { StyleSheet, Text, View, Animated } = ReactNative;
const Button = require("./Button");

import { Colors, Fonts, Metrics } from "../../theme";

const DefaultTabBar = createReactClass({
  propTypes: {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    textStyle: Text.propTypes.style,
    tabStyle: ViewPropTypes.style,
    renderTab: PropTypes.func,
    underlineStyle: ViewPropTypes.style
  },

  getDefaultProps() {
    return {
      activeTextColor: Colors.text.accent,
      inactiveTextColor: Colors.text.accent,
      backgroundColor: null
    };
  },

  renderTabOption(name, page) {},

  renderTab(name, page, isTabActive, onPressHandler) {
    const { activeTextColor, inactiveTextColor, textStyle } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? "bold" : "normal";

    return (
      <Button
        style={{ flex: 1 }}
        key={name}
        accessible={true}
        accessibilityLabel={name}
        accessibilityTraits="button"
        onPress={() => onPressHandler(page)}
      >
        <View style={[styles.tab, { paddingBottom: 3 }, this.props.tabStyle]}>
          <Text
            style={[
              { color: textColor, fontSize: Fonts.size.xxSmall, fontWeight },
              textStyle
            ]}
          >
            {name}
          </Text>
        </View>
      </Button>
    );
  },

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: "absolute",
      width: containerWidth / numberOfTabs,
      height: 2,
      backgroundColor: Colors.carrotOrange,
      bottom: 0
    };

    const translateX = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, containerWidth / numberOfTabs]
    });
    return (
      <View style={[styles.tabs, this.props.style]}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
        <Animated.View
          style={[
            tabUnderlineStyle,
            {
              transform: [{ translateX }]
            },
            this.props.underlineStyle
          ]}
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingBottom: 10,
    backgroundColor: "transparent"
  },
  tabs: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

module.exports = DefaultTabBar;
