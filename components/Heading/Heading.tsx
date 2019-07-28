import React from "react";
import { Text, View, SafeAreaView } from "react-native";

export interface HeadingProps {
  /** Heading for the screen/section. */
  title: string;
  /** Color of the screen/section. */
  color?: string;
}

/**
 * Displays an edge-to-edge background color with one line of text.
 *
 * @author Mitchell Woods <github.com/mmwoods>
 * @param title Heading for the screen/section.
 * @param color (optional) Color of the screen/section.
 */
export const Heading: React.FC<HeadingProps> = props => (
  <View
    style={{
      backgroundColor: props.color || "#FF8365",
      flex: 1,
      alignItems: "center"
    }}
  >
    <SafeAreaView
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row"
      }}
    >
      <Text
        style={{
          fontSize: 50,
          fontWeight: "500",
          paddingTop: 35
        }}
      >
        {props.title}
      </Text>
    </SafeAreaView>
  </View>
);
