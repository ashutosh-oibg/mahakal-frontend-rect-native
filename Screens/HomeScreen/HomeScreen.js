import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import Games from "../../components/_homeScreen/Games";
import { Button } from "react-native-paper";
import { COLOR } from "../../assets/colors";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={require("../../assets/resource/cards_and_dice.png")}
          style={styles.images}
        />
      </View>
      <View style={styles.gameScreenHead}>
        <Button
          buttonColor={COLOR.white}
          style={styles.homeBtn}
          icon={"play-circle"}
          textColor={COLOR.primary}
          onPress={() => alert("InProgresss")}
        >
          withdraw
        </Button>
        <Button
          buttonColor={COLOR.white}
          style={styles.homeBtn}
          icon={"play-circle"}
          textColor={COLOR.primary}
          onPress={() => alert("InProgresss")}
        >
          Add funds
        </Button>
      </View>

      <View style={style.imageView}>
        <Image
          source={require("../../assets/resource/back_ace.png")}
          style={styles.images}
        />
      </View>
      <View style={styles.sectionGameRates}>
        <Games />
      </View>
      {/* <Text style={styles.text}>Home Screen</Text> */}
    </View>
  );
};

export default HomeScreen;
