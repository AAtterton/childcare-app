import React from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList } from 'react-native';

export default class ReportViewer extends React.Component {
  // TODO: reports replaced with fetch from database
  constructor() {
    super();
    this.state = {
      reports: [
        {
          _id: '1',
          date: '02/01/2018',
          name: 'Andy',
        },
        {
          _id: '2',
          date: '02/01/2018',
          name: 'Andy',
        },
        {
          _id: '3',
          date: '02/01/2018',
          name: 'Andy',
        },
        {
          _id: '4',
          date: '02/01/2018',
          name: 'Andy',
        },
      ],
    };
  }

  // TODO: onclick for flatlist??
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.reports} renderItem={({ item }) =>
        <View style={styles.flatlist}>
          <Text style={styles.itemtext}>{item.date}</Text>
          <Text style={styles.itemtext}>{item.name}</Text>
        </View>}
        keyExtractor={item => item._id}
        />
    </View>);
  }
}

// TODO: Find out how to fill to the edges
// TODO: Find some ideas for better styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  flatlist: {
    borderWidth: 1,
    padding: 5,
    width: 320,
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemtext: {

  },
});

AppRegistry.registerComponent('ReportViewer', () => ReportViewer);
