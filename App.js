import React from 'react';
import { AppRegistry, Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from './Components/Pages/Login';
import ReportSubmit from './Components/Pages/ReportSubmit';
import EmployeeHome from './Components/Pages/EmployeeHome';
import EmployeeAdmin from './Components/Pages/EmployeeAdmin';
import ReportViewer from './Components/Pages/ReportViewer';
import PhotoViewer from './Components/Pages/PhotoViewer';
import PhotoUpload from './Components/Pages/PhotoUpload';
import ParentHome from './Components/Pages/ParentHome';

const RootStack = createStackNavigator(
  {
    Login: Login,
    ReportSubmit: ReportSubmit,
    EmployeeHome: EmployeeHome,
    EmployeeAdmin: EmployeeAdmin,
    ReportViewer: ReportViewer,
    PhotoViewer: PhotoViewer,
    PhotoUpload: PhotoUpload,
    ParentHome: ParentHome,

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
