import React from "react";
import { Text, View, Image } from "react-native";

export interface TransactionProps {
  /** Name of the Company/User. */
  title: string;
  /** Amount of the deduction. */
  amount: number;
  /** Type of transaction. */
  type: string;
  /** Image of the Company/User. */
  image?: string;
}

/**
 * Displays a transaction with the associated company/user image, title, and amount.
 *
 * @author Mitchell Woods <github.com/mmwoods>
 * @param title Name of the Company/User.
 * @param amount Amount of the transaction.
 * @param type Type of transaction.
 * @param image (optional) Image of the Company/User.
 */
export const Transaction: React.FC<TransactionProps> = props => (
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
      <Image style={{ width: 35, height: 35 }} source={{ uri: props.image }} />
      <Text style={{ fontSize: 18, fontWeight: "500", paddingLeft: 15 }}>
        {props.title}
      </Text>
    </View>

    <Text
      style={{
        fontSize: 18,
        paddingRight: 15,
        color: props.type === "credit" ? "green" : "black",
        fontWeight: props.type === "credit" ? "500" : "400"
      }}
    >
      {props.type === "deduction" && "-"}${props.amount}
    </Text>
  </View>
);
