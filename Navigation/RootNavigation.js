import React, { useEffect, useState } from "react";
import Sidebar from "../Tabbar/DrawerContent";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../Screens/SplashScreen";
import GameRates from "../components/_homeScreen/GameRates";
import GameResult from "../components/_homeScreen/Games/Index";

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
      <Root.Screen
        name="Games"
        component={GameRates}
        options={({ route }) => ({
          title: route.params.name,
          headerShown: true,
        })}
      />
      <Root.Screen
        name="Playground"
        component={GameResult}
        options={({ route }) => ({
          title: route.params.gametitle + " -- " + route.params.name,
          headerShown: true,
        })}
      />
    </Root.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
