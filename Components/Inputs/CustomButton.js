import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, View, Text } from 'react-native';

export default class CustomButton extends Component {

  updateText = (value) => {
    this.props.onChange(value);
  };

  CustomButton = (style, textStyle, buttonText, onPress) => {
    return (<TouchableOpacity
      style={style}
      onPress={onPress}>
        <Text style={textStyle}>{buttonText}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View>
        {this.CustomButton(
          this.props.style,
          this.props.textStyle,
          this.props.buttonText,
          this.props.onPress)}
      </View>);
  }
}

AppRegistry.registerComponent('CustomButton', () => CustomButton);
