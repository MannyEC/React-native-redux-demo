import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { YellowBox } from 'react-native';
import AppViewContainer from './src/modules/AppView/AppViewContainer';
// import store from './src/redux/store';
import configureStore from './src/redux/store';

// https://github.com/react-navigation/react-navigation/issues/3956
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppViewContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('CloudEckid', () => App);
