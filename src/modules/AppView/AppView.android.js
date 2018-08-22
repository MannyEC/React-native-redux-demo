import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, StatusBar, ActivityIndicator, BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
import AppNavigatorContainer from '../../navigators/AppNavigatorContainer';

class AppView extends Component {
  static displayName = 'AppView';

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
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
