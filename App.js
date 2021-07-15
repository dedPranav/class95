import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcomescreen from './screens/welcomescreen';
import DetailScreen from './screens/detailscreen';
import HomeScreen from './screens/homescreen';
import {CreateAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';


export default function App() {
  return (
    <View style={styles.container}>
    <AppContainer/>
    </View>
  );
}

const AppTabNavigator = CreateBottomTabNavigator(
  {
      
      HomeScreen: {screen: HomeScreen},
      QuizScreen: {screen: QuizScreen}

  }
)

const AppContainer = CreateAppContainer(AppTabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 40
  },
});
