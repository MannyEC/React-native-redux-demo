import { Map } from 'immutable';
import * as ActionTypes from './constants';

const initialState = Map({
  loaded: false,
  error: '',
  loggingIn: false,
  user: {},
  imageVerification: '',
  needImageVerification: false,
  newsModalVisible: false,
  loginName: '',
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return state
        .set('loggingIn', true);
    case ActionTypes.LOGIN_SUCCESS:
      return state
        .set('loggingIn', false)
        .set('user', action.payload.user)
        .set('needImageVerification', false)
        .set('error', '')
        .set('loginName', '');
    case ActionTypes.LOGIN_PARAMS_ERROR:
      return state
        .set('error', action.payload.error);
    case ActionTypes.LOGIN_FAIL:
      return state
        .set('loggingIn', false)
        .set('user', {});
    case ActionTypes.LOGOUT:
      return state
        .set('loggingOut', true);
    case ActionTypes.LOGOUT_SUCCESS:
      return state
        .set('loggingOut', false)
        .set('user', {});
    case ActionTypes.LOGOUT_FAIL:
      return state
        .set('loggingOut', false)
        .set('user', {});
    case ActionTypes.CLEAR_EXPIREDERROR:
      return state
        .set('error', '');
    case ActionTypes.LOAD_IMAGE_VERIFICATION:
      return state
        .set('imageVerification', action.payload.imageVerification);
    case ActionTypes.CHECK_IMAGE_VERIFICATION_SUCCESS:
      return state
        .set('needImageVerification', action.payload.needImageVerification);
    case ActionTypes.CHECK_IMAGE_VERIFICATION_FAIL:
      return state
        .set('needImageVerification', false);
    default:
      return state;
  }
}
