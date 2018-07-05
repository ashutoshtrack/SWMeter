import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Content, CheckBox, ListItem, Body, Text, Toast } from "native-base";
import RegisterForm from "./RegisterForm";
import { styles } from "./styles";

class RegisterScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View alignItems="center" justifyContent="center" paddingTop={30}>
          <View>
            <Text style={{ padd }}> Register Here!</Text>
          </View>
          <RegisterForm />
        </View>
      </ScrollView>
    );
  }
}

export default RegisterScreen;
