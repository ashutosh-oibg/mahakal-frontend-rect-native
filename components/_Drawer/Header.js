import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Logo from "../Common/Logo";
import { EvilIcons } from "react-native-vector-icons";
import { SIZE } from "../../assets/Sizes";
const Header = () => {
  return (
    <View style={styles.header}>
      <Logo />

      <Pressable onClick={() => console.log("CLose")}>
        <EvilIcons name="close-o" size={SIZE.twentytwo} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
});
