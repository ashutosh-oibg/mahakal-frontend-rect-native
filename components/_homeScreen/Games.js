import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../Common/Card";
import HomeScreenData from "../Utils/HomeScreenData";
import { COLOR } from "../../assets/colors";

const Games = () => {
  const Items = ({ item, index }) => {
    return (
      <Card
        title={item.gameName}
        timeOpen={item.openBid}
        timeClose={item.closBid}
        status={item.status}
        btnTitle={item.btnTitle}
        statusColor={item.status === "Running Now" ? "#82CD47" : "#82CD47"}
        btnImage={"play-circle"}
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
