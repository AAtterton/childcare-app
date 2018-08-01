import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Picker } from 'react-native';

import Passcode from '../Inputs/Passcode';
import StaffID from '../Inputs/StaffID';
import UserName from '../Inputs/UserName';
import CustomPicker from '../Inputs/CustomPicker';

export default class StaffAdmin extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      passcode: '',
      staffid: '',
      personType: '',
      personTypes: [
        'Staff',
        'Parents',
        'Kids',
      ],
    };
  }

  submitInfo = () => {
      alert('Write a Function');
    };

  updatePerTyp = (personType) => {
    this.setState({ personType });
  };

  renderPicker = (labels, style) => {
    let pickNames = labels.map(i => (<Picker.Item key={i} label={i} value={i}/>));
    return (<Picker
              style={style}
              selectedValue={this.state.personType}
              onValueChange={this.updatePerTyp}>
              {pickNames}
      </Picker>
    );
  };

  render() {
    return (<View style={styles.container}>

      <View>
        {/*TODO: DOB component*/}
        <UserName onChange={value => this.setState({ username: value })}/>
        <Passcode onChange={value => this.setState({ passcode: value })}/>
        <StaffID onChange={value => this.setState({ staffid: value })}/>
        <View style={styles.pickerwrap}>
          {/*TODO: submitInfo function for buttton*/}
          <TouchableOpacity onPress={this.submitInfo} style={styles.button}>
            <Text style={styles.buttontext}>Submit</Text>
          </TouchableOpacity>
          {/*TODO: json of all objects according to selection*/}
          <CustomPicker
            labels={this.state.personTypes}
            style={styles.pickpertype}
          />
        </View>
        {/*TODO: Display all objects according to personType*/}
        <CustomPicker
          labels={['Pick a Person Here']}
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
});

AppRegistry.registerComponent('StaffAdmin', () => StaffAdmin);
