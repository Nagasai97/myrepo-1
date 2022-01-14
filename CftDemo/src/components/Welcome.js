import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import styles from "../styles/styles";

const Welcome = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
          props.navigation.navigate('Login');
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <View style={styles.welcomeContainer}>
      <Image
        style={styles.welcomeLogoImg}
        source={require('../assets/index.png')}
      />
    </View>
  );
};

export default Welcome;
