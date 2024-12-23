import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/dist/FontAwesome';
import Icon3 from 'react-native-vector-icons/dist/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize } from "react-native-responsive-dimensions";


const TabBar = () => {
    const navigation = useNavigation();
    return (
        <View style={{flex: 1}}>
            <View style={{
                width: "100%",
                height: 60,
                flexDirection: "row",
                backgroundColor: "#0F1F37",
                alignItems: "center",
                justifyContent: "space-evenly",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                // gap: 1,
                position: "absolute",
                bottom: 0,
            }}>

                {/* home */}
                <TouchableOpacity
                   onPress={()=>navigation.navigate("Dashboard")}
                    style={{
                        width: "25%",
                        height: 60,
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "#fff",


                    }}
                // onPress={() => changeTab('Home')}
                >
                    <Icon name='home'
                        style={{ color: "#fff", fontSize: responsiveFontSize(2.7) }}
                    />
                    <Text style={{ fontSize: responsiveFontSize(1.40), color: "#fff" }}>Home</Text>
                </TouchableOpacity>
                {/* Booking */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("BookingPage")}
                    style={{
                        width: "25%",
                        height: 60,
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "#fff",
                    }}

                >
                    <Icon3 name='event-note'
                        style={{ color: "#fff", fontSize: responsiveFontSize(2.6) }}
                    />
                    <Text style={{ fontSize: responsiveFontSize(1.40), color: "#fff" }}>Bookings</Text>
                </TouchableOpacity>
                {/* transaction history */}
                <TouchableOpacity
                    onPress={()=>navigation.navigate("Dashboard")}
                    style={{
                        width: "25%",
                        height: 60,
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "#fff",


                    }}
                    
                >
                    <Icon name='bank-transfer'
                        style={{ color: "#fff", fontSize: responsiveFontSize(2.6) }}
                    />
                    <Text style={{ fontSize: responsiveFontSize(1.40), color: "#fff" }}>Transaction</Text>
                </TouchableOpacity>
                {/* Account */}
                <TouchableOpacity
                    style={{
                        width: "25%",
                        height: 60,
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "#fff",


                    }}
                    onPress={() => changeTab('Home')}
                >
                    <Icon2 name='user'
                        style={{ color: "#fff", fontSize: responsiveFontSize(2.6) }}
                    />
                    <Text style={{ fontSize: responsiveFontSize(1.40), color: "#fff" }}>Account</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default TabBar;

const styles = StyleSheet.create({});
