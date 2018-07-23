import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  StyleSheet,
  Picker,
  TouchableNativeFeedback
} from 'react-native';

export default class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (<View style={styles.view}>
      <TouchableNativeFeedback onPress={this.onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>
            Photo
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>);
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'powderblue',
  },
  button: {
    borderWidth: 1,
    height: 40,
    width: 130,
    padding: 10,
  },
  text: {},
});

AppRegistry.registerComponent('ReportDate', () => Photo);
