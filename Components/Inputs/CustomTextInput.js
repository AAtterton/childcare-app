import React, { Component } from 'react';
import { AppRegistry, TextInput, View, } from 'react-native';

export default class CustomTextInput extends Component {

  updateText = (value) => {
    this.props.onChange(value);
  };

  CustomTextInput = (placeholderText, style) => {
    return (<TextInput
      placeholderTextColor="black"
      underlineColorAndroid="transparent"
      style={style}
      placeholder={placeholderText}
      onChangeText={this.updateText}/>
    );
  };

  render() {
    return (
      <View>
        {this.CustomTextInput(this.props.placeholderText, this.props.style)}
      </View>);
  }
}

AppRegistry.registerComponent('CustomTextInput', () => CustomTextInput);
