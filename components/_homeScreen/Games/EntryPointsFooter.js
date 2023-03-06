import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "../styles";
import { Button } from "react-native-paper";
import { COLOR } from "../../../assets/colors";

const EntryPointsFooter = () => {
  return (
    <View style={styles.footer}>
      <Text>EntryPointsFooter</Text>
      <Button
        buttonColor={COLOR.primary}
        style={styles.homeBtn}
        icon={"arrow-right-drop-circle-outline"}
        textColor={COLOR.white}
        onPress={() => alert("InProgresss")}
      >
        Submit
      </Button>
    </View>
  );
};

export default EntryPointsFooter;
