import { createStackNavigator } from 'react-navigation';
import Login from '../modules/Login';
import Pump from '../modules/Pump';
import Menu from '../modules/Menu';

const RootNavigator = createStackNavigator({
  Login,
  Menu,
  Pump
});

export default RootNavigator;
