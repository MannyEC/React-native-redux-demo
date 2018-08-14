import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import PumpComponent from '../components/PumpComponent';

export default connect(
  state => ({
  }),
  dispatch => ({
    navigate: bindActionCreators(NavigationActions.navigate, dispatch),
  })
)(PumpComponent);
