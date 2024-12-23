
// import React from 'react';
// import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/dist/MaterialIcons';
// import Icon1 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// import { useNavigation } from '@react-navigation/native';
// import { useEffect } from 'react';
// import BackIcon from 'react-native-vector-icons/dist/Entypo';
// import LinearGradient from 'react-native-linear-gradient';
// import {
//     responsiveHeight,
//     responsiveWidth,
//     responsiveFontSize
// } from "react-native-responsive-dimensions";

// const ThankYoupage = () => {

//     const navigation = useNavigation();

//     useEffect(() => {
//         setTimeout(() => {
//             navigation.navigate("Home");
//         }, 8000);
//     }, [])

//     return (
//         <LinearGradient colors={['#172647', '#4069c1']} style={{ flex: 1 }}>
//             <SafeAreaView style={{ flex: 1 }}>
//                 <StatusBar
//                     animated={true}
//                     backgroundColor="#172647"
//                     barStyle="light-content"
//                 />

//                 {/* header
//                 <View style={{ width: "100%", backgroundColor: 'transparent', paddingVertical: 12, paddingHorizontal: 12, flexDirection: "row", alignItems: "center" }}>
//                     <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: "rgba(164, 164, 164, 0.5)", width: 25, height: 25, alignItems: "center", justifyContent: "center", borderRadius: 90 }}>
//                         <BackIcon name="chevron-thin-left"
//                             style={{ fontSize: responsiveFontSize(2), color: "#fff" }}
//                         />
//                     </TouchableOpacity>
//                     <View style={{ paddingLeft: 5 }}>
//                         <Text style={{ fontSize: responsiveFontSize(2), color: "#fff" }}>
//                             Order confirmation
//                         </Text>
//                     </View>
//                 </View> */}

//                 {/* Content */}
//                 <View style={{
//                     flex: 1,
//                     backgroundColor: 'transparent',
//                     marginTop: 25,
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}>
//                     {/* Checkmark */}
//                     <Icon1 name="check-bold"
//                         style={{ color: "#fff", fontSize: responsiveFontSize(7) }}
//                     />

//                     {/* Thank you */}
//                     <Text style={{ color: "#fff", fontSize: responsiveFontSize(5.3), textAlign: "center", fontWeight: "600", marginTop: 15 }}>Thank you!</Text>

//                     <Text style={{ color: "#fff", fontWeight: "600", fontSize: responsiveFontSize(2.3), textAlign: "center", marginTop: 3 }}>Successfully Booked Technician.</Text>

//                     <Text style={{ color: "#fff", textAlign: "center", paddingHorizontal: 40, fontWeight: "500", marginTop: 35, fontSize: responsiveFontSize(2) }}>You will be redirected to the home page shortly or click here to return to the home page</Text>

//                     {/* Home Button */}
//                     <TouchableOpacity
//                         onPress={() => navigation.navigate("Dashboard")}
//                         style={{
//                             backgroundColor: "#fff",
//                             width: "30%",
//                             paddingVertical: 10,
//                             borderRadius: 50,
//                             alignSelf: "center",
//                             marginTop: 40,
//                             elevation: 3
//                         }}>
//                         <Text style={{ color: "#172647", alignSelf: "center", fontWeight: "400", fontSize: responsiveFontSize(2) }}>Home</Text>
//                     </TouchableOpacity>

//                 </View>
//             </SafeAreaView>
//         </LinearGradient>
//     )
// }
// export default ThankYoupage
// const styles = StyleSheet.create({})



import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, Animated,Image} from 'react-native';
import Icon1 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import BackIcon from 'react-native-vector-icons/dist/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const ThankYoupage = () => {

    const navigation = useNavigation();
    const [bounceValue, setBounceValue] = useState(new Animated.Value(0));

    useEffect(() => {
    //     setTimeout(() => {
    //         navigation.navigate("BookingPage");
    //     }, 8000);

        // Bounce animation
        Animated.timing(bounceValue, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true
        }).start();
    }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.navigate("Dashboard");
    //     }, 8000);
    // }, [])

    return (
        <LinearGradient colors={['#172647', '#4069c1']} style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar
                    animated={true}
                    backgroundColor="#172647"
                    barStyle="light-content"
                />

                {/* Content */}
                <View style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    marginTop: 25,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {/* Checkmark */}
                    <Animated.View style={{ transform: [{ scale: bounceValue }] }}>
                        <Image
                         source={require("../assets/c22.png")}
                         style={{width:120,height:120}}
                        />
                        {/* <Icon1 name="check-bold"
                            style={{ color: "#fff", fontSize: responsiveFontSize(7) }}
                        /> */}
                    </Animated.View>

                    {/* Thank you */}
                    <Text style={{ color: "#fff", fontSize: responsiveFontSize(5.3), textAlign: "center", fontWeight: "600", marginTop: 15 }}>Thank you!</Text>

                    <Text style={{ color: "#fff", fontWeight: "600", fontSize: responsiveFontSize(2.3), textAlign: "center", marginTop: 3 }}>Successfully Booked Technician.</Text>

                    <Text style={{ color: "#fff", textAlign: "center", paddingHorizontal: 40, fontWeight: "500", marginTop: 35, fontSize: responsiveFontSize(2) }}>You will be redirected to the booking page shortly or click here to return to the booking page</Text>

                    {/* Home Button */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("BookingPage")}
                        style={{
                            backgroundColor: "#fff",
                            width: "50%",
                            paddingVertical: 10,
                            borderRadius: 50,
                            alignSelf: "center",
                            marginTop: 40,
                            elevation: 3
                        }}>
                        <Text style={{ color: "#172647", alignSelf: "center", fontWeight: "400", fontSize: responsiveFontSize(2) }}>Booking Screen</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default ThankYoupage

const styles = StyleSheet.create({})





