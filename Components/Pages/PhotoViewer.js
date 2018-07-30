import React from 'react';
import { AppRegistry, StyleSheet, Text, View, } from 'react-native';

export default class PhotoViewer extends React.Component {

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (<View style={styles.container}>
      <View>
        <Text>Photo Gallery here!!</Text>
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
});

AppRegistry.registerComponent('PhotoViewer', () => PhotoViewer);
