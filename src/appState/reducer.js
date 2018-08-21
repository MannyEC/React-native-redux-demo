import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { reducer as formReducer } from 'redux-form';
import nav from '../navigators/AppNavigatorState';
import AuthReducer from './modules/auth/reducers';

const AppReducer = combineReducers({
  nav,
  auth: AuthReducer,
  form: formReducer,
  isReady: true,
});

export default AppReducer;
