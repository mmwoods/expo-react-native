import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Transaction } from "./components/Transaction/Transaction";
import { transactions } from "./data/transactions";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", margin: 20 }}>
      <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#06b6b5",
            width: 380,
            height: 230,
            borderRadius: 20
          }}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 17, fontWeight: "500" }}>Balance</Text>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={{
              fontSize: 60,
              fontWeight: "500",
              paddingTop: 40,
              paddingBottom: 20
            }}
          >
            $500.26
          </Text>
        </View>
      </View>

      <Text style={{ fontSize: 15, color: "#dfdfdf" }}>Today</Text>

      <ScrollView style={{ flex: 2, marginTop: 15 }}>
        {transactions.map(item => (
          <Transaction
            key={item.id}
            title={item.title}
            amount={item.amount}
            image={item.image}
            type={item.type}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
