import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Dimensions, BackHandler, Alert } from 'react-native';
import Loader from '../common/Loader';
import styles from "../styles/styles";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false,
      isUserNameInputFocus: false,
      isPasswordInputFocus: false,
      hidePassword: true,
      error: undefined,
    };
    this.backAction = this.backAction.bind(this);
    this.onFocusListener = this.onFocusListener.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.focusListenerCalled = false;
  }
    componentDidMount() {
    const { navigation } = this.props;
    this._blurSubscription = navigation.addListener('blur', () => {
      this.focusListenerCalled = false;
      BackHandler.removeEventListener('hardwareBackPress', this.backAction);
    });
    this._focusSubscription = navigation.addListener(
      'focus',
      this.onFocusListener,
    );
    this.onFocusListener();
  }

  onFocusListener() {
    if (this.focusListenerCalled) {
      this.focusListenerCalled = false;
      return;
    }
    this.focusListenerCalled = true;
    this._backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }
  componentWillUnmount() {
    this._backHandler && this._backHandler.remove && this._backHandler.remove();
    this._blurSubscription &&
      this._blurSubscription.remove &&
      this._blurSubscription.remove();
  }

  backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'YES', onPress: () => BackHandler.exitApp() },
    ]);
    return true;
  };
    login() {
    const { username, password } = this.state;
    this.setState({isLoading: true});
    if (username === 'TestUser' && password === 'test') {
      setTimeout(() => {
        this.setState({isLoading: false});
        this.props.navigation.navigate({ name: 'Graph' });
      }, 1000);
    } else {
      setTimeout(() => {
        this.setState({isLoading: false, 
          error: username === 'TestUser' ? 'Invalid password': username !== 'TestUser' && password !== 'test' ? 'Invalid credentials': 'Invalid username'})
      }, 500);
    }
  }
    loginButton() {
    let isActive = this.state.username !== '' && this.state.password !== ''
    return (
      <TouchableOpacity onPress={() => {
            this.login();
          }} 
          style={{
          width:"80%",
          backgroundColor: isActive ? "#00CED1" : '#C4C4C4',
          borderRadius:25,
          height:50,
          alignItems:"center",
          justifyContent:"center",
          marginTop:40,
          marginBottom:10
          }}>
      <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
    )
  }
  render() {
    const {
      isLoading,
      error,
      username,
      password,
    } = this.state;
    return (
      <View style={styles.loginContainer}>
        <Loader loading={isLoading} text={'Validating'} />
        <Text style={styles.logo}>Welcome!</Text>
        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            value={username}
            placeholder="Username..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({username:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            value={password}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        {error !== '' && <Text style={{color: '#fb5b5a'}}>{error}</Text>}
        {this.loginButton()}
        <View>
        <View style={[styles.oval, { transform: [{ rotate: "28deg" },{ rotateZ: '0.48398rad' }, { scaleY: 1 }, { scaleX: 1 }] }]} />
        </View>
      </View>
    );
  }
}