import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Image, Linking } from "react-native";
import { COLOR } from "../assets/colors";
import drawerMenu from "../components/Utils/drawerMenu";
import Header from "../components/_Drawer/Header";

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <Header />
      {drawerMenu.map((item, index) => {
        return (
          <DrawerItem
            label={item.title}
            activeTintColor={COLOR.primary}
            icon={({ focused, color }) => {
              return (
                <Image
                  source={{ uri: item.icon }}
                  style={{ width: 20, height: 20, resizeMode: "contain" }}
                />
              );
            }}
            onPress={() => navigation.navigate(item.navigation)}
          />
        );
      })}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
//
