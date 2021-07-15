import React from 'react'
import { Text, TouchableOpacity, TextInput, View, StyleSheet, Modal, ScrollView } from 'react-native'
import db from '../config.js'
import firebase from 'firebase'
import { CreateBottomTabNavigator } from 'react-navigation-tabs'
import { Header, Icon } from 'react-native-elements'
import { render } from 'react-dom'
import DrawerItems from 'react-navigation-drawer'

export default class Drawer extends React.Component {
    render() {
        return (
            <View>
                <View>
                    <DrawerItems {...this.props} />
                </View>
            </View>
        )
    }
}