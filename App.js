import React from 'react';
import { AppRegistry, Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from './Components/Pages/Login';
import ReportSubmit from './Components/Pages/ReportSubmit';
import StaffHome from './Components/Pages/StaffHome';
import StaffAdmin from './Components/Pages/StaffAdmin';
import ReportViewer from './Components/Pages/ReportViewer';
import PhotoViewer from './Components/Pages/PhotoViewer';
import PhotoUpload from './Components/Pages/PhotoUpload';
import ParentHome from './Components/Pages/ParentHome';
import Test from './Components/Pages/Test';

const RootStack = createStackNavigator(
  {
    Login: Login,
    ReportSubmit: ReportSubmit,
    StaffHome: StaffHome,
    StaffAdmin: StaffAdmin,
    ReportViewer: ReportViewer,
    PhotoViewer: PhotoViewer,
    PhotoUpload: PhotoUpload,
    ParentHome: ParentHome,
    Test: Test,
  },
  {
    initialRouteName: 'StaffAdmin',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
