import React from "react";
import { Text, View } from "react-native";
import { color } from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lavender",
      }}
    >
      <Text>Home!</Text>
      <AntDesign name="forward" size={24} color="black" />
    </View>
  );
}
