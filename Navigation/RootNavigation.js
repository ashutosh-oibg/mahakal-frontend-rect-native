import React, { useEffect, useState } from "react";
import Sidebar from "../Tabbar/DrawerContent";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../Screens/SplashScreen";

const RootNavigation = () => {
  var delay = 3;
  const Root = createNativeStackNavigator();
  const [show, setShow] = useState(false);
  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      {show ? null : <Root.Screen name="Splash" component={SplashScreen} />}
      <Root.Screen name="Main-Dash" component={Sidebar} />
    </Root.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
