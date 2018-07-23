import React, { Component } from 'react';
import { AppRegistry, CheckBox, View, StyleSheet, Text } from 'react-native';

export default class AreasOfLearning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (<View>
      <View style={styles.view}>
        <CheckBox onValueChange={() => this.setState({
            checked: !this.state.checked,
          })}/>
        <Text style={styles.text}>PSE Dev</Text>
      </View>
      <View style={styles.view}>
        <CheckBox onValueChange={() => this.setState({
            checked: !this.state.checked,
          })}/>
        <Text style={styles.text}>Phyis Dev</Text>
      </View>
      <View style={styles.view}>
        <CheckBox onValueChange={() => this.setState({
            checked: !this.state.checked,
          })}/>
        <Text style={styles.text}>Comm and Lang</Text>
      </View>
      <View style={styles.view}>
        <CheckBox onValueChange={() => this.setState({
            checked: !this.state.checked,
          })}/>
        <Text style={styles.text}>Literacy</Text>
      </View>
      <View style={styles.view}>
        <CheckBox onValueChange={() => this.setState({
            checked: !this.state.checked,
          })}/>
        <Text style={styles.text}>Mathematics</Text>
      </View>
      <View style={styles.view}>
        <CheckBox onValueChange={() => this.setState({
            checked: !this.state.checked,
          })}/>
        <Text style={styles.text}>The World</Text>
      </View>
      <View style={styles.view}>
        <CheckBox onValueChange={() => this.setState({
            checked: !this.state.checked,
          })}/>
        <Text style={styles.text}>Arts and Design</Text>
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  CheckBox: {},
  text: {
    paddingTop: 6,
  },
});

AppRegistry.registerComponent('AreasOfLearning', () => AreasOfLearning);
