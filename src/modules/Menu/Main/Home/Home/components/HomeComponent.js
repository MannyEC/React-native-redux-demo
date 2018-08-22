import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import * as Keychain from 'react-native-keychain';

async function getToken() {
  const credentials = await Keychain.getGenericPassword();
  console.log(credentials)
  return credentials;
}

const HomeComponent = (props) => {
  const { routeName } = props.navigation.state;
  return (
    <View style={styles.container}>
      <Text>
        {routeName}
      </Text>
      <View style={styles.btn}>
        <Button
          title="Go Next Page"
          onPress={() => {
            props.navigation.navigate('Page1');
          }}
        />
        <Button
          title="GetToken"
          onPress={() => {
            const token = getToken();
            token.then((data) => console.log(data));
          }}
        />
      </View>
    </View>
  );
};

HomeComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginTop: 20,
    width: '50%',
  }
});
export default HomeComponent;
