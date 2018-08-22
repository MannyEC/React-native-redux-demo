import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'antd-mobile-rn';
import { createDrawerNavigator } from 'react-navigation';
import Main from './Main';
import History from './History';

const subNav = createDrawerNavigator({
  Main,
  History,
});

const nav = {
  screen: subNav,
  navigationOptions: ({ navigation }) => ({
    title: 'Menu',
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon type={'\uE639'} size="md" color="grey" />
      </TouchableOpacity>
    ),
  })
};

export default nav;
