import { StyleSheet, Text, View, StatusBar, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BackIcon from 'react-native-vector-icons/dist/Entypo';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Fan from '../assets/y1.png';
import bell from '../assets/bell1.png';
import socket from '../assets/y6.png';
import wire from '../assets/wire21.png';
import Inverter from '../assets/inverter.jpg';
import Tv from '../assets/tv.png';
import Laptop from '../assets/laptop.png';
import geyser from '../assets/geyser.png';
import cctv from '../assets/cctv.png';
import TabBar from '../common/TabBar'
import { useNavigation } from '@react-navigation/native';
const Electriciansproduct = () => {
    const navigation = useNavigation();

    const electricsproduct = [
        { id: 1, navigationpage : "Electricianproductdetails", image: Fan, name: "Fan" },
        { id: 2, navigationpage : "Electricianproductdetails", image: socket, name: "Switch & Socket" },
        { id: 3, navigationpage : "Electricianproductdetails", image: wire, name: "Wiring" },
        { id: 4, navigationpage : "Electricianproductdetails", image: bell, name: "Door Bell" },
        { id: 5, navigationpage : "Electricianproductdetails", image: Inverter, name: "Enverter & stabilizer" },
        { id: 6, navigationpage : "Electricianproductdetails", image: Tv, name: "Tv" },
        { id: 7, navigationpage : "Electricianproductdetails", image: Laptop, name: "Laptop" },
        { id: 8, navigationpage : "Electricianproductdetails", image: geyser, name: "geyser" },
        { id: 8, navigationpage : "Electricianproductdetails", image: cctv, name: "cctv" },


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
                    marginTop: 5
                }}>
                {
                    electricsproduct.map((item) => {
                       
                        return (
                            <TouchableOpacity
                             onPress={()=>navigation.navigate("Electricianproductdetails")}
                            style={{
                                backgroundColor: "#fff",
                                width: "32%",
                                elevation: 3,
                                alignItems: "center",
                                paddingVertical: 15,
                                marginBottom:5

                            }}>

                                <Image
                                    style={{ width: "90%", height: item.id === 5 ? 60 : 75  }}
                                    source={item.image}
                                    resizeMode="stretch"
                                />


                                <Text style={{ color: "#000",fontSize: responsiveFontSize(1.8),paddingTop:5  }}>
                                   {item.name}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>

             <TabBar/>
        </View>
    )
}

export default Electriciansproduct

const styles = StyleSheet.create({})