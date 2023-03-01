import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import RootNavigation from "./Navigation/RootNavigation";
import AuthenticatedNavigation from "./Navigation/AuthenticatedNavigation";
import { COLOR } from "./assets/colors";

const Main = () => {
  const [first, setfirst] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      {first == true ? <RootNavigation /> : <AuthenticatedNavigation />}
      <StatusBar
        backgroundColor={"black"}
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
    </SafeAreaView>
  );
};

export default Main;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
