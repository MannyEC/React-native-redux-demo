import { NavigationActions } from 'react-navigation';
import { SubmissionError } from 'redux-form';
import * as ActionTypes from './constants';
import * as Keychain from 'react-native-keychain';

async function save() {
  const username = 'token';
  const password = '!!!!!!!!!!!@#2312322222222222222';

  // Store the credentials
  await Keychain.setGenericPassword(username, password);

  try {
    // Retreive the credentials
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      console.log('Credentials successfully loaded token' + credentials.password);
    } else {
      console.log('No credentials stored')
    }
  } catch (error) {
    console.log('Keychain couldn\'t be accessed!', error);
  }
  // await Keychain.resetGenericPassword()
}

export function login(values) {
  return (dispatch) => {
    save()
    return dispatch(NavigationActions.navigate({ routeName: 'Main' }));
  };
}
