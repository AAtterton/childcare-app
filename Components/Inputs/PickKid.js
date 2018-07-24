import React from 'react';
import { AppRegistry, Stylesheet, Text, View, Picker } from 'react-native';

export default class PickKids extends React.Component {
  constructor() {
    super();
    this.state = {
      kidsNames: [],
      kid: '',
    };
  }

  fetchData() {
    var names = [];
    return fetch('http://192.168.0.11:3000/api/kidsnames')
    .then(response => response.json())
    .then(responseJson => {
      for (i = 0; i < responseJson.length; i++) {
        name = responseJson[i].first_name + ' ' + responseJson[i].last_name;
        names.push(name);
      }

      this.setState({ kidsNames: names });
    }).catch(error => {
      console.error(error);
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  renderPicker() {
    let kidsNames = this.state.kidsNames.map(i => (<Picker.Item key={i} label={i} value={i}/>));
    return (<Picker selectedValue={this.state.kid} onValueChange={this.updateKid}>
      {kidsNames}
    </Picker>);
  }

  updateKid = (kid) => {
    this.setState({ kid });
    this.props.onValueChange(kid);
  };

  render() {
    return <View>{this.renderPicker()}</View>;
  }
}
