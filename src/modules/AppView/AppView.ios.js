import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, StatusBar, ActivityIndicator} from 'react-native';
import AppNavigatorContainer from '../../navigators/AppNavigatorContainer';

class AppView extends Component {
  static displayName = 'AppView';

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigatorContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center'
  }
});

export default AppView;
