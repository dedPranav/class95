import React from 'react'
import { Text, View } from 'react-native'

export default class Motherboard extends React.Component {
    render() {
        return (
            <View>


                <View>
                    <Text>
                        Motherboard
                    </Text>
                </View>
                <View>
                    <Text>
                        The Motherboard is a Printed Circuit Board that every other Computer Hardware Component will be attached to.
                        It is like a central hub that manages and connects all of your other Parts.

                        The Motherboard has connectors for cables like power cables and data cables, slots for cards like GPUs and
                        sockets for CPUs.

                        There are also lots of little building blocks like transistors, capacitors, jumpers, and lots of
                        other tiny parts, that all go towards making your different hardware components work well together.
                    </Text>
                </View>

            </View>
        )
    }
}