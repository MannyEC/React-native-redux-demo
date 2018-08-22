import React from 'react';
import { Icon } from 'antd-mobile-rn';
import SettingContainer from './containers/SettingContainer';

const nav = {
  screen: SettingContainer,
  navigationOptions: {
    title: 'Setting',
    tabBarIcon: <Icon type={'\uE672'} size="md" color="#40a9ff" />
  },
};

export default nav;
