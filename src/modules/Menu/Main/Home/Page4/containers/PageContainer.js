import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import PageComponent from '../components/PageComponent';

export default connect(
  state => ({
  }),
  dispatch => ({
    navigate: bindActionCreators(NavigationActions.navigate, dispatch),
  })
)(PageComponent);
