import React from "react";
import { View, SafeAreaView, Text } from "react-native";

/**
 * Displays savings history and savings goals.
 *
 * ```tsx
 * <Button
 *  title="Go to Saving"
 *  onPress={() => this.props.navigation.navigate('Saving')}
 * />
 * ```
 *
 * @author Mitchell Woods <github.com/mmwoods>
 */
export const SavingScreen = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", margin: 20 }}>
    <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}>
      <Text>Saving</Text>
    </View>
  </SafeAreaView>
);
