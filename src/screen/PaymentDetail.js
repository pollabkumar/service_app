import { StyleSheet, Text, View, StatusBar, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import BackIcon from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import RazorpayCheckout from 'react-native-razorpay';
const PaymentDetail = () => {
    const Razorpaykey_id = "rzp_test_eokIf1I0YOhokh"
    // const [selectedDate, setSelectedDate] = useState(null);
    const navigation = useNavigation();
    // const [open, setopen] = useState(false)
    // const [open1, setopen1] = useState(false)
    const amount = 100
    const currency = 'INR'
    const handlepayment = () => {
        var options = {
            description: 'Credits towards consultation',
            image: '',
            currency: currency,
            key: Razorpaykey_id,
            amount: amount * 100,
            name: 'Service App ',
            order_id: '',//Replace this with an order_id created using Orders API.
            prefill: {
                email: 'gaurav.kumar@example.com',
                contact: '9191919191',
                name: 'POLLAB KUMAR '
            },
            theme: { color:'#172647' }
        }

        RazorpayCheckout.open(options).then((data) => {
            console.log("datadata",data)
            // if(data.razorpay_payment_id){
            //     navigation.navigate("ThankYoupage") 
            // }
            // handle success
            // alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
        });

    }
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <StatusBar
                animated={true}
                backgroundColor='#172647'
                translucent={false}
            />
            {/* header */}
            <View style={{ width: "100%", backgroundColor: '#172647', paddingVertical: 12, paddingHorizontal: 12, flexDirection: "row", alignItems: "center" }}>
                <View style={{ backgroundColor: "rgba(164, 164, 164, 0.5)", width: 25, height: 25, alignItems: "center", justifyContent: "center", borderRadius: 90 }}>
                    <BackIcon name="chevron-thin-left"
                        style={{ fontSize: responsiveFontSize(2), color: "#fff" }}
                    />
                </View>
                <View style={{ paddingLeft: 5 }}>
                    <Text style={{ fontSize: responsiveFontSize(2), color: "#fff" }}>
                        Payment Details
                    </Text>
                </View>
            </View>

            <View style={{ marginHorizontal:9}}>
                <View style={{
                    width: "100%",
                    backgroundColor: '#172647',
                    paddingVertical: 12,
                    paddingHorizontal: 12,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 2,
                    borderRadius: 5,
                }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{
                            backgroundColor: "rgba(164, 164, 164, 0.5)",
                            width: 25,
                            height: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 90
                        }}>
                            <BackIcon name="wallet"
                                style={{ fontSize: responsiveFontSize(2), color: "#fff" }}
                            />
                        </View>
                        <View style={{ paddingLeft: 5 }}>
                            <Text style={{ fontSize: responsiveFontSize(2), color: "#fff",fontWeight:"500"}}>
                                Wallet balance
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <View style={{
                            backgroundColor: "rgba(164, 164, 164, 0.5)",
                            width: 25,
                            height: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 90
                        }}>
                            <MaterialIcons name="currency-rupee"
                                style={{ fontSize: responsiveFontSize(2), color: "#fff" }}
                            />
                        </View>
                        <View style={{ paddingLeft: 5 }}>
                            <Text style={{ fontSize: responsiveFontSize(2), color: "#fff",fontWeight:"500" }}>
                                50
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 5, alignItems: "center", paddingHorizontal: 10, }}>

                <View style={{
                    backgroundColor: '#dee3ff',
                    paddingHorizontal: 5,
                    paddingVertical: 10,
                    marginTop: 5,
                    borderRadius: 5,
                    elevation: 2,
                    width: "100%"
                }}>
                    <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "400", textAlign: "justify" }}>
                        Service technician scheduled for appointment <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "700", textAlign: "justify" }}> AC Installtion</Text>
                    </Text>
                </View>
            </View>

            <View style={{ marginTop: 15, paddingHorizontal: 8, }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "600" }}>
                    Booking Summary
                </Text>
            </View>

            <View style={{ marginHorizontal: 9, marginTop: 10 }}>
                <View style={{ width: "100%", backgroundColor: "#fff", padding: 5, elevation: 5, paddingVertical: 10 }}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <MaterialIcons name="share-location"
                                style={{ color: "#172647", fontSize: responsiveFontSize(2.2), }}
                            />
                            <Text style={{
                                color: "#000",
                                fontSize: responsiveFontSize(1.9),
                                fontWeight: "500",
                                paddingLeft: 2
                            }}>
                                Address
                            </Text>

                        </View>
                        <View style={{
                            borderWidth: 0.65,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 5,
                            borderRadius: 100,
                            paddingVertical: 2
                        }}>
                            <Text
                                style={{
                                    color: "#000",
                                    fontSize: responsiveFontSize(1.4),
                                    fontWeight: "500",
                                }}>
                                Change
                            </Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 3 }}>
                        <Text style={{ color: "#000", fontSize: responsiveFontSize(2), }}>
                            sddsdsd daddad dadadad sdadd dda da dd ada dad  fdasdadadad das  a a
                        </Text>
                    </View>
                </View>
            </View>

            {/* Selected Technician Details */}
            <View style={{ marginTop: 15, paddingHorizontal: 8, }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "600" }}>
                    Selected Technician Details
                </Text>
            </View>

            <View style={{ marginHorizontal: 9, marginTop: 10 }}>
                <View style={{ width: "100%", backgroundColor: "#fff", padding: 5, elevation: 5, paddingVertical: 10 }}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <FontAwesome name="user-o"
                                style={{ color: "#172647", fontSize: responsiveFontSize(1.6), backgroundColor: "#dddddd", padding: 5, borderRadius: 150 }}
                            />

                            <Text style={{
                                color: "#000",
                                fontSize: responsiveFontSize(1.9),
                                fontWeight: "400",
                                // paddingLeft: 2,
                                paddingLeft: 5,

                            }}>
                                Pollab Kumar
                            </Text>

                        </View>


                        <View style={{

                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 7,
                            borderRadius: 100,
                            paddingVertical: 1,
                            backgroundColor: "#dddddd",
                            flexDirection: "row"
                        }}>

                            <Text
                                style={{
                                    color: "#000",
                                    fontSize: responsiveFontSize(1.4),
                                    fontWeight: "500",
                                }}>
                                4.5
                            </Text>

                            <AntDesign name="star"
                                style={{ fontSize: responsiveFontSize(1.6), color: "#172647", paddingLeft: 3 }}
                            />
                        </View>
                    </View>


                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 7, justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <AntDesign
                                name="calendar"
                                style={{ color: "#172647", fontSize: responsiveFontSize(1.6), backgroundColor: "#dddddd", padding: 5, borderRadius: 150 }}
                            />
                            <Text style={{
                                color: "#000",
                                fontSize: responsiveFontSize(1.9),
                                // fontWeight: "500",
                                paddingLeft: 2,
                                paddingLeft: 5
                            }}>
                                24-08-1998
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            {/* <MaterialIcons
                                name="currency-rupee"
                                style={{ color: "#172647", fontSize: responsiveFontSize(1.6), backgroundColor: "#dddddd", padding: 5, borderRadius: 150 }}
                            /> */}
                            <MaterialIcons
                                name="access-time"
                                style={{ color: "#172647", fontSize: responsiveFontSize(1.8), backgroundColor: "#dddddd", padding: 3, borderRadius: 150 }}
                            />
                            <Text style={{
                                color: "#000",
                                fontSize: responsiveFontSize(1.9),
                                // fontWeight: "500",
                                paddingLeft: 2,
                                paddingLeft: 5
                            }}>
                                08:00 AM
                            </Text>
                        </View>
                    </View>


                </View>
            </View>

            {/* payment details */}
            <View style={{ marginTop: 15, paddingHorizontal: 8, }}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "600" }}>
                    Payment Details
                </Text>
            </View>

            <View style={{ marginHorizontal: 8, marginTop: 10 }}>
                <View style={{ paddingVertical: 15, backgroundColor: "#dee3ff", width: "100%", }}>

                    <View style={{ width: "100%", }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 8 }}>
                            <View style={{}}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "400" }}>
                                    Technician Service Cost
                                </Text>
                            </View>
                            <View style={{}}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "600" }}>
                                    500.00
                                </Text>
                            </View>


                        </View>
                    </View>

                    <View style={{ width: "100%", paddingTop: 5, }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 8, }}>
                            <View style={{}}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "400" }}>
                                    Platform Fee
                                </Text>
                            </View>

                            <View style={{}}>
                                <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "600" }}>
                                    50.00
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingHorizontal: 8, paddingTop: 5 }}>
                        <View style={{ borderBottomColor: "#aeaeae", borderBottomWidth: 1, borderStyle: "dashed" }}>
                        </View>
                    </View>

                    <View style={{ paddingHorizontal: 8, flexDirection: "row", justifyContent: "space-between", paddingTop: 5 }}>
                        <View style={{}}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                                Total Amount
                            </Text>
                        </View>
                        <View style={{}}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "600" }}>
                                150.00
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <TouchableOpacity
            // onPress={()=>navigation.navigate("ThankYoupage")}
            onPress={()=>handlepayment()}
            style={{ paddingHorizontal: 8, position: "absolute", bottom: 5, width: "100%" }}>
                <View style={{ backgroundColor: '#172647', paddingVertical: 10, alignItems: "center", }}>
                    <Text style={{ color: "#fff", fontSize: responsiveFontSize(1.9) }}>
                        Make Payment
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default PaymentDetail

const styles = StyleSheet.create({})
