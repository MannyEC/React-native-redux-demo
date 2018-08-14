import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import nav from '../navigators/AppNavigatorState';
import AuthReducer from './modules/auth/reducers';

const AppReducer = combineReducers({
  nav,
  auth: AuthReducer,
  isReady: true,
});

export default AppReducer;
