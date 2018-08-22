import React, { Component } from 'react';
import { TextInput, View, Image, StyleSheet, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import Device from 'helpers/Device';

const LoginScreen = (props) => {
  login = (value) => {
    props.authStateActions.login(value);
  };

  return (
    <ImageBackground source={require('../../../images/bg.png')} style={styles.container}>
      <View style={styles.inputList}>
        <LoginForm submitAction={this.login} />
      </View>
    </ImageBackground>
  );
};

LoginScreen.navigationOptions = {
  header: null,
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

export default LoginScreen;
