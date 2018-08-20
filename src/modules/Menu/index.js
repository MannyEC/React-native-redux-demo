import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'antd-mobile-rn';
import screens from './screens';

const nav = {
  screen: screens,
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
