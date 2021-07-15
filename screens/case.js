import React from 'react'
import { Text, View } from 'react-native'

export default class Case extends React.Component {
    render() {
        return (
            <View>
                <View>
                    <Text>
                        Case
                    </Text>
                </View>
                <View>
                    <Text>
                        The Computer case is nothing more than a fancy looking box that holds allof the PC’s components.
                        It can be opened and closed and usually has pre-defined areas with screws and holes where all the other
                        Components are supposed to be placed and attached to.

                        PC Cases come in different colors, sizes, with or without fans, some have LED lights some don’t,
                        some have glass side panels, some others look absolutely crazy.

                        Usually, you can think of a PC Case as a black (or white) Box with some buttons on top.
                        This is where all of your components will fit into when you are done building your PC.

                        You don’t actually need a case, you could also just lay all of your components on the floor or mount
                        them on the wall, some people do, but being able to just pick up the entire Computer by picking
                        up the Case comes in handy.
                    </Text>
                </View>
            </View>
        )
    }
}