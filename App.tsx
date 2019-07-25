import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Deduction } from "./components/Deduction/Deduction";

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
        <Deduction
          title="Uber EATS"
          amount={25}
          image="https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/e5/34/6e/e5346e50-03f2-d311-62e2-6e6913bb7466/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.jpeg/246x0w.jpg"
        />
        <Deduction
          title="Domino's"
          amount={12.25}
          image="https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/84/94/62/8494624d-004a-e40e-00ae-ba3bd2916d08/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-5.png/246x0w.jpg"
        />
        <Deduction
          title="McDonald's"
          amount={19.5}
          image="https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/61/c9/34/61c9349c-6316-c5c8-374e-db8c43191ed9/AppIcon-4-0-1x_U007emarketing-0-0-0-0-85-220-0-10.png/246x0w.jpg"
        />
        <Deduction
          title="Subway"
          amount={9.5}
          image="https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/1b/f9/33/1bf9337e-33b6-df40-48e1-7e6efe9dd6a1/AppIcon-0-1x_U007emarketing-0-0-85-220-0-7.png/246x0w.jpg"
        />
        <Deduction
          title="Uber EATS"
          amount={25}
          image="https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/e5/34/6e/e5346e50-03f2-d311-62e2-6e6913bb7466/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.jpeg/246x0w.jpg"
        />
        <Deduction
          title="Domino's"
          amount={12.25}
          image="https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/84/94/62/8494624d-004a-e40e-00ae-ba3bd2916d08/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-5.png/246x0w.jpg"
        />
        <Deduction
          title="McDonald's"
          amount={19.5}
          image="https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/61/c9/34/61c9349c-6316-c5c8-374e-db8c43191ed9/AppIcon-4-0-1x_U007emarketing-0-0-0-0-85-220-0-10.png/246x0w.jpg"
        />
        <Deduction
          title="Subway"
          amount={9.5}
          image="https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/1b/f9/33/1bf9337e-33b6-df40-48e1-7e6efe9dd6a1/AppIcon-0-1x_U007emarketing-0-0-85-220-0-7.png/246x0w.jpg"
        />
        <Deduction
          title="Uber EATS"
          amount={25}
          image="https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/e5/34/6e/e5346e50-03f2-d311-62e2-6e6913bb7466/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.jpeg/246x0w.jpg"
        />
        <Deduction
          title="Domino's"
          amount={12.25}
          image="https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/84/94/62/8494624d-004a-e40e-00ae-ba3bd2916d08/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-5.png/246x0w.jpg"
        />
        <Deduction
          title="McDonald's"
          amount={19.5}
          image="https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/61/c9/34/61c9349c-6316-c5c8-374e-db8c43191ed9/AppIcon-4-0-1x_U007emarketing-0-0-0-0-85-220-0-10.png/246x0w.jpg"
        />
        <Deduction
          title="Subway"
          amount={9.5}
          image="https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/1b/f9/33/1bf9337e-33b6-df40-48e1-7e6efe9dd6a1/AppIcon-0-1x_U007emarketing-0-0-85-220-0-7.png/246x0w.jpg"
        />
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
