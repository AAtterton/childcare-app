import React from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList } from 'react-native';

export default class ReportViewer extends React.Component {
  // TODO: reports replaced with fetch from database
  constructor() {
    super();
    this.state = {
      reports: '',
      displayList: '',
    };
  }

  fetchReports = () =>
    fetch('http://192.168.0.11:3000/api/reports')
    .then(response => response.json())
    .then(responseJson => {
      this.setState({ reports: responseJson });
      const displayList = [];

      for (i = 0; i < responseJson.length; i++) {
        const value = this.dateSort(responseJson[i].report_date.slice(0, 10));
        console.log(value);
        const display = {
          _id: responseJson[i]._id,
          name: responseJson[i].kid,
          date: value,
        };
        displayList.push(display);
      }

      this.setState({ displayList: displayList });
    });

  dateSort = (dateString) =>
    dateString.split('-')
    .reverse()
    .join('-')
    .replace('-', '/')
    .replace('-', '/');

  // TODO: onclick for flatlist??
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.displayList} renderItem={({ item }) =>
        <View style={styles.flatlist}>
          <Text style={styles.itemtext}>{item.name}</Text>
          <Text style={styles.itemtext}>{item.date}</Text>
        </View>}
        keyExtractor={item => item._id}
        />
    </View>);
  }

  componentDidMount() {
    return this.fetchReports();
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
