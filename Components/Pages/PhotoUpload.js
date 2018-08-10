import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class PhotoUpload extends React.Component {

  constructor () {
    super();
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      image: null,
    };
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  photoUpload = () => {
    if (this.state.image != null) {

      const image = new FormData();
      image.append('photo', {
        uri: this.state.image.uri,
        type: 'image/jpg',
      });
      console.log(image);
      fetch('http://192.168.0.11:3000/api/photos', {
        method: 'POST',
        header: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data;',
        },
        body: image,
      })
      .catch(err => {
        console.log(err);

      });
    }
  };

  takePhoto = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();

      this.setState({ image: photo });
      console.log(this.state.image);
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (<View style={styles.container}>
          <Camera ref={ref => { this.camera = ref; }}

            style={{ width: 280, height: 400, alignSelf: 'center' }} type={this.state.type}/>
          <View style={styles.wrapper}>
            <TouchableOpacity onPress={this.photoUpload} style={styles.button}>
              <Text style={styles.buttontext}>Upload Photo</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.takePhoto} style={styles.button}>
              <Text style={styles.buttontext}>Take Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

AppRegistry.registerComponent('PhotoUpload', () => PhotoUpload);

//   const captureTarget={Camera.constants.CaptureTarget.disk}
//   render() {
//     return (<View style={styles.container}>
//       <View style={styles.wrapper}>
//         <TouchableOpacity onPress={this.photoUpload} style={styles.button}>
//           <Text style={styles.buttontext}>Upload Photo</Text>
//         </TouchableOpacity>
//
//         <TouchableOpacity onPress={this.takePhoto} style={styles.button}>
//           <Text style={styles.buttontext}>Take Photo</Text>
//         </TouchableOpacity>
//
//         <Text style={styles.capture} onPress={this.storePicture.bind(this)}>[UPLOAD]</Text>
//       </View>
//     </View>);
//   }
// }
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    height: 60,
    width: 280,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    height: 40,
    width: 130,
    backgroundColor: 'lightgrey',
  },
  buttontext: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
  },
});
