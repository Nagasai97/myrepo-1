import React, { useState } from 'react';
import { View, Modal, ActivityIndicator, Text } from 'react-native';

const Loader = (props) => {
    const { loading, text } = props;
    const [isLoading, setIsLoading] = useState(true);

    return { loading } && { isLoading } ? (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading && isLoading}
            onRequestClose={() => {
                setIsLoading(false);
            }}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-around',
                backgroundColor: '#00000070',
            }}>
                <View style={{
                    backgroundColor: '#FFFFFF',
                    height: 100,
                    width: 170,
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'row'
                }}>
                    <ActivityIndicator size="large" color="#009DAE" />
                    <Text style={{fontWeight: 'bold', color: '#009DAE'}}>{text}</Text>
                </View>
            </View>
        </Modal>
    ) : null;
};

export default Loader;
