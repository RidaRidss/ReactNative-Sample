// @flow
import React from "react";
import { connect } from "react-redux";

import { Stack, Scene, Router, Actions, Route } from "react-native-router-flux";
import { Home, Dashboard } from "../containers";
import { Colors, Images } from "../theme";
import { TabButtonLeft } from "../components";
import styles from "./styles";

const BACK_SCENES = "dashboard";

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
    tintColor={Colors.primary}
    headerStyle={styles.header}
    key="root"
    tintColor={Colors.primary}
  >
    <Scene
      renderLeftButton={() => (
        <TabButtonLeft imagesArray={["back"]} actions={[Actions.pop]} />
      )}
      title="Home"
      key="dashboard"
      component={Dashboard}
    />
    <Scene
      renderLeftButton={() => (
        <TabButtonLeft imagesArray={["back"]} actions={[Actions.pop]} />
      )}
      title="Categories"
      key="home"
      component={Home}
    />
  </Stack>
);

export default () => (
  <AppNavigator backAndroidHandler={onBackPress} navigator={navigator} />
);

const AppNavigator = connect()(Router);
