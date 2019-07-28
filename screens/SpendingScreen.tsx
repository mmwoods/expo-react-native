import React from "react";
import { Text, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Transaction } from "../components/Transaction/Transaction";
import { transactions } from "../data/transactions";
import { Heading } from "../components/Heading/Heading";

/**
 * Displays the account value and spending activity (as a series of transactions).
 *
 * ```tsx
 * <Button
 *  title="Go to Spending"
 *  onPress={() => this.props.navigation.navigate('Spending')}
 * />
 * ```
 *
 * @author Mitchell Woods <github.com/mmwoods>
 * @function `onTouch` Changes the view to the Details Screen, and passes in extra transaction data as props.
 */
export const SpendingScreen = props => {
  return (
    <>
      <Heading title="$212.35" />

      {/* Activity */}
      <View style={{ flex: 1, backgroundColor: "#f6f6f6" }} />

      {/* Transactions */}
      <View
        style={{
          flex: 2,
          backgroundColor: "#fff",
          padding: 20,
          borderTopWidth: 2,
          borderTopColor: "#dfdfdf"
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 15, color: "#ccc" }}>Today</Text>
          <Ionicons name="ios-search" size={26} color="#dfdfdf" />
        </View>

        <ScrollView style={{ flex: 2, marginTop: 15 }}>
          {transactions.map(item => (
            <Transaction
              key={item.id}
              title={item.title}
              amount={item.amount}
              image={item.image}
              type={item.type}
              onTouch={() =>
                props.navigation.navigate("Details", {
                  title: item.title,
                  amount: item.amount,
                  image: item.image,
                  type: item.type
                })
              }
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};
