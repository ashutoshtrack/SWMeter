import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Field, reduxForm } from "redux-form";
import { customTextField } from "../../components/CustomTextField";
import { customCheckBoxField } from "../../components/CustomCheckBoxField";

const validate = values => {
  const errors = {};

  if (!values.mobileNumber) {
    errors.mobileNumber = "Please provide your Mobile Number!";
  }
  if (values.mobileNumber) {
    if (values.mobileNumber.length != 10)
      errors.mobileNumber = "’Please enter valid mobile no";
  }

  if (!values.password) {
    errors.password = "Please enter your password!";
  }
  console.log(values);
  return errors;
};
const submit = values => {
  alert(JSON.stringify(values));
};

let LoginForm = props => {
  const { handleSubmit } = props;

  return (
    <View>
      <Field
        label="Mobile N.o"
        name="mobileNumber"
        type="numeric"
        component={customTextField}
      />
      <Field
        label="Password"
        name="password"
        passwordField={true}
        component={customTextField}
      />
      <Field
        label="Keep me Logged In"
        name="keep_logged"
        component={customCheckBoxField}
        //  checked={false}
      />

      <Button title="Login" onPress={handleSubmit(submit)} />
    </View>
  );
};

LoginForm = reduxForm({
  // a unique name for the form
  form: "Login",
  validate
})(LoginForm);

export default LoginForm;
