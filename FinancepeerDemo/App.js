import React from "react";
import IonIcon from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from
  "react-navigation-material-bottom-tabs";
  import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import CurrentLocation from "./src/components/CurrentLocation";
import CaptureImage from "./src/components/CaptureImage";
import ScrollImages from "./src/components/ScrollImages";
import ApiCall from "./src/components/ApiCall";
import MyProfile from "./src/components/MyProfile";
const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: ScrollImages,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: (tabInfo) => (
          <IonIcon style={[{ color: tabInfo.tintColor }]} size={tabInfo.focused ? 26 : 22} name={'home'} />
        ),
      },
    },
    CurrentLocation: {
      screen: CurrentLocation,
      navigationOptions: {
        tabBarLabel: "Location",
        tabBarIcon: (tabInfo) => (
          <IonIcon style={[{ color: tabInfo.tintColor }]} size={tabInfo.focused ? 26 : 22} name={'location-sharp'} />
        ),
      },
    },
    CaptureImage: {
      screen: CaptureImage,
      navigationOptions: {
        tabBarLabel: "Camera",
        tabBarIcon: (tabInfo) => (
          <IonIcon style={[{ color: tabInfo.tintColor }]} size={tabInfo.focused ? 26 : 22} name={'camera'} />
        ),
      },
    },
    ApiCall: {
      screen: ApiCall,
      navigationOptions: {
        tabBarLabel: "Data",
        tabBarIcon: (tabInfo) => (
          <AntDesignIcon
          name="database"
          style={{fontSize: tabInfo.focused ? 26 : 22,color: tabInfo.tintColor}}
        />
        ),
      },
    },
    MyProfile: {
      screen: MyProfile,
      navigationOptions: {
        tabBarLabel: "MyProfile",
        tabBarIcon: (tabInfo) => (
          <IonIcon style={[{ color: tabInfo.tintColor }]} size={tabInfo.focused ? 26 : 22} name={'person'} />
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    barStyle: { backgroundColor: "#009DAE" },
  }
);

const Navigator = createAppContainer(TabNavigator);

export default function App() {
  return (
    <Navigator/>
  );
}

