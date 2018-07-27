import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet } from 'react-native';

export default class UserName extends Component {

  render() {
    return (<View style={styles.view}>
      <TextInput
        placeholderTextColor="black"
        underlineColorAndroid="transparent"
        style={styles.username}
        placeholder="UserName"
        onChangeText={this.props.onChange}/>
      <Text style={styles.text}/>
    </View>);
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
  },
  username: {
    borderWidth: 2,
    height: 40,
    width: 300,
    padding: 10,
  },
  text: {},
});

AppRegistry.registerComponent('UserName', () => UserName);
