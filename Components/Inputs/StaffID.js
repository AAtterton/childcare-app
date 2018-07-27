import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet } from 'react-native';

export default class StaffID extends Component {

  render() {
    return (<View style={styles.view}>
      <TextInput
        placeholderTextColor="black"
        underlineColorAndroid="transparent"
        style={styles.staffid}
        placeholder="Staff ID"
        onChangeText={this.props.onChange}/>
      <Text style={styles.text}/>
    </View>);
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
  },
  staffid: {
    borderWidth: 2,
    height: 40,
    width: 300,
    padding: 10,
  },
  text: {},
});

AppRegistry.registerComponent('StaffID', () => StaffID);
