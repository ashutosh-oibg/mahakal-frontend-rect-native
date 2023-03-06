import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "react-native-vector-icons";
import { styles } from "./styles/CardStyles";
import { SIZE } from "../../assets/Sizes";
import { COLOR } from "../../assets/colors";
const Card = ({
  title,
  timeOpen,
  timeClose,
  status,
  btnTitle,
  statusColor,
  btnImage,
  onPress,
  key,
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress} key={key}>
      <View>
        <View style={styles.innerBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.title}>***_**_***</Text>
        </View>
        <View style={styles.statandTime}>
          <Text style={[styles.runningStatus, { color: statusColor }]}>
            {status}
          </Text>
          <View style={styles.timings}>
            <Text style={styles.timingText}>Open Bid :{timeOpen}</Text>
            <Text style={styles.timingText}>Close Bid:{timeClose}</Text>
          </View>
        </View>
      </View>
      <View style={styles.btn}>
        <Feather name="chevrons-right" size={50} color={"#FFDB58"} />
      </View>
    </Pressable>
  );
};

export default Card;
