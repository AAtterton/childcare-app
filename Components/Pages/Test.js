import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, CheckBox } from 'react-native';

import AreasOfLearning from '../Inputs/AreasOfLearning';

export default class Test extends Component {

  constructor() {
    super();
    this.state = {
      checkBoxNames: [
        'PSE Dev',
        'Pysi Dev',
        'Comm and Lang',
        'Literacy',
      ],
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
    };
  }

  render () {
    return (
      <View>
          <Text>Hello World this is a test</Text>
          <AreasOfLearning

          />
      </View>
    );
  }
}

AppRegistry.registerComponent('Test', () => Test);
