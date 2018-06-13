import { createStackNavigator } from "react-navigation";
import { StatusBar } from "react-native";

import Home from "../screens/Home";
import CurrencyList from "../screens/CurrencyList";
import Options from "../screens/Options";
import Themes from "../screens/Themes";

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
        headerTitle: "Home"
      }
    },
    Options: {
      screen: Options,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title
      })
    },
    Themes: {
      screen: Themes,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title
      })
    }
  },
  {
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: "screen"
  }
);
const CurrencyListNavigator = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title
    })
  }
});

export default createStackNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        header: () => null,
        headerTitle: "Home"
      }
    },
    CurrencyList: {
      screen: CurrencyListNavigator
    }
  },
  {
    mode: "modal",
    comment: "Looks like the line below is only need v1 not v2 react-naviation",
    cardStyle_comment: { paddingTop: StatusBar.currentHeight },
    headerMode: "none"
  }
);
