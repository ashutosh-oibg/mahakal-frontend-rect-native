import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "../Tabbar/BottomTabBar";
import Sidebar from "../Tabbar/DrawerContent";
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="main-tabbar" component={TabBar} />
      <Stack.Screen name="main-sidebar" component={Sidebar} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
