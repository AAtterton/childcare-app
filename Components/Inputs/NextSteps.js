import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet } from 'react-native';

export default class NextSteps extends Component {

  render() {
    return (<View style={styles.view}>
      <TextInput
        placeholderTextColor='black'
        underlineColorAndroid='transparent'
        style={styles.NextSteps}
        placeholder="Next Steps"
        onChangeText= {this.props.onChange}/>
      <Text style={styles.text}></Text>
    </View>);
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
  },
  NextSteps: {
    borderWidth: 2,
    height: 110,
    width: 300,
    padding: 10,
  },
  text: {},
});

AppRegistry.registerComponent('NextSteps', () => NextSteps);
