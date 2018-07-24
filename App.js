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
      kid: '',
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
    };
  }

  submitReport = () => {
    fetch('http://192.168.0.11:3000/api/reports', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        main_report: this.state.report,
        next_steps: this.state.nextSteps,
        kid: this.state.kid,
        checked1: this.state.checked1,
        checked2: this.state.checked2,
        checked3: this.state.checked3,
        checked4: this.state.checked4,
        checked5: this.state.checked5,
        checked6: this.state.checked6,
        checked7: this.state.checked7,
      }),
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
        <View style={styles.view}>
          <CheckBox
            value= {this.state.checked1}
            onChange={() => this.setState({ checked1: !this.state.checked1 })}
            />
          <Text style={styles.text}>PSE Dev</Text>
        </View>
        <View style={styles.view}>
          <CheckBox
            value= {this.state.checked2}
            onChange={() => this.setState({ checked2: !this.state.checked2 })}
            />
          <Text style={styles.text}>Phyis Dev</Text>
        </View>
        <View style={styles.view}>
          <CheckBox
          value= {this.state.checked3}
          onChange={() => this.setState({ checked3: !this.state.checked3 })}
          />
          <Text style={styles.text}>Comm and Lang</Text>
        </View>
        <View style={styles.view}>
        <CheckBox
          value= {this.state.checked4}
          onChange={() => this.setState({ checked4: !this.state.checked4 })}
          />
          <Text style={styles.text}>Literacy</Text>
        </View>
        <View style={styles.view}>
        <CheckBox
          value= {this.state.checked5}
          onChange={() => this.setState({ checked5: !this.state.checked5 })}
          />
          <Text style={styles.text}>Mathematics</Text>
        </View>
        <View style={styles.view}>
        <CheckBox
          value= {this.state.checked6}
          onChange={() => this.setState({ checked6: !this.state.checked6 })}
          />
          <Text style={styles.text}>The World</Text>
        </View>
        <View style={styles.view}>
        <CheckBox
          value= {this.state.checked7}
          onChange={() => this.setState({ checked7: !this.state.checked7 })}
          />
          <Text style={styles.text}>Arts and Design</Text>
        </View>
        </View>
        <View style={styles.rightbot}>
          <PickKids onValueChange={value => this.setState({ kid: value })}/>
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
