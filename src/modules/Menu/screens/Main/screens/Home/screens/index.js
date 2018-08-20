import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

const nav = createStackNavigator({
  Home,
  Page1,
  Page2,
  Page3,
  Page4,
});

export default nav;
