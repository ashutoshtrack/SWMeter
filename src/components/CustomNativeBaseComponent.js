import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import { View } from "react-native";
export default class CustomNativeBaseComponent extends Component {
  render() {
    return (
      <View width={"100%"}>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input />
        </Item>
      </View>
    );
  }
}
