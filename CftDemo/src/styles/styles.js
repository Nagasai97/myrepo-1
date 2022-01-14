import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
export default StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      oval: {
        height: hp('80%'),
        width: wp('60%'),
        position: 'absolute',
        borderRadius: 820,
        backgroundColor: '#00CED1'
    },
      logo:{
        fontWeight:"bold",
        fontSize:25,
        color:"#fb5b5a",
        marginBottom:40,
      },
      inputView:{
        width:"80%",
        backgroundColor:"#D1D1D1",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"black"
      },
      loginText:{
        color:"white"
      },
    welcomeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      welcomeLogoImg: {
        width: wp('75'),
        height: wp('23.881'),
      },
  })
  
