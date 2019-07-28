import React from "react";
import { View, SafeAreaView, Text } from "react-native";

/**
 * Displays a list of past payments alongside the account PayID and BSB details.
 *
 * ```tsx
 * <Button
 *  title="Go to Sending"
 *  onPress={() => this.props.navigation.navigate('Sending')}
 * />
 * ```
 *
 * @author Mitchell Woods <github.com/mmwoods>
 */
export const SendingScreen = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", margin: 20 }}>
    <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}>
      <Text>Sending</Text>
    </View>
  </SafeAreaView>
);
