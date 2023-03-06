import { StyleSheet, useWindowDimensions } from "react-native";
import { COLOR } from "../../../assets/colors";
import { SIZE } from "../../../assets/Sizes";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    backgroundColor: COLOR.white,
    flexDirection: "row",
    borderTopRightRadius: 200,
    borderBottomLeftRadius: 200,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  innerBox: {
    flexDirection: "row",
  },
  statandTime: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: SIZE.eighteen,
    marginHorizontal: SIZE.ten,
  },
  timings: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timingText: {
    fontSize: SIZE.eight,
    marginLeft: SIZE.eight,
    fontWeight: "bold",
  },
  runningStatus: {
    fontWeight: "bold",
    size: SIZE.ten,
  },
  titleStat: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  titleAndTime: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  btn: { marginLeft: 40 },
  btnImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  btnText: { fontSize: SIZE.fourteen, marginTop: 10, fontWeight: "bold" },
});
