import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Button, Text } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

const renderInput = ({
  input: { onChange },
  placeholder,
  secureTextEntry,
  meta: { touched, error, warning }
}) => {
  console.log(error)
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#a2a2a2"
        underlineColorAndroid="white"
        secureTextEntry={secureTextEntry}
        onChangeText={onChange}
        style={styles.inputItem}
      />
      <View>
        {touched &&
          ((error && <Text>{error}</Text>) ||
            (warning && <Text>{warning}</Text>))}
      </View>
    </View>
  );
};

const validate = (values) => {
  const errors = {};
  console.log(values)
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  return errors;
};

const warn = (values) => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...';
  }
  return warnings;
};

let LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <View style={styles.inputList}>
      <Field name="username" component={renderInput} placeholder="username" />
      <Field name="password" component={renderInput} placeholder="password" secureTextEntry />
      <Button
        style={styles.loginButton}
        onPress={props.handleSubmit}
        title="LOGIN"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232c3e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputList: {
    width: 300,
    justifyContent: 'center',
  },
  inputItem: {
    color: '#000',
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#cddc39',
    borderColor: '#cddc39',
  },
});

export default reduxForm({
  form: 'login',
  validate,
  warn,
})(LoginForm);
