import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Content, CheckBox, ListItem, Body, Text, Toast } from "native-base";
import LoginForm from "./LoginForm";
import { styles } from "./styles";
import CustomNativeBaseComponent from "../../components/CustomNativeBaseComponent";

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ paddingBottom: 25 }}>
          <Text> Login Form </Text>
        </View>
        <LoginForm />

        <View style={{ paddingTop: 10, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() =>
              Toast.show({
                text: "Forgot Pasword",
                buttonText: "Okay"
              })
            }
          >
            <Text> Forgot Password ? </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text> Register Here! </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
