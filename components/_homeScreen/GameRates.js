import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import GameRatesData from "../Utils/GameRates";
import { styles } from "./styles";
const GameRates = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { name } = route.params;
  const Items = ({ item, index }) => {
    return (
      <Pressable
        style={styles.List}
        key={index}
        onPress={() =>
          navigation.navigate("Playground", {
            gametitle: item.title,
            name: name,
          })
        }
      >
        <View style={styles.iconView}>
          <Image source={{ uri: item.icon }} style={styles.iconImage} />
        </View>
        <Text style={styles.ListTitle}>{item.title}</Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={GameRatesData}
        renderItem={({ item, index }) => <Items item={item} index={index} />}
        contentContainerStyle={{ marginBottom: 40 }}
        numColumns={2}
      />
    </View>
  );
};

export default GameRates;
