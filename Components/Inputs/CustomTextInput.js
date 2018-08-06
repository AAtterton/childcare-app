import React, { Component } from 'react';
import { AppRegistry, TextInput, View, } from 'react-native';

export default class CustomTextInput extends Component {

  updateText = (value) => {
    this.props.onChange(value);
  };

  CustomTextInput = (placeholderText, style, value) => {
    return (<TextInput
      value={value}
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
        {this.CustomTextInput(
          this.props.placeholderText,
          this.props.style,
          this.props.value)}
      </View>);
  }
}

AppRegistry.registerComponent('CustomTextInput', () => CustomTextInput);
