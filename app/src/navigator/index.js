// @flow
import React from "react";

import { TouchableOpacity, Image, View, BackHandler } from "react-native";
import { connect } from "react-redux";

import {
  Stack,
  Scene,
  Router,
  Actions,
  ActionConst,
  Route,
  Schema,
  Drawer
} from "react-native-router-flux";
import { Home, Dashboard } from "../containers";
import { Colors, Images } from "../theme";
import styles from "./styles";

const BACK_SCENES = "home";

function onBackPress() {
  const scene = Actions.currentScene;
  if (BACK_SCENES.includes(scene)) {
    return false;
  }
  Actions.pop();
  return true;
}

const navigator = Actions.create(
  <Stack
    titleStyle={styles.title}
    headerStyle={styles.header}
    key="root"
    tintColor={Colors.primary}
  >
    <Scene hideNavBar key="home" component={Home} />
    <Scene hideNavBar key="dashboard" component={Dashboard} />
  </Stack>
);

export default () => (
  <AppNavigator backAndroidHandler={onBackPress} navigator={navigator} />
);

const AppNavigator = connect()(Router);
