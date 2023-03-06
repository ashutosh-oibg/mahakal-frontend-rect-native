import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../Common/Card";
import HomeScreenData from "../Utils/HomeScreenData";
import { useNavigation } from "@react-navigation/native";

const Games = () => {
  const navigation = useNavigation();
  const Items = ({ item, index }) => {
    return (
      <Card
        key={index}
        title={item.gameName}
        timeOpen={item.openBid}
        timeClose={item.closBid}
        status={item.status}
        btnTitle={item.btnTitle}
        statusColor={item.status === "Running Now" ? "#82CD47" : "#82CD47"}
        btnImage={"play-circle"}
        onPress={() => navigation.navigate("Games", { name: item.gameName })}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={HomeScreenData}
        renderItem={({ item, index }) => <Items item={item} index={index} />}
      />
    </View>
  );
};

export default Games;

const styles = StyleSheet.create({});
