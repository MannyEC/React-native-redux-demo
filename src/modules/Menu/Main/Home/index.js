import React from 'react';
import { Icon } from 'antd-mobile-rn';
import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

const subNav = createStackNavigator({
  Home,
  Page1,
  Page2,
  Page3,
  Page4,
});

const nav = {
  screen: subNav,
  navigationOptions: {
    title: 'Home',
    tabBarIcon: <Icon type={'\uE65E'} size="md" color="#40a9ff" />
  },
};

export default nav;
