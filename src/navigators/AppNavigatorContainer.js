import { connect } from 'react-redux';
import {
  AppWithNavigationState,
} from './AppNavigatorUtils';

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export default AppNavigator;
