import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet } from 'react-native';

export default class MainReport extends Component {

  render() {
    return (<View style={styles.view}>
      <TextInput
        placeholderTextColor="black"
        underlineColorAndroid="transparent"
        style={styles.mainreport}
        placeholder="Main Report"
        onChangeText={this.props.onChange}/>
      <Text style={styles.text}/>
    </View>);
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
  },
  mainreport: {
    borderWidth: 2,
    height: 190,
    width: 300,
    padding: 10,
  },
  text: {},
});

AppRegistry.registerComponent('MainReport', () => MainReport);
