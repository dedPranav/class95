import React from 'react'
import react from 'react'
import { Text, TouchableOpacity, TextInput, View, StyleSheet, Modal, ScrollView } from 'react-native'
import db from '../config.js'
import firebase from 'firebase'

export default class DetailScreen extends React.Component{
    render(){
        return(
            <ScrollView>

            <View style={{marginLeft: 20, marginRight: 10}}>
                
                <View>
                <Text
                style={{fontSize:20, fontWeight:'bold'}}>
                    1. Case
                    
                </Text>
                </View>
                <View>
<Text style={{fontSize:12}}>
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
                <View>
                <Text
                style={{fontSize:20, fontWeight:'bold'}}>
                    2. Motherboard
                    
                </Text>
                </View>
                <View>
<Text style={{fontSize:12}}>
The Motherboard is a Printed Circuit Board that every other Computer Hardware Component will be attached to.
 It is like a central hub that manages and connects all of your other Parts.

 The Motherboard has connectors for cables like power cables and data cables, slots for cards like GPUs and
  sockets for CPUs.

  There are also lots of little building blocks like transistors, capacitors, jumpers, and lots of
   other tiny parts, that all go towards making your different hardware components work well together.
 </Text>
                </View>
                <View>
                <Text
                style={{fontSize:20, fontWeight:'bold'}}>
                    3. Processor (CPU)
                    
                </Text>
                </View>
                <View>
<Text style={{fontSize:12}}>
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
                <View>
                <Text
                style={{fontSize:20, fontWeight:'bold'}}>
                    4. CPU Cooler
                    
                </Text>
                </View>
                <View>
<Text style={{fontSize:12}}>
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
                <View>
                <Text
                style={{fontSize:20, fontWeight:'bold'}}>
                    5. Graphics Card (GPU)

                </Text>
                </View>
                <View>
<Text style={{fontSize:12}}>
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

  A discrete GPU is a GPU that is not part of the CPU. It comes on its own printed circuit board
   (like the one in the picture above), that is then plugged into a PCI Express Slot on your Motherboard.
</Text>
                </View>
                <View>
                <Text
                style={{fontSize:20, fontWeight:'bold'}}>
                    6. Memory (RAM)
                </Text>
                </View>
                <View>
<Text style={{fontSize:12}}>
Random Access Memory (RAM) is the short-term-memory part of the Computer if you would compare it to a brain.

The RAM stores data that is actively being worked on by the CPU. RAM can read and write very fast but 
can’t retain information once the power is turned off.

RAM kits consist of RAM Modules such as the 4 colorful Modules you can see in the image above.

You can get just one Module, 2 Modules, 4 Modules, or even 8 Modules as long as your Motherboard
 has sufficient RAM Slots.

A Motherboard has RAM slots where RAM gets plugged in to. RAM comes in different capacities 
starting at around 4GB and going up to 64GB per Module on modern systems. Having more Modules,
 of course, will multiply your RAM capacity.
</Text>
                </View>
                <View>
                <Text
                style={{fontSize:20, fontWeight:'bold'}}>
                    7. Storage (HDD / SSD / NVME SSD)
                </Text>
                </View>
                <View>
<Text style={{fontSize:12}}>
Because RAM can’t store anything without power and we do want to be able to turn off our computer
 from time to time, we need a storage medium that retains its stored data, even when the power is off.

There are 3 main mass-storage types:

1. The HDD
2. The SSD
3. And the NVMe SSD.
All three do pretty much the same, they store data for you. The main difference between the three is speed.

An HDD (which still has mechanically moving parts) is the slowest of the three and will usually
 read and save Data at about 100MByte/s.

An SSD will already read and write at around 500MByte/s and an NVMe SSD currently reads and writes
 sequential Data with up to 7000MBytes/s.

 Both HDDs and SSDs are plugged into a SATA plug onto the motherboard via a SATA Cable.
  They also need Power that they get through a Power Cable from the PSU.

The NVMe SSD, though, is plugged into the Motherboard directly. It is about as small as a stick 
of chewing gum and needs no extra cables.

Your Motherboard, of course, has to support NVMe SSDs and have an M.2 slot available. But almost
 all modern Motherboards nowadays have at least one of these.
</Text>
                </View>
                <View>
                <Text
                style={{fontSize:20, fontWeight:'bold'}}>
                    8. More cooling
                </Text>
                </View>
                <View>
<Text style={{fontSize:12}}>
We talked about CPU Cooling a bit already. The CPU is not the only PC Component that needs
 cooling in a Computer.

The GPU of course also needs cooling, but every discrete GPU that you can buy already
 comes with an attached Cooler on top of it, so we don’t have to worry about extra cooling for the GPU.

Now, as the PC Case is usually closed and the PC Components inside the Case need preferably cool(ish)
 Air to be able to be cooled, there should be a way to blow colder air from outside of the PC’s
  case into the Case.

This is done by attaching Case Fans to the inside of the case. These then pull in cool air at the
 front of your PC and blow the hot air out the back of your PC.

This way the inside of the PC-Case and all of your PC Components ideally stay nice and cool.
</Text>
                </View>
                <View>
                <Text
                style={{fontSize:20, fontWeight:'bold'}}>
                    9. Power Supply Unit (PSU)
                </Text>
                </View>
                <View>
<Text style={{fontSize:12}}>
We picked a bunch of nice PC Components already, but nothing much will happen without a power supply
 to supply the PC with power.

There are so many PSU brands with different wattage or efficiencies out there, that it can be
 quite difficult to decide which one to buy.

The important thing is to know how much wattage your current PC Build will need to run stable 
and possibly how much you will need in the future if you are planning on adding more components,
 like extra/stronger GPUs or Storage Drives.

You should then of course (now) buy a stronger power supply, that will later also be able to handle
 the extra components.
</Text>
                </View>

            </View>

            </ScrollView>
        )
    }
}