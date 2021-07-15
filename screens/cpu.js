import React from 'react'
import { Text, View } from 'react-native'

export default class Cpu extends React.Component {
    render() {
        return (
            <View>


                <View>
                    <Text>
                      Processor (CPU)  
                    </Text>
                </View>
                <View>
                    <Text>
                        Into the Motherboard’s Socket, the CPU is plugged in. Every CPU type has a specific Socket,
                        that has a named such as 2066, LGA1200, AM4, TR4, and so on, and the Motherboard will need
                        the exact same socket to be compatible with the CPU.

                        This is usually the first step in picking new parts for your own pc build. Pick a CPU,
                        check what socket it has, and then pick a compatible Motherboard.

                        A CPU is the Central Processing Unit of a Computer, and without it, nothing really works.

                        Almost everything you do on a computer will have to be calculated by the CPU in some way,
                        so having a fast CPU (high clocks and high core count) will make your PC faster.
                    </Text>
                </View>

            </View>
        )
    }
}