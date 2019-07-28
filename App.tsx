import { createStackNavigator, createAppContainer } from "react-navigation";
import { TransactionScreen } from "./screens/TransactionScreen";
import { HomeScreen } from "./screens/HomeScreen";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Transactions: { screen: TransactionScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
