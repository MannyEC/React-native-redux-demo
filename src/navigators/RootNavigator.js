import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'antd-mobile-rn';
import LoginContainer from '../modules/Login';
import Pump from '../modules/Pump';
import Menu from '../modules/Menu';

const RootNavigator = createStackNavigator({
  Login: {
    screen: LoginContainer,
  },
  Menu: {
    screen: Menu,
    navigationOptions:({ navigation }) => ({
      title: 'Menu',
      headerLeft:(
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon type={'\uE639'} size="md" color="grey" />
        </TouchableOpacity>
      ),
    })
  },
  Pump: {
    screen: Pump
  }
});

export default RootNavigator;
