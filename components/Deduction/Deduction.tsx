import React from "react";
import { Text, View, Image } from "react-native";

export interface DeductionProps {
  /** The name of the Company/User. */
  title: string;
  /** The amount of the deduction. */
  amount: number;
  /** The image of the Company/User. */
  image?: string;
}

/**
 * Displays a deduction with the associated company/user image, title, and amount.
 *
 * @author Mitchell Woods <github.com/mmwoods>
 * @param title The name of the Company/User.
 * @param amount The amount of the deduction.
 * @param image (optional) The image of the Company/User.
 */
export const Deduction: React.FC<DeductionProps> = props => (
  <View
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: 35
    }}
  >
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <Image
        style={{ width: 35, height: 35 }}
        source={{
          uri: props.image
        }}
      />
      <Text style={{ fontSize: 18, fontWeight: "500", paddingLeft: 15 }}>
        {props.title}
      </Text>
    </View>

    <Text style={{ fontSize: 18, paddingRight: 15 }}>-${props.amount}</Text>
  </View>
);
