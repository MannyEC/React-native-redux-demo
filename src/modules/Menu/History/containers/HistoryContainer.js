import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import HistoryComponent from '../components/HistoryComponent';

export default connect(
  state => ({
  }),
  dispatch => ({
    navigate: bindActionCreators(NavigationActions.navigate, dispatch),
  })
)(HistoryComponent);
