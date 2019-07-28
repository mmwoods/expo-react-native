import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import { Heading } from "../components/Heading/Heading";

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
  <>
    <Heading title="20%" />

    <SafeAreaView style={{ flex: 3, backgroundColor: "#fff", margin: 20 }}>
      <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}>
        <Text>Saving</Text>
      </View>
    </SafeAreaView>
  </>
);
