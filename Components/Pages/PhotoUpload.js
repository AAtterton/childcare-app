import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class PhotoUpload extends React.Component {

  constructor() {
    super();
    this.state = {

    };
  }

  photoUpload = () => {
    alert('This will upload photos');
  };

  takePhoto = () => {
    alert('This will take photos');
  };

  render() {
    return (<View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={this.photoUpload} style={styles.button}>
          <Text style={styles.buttontext}>Upload Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.takePhoto} style={styles.button}>
          <Text style={styles.buttontext}>Take Photo</Text>
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
  wrapper: {
    height: 100,
    width: 160,
    justifyContent: 'space-between',
  },
  button: {
    height: 40,
    backgroundColor: 'lightgrey',

  },
  buttontext: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('PhotoUpload', () => PhotoUpload);
