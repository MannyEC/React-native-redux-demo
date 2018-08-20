import { isPlainObject } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

export default action => (AsyncComponent) => {
  class Async extends Component {
    static navigationOptions = {
      header: null,
    }

    componentWillMount() {
      const { state, navigation, dispatch } = this.props;
      const actionParams = action.async({
        state, navigation, dispatch
      });
      if (isPlainObject(actionParams)) {
        Object.keys(actionParams).forEach((action) => {
          const dispatchAction = this.props[action];
          dispatchAction(...actionParams[action]);
        });
      }
    }

    render() {
      return (
        <View style={{ flex: 1 }}>
          <AsyncComponent {...this.props} />
        </View>
      );
    }
  }

  const mapStateToProps = state => ({ state });

  const mapDispatchToProps = action.mapActions;

  return connect(mapStateToProps, mapDispatchToProps)(Async);
};
