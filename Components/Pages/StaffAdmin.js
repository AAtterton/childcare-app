import React from 'react';
import { AppRegistry, StyleSheet, View, } from 'react-native';

import CustomPicker from '../Inputs/CustomPicker';
import CustomTextInput from '../Inputs/CustomTextInput';
import CustomButton from '../Inputs/CustomButton';

export default class StaffAdmin extends React.Component {

  constructor() {
    super();
    this.state = {
      firstName: '',
      secondName: '',
      DOB: '',
      userName: '',
      passcode: '',
      staffid: '',
      personType: '',
      personTypes: [
        'Staff',
        'Parents',
        'Kids',
      ],
      people: [],
    };
  }

  fetchPeople = (personType) => {
    this.setState({ personType: personType });
    if (personType === 'Staff') {
      personType = 'staffmembers';
    }

    var names = [];
    return fetch('http://192.168.0.11:3000/api/' + personType)
    .then(response => response.json())
    .then(responseJson => {
      for (i = 0; i < responseJson.length; i++) {
        name = responseJson[i].first_name + ' ' + responseJson[i].last_name;
        names.push(name);
      }

      this.setState({ people: names });
    }).catch(error => {
      console.error(error);
    });
  };

  submitInfo = () => {
      alert(this.state.personType);
    };

  render() {
    return (
      <View style={styles.container}>
      <View>
        <CustomTextInput
          placeholderText={'First Name'}
          style={styles.textInput}
          onChange={value => this.setState({ firstName: value })}
          />
        <CustomTextInput
          placeholderText={'Second Name'}
          style={styles.textInput}
          onChange={value => this.setState({ secondName: value })}
          />
        <CustomTextInput
          placeholderText={'Date of Birth'}
          style={styles.textInput}
          onChange={value => this.setState({ DOB: value })}
          />
        <CustomTextInput
          placeholderText={'User Name'}
          style={styles.textInput}
          onChange={value => this.setState({ userName: value })}
          />
        <CustomTextInput
          placeholderText={'Password'}
          style={styles.textInput}
          onChange={value => this.setState({ passcode: value })}
          />
        <CustomTextInput
          placeholderText={'Staff ID'}
          style={styles.textInput}
          onChange={value => this.setState({ staffid: value })}
          />

        <View style={styles.pickerwrap}>
          {/*TODO: submitInfo function for buttton*/}
          <CustomButton
            style={styles.button}
            textStyle={styles.buttontext}
            buttonText={'Submit'}
            onPress={this.submitInfo}
          />
          {/*TODO: json of all objects according to selection*/}
          <CustomPicker
            labels={this.state.personTypes}
            style={styles.pickpertype}
            onChange={value => this.fetchPeople(value)}
          />
        </View>
        {/*TODO: Display all objects according to personType*/}
          <CustomPicker
            labels={this.state.people}
            style={styles.pickerper}
          />
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerwrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  pickpertype: {
    width: 130,
  },
  pickerper: {

  },
  button: {
    height: 40,
    width: 130,
    backgroundColor: 'lightgrey',
  },
  buttontext: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 2,
    height: 40,
    width: 300,
    padding: 10,
    marginTop: 4,
  },
});

AppRegistry.registerComponent('StaffAdmin', () => StaffAdmin);
