import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import MyBids from "../../components/_myBidsScreen/List/Index";

const MyBidsScreen = () => {
  return (
    <View style={styles.container}>
      <MyBids />
    </View>
  );
};

export default MyBidsScreen;
