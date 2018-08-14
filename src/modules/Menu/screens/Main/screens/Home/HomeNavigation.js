import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import Home from './screens/Home';

const InnerPage = (props) => {
  return (
    <View>
      <Text>InnerPage</Text>
    </View>
  );
};

const HomeNavigation = createStackNavigator({
  HomePage: {
    screen: Home
  },
  InnerPage: {
    screen: InnerPage
  }
}, {
  navigationOptions: {
    header: null,
  }
});

export default HomeNavigation;