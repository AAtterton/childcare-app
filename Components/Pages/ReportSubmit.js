import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, CheckBox } from 'react-native';

import KidPicker from '../Inputs/KidPicker';
import CustomPicker from '../Inputs/CustomPicker';
import CustomTextInput from '../Inputs/CustomTextInput';
import CustomButton from '../Inputs/CustomButton';

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
    return (<View style={styles.mainview}>

      <View>
        <CustomTextInput
          placeholderText={'MainReport'}
          style={styles.textInput}
          onChange={value => this.setState({ report: value })}
          />
        <CustomTextInput
          placeholderText={'NextSteps'}
          style={styles.textInput}
          onChange={value => this.setState({ nextSteps: value })}
          />
      </View>
      <View style={styles.bottomwrapper}>
        <View style={styles.checkboxwrapper}>

          <View style={styles.checkboxes}>
            <CheckBox
              value={this.state.checked1}
              onChange={() => this.setState({ checked1: !this.state.checked1 })}
            />
            <Text style={styles.checkboxtext}>PSE Dev</Text>
          </View>

          <View style={styles.checkboxes}>
            <CheckBox
              value={this.state.checked2}
              onChange={() => this.setState({ checked2: !this.state.checked2 })}
            />
            <Text style={styles.checkboxtext}>Phyis Dev</Text>
          </View>

          <View style={styles.checkboxes}>
            <CheckBox
              value={this.state.checked3}
              onChange={() => this.setState({ checked3: !this.state.checked3 })}
            />
            <Text style={styles.checkboxtext}>Comm and Lang</Text>
          </View>

          <View style={styles.checkboxes}>
            <CheckBox
              value={this.state.checked4}
              onChange={() => this.setState({ checked4: !this.state.checked4 })}
            />
            <Text style={styles.checkboxtext}>Literacy</Text>
          </View>

          <View style={styles.checkboxes}>
            <CheckBox
              value={this.state.checked5}
              onChange={() => this.setState({ checked5: !this.state.checked5 })}
            />
            <Text style={styles.checkboxtext}>Mathematics</Text>
          </View>

          <View style={styles.checkboxes}>
            <CheckBox
              value={this.state.checked6}
              onChange={() => this.setState({ checked6: !this.state.checked6 })}
            />
            <Text style={styles.checkboxtext}>The World</Text>
          </View>

          <View style={styles.checkboxes}>
            <CheckBox
              value={this.state.checked7}
              onChange={() => this.setState({ checked7: !this.state.checked7 })}
            />
            <Text style={styles.checkboxtext}>Arts and Design</Text>
          </View>

        </View>

        <View style={styles.buttonwrapper}>
          <KidPicker
            style={styles.picker}
            onChange={value => this.setState({ kid: value })}/>
          <CustomButton
            style={styles.button}
            textStyle={styles.buttontext}
            buttonText={'Photo'}
            onPress={this._onPressButton}
          />
          <CustomButton
            style={styles.button}
            textStyle={styles.buttontext}
            buttonText={'Submit'}
            onPress={this.submitReport}
          />
        </View>
      </View>

    </View>);
  }
}

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  checkboxwrapper: {},
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
  picker: {},
  photo: {
    marginTop: 20,
  },
  button: {
    width: 130,
    height: 40,
    backgroundColor: 'lightgrey',
    marginTop: 10,
  },
  buttontext: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 2,
    height: 130,
    width: 300,
    padding: 10,
    marginTop: 4,
  },
});

AppRegistry.registerComponent('ReportSubmit', () => ReportSubmit);
