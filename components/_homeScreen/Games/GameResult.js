import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { TextInput } from "react-native-paper";
import { COLOR } from "../../../assets/colors";
import { useRoute } from "@react-navigation/native";
import { styles } from "../styles";
import Points from "./Points";
import { SUBMITPOINT } from "../../../redux/Action";
import { useDispatch } from "react-redux";

const GameResult = ({ bulkOption }) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const entryGameTypeRef = useRef();
  const entryPointsRef = useRef();
  const { gametitle } = route.params;
  const [gameType, setGameType] = useState("");
  const [entryGameType, setEntryGameType] = useState("");
  const [entryPoints, setEntryPoints] = useState("");
  const obj = {
    gameType: gameType,
    entryGameType: entryGameType,
    entryPoints: entryPoints,
  };

  const saveEntry = (data) => {
    dispatch({ type: SUBMITPOINT, payload: data });
  };

  return (
    <View>
      <View style={styles.textInput}>
        <TextInput
          mode={"outlined"}
          value={gameType}
          placeholder={"Select Game type..."}
          onChangeText={(value) => setGameType(value)}
          placeholderTextColor={COLOR.gray}
          style={{ borderRadius: 10 }}
          outlineColor={COLOR.primary}
          returnKeyType="next"
          onSubmitEditing={() => {
            entryGameTypeRef.current.focus();
          }}
          right={
            <TextInput.Icon
              icon="arrow-right-drop-circle-outline"
              color={COLOR.grey}
            />
          }
        />
        <TextInput
          mode={"outlined"}
          value={entryGameType}
          placeholder={`Enter ${gametitle}`}
          onChangeText={(value) => setEntryGameType(value)}
          placeholderTextColor={COLOR.gray}
          style={{ borderRadius: 10 }}
          returnKeyType="next"
          outlineColor={COLOR.primary}
          ref={entryGameTypeRef}
          keyboardType={"numeric"}
          onSubmitEditing={() => {
            entryPointsRef.current.focus();
          }}
          right={
            <TextInput.Icon
              icon="arrow-right-drop-circle-outline"
              color={COLOR.grey}
            />
          }
        />
        {bulkOption == true ? (
          <Points
            saveEntry={saveEntry}
            setEntryPoints={setEntryPoints}
            obj={obj}
          />
        ) : (
          <TextInput
            mode={"outlined"}
            value={entryPoints}
            placeholder={"Enter Points"}
            onChangeText={(value) => setEntryPoints(value)}
            placeholderTextColor={COLOR.gray}
            style={{ borderRadius: 10 }}
            outlineColor={COLOR.primary}
            ref={entryPointsRef}
            keyboardType={"numeric"}
            onSubmitEditing={() => saveEntry(obj)}
            right={
              <TextInput.Icon
                icon="arrow-right-drop-circle-outline"
                color={COLOR.grey}
              />
            }
          />
        )}
      </View>
    </View>
  );
};

export default GameResult;
