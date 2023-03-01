import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, StyleSheet, View, Text } from "react-native";
import Logo from "../components/Common/Logo";
import TabBar from "./BottomTabBar";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "react-native-vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import ChartScreen from "../Screens/ChartsScreen/ChartScreen";
import { COLOR } from "../assets/colors";
import { SIZE } from "../assets/Sizes";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import CustomDrawerContent from "./DrawerCustom";
const Drawer = createDrawerNavigator();

const Sidebar = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,

        headerLeft: () => {
          return (
            <View>
              <Ionicons
                name="list-outline"
                size={SIZE.twentyfour}
                color={COLOR.primary}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                style={{ margin: 10 }}
              />
            </View>
          );
        },
        headerTitle: () => (
          <View>
            <Logo />
          </View>
        ),
        headerRight: () => (
          <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
            <Ionicons
              name="ios-wallet-outline"
              size={SIZE.twentyfour}
              style={{ margin: 10 }}
            />
            <FontAwesome
              name="bell-o"
              size={SIZE.twentyfour}
              style={{ margin: 10 }}
            />
          </View>
        ),
        drawerInactiveBackgroundColor: "white",
        drawerActiveBackgroundColor: COLOR.primary,
        drawerActiveTintColor: "white",
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Drawer"
        drawerActiveTintColor={COLOR.primary}
        options={{
          headerShown: true,
        }}
        component={TabBar}
      />
    </Drawer.Navigator>
  );
};

export default Sidebar;
