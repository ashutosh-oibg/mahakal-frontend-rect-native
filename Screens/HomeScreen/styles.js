import { StyleSheet } from "react-native";
import { COLOR } from "../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.primary,
  },
  text: {
    color: COLOR.white,
  },
  gameScreenHead: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  sectionGameRates: {
    flex: 1,
    backgroundColor: COLOR.primary,
  },
  homeBtn: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imageView :{ justifyContent: "center", alignItems: "center" },
  images: {
    width: "100%",
    height: 90,
    resizeMode: "contain",
  },
});
