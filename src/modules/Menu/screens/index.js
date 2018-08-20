import { createDrawerNavigator } from 'react-navigation';
import Main from './Main';
import History from './History';

const nav = createDrawerNavigator({
  Main,
  History,
});

export default nav;
