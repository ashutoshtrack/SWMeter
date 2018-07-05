import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Field, reduxForm } from "redux-form";
import { customTextField } from "../../components/CustomTextField";
import { customCheckBoxField } from "../../components/CustomCheckBoxField";

const validate = values => {
  const errors = {};

  if (!values.userName_register) {
    errors.userName_register = "Please provide your Full Name!";
  }

  if (!values.mobileno_register) {
    errors.mobileno_register = "Please provide your Mobile Number!";
  }

  if (values.mobileno_register) {
    if (values.mobileno_register.length != 10)
      errors.mobileno_register = "’Please enter valid mobile no";
  }

  if (!values.consumerno_register) {
    errors.consumerno_register = "Please provide your Consumer Number!";
  }
  if (values.consumerno_register) {
    if (values.consumerno_register.length != 12)
      errors.consumerno_register = "’Only 12 digit Number can be entered!";
  }
  if (!values.password_register) {
    errors.password_register = "Please enter your password!";
  }

  if (!values.confirm_password_register) {
    errors.confirm_password_register = "Required";
  } else if (values.confirm_password_register !== values.password_register) {
    errors.confirm_password_register = "Password mismatched";
  }

  if (!values.T_C_register) {
    errors.T_C_register = "Accept Terms and Conditions";
  }

  console.log(values);
  return errors;
};
const submit = values => {
  alert(JSON.stringify(values));
};

let RegisterForm = props => {
  const { handleSubmit } = props;

  return (
    <View>
      <Field
        label="Name"
        name="userName_register"
        type="default"
        component={customTextField}
      />
      <Field
        label="Mobile N.o"
        name="mobileno_register"
        type="numeric"
        component={customTextField}
      />
      <Field
        label="Consumer N.o"
        name="consumerno_register"
        type="default"
        component={customTextField}
      />
      <Field
        label="Password"
        name="password_register"
        type="default"
        passwordField={true}
        component={customTextField}
      />
      <Field
        label="Confirm Password"
        name="confirm_password_register"
        type="default"
        passwordField={true}
        component={customTextField}
      />
      <Field
        label="Terms And Condition!"
        name="T_C_register"
        component={customCheckBoxField}
        //  checked={false}
      />

      <Button title="Register" onPress={handleSubmit(submit)} />
    </View>
  );
};

RegisterForm = reduxForm({
  // a unique name for the form
  form: "Register",
  validate
})(RegisterForm);

export default RegisterForm;
