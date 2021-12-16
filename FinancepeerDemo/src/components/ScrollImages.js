import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";
export default class CurrentLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#009DAE", height: 50 }}>
                    <Text style={{ color: "white", fontSize: 20 }}>Snap Carousel</Text>
                </View>
                <View style={{
                    top: 150, left: 0,
                    right: 0, bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',

                }}>
                    <ImageSlider
                        data={[
                            { img: 'https://quotefancy.com/media/wallpaper/3840x2160/2000887-Joel-Spolsky-Quote-Something-is-usable-if-it-behaves-exactly-as.jpg' },
                            { img: 'https://i.pinimg.com/originals/ce/49/aa/ce49aa709a374d1114764a7fa2b7f0dc.jpg' },
                            { img: 'https://i.pinimg.com/236x/ac/a6/a9/aca6a9f9b5ee7006720a144999afb486.jpg' },
                            { img: 'https://i.pinimg.com/474x/9a/8c/a6/9a8ca6eb66f98d88052ca9dfa3ba5b70.jpg' },
                            { img: 'https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/T949A2PA1998PT25X0Y6D1031400657FS2322/views/3,width=378,height=378,appearanceId=2,backgroundColor=000000,noPt=true/funny-cs-software-developer-quotes-full-color-mug.jpg' },
                        ]}
                        autoPlay={true}
                        closeIconColor="#fff"
                    />
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