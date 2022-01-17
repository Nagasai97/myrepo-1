import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Loader from '../common/Loader';


export default class CurrentLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            loading: false,
        }
    }
    componentDidMount() {
    }
    findCoordinates = () => {
        this.setState({ loading: true })
        console.log('findCoordinates');
        Geolocation.getCurrentPosition(
            position => {
                Geocoder.init('your token here');
                Geocoder.from(position.coords.latitude, position.coords.longitude)
                    .then((json) => {
                        console.log('json', json)
                        let address = json.results[0];
                        let city = '';
                        let stateName = '';
                        let country = '';
                        let stateNameShort = '';
                        address.address_components.forEach(component => {
                            component.types.forEach(type => {
                                if (type == 'locality') {
                                    city = component.long_name;
                                } else if (type == 'administrative_area_level_1') {
                                    stateName = component.long_name;
                                    stateNameShort = component.short_name;
                                } else if (type == 'country') {
                                    country = component.long_name;
                                }
                            });
                        });
                        this.state.location = city + ', ' + stateName + ', ' + country;
                        this.setState({ loading: false })
                    })
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };

    render() {
        return (
            <View>
              <Loader loading={this.state.loading} text = {'finding you..'}/>
                <View>
                    <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#009DAE", height: 50 }}>
                        <Text style={{ color: "white", fontSize: 20 }}>Location Screen!</Text>
                    </View>
                </View>
                <IonIcon style={{
                    color: "red", fontSize: 95, top: 150, left: 160,
                    right: 0, bottom: 0,
                }} name={'location-sharp'} />
                <View style={{
                    top: 150, left: 0,
                    right: 0, bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text onPress={() => this.findCoordinates()} style={{paddingBottom: 10, fontSize: 18,fontWeight: "bold", color: "#142F43" }}>Click here to find your location!</Text>
                    {this.state.location !== null && (<Text style={{fontSize: 20, textAlign: 'center',fontWeight: "bold", color: "#142F43",paddingBottom: 8 }}>You are at{'\n'}<Text style={{fontSize: 20, textAlign: 'center',fontWeight: "bold", color: "#FF8A3B"}}>{this.state.location}</Text></Text>)}
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
