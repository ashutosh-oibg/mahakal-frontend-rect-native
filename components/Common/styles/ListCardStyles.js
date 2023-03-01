import { StyleSheet, Text, View } from "react-native";
import { COLOR } from "../../../assets/colors";
import { SIZE } from "../../../assets/Sizes";

export const styles = StyleSheet.create({
  list: {
    width: "95%",
    height: 80,
    backgroundColor: COLOR.white,
    marginTop: 10,
    borderRadius: SIZE.ten,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
  optionsView: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 5,
  },
  title: {
    fontSize: SIZE.eighteen,
    color: COLOR.black,
  },
  description: {
    fontSize: SIZE.fourteen,
    color: COLOR.darkGray,
  },
});
