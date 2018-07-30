import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ParentHome extends React.Component {

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
          this.props.navigation.navigate('ReportViewer');
        }
      }
            style={styles.button}>
            <Text style={styles.buttontext}>View Report</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => {
              this.props.navigation.navigate('PhotoViewer');
            }
          }
            style={styles.button}>
            <Text style={styles.buttontext}>View Photos</Text>
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

AppRegistry.registerComponent('ParentHome', () => ParentHome);
