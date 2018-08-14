/* 管理员账号登入页面 */
import { createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { Platform, View, Text } from 'react-native';
import React from 'react';
import { Icon } from 'antd-mobile-rn';
import Home from './screens/Home';

const Counter = () => {
  return (
    <View>
      <Text>Counter</Text>
    </View>
  );
};

const Setting = () => {
  return (
    <View>
      <Text>Setting</Text>
    </View>
  );
};

const BottomTabNavigatorConfig = {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
};

const MainNavigation = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: <Icon type={'\uE65E'} size="md" color="#40a9ff" />
    },
  },
  Counter: {
    screen: Counter,
    navigationOptions: {
      title: 'Counter',
      tabBarIcon: <Icon type={'\uE6AA'} size="md" color="#40a9ff" />
    },
  },
  Setting: {
    screen: Setting,
    navigationOptions: {
      title: 'Setting',
      tabBarIcon: <Icon type={'\uE672'} size="md" color="#40a9ff" />
    },
  }
}, BottomTabNavigatorConfig);

export default MainNavigation;
