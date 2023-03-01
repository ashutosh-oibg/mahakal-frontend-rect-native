import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles/ListCardStyles";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { SIZE } from "../../assets/Sizes";
const ListCard = ({ leftIcon, title, description, rightIcon, key }) => {
  return (
    <Pressable style={styles.list} onPress={() => alert("NavigationLeft")}>
      <View style={styles.icon}>
        <MaterialCommunityIcons name={leftIcon} size={SIZE.twentyfour} />
      </View>
      <View style={styles.optionsView}>
        <Text style={styles.title}>{title}</Text>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.description}>
          {description}
        </Text>
      </View>

      <View style={styles.icon}>
        <MaterialCommunityIcons name={rightIcon} size={SIZE.twentyfour} />
      </View>
    </Pressable>
  );
};

export default ListCard;
