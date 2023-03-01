import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import ListCard from "../../Common/ListCard";
import Bids from "../../Utils/Bids";
import Funds from "../../Utils/Funds";

const Index = () => {
  const Items = ({ item, index }) => {
    return (
      <View style={styles.listContainer}>
        <ListCard
          key={index}
          leftIcon={item.lefIcon}
          title={item.option}
          description={item.description}
          rightIcon={item.rightIcon}
        />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={Funds}
        renderItem={({ item, index }) => <Items item={item} index={index} />}
      />
    </View>
  );
};

export default Index;
