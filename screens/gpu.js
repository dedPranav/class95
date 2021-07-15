import React from 'react'
import { Text, View } from 'react-native'

export default class Gpu extends React.Component{
    render(){
        return(
            <View>

            
            <View>
                <Text>
            Graphics Card (GPU)
                </Text>
            </View>
            <View>
                <Text>
                Its purpose is the processing of anything that has to do with visuals and outputs these 
visuals (Images, User Interface, GUI) onto the Monitor.

There are two main types of GPUs, the integrated GPU (iGPU) and a discrete GPU.

The integrated GPU is integrated into the CPU. This means, some CPUs already have a graphics
 chip built-in and you will not need an additional GPU to attach a monitor to.

When your CPU has an integrated Graphics chip (such as the Intel i9 10900K CPU) you can 
connect your monitor to the display Adapter on the Motherboard. The thing with integrated 
GPUs though is: Their performance is very limited.

They are usually good enough for light tasks such as Word-Processing and some minor Games
 but as soon as you want to dive into graphics-heavy tasks such as 3D GPU Rendering, High-End Gaming,
  Video Editing, Graphic Design, and many others, you will have to get yourself a discrete GPU.

  A discrete GPU is a GPU that is not part of the CPU. It comes on its own printed circuit board,
   that is then plugged into a PCI Express Slot on your Motherboard.
                </Text>
            </View>

            </View>
        )
    }
}