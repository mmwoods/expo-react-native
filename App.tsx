import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { TransactionScreen } from "./screens/TransactionScreen";
import { HomeScreen } from "./screens/HomeScreen";

import { Ionicons } from "@expo/vector-icons";

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Transactions: { screen: TransactionScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-home`;
        } else if (routeName === "Transactions") {
          iconName = `ios-card`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      style: {
        paddingTop: 10
      }
    }
  }
);

const App = createAppContainer(TabNavigator);

export default App;
