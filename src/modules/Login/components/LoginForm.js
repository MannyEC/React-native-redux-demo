import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

const renderInput = ({
  input: { onChange },
  placeholder,
  secureTextEntry,
  meta: { touched, error, warning }
}) => {
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
        {error && <Text>{error}</Text>}
      </View>
    </View>
  );
};

let LoginForm = (props) => {
  const { handleSubmit, submitAction } = props;
  return (
    <View style={styles.inputList}>
      <Field
        name="username"
        type="text"
        component={renderInput}
        placeholder="username"
      />
      <Field name="password" component={renderInput} placeholder="password" secureTextEntry />
      <Button
        style={styles.loginButton}
        onPress={() => handleSubmit(submitAction)()}
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
})(LoginForm);
