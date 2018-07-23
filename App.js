import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  StyleSheet,
  CheckBox,
  TouchableOpacity
} from 'react-native';

import MainReport from './Components/Inputs/MainReport';
import NextSteps from './Components/Inputs/NextSteps';
import AreasOfLearning from './Components/Inputs/AreasOfLearning';
import Photo from './Components/Inputs/Photo';
import PickKids from './Components/Inputs/PickKid';

export default class ChildApp extends Component {

  constructor() {
    super();
    this.state = {
      report: '',
      nextSteps: '',
    };
  }

  submitReport = () => {
    fetch('http://192.168.0.11:3000/api/reports', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ main_report: this.state.report, next_steps: this.state.nextSteps }),
    });
  };

  render() {
    return (<View style={styles.topview}>
      <View>
        <MainReport onChange={value => this.setState({ report: value })}/>
      </View>
      <View>
        <NextSteps onChange={value => this.setState({ nextSteps: value })}/>
      </View>
      <View style={styles.botview}>
        <View style={styles.leftbot}>
          <AreasOfLearning/>
        </View>
        <View style={styles.rightbot}>
          <PickKids/>
          <Photo/>
          <TouchableOpacity onPress={this.submitReport} style={{
              height: 49,
              backgroundColor: 'red',
            }}/>
        </View>
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  topview: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
  botview: {
    flexDirection: 'row',
  },
  leftbot: {
    paddingRight: 35,
  },
  rightbot: {},
});

AppRegistry.registerComponent('ChildApp', () => ChildApp);
