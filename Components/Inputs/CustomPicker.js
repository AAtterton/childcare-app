import React from 'react';
import { AppRegistry, View, Picker, } from 'react-native';

export default class CustomPicker extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedValue: '',
      valueArray: '',
    };
  }

  updateSelectedValue = (selectedValue) => {
    this.setState({ selectedValue: selectedValue });
    this.props.onChange(selectedValue);
  };

  CustomPicker = (labels, style) => {
    let labelNames = labels.map(i => (<Picker.Item key={i} label={i} value={i}/>));
    return (<Picker
              style={style}
              selectedValue={this.state.selectedValue}
              onValueChange={this.updateSelectedValue}>
              {labelNames}
      </Picker>
    );
  };

  render() {
    return (
      <View>
        {this.CustomPicker(
          this.props.labels,
          this.props.style)}
      </View>
    );
  }
}
AppRegistry.registerComponent('CustomPicker', () => CustomPicker);
