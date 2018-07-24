import React, { Component } from 'react';
import { AppRegistry, CheckBox, View, StyleSheet, Text } from 'react-native';

export default class AreasOfLearning extends Component {
  constructor() {
    super();
    this.state = {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
    };
  }

  handleCheck = () => {

  };

  render() {
    return (<View>
      <View style={styles.view}>
        <CheckBox
          value= {this.state.checked1}
          onChange={() => this.setState({ checked1: !this.state.checked1 })}
          />
        <Text style={styles.text}>PSE Dev</Text>
      </View>
      <View style={styles.view}>
        <CheckBox
          value= {this.state.checked2}
          onChange={() => this.setState({ checked2: !this.state.checked2 })}
          />
        <Text style={styles.text}>Phyis Dev</Text>
      </View>
      <View style={styles.view}>
        <CheckBox
        value= {this.state.checked3}
        onChange={() => this.setState({ checked3: !this.state.checked3 })}
        />
        <Text style={styles.text}>Comm and Lang</Text>
      </View>
      <View style={styles.view}>
      <CheckBox
        value= {this.state.checked4}
        onChange={() => this.setState({ checked4: !this.state.checked4 })}
        />
        <Text style={styles.text}>Literacy</Text>
      </View>
      <View style={styles.view}>
      <CheckBox
        value= {this.state.checked5}
        onChange={() => this.setState({ checked5: !this.state.checked5 })}
        />
        <Text style={styles.text}>Mathematics</Text>
      </View>
      <View style={styles.view}>
      <CheckBox
        value= {this.state.checked6}
        onChange={() => this.setState({ checked6: !this.state.checked6 })}
        />
        <Text style={styles.text}>The World</Text>
      </View>
      <View style={styles.view}>
      <CheckBox
        value= {this.state.checked7}
        onChange={() => this.setState({ checked7: !this.state.checked7 })}
        />
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
