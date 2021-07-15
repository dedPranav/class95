import React from 'react'
import { Text, TouchableOpacity, TextInput, View, StyleSheet, Modal, ScrollView } from 'react-native'
import db from '../config.js'
import firebase from 'firebase'
import {CreateBottomTabNavigator} from 'react-navigation-tabs'
import DetailScreen from '../screens/detailscreen.js'
import HomeScreen from '../screens/homescreen.js'
import QuizScreen from '../screens/quizscreen.js'

export const AppTabNavigator = CreateBottomTabNavigator(
    {
        
        HomeScreen: {screen: HomeScreen},
        QuizScreen: {screen: QuizScreen}

    }
)