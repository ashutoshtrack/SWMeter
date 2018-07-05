import React from "react";
import { TextInput, View, Text } from "react-native";
import { CheckBox } from "native-base";

class customCheckBoxField extends React.Component {
  state = {
    isChecked: false
  };

  render() {
    const {
      label,
      meta: { touched, error },
      input: { onChange, value }
    } = this.props;

    return (
      <View style={{ padding: 20 }}>
        <View flexDirection="row">
          <Text>{label}</Text>
          <CheckBox
            checked={this.state.isChecked}
            onPress={() => {
              onChange(!this.state.isChecked);
              this.setState(prevState => ({
                isChecked: !prevState.isChecked
              }));
            }}
          />
        </View>
        {touched && (error && <Text style={{ color: "red" }}>{error}</Text>)}
      </View>
    );
  }
}

export { customCheckBoxField };
