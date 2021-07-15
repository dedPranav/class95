import React from 'react'
import react from 'react'
import { Text, TouchableOpacity, TextInput, View, StyleSheet, Modal, ScrollView } from 'react-native'
import db from '../config.js'
import firebase from 'firebase'
import {CreateBottomTabNavigator} from 'react-navigation-tabs'
import {Header, Icon} from 'react-native-elements'
import Drawer from './Drawer.js'

export const MyHeader = props=>{
    return(
        <Header leftComponent={
        <Icon
        name="bars"
        type="font-awesome-5"
        onPress={()=>props.navigation.toggleDrawer()}>
        
        </Icon>}
        centerComponent={
        {text:props.title,style:{fontWeight: 'bold', fontSize: 20}}
        }>

        </Header>
    )
}