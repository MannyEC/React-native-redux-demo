import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import LoginComponent from '../components/LoginComponent';
import * as AuthStateActions from 'appState/modules/auth/actions';
import asyncProvider from 'providers/asyncProvider';

const mapStateToProps = state => ({
  form: state.form,
});

const mapDispatchToProps = dispatch => ({
  navigate: bindActionCreators(NavigationActions.navigate, dispatch),
  authStateActions: bindActionCreators(AuthStateActions, dispatch)
});

export default compose(
  asyncProvider({
    async: ({ state, navigation, dispatch }) => {
      const actionParams = {
      };
      return actionParams;
    },
    mapActions: {
    }
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(LoginComponent);
