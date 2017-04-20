import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MyScene extends Component {
  static defaultProps = {
    title: 'MyScene'
  };

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Hi! My name is {this.props.title}.</Text>
      </View>
    )
  }
}