import { FlatList, Pressable, Text, View } from "react-native";
import React from "react";
import { styles } from "../styles";
import { COLOR } from "../../../assets/colors";

const gamePoint = [
  {
    id: 1,
    point: 0,
  },
  {
    id: 2,
    point: 1,
  },
  {
    id: 3,
    point: 2,
  },
  {
    id: 4,
    point: 3,
  },
  {
    id: 5,
    point: 4,
  },
  {
    id: 6,
    point: 5,
  },
  {
    id: 7,
    point: 6,
  },
  {
    id: 8,
    point: 7,
  },
  {
    id: 9,
    point: 8,
  },
  {
    id: 10,
    point: 9,
  },
];

const Points = ({ setEntryPoints, saveEntry, obj }) => {
  const Items = ({ item, index }) => {
    return (
      <Pressable
        onPress={() => {
          setEntryPoints(item.point), saveEntry(obj);
        }}
        key={index}
        style={styles.pointView}
      >
        <Text style={{ color: COLOR.primary }}>{item.point}</Text>
      </Pressable>
    );
  };
  return (
    <View>
      <FlatList
        data={gamePoint}
        renderItem={({ item, index }) => <Items item={item} index={index} />}
        numColumns={5}
        contentContainerStyle={{
          justifyContent: "space-between",
        }}
      />
    </View>
  );
};

export default Points;
