import React from "react";
import { View, SafeAreaView, Button } from "react-native";

export const HomeScreen = props => {
  const { navigate } = props.navigation;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", margin: 20 }}>
      <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}>
        <Button
          title="Transactions"
          onPress={() =>
            navigate("Transactions", { account: "Everday Account" })
          }
        />
      </View>
    </SafeAreaView>
  );
};
