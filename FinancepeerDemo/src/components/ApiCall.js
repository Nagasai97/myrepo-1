import React, { Component } from 'react';
import { Alert, Button, FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import schema from '../db/schema';
import Loader from '../common/Loader';
import DemoService from "../service/DemoService";
export default class ApiCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayRealmData: false,
            displayAPIData: false,
            realmRecords: [],
            apiRecords: [],
            loading: false,
        }
    }
    componentDidMount() {
    }
    getData = () => {
        schema.getJsonData().then((records) => {
            if(records !== undefined && records[0]!== undefined && JSON.parse(records[0].Items).length !== 0){
                this.setState({realmRecords: JSON.parse(records[0].Items), displayRealmData: true });
            } else {
                Alert.alert('No data in local storage')
            }
        });
    }
    saveData() {
        let customData = require('../common/data.json');
        schema.addJsonData(JSON.stringify(customData));
        Alert.alert('saved successfully');
    }
    getDatafromAPI=()=>{
        this.setState({loading: true});
        DemoService.getData().then((response)=>{
            console.log(response,'adads');
            this.setState({loading: false,apiRecords: response,displayAPIData: true});
        })
    }
    render() {
        return (
            <View>
                <View>
                    <Loader loading={this.state.loading} text = {'fetching..'}/>
                    <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#009DAE", height: 50 }}>
                        <Text style={{ color: "white", fontSize: 20 }}>Fetch Data</Text>
                    </View>
                </View>
                <View style={{alignSelf: 'center', marginTop: 200}}>
                <View style={styles.parent}>
                        <Button color="#FF8A3B" title='Save data in local storage'
                        onPress={this.saveData} />
                    </View>
                    <View style={styles.parent}>
                        <Button color="#FF8A3B" title='Display data'
                        onPress={this.getData} />
                    </View>
                    <View style={styles.parent}>
                        <Button color="#FF8A3B" title='fetch data from API'
                        onPress={this.getDatafromAPI} />
                    </View>
                    </View>
                {/* <View style={{
                    top: 150, left: 0,
                    right: 0, bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 20
                }}>
                    <View style={{paddingBottom: 8}}>
                    <Button
                        onPress={this.saveData}
                        title="Save data in local storage"
                        color="#841584"
                    />
                    </View>
                    <View style={{paddingBottom: 8}}>

                    <Button
                        onPress={this.getData}
                        title="display data"
                        color="#841584"
                    />
                    </View>
                    <Button
                        onPress={this.getDatafromAPI}
                        title="fetch data from API"
                        color="#841584"
                    />
                </View> */}
                <Modal
                    animationType="none"
                    transparent={false}
                    visible={this.state.displayRealmData}>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => this.setState({ displayRealmData: false })}>
                            <Image style={{ width: 20, height: 20 }} source={require('../assets/images/back.png')}></Image>
                        </TouchableOpacity><DataTable.Header>
                            <DataTable.Title>Id</DataTable.Title>
                            <DataTable.Title>Title</DataTable.Title>
                        </DataTable.Header>
                        <FlatList
                            data={this.state.realmRecords}
                            renderItem={({ item }) => (
                                <DataTable.Row>
                                    <DataTable.Cell>{item.id}</DataTable.Cell>
                                    <DataTable.Cell>{item.title}</DataTable.Cell>
                                </DataTable.Row>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </Modal>
                <Modal
                    animationType="none"
                    transparent={false}
                    visible={this.state.displayAPIData}>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => this.setState({ displayAPIData: false })}>
                            <Image style={{ width: 20, height: 20 }} source={require('../assets/images/back.png')}></Image>
                        </TouchableOpacity><DataTable.Header>
                        <DataTable.Title>Id</DataTable.Title>
                            <DataTable.Title>Name</DataTable.Title>
                            <DataTable.Title>Location</DataTable.Title>
                        </DataTable.Header>
                        <FlatList
                            data={this.state.apiRecords}
                            renderItem={({ item }) => (
                                <DataTable.Row>
                                    <DataTable.Cell>{item.id}</DataTable.Cell>
                                    <DataTable.Cell>{item.name}</DataTable.Cell>
                                    <DataTable.Cell>{item.location}</DataTable.Cell>
                                </DataTable.Row>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </Modal>
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
    parent: {
        width: 300,
        height: 50,
    },
});