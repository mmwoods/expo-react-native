import React from "react";
// Navigation
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
// Screens
import { SpendingScreen, SendingScreen, SavingScreen } from "./screens/index";
// Icons
import { Ionicons } from "@expo/vector-icons";

const TabNavigator = createBottomTabNavigator(
  {
    Spending: { screen: SpendingScreen },
    Sending: { screen: SendingScreen },
    Saving: { screen: SavingScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;

        if (routeName === "Spending") {
          iconName = `ios-pulse`;
        } else if (routeName === "Sending") {
          iconName = `ios-send`;
        } else if (routeName === "Saving") {
          iconName = `ios-airplane`;
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
