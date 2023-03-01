import { StyleSheet } from "react-native";
import { COLOR } from "../../../assets/colors";
import { SIZE } from "../../../assets/Sizes";

export const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 90,
    backgroundColor: COLOR.white,
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 5,
    borderTopRightRadius: 200,
    borderBottomLeftRadius: 200,
    justifyContent: "center",
    alignItems: "center",
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

  btn: {},
  btnImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  btnText: { fontSize: SIZE.fourteen, marginTop: 10, fontWeight: "bold" },
});
