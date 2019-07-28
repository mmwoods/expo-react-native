import React from "react";
import { View, SafeAreaView, Text } from "react-native";

export const HomeScreen = props => {
  const { navigate } = props.navigation;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", margin: 20 }}>
      <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};
