import React from 'react'
import { Text, View } from 'react-native'

export default class Cooler extends React.Component{
    render(){
        return(
            <View>

            
            <View>
                <Text>
CPU Cooler
                </Text>
            </View>
            <View>
                <Text>
                Anything that draws power also generates heat and the CPU generates lots of heat.

This means it has to be cooled to be able to operate flawlessly. What do we need for cooling a CPU?
 A CPU-Cooler!

Some CPUs like the AMD Ryzen 3rd Gen Series (e.g. 3900X/5600X) already have CPU-Coolers included in
 the CPU Box, but lots of others, like the popular Intel i9 10900K do not.

Make sure you have a CPU-Cooler that is compatible with your CPU and Socket.
 It’s the same as with the Motherboard Socket and CPU Socket. The Cooler has to fit the CPU and Socket.

 There are two popular CPU-Cooler types. One is the Air-Cooled Tower Cooler 
 (that you can see in the image above) and the other is an AIO Closed Waterloop CPU Cooler.

 AIO Closed Waterloop Coolers tend to do a better job at cooling overclocked CPUs and CPUs 
 that run hot for long periods of time.

AIOs, though, can be noisier (usually have more fans and the added pump noise) and need more room
 in your PC-Case, as they are attached to the side of the case, connected to the CPU with some Water Pipes.

The air-cooled tower CPU cooler is great at cooling short performance bursts, is nice and quiet,
 and usually takes up less room in the case. It is simply placed on top of the CPU
  where it sits and goes about its cooling-work.
                </Text>
            </View>

            </View>
        )
    }
}