import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import RootNavigator from './RootNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = RootNavigator.router.getActionForPathAndParams('Login');
// const tempNavState = RootNavigator.router.getStateForAction(firstAction);
// const secondAction = RootNavigator.router.getActionForPathAndParams('Main');
// const initialNavState = RootNavigator.router.getStateForAction(
//   secondAction,
//   tempNavState
// );

// start with login screen
const firstAction = RootNavigator.router.getActionForPathAndParams('Login');
const initialNavState = RootNavigator.router.getStateForAction(
  firstAction
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default nav;