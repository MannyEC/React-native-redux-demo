import { NavigationActions } from 'react-navigation';
import * as ActionTypes from './constants';

export function login() {
  return (dispatch) => {
    return dispatch(NavigationActions.navigate({ routeName: 'Main' })).then;
  };
}
