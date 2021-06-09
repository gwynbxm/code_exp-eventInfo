import React from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function EventsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "skyblue",
      }}
    >
      <Text>Events!</Text>
      <Button
        title="CLICK HERE"
        onPress={() => navigation.navigate("Second Screen")}
      />
    </View>
  );
}

function EventsSecondScreen() {
  return <Text>Dont get scammed!</Text>;
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="Second Screen" component={EventsSecondScreen} />
    </Stack.Navigator>
  );
}
