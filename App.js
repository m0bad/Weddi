import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  YellowBox,
  Dimensions,
  Button,
} from 'react-native';

import HomeScreen from './assets/pages/HomeScreen';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';


class ProfileScreen extends React.Component {
  onPress = () => {
    // Go back to login
    this.props.navigation.popToTop();
  };

  render() {
    const height = this.props.navigation.getParam('height');
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const MainStackNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam('category'),
        headerStyle: {
          backgroundColor: '#231F20',
        },
        headerTintColor: '#f5f5f5',
      }),
    },
  },
  {
    // initialRouteName: 'HomeScreen',
    // mode: 'modal',
    // headerMode: 'float', // screen on android
    // headerBackTitleVisible: false,
    headerTransitionPreset: 'fade-in-place',
    headerLayoutPreset: 'center',
    cardStyle: {},
  }
);

// Link the back button on Android and manage the environment.

const NavigationApp = createAppContainer(MainStackNavigator);

// Export the App

export default NavigationApp;


import { useScreens } from 'react-native-screens';
useScreens();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    padding: 8,
  },
});