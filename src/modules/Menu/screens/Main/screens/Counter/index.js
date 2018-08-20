import React from 'react';
import { Icon } from 'antd-mobile-rn';
import CounterContainer from './containers/CounterContainer';

const nav = {
  screen: CounterContainer,
  navigationOptions: {
    title: 'Counter',
    tabBarIcon: <Icon type={'\uE6AA'} size="md" color="#40a9ff" />
  },
};

export default nav;
