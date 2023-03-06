import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { styles } from "../styles";
import EntryPointsFooter from "./EntryPointsFooter";
import GameEntries from "./GameEntries";
import GameResult from "./GameResult";
const Index = () => {
  const route = useRoute();
  const { gametitle } = route.params;
  const options = gametitle.includes("Bulk");
  const [bulkOption, setBulkOption] = useState(options);

  return (
    <View style={styles.container}>
      <GameResult bulkOption={bulkOption} />
      <GameEntries />
      <EntryPointsFooter />
    </View>
  );
};

export default Index;
