import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import Icon, { Icons } from "../assets/TabBarComponents/Icons";
import Colors from "../assets/TabBarComponents/Colors";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import MyBidsScreen from "../Screens/MyBidsScreen/MyBidsScreen";
import PassbookScreen from "../Screens/PassbookScreen/PassbookScreen";
import FundScreen from "../Screens/FundsScreen/FundScreen";
import SupportScreen from "../Screens/SupportScreen/SupportScreen";
import { styles } from "./styles";
import { COLOR } from "../assets/colors";
const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: Icons.Feather,
    icon: "home",
    component: HomeScreen,
  },
  {
    route: "MyBids",
    label: "MyBids",
    type: Icons.MaterialCommunityIcons,
    icon: "gavel",
    component: MyBidsScreen,
  },
  {
    route: "Passbook",
    label: "Passbook",
    type: Icons.MaterialCommunityIcons,
    icon: "bank",
    component: PassbookScreen,
  },
  {
    route: "Fund",
    label: "Fund",
    type: Icons.MaterialIcons,
    icon: "attach-money",
    component: FundScreen,
  },
  {
    route: "Support",
    label: "Support",
    type: Icons.MaterialIcons,
    icon: "support-agent",
    component: SupportScreen,
  },
];

const Tab = createBottomTabNavigator();

const animate1 = {
  0: { scale: 0.5, translateY: 7 },
  0.92: { translateY: -34 },
  1: { scale: 1.2, translateY: -24 },
};
const animate2 = {
  0: { scale: 1.2, translateY: -24 },
  1: { scale: 1, translateY: 7 },
};

const circle1 = {
  0: { scale: 0 },
  0.3: { scale: 0.9 },
  0.5: { scale: 0.2 },
  0.8: { scale: 0.7 },
  1: { scale: 1 },
};
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? COLOR.white : COLOR.primary}
          />
        </View>
        <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: COLOR.mustard },
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
