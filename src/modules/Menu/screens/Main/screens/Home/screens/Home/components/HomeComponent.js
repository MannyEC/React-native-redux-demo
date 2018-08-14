import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Button
          title="Go InnersPage"
          onPress={() => {
            props.navigation.navigate('InnerPage');
          }}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Go Pump Page"
          onPress={() => {
            props.navigation.navigate('Pump');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginTop: 20,
    width: '50%'
  }
});
export default Home;
