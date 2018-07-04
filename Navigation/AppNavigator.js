import { createStackNavigator } from "react-navigation";

import LoginScreen from "../src/containers/Login";

export const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Login"
  }
);
