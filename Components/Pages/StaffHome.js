import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class StaffHome extends React.Component {

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (<View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('StaffAdmin');
        }
      }
            style={styles.button}>
          <Text style={styles.buttontext}>Staff Admin Panel</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={ () => {
              this.props.navigation.navigate('ReportSubmit');
            }
          }
            style={styles.button}>
          <Text style={styles.buttontext}>Reports</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('PhotoUpload');
            }
          }
            style={styles.button}>
          <Text style={styles.buttontext}>Upload a Photo</Text>
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
    height: 160,
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

AppRegistry.registerComponent('StaffHome', () => StaffHome);
