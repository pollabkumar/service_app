import { StyleSheet, Text, View, StatusBar, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BackIcon from 'react-native-vector-icons/dist/Entypo';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

import Shower from '../assets/sho12.png';
import Basin from '../assets/basion2.png';
import WaterTank from '../assets/watertank1.jpg';
import Pipe from '../assets/pipe12.png';
import Toilet from '../assets/toilet1.jpg';
import motor from '../assets/watermotor.jpg';
import TabBar from '../common/TabBar'
const PlumberProducts = () => {
    const electricsproduct = [

        { id: 1, image: Basin, name: "Basin" },
        { id: 2, image: Shower, name: "Shower" },
        { id: 3, image: WaterTank, name: "Water Tank" },
        { id: 4, image: motor, name: "Motor" },
        { id: 5, image: Pipe, name: "Water Pipe" },
        { id: 6, image: Toilet, name: "Toilet" },
    ]
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <StatusBar
                animated={true}
                backgroundColor='#172647'
                translucent={false}
            />
            <View style={{ width: "100%", backgroundColor: '#172647', paddingVertical: 12, paddingHorizontal: 12, flexDirection: "row", alignItems: "center" }}>
                <View style={{ backgroundColor: "rgba(164, 164, 164, 0.5)", width: 25, height: 25, alignItems: "center", justifyContent: "center", borderRadius: 90 }}>
                    <BackIcon name="chevron-thin-left"
                        style={{ fontSize: responsiveFontSize(2), color: "#fff" }}
                    />
                </View>
                <View style={{ paddingLeft: 5 }}>
                    <Text style={{ fontSize: responsiveFontSize(2), color: "#fff" }}>
                        Electronics services
                    </Text>
                </View>
            </View>

            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    gap: 5,
                    paddingHorizontal: 8,
                    flexWrap: "wrap",
                    alignItems: "center",
                    // justifyContent:"center",
                    marginTop: 5
                }}>
                {
                    electricsproduct.map((item) => {
                        // console.log("ioioioi", item)
                        return (
                            <View style={{
                                backgroundColor: "#fff",
                                width: "32%",
                                elevation: 3,
                                alignItems: "center",
                                paddingVertical: 15,
                                marginBottom: 5,
                                height: 140

                            }}>

                                <Image
                                    style={{ width: "90%", height: item.id === 4 ? 60 : 75 }}
                                    source={item.image}
                                    resizeMode="stretch"
                                />


                                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), paddingTop: 12 }}>
                                    {item.name}
                                </Text>
                            </View>
                        )
                    })
                }
            </View>

            <TabBar />
        </View>
    )
}

export default PlumberProducts

const styles = StyleSheet.create({})