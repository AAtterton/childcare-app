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
      personIndex: '',
      personID: '',
      personType: '',
      personTypes: [
        'Staff',
        'Parents',
        'Kids',
      ],
      people: [''],
    };
  }

  fetchPeople = (personType) => {
    this.setState({ personType: personType });
    if (personType === 'Staff') {
      personType = 'staffmembers';
    }

    const names = [];
    return fetch('http://192.168.0.11:3000/api/' + personType)
    .then(response => response.json())
    .then(responseJson => {
      for (i = 0; i < responseJson.length; i++) {
        const name = responseJson[i].first_name + ' ' + responseJson[i].last_name;
        names.push(name);
      }

      const newPerson = 'New ' + this.state.personType;
      names.unshift(newPerson);
      this.setState({ people: names });
    }).catch(error => {
      console.error(error);
    });
  };

  fetchIndividual = (person) => {
      const personIndex = this.state.people.indexOf(person);
      this.setState({ personIndex: personIndex });

      if (personIndex === 0) {
        this.setState({ firstName: '' });
        this.setState({ secondName: '' });
        this.setState({ DOB: '' });
        this.setState({ userName: '' });
        this.setState({ passcode: '' });
        this.setState({ staffid: '' });
      } else {
        let personType = this.state.personType;
        if (personType === 'Staff') {
          personType = 'staffmembers';
        }

        return fetch('http://192.168.0.11:3000/api/' + personType)
        .then(response => response.json())
        .then(responceJson => {
          this.displayInfo(responceJson[personIndex - 1], personIndex);
        });
      };
    };

  displayInfo = (data, personIndex) => {
    this.setState({ firstName: data.first_name });
    this.setState({ secondName: data.last_name });
    this.setState({ DOB: data.dob });
    this.setState({ userName: data.user_name });
    this.setState({ passcode: data.passcode });
    this.setState({ staffid: data.staff_ID });
    this.setState({ personID: data._id });
  };

  submitInfo = () => {
    if (this.state.personIndex = 0) {
      const personType = this.state.personType;
      const personID = this.state.personID;
      fetch('http://192.168.0.11:3000/api/' + personType + '/' + personID, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: this.state.firstName,
          last_name: this.state.secondName,
          dob: this.state.DOB,
          user_name: this.state.userName,
          passcode: this.state.passcode,
          staff_ID: this.state.staffid,
        }),
      });
    } else {
      const personType = this.state.personType;
      fetch('http://192.168.0.11:3000/api/' + personType, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: this.state.firstName,
          last_name: this.state.secondName,
          dob: this.state.DOB,
          user_name: this.state.userName,
          passcode: this.state.passcode,
          staff_ID: this.state.staffid,
        }),
      });
    }

  };

  render() {
    return (
      <View style={styles.container}>
      <View>
        <CustomTextInput
          value={this.state.firstName}
          placeholderText={'First Name'}
          style={styles.textInput}
          onChange={value => this.setState({ firstName: value })}
          />
        <CustomTextInput
          value={this.state.secondName}
          placeholderText={'Second Name'}
          style={styles.textInput}
          onChange={value => this.setState({ secondName: value })}
          />
        <CustomTextInput
          value={this.state.DOB}
          placeholderText={'Date of Birth'}
          style={styles.textInput}
          onChange={value => this.setState({ DOB: value })}
          />
        <CustomTextInput
          value={this.state.userName}
          placeholderText={'User Name'}
          style={styles.textInput}
          onChange={value => this.setState({ userName: value })}
          />
        <CustomTextInput
          value={this.state.passcode}
          placeholderText={'Password'}
          style={styles.textInput}
          onChange={value => this.setState({ passcode: value })}
          />
        <CustomTextInput
          value={this.state.staffid}
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
            onChange={value => this.fetchIndividual(value)}
          />
      </View>
    </View>);
  }

  componentDidMount() {
    return this.fetchPeople('Staff');
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
