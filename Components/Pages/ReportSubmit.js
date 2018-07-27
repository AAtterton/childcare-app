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

import MainReport from '../Inputs/MainReport';
import NextSteps from '../Inputs/NextSteps';
import AreasOfLearning from '../Inputs/AreasOfLearning';
import Photo from '../Inputs/Photo';
import PickKids from '../Inputs/PickKid';

export default class ReportSubmit extends Component {

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
    return (
      <View style={styles.mainview}>


      <View>
        <MainReport onChange={value => this.setState({ report: value })}/>
        <NextSteps onChange={value => this.setState({ nextSteps: value })}/>
      </View>

      <View style={styles.bottomwrapper}>

      <View style={styles.checkboxwrapper}>

        <View style={styles.checkboxes}>
          <CheckBox
            value= {this.state.checked1}
            onChange={() => this.setState({ checked1: !this.state.checked1 })}
            />
          <Text style={styles.checkboxtext}>PSE Dev</Text>
        </View>

        <View style={styles.checkboxes}>
          <CheckBox
            value= {this.state.checked2}
            onChange={() => this.setState({ checked2: !this.state.checked2 })}
            />
          <Text style={styles.checkboxtext}>Phyis Dev</Text>
        </View>

        <View style={styles.checkboxes}>
          <CheckBox
          value= {this.state.checked3}
          onChange={() => this.setState({ checked3: !this.state.checked3 })}
          />
          <Text style={styles.checkboxtext}>Comm and Lang</Text>
        </View>

        <View style={styles.checkboxes}>
        <CheckBox
          value= {this.state.checked4}
          onChange={() => this.setState({ checked4: !this.state.checked4 })}
          />
          <Text style={styles.checkboxtext}>Literacy</Text>
        </View>

        <View style={styles.checkboxes}>
        <CheckBox
          value= {this.state.checked5}
          onChange={() => this.setState({ checked5: !this.state.checked5 })}
          />
          <Text style={styles.checkboxtext}>Mathematics</Text>
        </View>

        <View style={styles.checkboxes}>
        <CheckBox
          title= 'The World'
          value= {this.state.checked6}
          onChange={() => this.setState({ checked6: !this.state.checked6 })}
          />
          <Text style={styles.checkboxtext}>The World</Text>
        </View>

        <View style={styles.checkboxes}>
        <CheckBox
          value= {this.state.checked7}
          onChange={() => this.setState({ checked7: !this.state.checked7 })}
          />
          <Text style={styles.checkboxtext}>Arts and Design</Text>
        </View>

        </View>

        <View style={styles.buttonwrapper}>
          <PickKids style={styles.picker} onValueChange={value => this.setState({ kid: value })}/>
          <Photo style={styles.photo}/>
          <TouchableOpacity onPress={this.submitReport} style={styles.submitbutton}/>
        </View>

        </View>

    </View>);
  }
}

const styles = StyleSheet.create({
  mainview: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  checkboxwrapper: {
  },
  checkboxes: {
    flexDirection: 'row',
  },
  checkboxtext: {
    marginTop: 6,
  },
  buttonwrapper: {
    flexDirection: 'column',
  },
  bottomwrapper: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'space-between',
  },
  picker: {

  },
  photo: {
    marginTop: 20,
  },
  submitbutton: {
    height: 40,
    backgroundColor: 'blue',
    marginTop: 20,
  },
});

AppRegistry.registerComponent('ReportSubmit', () => ReportSubmit);
