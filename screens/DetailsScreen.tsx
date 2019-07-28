import React from "react";
import { View, SafeAreaView, Text, Image } from "react-native";
import { Heading } from "../components/Heading/Heading";

/**
 * Displays additional information about each transaction.
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
export const DetailsScreen = props => {
  const title = props.navigation.getParam("title", "Transaction");
  const amount = props.navigation.getParam("amount", "0");
  const image = props.navigation.getParam("image", "img");
  const type = props.navigation.getParam("type", "deduction");

  return (
    <>
      <Heading title="Details" />

      <SafeAreaView style={{ flex: 3, backgroundColor: "#fff", margin: 20 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            paddingTop: 20
          }}
        >
          <Image style={{ width: 70, height: 70 }} source={{ uri: image }} />
          <Text>{title}</Text>
          <Text
            style={{
              fontSize: 18,
              paddingRight: 15,
              color: type === "credit" ? "green" : "black",
              fontWeight: type === "credit" ? "500" : "400"
            }}
          >
            {type === "deduction" && "-"}${amount}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};
