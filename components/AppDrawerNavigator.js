import React from 'react'
import { Text, TouchableOpacity, TextInput, View, StyleSheet, Modal, ScrollView } from 'react-native'
import {createDrawerNavigator, CreateDrawerNavigator} from 'react-navigation-drawer'
import {Header, Icon} from 'react-native-elements'
import Drawer from './Drawer.js'
import {TabNavigator} from './TabNavigator'
import { createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/homescreen.js'
import Motherboard from '../screens/motherboard.js'
import Gpu from '../screens/gpu.js'
import Cpu from '../screens/cpu.js'
import Cooler from '../screens/cooler.js'
import Case from '../screens/case.js'

export const AppDrawerNavigator = createDrawerNavigator({
    home: {screen:TabNavigator},
    case: {screen: Case},
    cooler: {screen: Cooler},
    cpu: {screen: Cpu},
    gpu: {screen: Gpu},
    motherboard: {screen: Motherboard}

},
{
    contentComponent: Drawer
},
{initialRouteName: "home"
}
)
