import { StyleSheet } from "react-native";
import { COLOR } from "../assets/colors";
import Colors from "../assets/TabBarComponents/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.mustard,
    borderRadius: 50,
  },
  tabBar: {
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
    backgroundColor: COLOR.mustard,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLOR.white,
    backgroundColor: COLOR.mustard,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR.mustard,
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: "center",
    color: COLOR.primary,
  },
});
