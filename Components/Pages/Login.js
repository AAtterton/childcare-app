import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Passcode from '../Inputs/Passcode';
import StaffID from '../Inputs/StaffID';
import UserName from '../Inputs/UserName';

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      passcode: '',
      staffid: '',
    };
  }

  checkLogin = () => {

    const name = this.state.username;
    const passcode = this.state.passcode;
    const staffid = this.state.staffid;
    if (staffid == '') {
      return fetch('http://192.168.0.11:3000/api/parents/user_name/' + name + '/passcode/' + passcode)
      .then(responce => responce.json())
      .then(responceJson => {
        if (responceJson.passcode === 'true') {
          return this.props.navigation.navigate('ParentHome');
        }
      });
    } else {
      return fetch('http://192.168.0.11:3000/api/staffmembers/user_name/' + name + '/passcode/' + passcode + '/staff_ID/' + staffid)
      .then(responce => responce.json())
      .then(responceJson => {
        if (responceJson.passcode === 'true') {
          return this.props.navigation.navigate('StaffHome');
        }
      });
    }
  };

  render() {
    return (<View style={styles.container}>
      <View>
        <UserName onChange={value => this.setState({ username: value })}/>
        <Passcode onChange={value => this.setState({ passcode: value })}/>
        <StaffID onChange={value => this.setState({ staffid: value })}/>
        <TouchableOpacity onPress={this.checkLogin} style={styles.button}>
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>

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
  },
  buttontext: {
    marginLeft: 12,
    marginTop: 10,
    fontSize: 15,
  },
});

AppRegistry.registerComponent('Login', () => Login);
