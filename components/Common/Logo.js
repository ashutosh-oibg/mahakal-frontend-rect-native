import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View>
      <Image
        source={require("../../assets/resource/images/Logo/logo.png")}
        style={{
          width: 150,
          height: 40,
          resizeMode: "cover",
        }}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({});
