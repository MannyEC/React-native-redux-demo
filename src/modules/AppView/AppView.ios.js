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
      <View style={styles.container}>
        <AppNavigatorContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default AppView;
