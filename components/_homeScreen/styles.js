import { FlatList, StyleSheet, Text, View } from "react-native";
import { COLOR } from "../../assets/colors";
import { SIZE } from "../../assets/Sizes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.primary,
  },
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
    fontSize: SIZE.fourteen,
    color: COLOR.black,
    marginTop: 10,
  },
  iconView: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  textInput: {
    margin: SIZE.four,
  },
  pointView: {
    backgroundColor: COLOR.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 10,
    width: 65,
    borderRadius: 10,
  },
  GameEntries: {
    flex: 1,
    backgroundColor: COLOR.white,
    marginHorizontal: SIZE.ten,
    paddingHorizontal: SIZE.ten,
    marginVertical: SIZE.ten,
    borderRadius: SIZE.ten,
  },
  entryList: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLOR.white,
    height: 30,
    marginVertical: 10,
    elevation: 2,
  },
  footer: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLOR.white,
    marginHorizontal: SIZE.ten,
    paddingHorizontal: SIZE.ten,
    marginVertical: SIZE.ten,
    borderRadius: SIZE.ten,
  },
  pleaseWaitView: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
