import React from 'react';
import { AppRegistry, View, Picker } from 'react-native';

export default class KidPicker extends React.Component {
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

  updateKid = (kid) => {
    this.setState({ kid: kid });
    this.props.onChange(kid);
  };

  KidPicker = (style) => {
    let labelNames = this.state.kidsNames.map(i => (<Picker.Item key={i} label={i} value={i}/>));
    return (<Picker
              style={style}
              selectedValue={this.state.kid}
              onValueChange={this.updateKid}>
              {labelNames}
      </Picker>
    );
  };

  render() {
    return (
      <View>
          {this.KidPicker(
            this.props.style)}
      </View>
    );
  }

  componentDidMount() {
    this.fetchData();
  }
}

AppRegistry.registerComponent('KidPicker', () => KidPicker);
