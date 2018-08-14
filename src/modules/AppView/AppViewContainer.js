import {connect} from 'react-redux';
import AppView from './AppView';

export default connect(
  state => ({
    nav: state.nav
  })
)(AppView);
