import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Main from './screens/Main';
import History from './screens/History';

const MenuNavigation = createDrawerNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'Home',
    }
  },
  History: {
    screen: History,
    navigationOptions: {
      title: 'History',
    }
  },
});

export default MenuNavigation;
