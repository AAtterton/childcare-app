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
    return fetch('http://192.168.0.11:3000/api/parents/user_name/' + name + '/passcode/' + passcode)
    .then(responce => responce.json())
    .then(responceJson => {
      console.log(responceJson.passcode);
      if (responceJson.passcode === 'true') {
        return this.props.navigation.navigate('ReportSubmit');
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <UserName onChange={value => this.setState({ username: value })}/>
          <Passcode onChange={value => this.setState({ passcode: value })}/>
          <StaffID onChange={value => this.setState({ staffid: value })}/>
          <TouchableOpacity onPress={this.checkLogin}
          style={{
              height: 50,
              backgroundColor: 'blue',
            }}/>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('Login', () => Login);
