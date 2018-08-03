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
      staffid: '',
    };
  }

  checkLogin = () => {

    const name = this.state.username;
    const passcode = this.state.passcode;
    const staffid = this.state.staffid;
    if (name == '' || passcode == '') {
      alert('Please provide a username and password');
    } else {
      if (staffid == '') {
        return fetch('http://192.168.0.11:3000/api/parents/user_name/' + name + '/passcode/' + passcode)
        .then(responce => responce.json())
        .then(responceJson => {
          if (responceJson.user_name === 'true' && responceJson.passcode === 'true') {
            return this.props.navigation.navigate('ParentHome');
          } else {
            alert('Incorrect username or password please try again or supply a staff ID');
          }
        });
      } else {
        return fetch('http://192.168.0.11:3000/api/staffmembers/user_name/' + name + '/passcode/' + passcode + '/staff_ID/' + staffid)
        .then(responce => responce.json())
        .then(responceJson => {
          if (responceJson.passcode === 'true' && responceJson.staff_ID == 'true') {
            return this.props.navigation.navigate('StaffHome');
          } else {
            alert('Incorrect username, password or staff ID please try again');
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
        placeholderText={'StaffID'}
        style={styles.textInput}
        onChange={value => this.setState({ staffid: value })}
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
