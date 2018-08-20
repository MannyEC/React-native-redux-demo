import { createBottomTabNavigator } from 'react-navigation';
import Home from './Home';
import Counter from './Counter';
import Setting from './Setting';

const BottomTabNavigatorConfig = {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
};

const nav = createBottomTabNavigator({
  Home,
  Counter,
  Setting,
}, BottomTabNavigatorConfig);

export default nav;
