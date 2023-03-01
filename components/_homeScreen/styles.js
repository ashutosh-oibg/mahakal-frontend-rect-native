import { FlatList, StyleSheet, Text, View } from "react-native";
import { COLOR } from "../../assets/colors";
import { SIZE } from "../../assets/Sizes";

export const styles = StyleSheet.create({
  List: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    elevation: 2,
    shadowColor: COLOR.whitesmoke,
    height: 200,
    borderRadius: 10,
  },
  ListTitle: {
    fontSize: SIZE.eighteen,
    color: COLOR.black,
  },
  //   container: {
  //     ...StyleSheet.absoluteFillObject,
  //     alignSelf: "flex-end",
  //     position: "absolute", // add if dont work with above
  //     backgroundColor: "red",
  //     width: 70,
  //     height: 30,
  //     borderRadius: 10,
  //     overflow: "hidden",
  //   },
});
