import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import CustomTextInput from '../Inputs/CustomTextInput';
import CustomButton from '../Inputs/CustomButton';

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      passcode: '',
      employeeid: '',
    };
  }

  checkLogin = () => {

    const name = this.state.username;
    const passcode = this.state.passcode;
    const employeeid = this.state.employeeid;
    if (name == '' || passcode == '') {
      alert('Please provide a username and password');
    } else {
      if (employeeid == '') {
        return fetch('http://192.168.0.11:3000/api/parents/user_name/' + name + '/passcode/' + passcode)
        .then(responce => responce.json())
        .then(responceJson => {
          if (responceJson.user_name === 'true' && responceJson.passcode === 'true') {
            return this.props.navigation.navigate('ParentHome');
          } else {
            alert('Incorrect username or password please try again or supply a employee ID');
          }
        });
      } else {
        return fetch('http://192.168.0.11:3000/api/employees/user_name/' + name + '/passcode/' + passcode + '/employee_ID/' + employeeid)
        .then(responce => responce.json())
        .then(responceJson => {
          if (responceJson.passcode === 'true' && responceJson.employee_ID == 'true') {
            return this.props.navigation.navigate('EmployeeHome');
          } else {
            alert('Incorrect username, password or employee ID please try again');
          }
        });
      }
    }

  };

  render() {
    return (<View style={styles.container}>
      <View>
      <CustomTextInput
        placeholderText={'UserName'}
        style={styles.textInput}
        onChange={value => this.setState({ username: value })}
        />
      <CustomTextInput
        placeholderText={'Passcode'}
        style={styles.textInput}
        onChange={value => this.setState({ passcode: value })}
        />
      <CustomTextInput
        placeholderText={'Employee ID'}
        style={styles.textInput}
        onChange={value => this.setState({ employeeid: value })}
        />
      <CustomButton
        style={styles.button}
        textStyle={styles.buttontext}
        buttonText={'Login'}
        onPress={this.checkLogin}
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
  button: {
    height: 40,
    backgroundColor: 'lightgrey',
    marginTop: 4,
  },
  buttontext: {
    marginLeft: 12,
    marginTop: 10,
    fontSize: 15,
  },
  textInput: {
    borderWidth: 2,
    height: 40,
    width: 300,
    padding: 10,
    marginTop: 4,
  },
});

AppRegistry.registerComponent('Login', () => Login);
