import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class MyProfile extends Component {
    render() {
        return (
            <View>
                <View>
                    <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#009DAE", height: 50 }}>
                        <Text style={{ color: "white", fontSize: 20 }}>Profile</Text>
                    </View>
                    <View>
                    </View>
                </View>
                <Image style={{
                    top: 150, left: 140,
                    right: 0, bottom: 0,
                }} source={require('../assets/images/userphoto.png')} />
                <View style={{
                    top: 150, left: 0,
                    right: 0, bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 25, fontFamily: "Arial", fontWeight: "bold", color: "#142F43" }}>profile coming soon ..</Text>
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