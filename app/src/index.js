/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Provider } from "react-redux";

import {
  AppRegistry,
  StatusBar,
  Platform,
  AppState,
  BackHandler,
  NativeModules,
  View,
  ReactNative
} from "react-native";

import { Actions } from "react-native-router-flux";

import NetworkInfo from "./services/NetworkInfo";
import { networkInfoListener } from "./actions/NetworkInfoActions";

const reducers = require("./reducers").default;

import configureStore from "./store";
import AppNavigator from "./navigator";

export default class App extends Component<{}> {
  // constructor() {
  //   super();
  //   // KeyboardManager.setEnable(true);
  //   // KeyboardManager.setToolbarPreviousNextButtonEnable(true);
  // }

  state = {
    isLoading: true,
    store: configureStore(reducers, newState => {
      // NativeModules.SplashScreen.hide();
      this.setState({ isLoading: false });
      NetworkInfo.networkInfoListener(
        this.state.store.dispatch,
        networkInfoListener
      );
      AppState.addEventListener("change", this._handleAppStateChange);
    })
  };

  componentDidMount() {
    // if (Utils.isPlatformAndroid()) NativeModules.SplashScreen.hide();
    BackHandler.addEventListener("hardwareBackPress", () => null);

    console.disableYellowBox = true;
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  _handleAppStateChange = nextAppState => {};

  render() {
    if (this.state.isLoading) {
      return null;
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Provider store={this.state.store}>
          <AppNavigator />
        </Provider>
      </View>
    );
  }
}
