import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import GameRatesData from "../Utils/GameRates";
import { styles } from "./styles";
const GameRates = () => {
  const Items = ({ item, index }) => {
    return (
      <View style={styles.List} key={index}>
        <Text style={styles.ListTitle}>{item.title}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={GameRatesData}
        renderItem={({ item, index }) => <Items item={item} index={index} />}
        contentContainerStyle={{ marginBottom: 40 }}
      />
    </View>
  );
};

export default GameRates;
