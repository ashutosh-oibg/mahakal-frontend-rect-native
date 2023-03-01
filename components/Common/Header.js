import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <TextInput  />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    width: "100%",
    backgroundColor: "red",
  },
});
