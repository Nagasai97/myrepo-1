import React, { Component } from 'react';
import { Alert, BackHandler, Dimensions, FlatList, ScrollView, Text, View } from "react-native";
import { BarChart, PieChart } from "react-native-chart-kit";

export default class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonData: require('../common/data.json'),
        };
    }
    backAction = () => {
        // Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        //     {
        //         text: 'Cancel',
        //         onPress: () => null,
        //         style: 'cancel',
        //     },
        //     { text: 'YES', onPress: () => BackHandler.exitApp() },
        // ]);
        this.props.navigation.goBack();
        return true;
    };
    deleteItem(item, index){
    this.state.jsonData.splice(index, 1);
    this.setState({});
    }
    render() {
        let monthData = [];
        let stockData = [];
        let copyData = this.state.jsonData
        if (copyData) {
            monthData = copyData.map(function (item) {
                return item['Month'];
            });
            stockData = copyData.map(function (item) {
                return item['revenue'];
            });
        }
        return (
            <ScrollView>
                <View>
                    <Text onPress={this.backAction} style={{ textAlign: 'left', fontSize: 12, padding: 5, paddingRight: 10 }}> {'<'} Go back</Text>
                    <Text style={{ textAlign: 'right', fontSize: 20, padding: 5, paddingRight: 10 }}>Hi TestUser</Text>
                    <BarChart
                        data={{
                            labels: monthData,
                            datasets: [
                                {
                                    data: stockData,
                                },
                            ],
                        }}
                        width={Dimensions.get('window').width - 20}
                        height={220}
                        withHorizontalLabels={true}
                        horizontalLabelRotation={-10}
                        showValuesOnTopOfBars={true}
                        yAxisLabel={'Qty'}
                        chartConfig={{
                            backgroundColor: '#1cc910',
                            backgroundGradientFrom: '#eff3ff',
                            backgroundGradientTo: '#efefef',
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                            marginLeft: 10
                        }}
                    />
                    <PieChart
                        data={copyData}
                        width={Dimensions.get('window').width - 16}
                        height={220}
                        chartConfig={{
                            backgroundColor: '#1cc910',
                            backgroundGradientFrom: '#eff3ff',
                            backgroundGradientTo: '#efefef',
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                        accessor="revenue"
                        backgroundColor="transparent"
                        paddingLeft="15"
                        absolute
                    />
                    <FlatList
                        data={copyData}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{flexDirection: 'row'}}>
                                    <Text
                                        style={{
                                            padding: 10,
                                            fontSize: 18,
                                            height: 50,width: 200
                                            
                                        }}
                                        onPress={() => null}>
                                        {item.name}---{item.revenue}
                                    </Text>
                                    <Text
                                        style={{
                                            padding: 10,
                                            fontSize: 18,
                                            height: 50,
                                            color: 'red'
                                        }}
                                        onPress={() => this.deleteItem(item, index)}>
                                        Delete
                                    </Text>
                                </View>
                            )
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </ScrollView>)
    }
}