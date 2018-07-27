import React from 'react';
import { AppRegistry, Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './Components/Pages/Login';
import ReportSubmit from './Components/Pages/ReportSubmit';

const RootStack = createStackNavigator(
  {
    Login: Login,
    ReportSubmit: ReportSubmit,
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
