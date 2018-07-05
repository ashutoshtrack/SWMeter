import { createStackNavigator } from "react-navigation";

import LoginScreen from "../src/containers/Login";
import RegisterScreen from "../src/containers/Register";

export const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },

    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Login"
  }
);
