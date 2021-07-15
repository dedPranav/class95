import React from 'react'
import react from 'react'
import { Text as TouchableOpacity, TouchableOpacity, TextInput, View, StyleSheet, Modal } from 'react-native'
import db from '../config.js'
import firebase from 'firebase'
import DetailScreen from './detailscreen.js'
import QuizScreen from './quizscreen.js'
import { AppTabNavigator } from '../components/TabNavigator.js'

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                onPress={()=>{this.props.navigation.navigate("Case")}}>
                    <Text>
                    Case
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                 onPress={()=>{this.props.navigation.navigate("Motherboard")}}>
                    <Text>
                    Motherboard
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                 onPress={()=>{this.props.navigation.navigate("Cpu")}}>
                    <Text>
                    Processor(CPU)
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={()=>{this.props.navigation.navigate("Cooler")}}>
                    <Text>
                    CPU Cooler
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={()=>{this.props.navigation.navigate("Gpu")}}>
                    <Text>
                    Graphics Card (GPU)
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>
                    Memory (RAM)
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}