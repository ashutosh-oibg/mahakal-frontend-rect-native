import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import MyFunds from "../../components/_fundsScreens/List";

const FundScreen = () => {
  return (
    <View style={styles.container}>
      <MyFunds />
    </View>
  );
};

export default FundScreen;
