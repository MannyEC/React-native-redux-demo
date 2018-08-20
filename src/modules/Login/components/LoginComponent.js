import React, { Component } from 'react';
import { TextInput, View, Image, StyleSheet, TouchableOpacity, ImageBackground, Button } from 'react-native';
import PropTypes from 'prop-types';
// import Device from 'utils/device';

const LoginScreen = (props) => {
  login = () => {
    props.authStateActions.login();
  };

  return (
    <ImageBackground source={require('../../../images/bg.png')} style={styles.container}>
      <View style={styles.inputList}>
        <TextInput
          placeholder="username"
          placeholderTextColor="#a2a2a2"
          underlineColorAndroid="white"
          style={styles.inputItem}
          onChangeText={}
        />
        <TextInput
          placeholder="password"
          secureTextEntry
          underlineColorAndroid="white"
          placeholderTextColor="#a2a2a2"
          style={styles.inputItem}
          onChangeText={}
        />
        <Button
          style={styles.loginButton}
          onPress={this.login}
          title="LOGIN"
        />
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
