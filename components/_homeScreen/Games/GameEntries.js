import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../styles";
import { SIZE } from "../../../assets/Sizes";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { COLOR } from "../../../assets/colors";
import { REMOVEALLPOINT, REMOVEPOINT } from "../../../redux/Action";
import { Button } from "react-native-paper";
const GameEntries = () => {
  const { entries } = useSelector((state) => state.points);

  const dispatch = useDispatch();
  const removeItem = (data) => {
    dispatch({ type: REMOVEPOINT, payload: data });
  };

  const Items = ({ item, index }) => {
    return (
      <View style={styles.entryList}>
        <Text>{index + 1}</Text>
        <Text>{item.entryGameType}</Text>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={COLOR.red}
          size={20}
          onPress={() => removeItem(item.entryGameType)}
        />
      </View>
    );
  };
  console.log("entries:", entries);
  return (
    <View style={styles.GameEntries}>
      {entries.length === 0 ? (
        <View style={styles.pleaseWaitView}>
          <Text>Please add some entry</Text>
        </View>
      ) : (
        <FlatList
          data={entries}
          renderItem={({ item, index }) => <Items item={item} index={index} />}
        />
      )}
    </View>
  );
};

export default GameEntries;
