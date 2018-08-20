import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const PageComponent = (props) => {
  const { routeName } = props.navigation.state;
  return (
    <View style={styles.container}>
      <Text>
        {routeName}
      </Text>
      <View style={styles.btn}>
        <Button
          title="Go Next Page"
          color="red"
          onPress={() => {
            props.navigation.navigate('Page3');
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

PageComponent.propTypes = {
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
    width: '50%'
  }
});
export default PageComponent;
