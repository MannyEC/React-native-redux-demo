import React from 'react';
import { Icon } from 'antd-mobile-rn';
import screens from './screens';

const nav = {
  screen: screens,
  navigationOptions: {
    title: 'Home',
    tabBarIcon: <Icon type={'\uE65E'} size="md" color="#40a9ff" />
  },
};

export default nav;
