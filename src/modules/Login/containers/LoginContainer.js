import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import LoginComponent from '../components/LoginComponent';
import * as AuthStateActions from '../../../redux/modules/auth/actions';

export default connect(
  state => ({
    // auth: state.demo.welcome,
  }),
  dispatch => ({
    navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    authStateActions: bindActionCreators(AuthStateActions, dispatch)
  })
)(LoginComponent);
