import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import IonIcon from 'react-native-vector-icons/Ionicons';
import DemoService from '../service/DemoService';

export default class CaptureImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            capturedImage: null,
        }
    }
    componentDidMount() {
    }
    captureImage() {
        ImagePicker.openCamera({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7,
        })
            .then((singleimage) => {
                console.log('singleimage', singleimage);
                this.setState({ capturedImage: singleimage.path });
                DemoService.imagePath = singleimage.path;
            })
            .catch((error) => {
                console.log(' Error fetching images from camera ', error);
            });
    }

    render() {
        return (
            <View>
                <View>
                <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#009DAE", height: 50 }}>
                <Text style={{ color: "white", fontSize: 20 }}>Look yourself</Text>
                </View>
                </View>
                <IonIcon style={{
                    color: "red", fontSize: 95, top: 150, left: 160,
                    right: 0, bottom: 0,
                }} name={'camera'} />
                <View style={{
                    top: 150, left: 0,
                    right: 0, bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 25, fontFamily: "Arial", fontWeight: "bold", color: "#142F43" }} onPress={() => this.captureImage()}>Capture me!</Text>
                    <Image style={{ width: 200, height: 200 }} 
                    source={{
                        uri: this.state.capturedImage,
                    }}>
                    </Image>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});