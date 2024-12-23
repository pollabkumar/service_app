import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert,
    Linking,
    ActivityIndicator
} from 'react-native'
import React, { useState, useEffect } from 'react'
import Geocoder from 'react-native-geocoder';
import GetLocation, {
    Location,
    LocationError,
    LocationErrorCode,
} from 'react-native-get-location';
import BackIcon from 'react-native-vector-icons/dist/Entypo';
import Cross from 'react-native-vector-icons/dist/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/Feather';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Star from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import TabBar from '../common/TabBar'
const Vendorlist = ({ route }) => {
    console.log("route", route.params.data)
    const [selectedItem, setSelectedItem] = useState(null);
    const [show, setshow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');
    const [data, setdata] = useState('');
    const [data1, setdata1] = useState('');
    const [addres, setadd] = useState('');
    const [locationmodal, setlocationmodal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const navigation = useNavigation();
    const [open, setopen] = useState(false)
    const [open1, setopen1] = useState(false)
    // location

    const mainn = async () => {
        console.log('sdhiusahdi');
        setlocationmodal(true);
        setshow(true);
        await getdata();
    };

    const getdata = async () => {
        setLoading(true);
        setLocation(null);
        setError(null);
        await GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 30000,
            rationale: {
                title: 'Location permission',
                message: 'The app needs the permission to request your location.',
                buttonPositive: 'Ok',
            },
        })
            .then(newLocation => {
                setLocation(newLocation);
                setdata1(newLocation.latitude);
                setdata(newLocation.longitude);
                get(newLocation);
                console.log(newLocation, 'location');
                setLoading(false);
                setshow(false);
            })
            .catch(ex => {
                Alert.alert('Alert Title', 'Turn on your Location', [
                    {
                        text: 'press here',
                        onPress: () =>
                            Alert.alert(
                                Linking.sendIntent('android.settings.LOCATION_SOURCE_SETTINGS'),
                            ),
                        style: 'cancel',
                    },
                ]);
                return getCurrentPosition();
            });
    };

    function get(newLocation) {
        var NY = {
            lng: newLocation && newLocation.longitude,
            lat: newLocation && newLocation.latitude,
        };
        Geocoder.fallbackToGoogle('AIzaSyBvh5Kc_7DHsFpCj92HAKBq4F2C7J4IZEI');

        Geocoder.geocodePosition(NY)
            .then(res => {
                console.log('res', res);
                var result1 = res.reduce((unique, o) => {
                    if (
                        !unique.some(
                            obj =>
                                obj.formattedAddress === o.formattedAddress &&
                                obj.streetName === o.streetName,
                        )
                    ) {
                        unique.push(o);
                    }
                    return unique;
                }, []);
                const ressult = result1.slice(0, 3);
                setadd(ressult);
            })
            .catch(err => console.log(err));
        console.log(addres && addres, 'check new address');
    }



    const mainfunction = () => {
        setopen(false)
        setopen1(false)
        navigation.navigate("ThankYoupage")
    }

    const getNextDate = (date, daysToAdd) => {
        const currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate() + daysToAdd);
        return currentDate;
    };

    // Get current date
    const currentDate = new Date();
    // Get next two dates
    const nextDate1 = getNextDate(currentDate, 1);
    const nextDate2 = getNextDate(currentDate, 2);

    // Function to format date to "DD MMMM" format
    const formatDate = (date) => {
        const options = { day: '2-digit', month: 'long' };
        return date.toLocaleDateString('en-US', options);
    };

    // Function to format date to "DD" format
    const formatDateDay = (date) => {
        const options = { day: '2-digit' };
        return date.toLocaleDateString('en-US', options);
    };

    // Function to format date to "MMMM" format
    const formatDateMonth = (date) => {
        const options = { month: 'long' };
        return date.toLocaleDateString('en-US', options);
    };

    const getCurrentDate = () => {
        const currentDate = new Date();
        setSelectedDate(currentDate.toISOString().split('T')[0]);
    };

    useEffect(() => {
        getCurrentDate();
    }, [open]);

    // console.log("mnmnmnmn", selectedDate && selectedDate)
    const handleDateSelection = async (date) => {
        const selectedDateString = date.toISOString().split('T')[0];
        setSelectedDate(selectedDateString);
        console.log('vvvvv', selectedDateString);
        await getevent(selectedDateString);
    };

    const prefferedtimeslot = [

        { time: "08:00 AM" },
        { time: "09:00 AM" },
        { time: "10:00 AM" },
        { time: "11:00 AM" },
        { time: "12:00 AM" },
        { time: "02:00 PM" },
        { time: "03:00 PM" },
        { time: "05:00 PM" },
        { time: "06:00 PM" },

        // { time: "08:00 AM" },
        // { time: "09:00 AM" },
        // { time: "10:00 AM" },
        // { time: "11:00 AM" },
        // { time: "12:00 AM" },
        // { time: "02:00 PM" },
        // { time: "03:00 PM" },
        // { time: "05:00 PM" },
        // { time: "06:00 PM" },

    ]

    // console.log("selectedItem", selectedItem && selectedItem)



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
                        Available Vendors
                    </Text>
                </View>
            </View>


            <ScrollView>
                <View style={{
                    marginTop: 5,
                    paddingHorizontal: 10,
                }}>
                    <View
                        style={{
                            width: "100%",
                            // elevation: 2,
                            flexDirection: "row",
                            backgroundColor: "#c7cee1",
                            paddingVertical: 7,
                            paddingHorizontal: 5,
                            borderRadius: 5,
                            gap: 5
                        }}>

                        <View
                            style={{
                                width: "30%",
                                height: 115,
                                borderRadius: 7,
                                elevation: 4,
                                backgroundColor: "#fff",
                            }}>

                            <Image
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                                source={require('../assets/user.jpg')}
                                resizeMode="contain"
                            />

                        </View>

                        <View style={{ width: "67%", }}>

                            <View style={{ alignItems: "center" }}>
                                <Text style={{
                                    fontSize: responsiveFontSize(1.9),
                                    color: "#172647",
                                    borderRadius: 5,
                                    fontWeight: "900",
                                    textDecorationLine: "underline",
                                    // marginBottom: 5 
                                }}>
                                    {/* AC Service Technician */}
                                    {route.params.data} Technician
                                </Text>
                            </View>

                            <View style={{
                                // paddingLeft: 15,
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 5
                            }}>
                                <Icon
                                    name="user"
                                    style={{ fontSize: responsiveFontSize(1.5), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.6), color: "#172647", borderRadius: 5, fontWeight: "500", paddingLeft: 5 }}>
                                    Pollab Kumar
                                </Text>
                            </View>


                            <View style={{
                                // paddingLeft: 15,
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 5
                            }}>
                                <MaterialCommunityIcons
                                    name="card-account-details-star-outline"
                                    style={{ fontSize: responsiveFontSize(1.6), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />

                                <Text style={{ fontSize: responsiveFontSize(1.6), color: "#172647", borderRadius: 5, fontWeight: "500", paddingLeft: 5 }}>
                                    4.5+ years
                                </Text>
                            </View>


                            <View style={{
                                // paddingLeft: 15,
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 5,
                                justifyContent: "space-between"
                            }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <MaterialIcons
                                        name="currency-rupee"
                                        style={{ fontSize: responsiveFontSize(1.6), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                    />

                                    <Text style={{ fontSize: responsiveFontSize(1.6), color: "#000", borderRadius: 5, fontWeight: "500", paddingLeft: 5 }}>
                                        500
                                    </Text>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#d7dff2", paddingRight: 10, borderRadius: 5 }}>
                                    <Star
                                        name="star"
                                        style={{ fontSize: responsiveFontSize(1.6), color: "#000", padding: 5, borderRadius: 50 }}
                                    />

                                    <Text style={{ fontSize: responsiveFontSize(1.6), color: "#000", borderRadius: 5, fontWeight: "500", }}>
                                        4.5
                                    </Text>
                                </View>
                            </View>

                            <TouchableOpacity
                                onPress={() => setopen(true)}
                                style={{ backgroundColor: "#172647", marginTop: 14, alignItems: "center", paddingVertical: 6, borderRadius: 5 }}>
                                <Text style={{ fontSize: responsiveFontSize(1.6), color: "#fff", fontWeight: "600" }}>
                                    Book Now
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>


                <View style={{
                    marginTop: 5,
                    paddingHorizontal: 10,
                }}>
                    <View
                        style={{
                            width: "100%",
                            flexDirection: "row",
                            backgroundColor: "#c7cee1",
                            paddingVertical: 7,
                            paddingHorizontal: 5,
                            borderRadius: 5,
                            gap: 5
                        }}>

                        <View
                            style={{
                                width: "30%",
                                height: 115,
                                borderRadius: 7,
                                elevation: 4,
                                backgroundColor: "#fff",
                            }}>

                            <Image
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                                source={require('../assets/user.jpg')}
                                resizeMode="contain"
                            />

                        </View>

                        <View style={{ width: "67%", }}>
                            <View style={{ alignItems: "center" }}>
                                <Text style={{
                                    fontSize: responsiveFontSize(1.9),
                                    color: "#172647",
                                    borderRadius: 5,
                                    fontWeight: "900",
                                    textDecorationLine: "underline",
                                }}>
                                    {route.params.data} Technician
                                </Text>
                            </View>

                            <View style={{
                                // paddingLeft: 15,
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 5
                            }}>
                                <Icon
                                    name="user"
                                    style={{ fontSize: responsiveFontSize(1.5), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.6), color: "#172647", borderRadius: 5, fontWeight: "500", paddingLeft: 5 }}>
                                    Pollab Kumar
                                </Text>
                            </View>


                            <View style={{
                                // paddingLeft: 15,
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 5
                            }}>
                                <MaterialCommunityIcons
                                    name="card-account-details-star-outline"
                                    style={{ fontSize: responsiveFontSize(1.6), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />

                                <Text style={{ fontSize: responsiveFontSize(1.6), color: "#172647", borderRadius: 5, fontWeight: "500", paddingLeft: 5 }}>
                                    4.4+ years
                                </Text>
                            </View>


                            <View style={{
                                // paddingLeft: 15,
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 5,
                                justifyContent: "space-between"
                            }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <MaterialIcons
                                        name="currency-rupee"
                                        style={{ fontSize: responsiveFontSize(1.6), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                    />

                                    <Text style={{ fontSize: responsiveFontSize(1.6), color: "#000", borderRadius: 5, fontWeight: "500", paddingLeft: 5 }}>
                                        500
                                    </Text>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#d7dff2", paddingRight: 10, borderRadius: 5 }}>
                                    <Star
                                        name="star"
                                        style={{ fontSize: responsiveFontSize(1.6), color: "#000", padding: 5, borderRadius: 50 }}
                                    />

                                    <Text style={{ fontSize: responsiveFontSize(1.6), color: "#000", borderRadius: 5, fontWeight: "500", }}>
                                        4.5
                                    </Text>
                                </View>
                            </View>

                            <TouchableOpacity
                                onPress={() => setopen(true)}
                                style={{ backgroundColor: "#172647", marginTop: 14, alignItems: "center", paddingVertical: 6, borderRadius: 5 }}>
                                <Text style={{ fontSize: responsiveFontSize(1.6), color: "#fff", fontWeight: "600" }}>
                                    Book Now
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>



                <View style={{
                    marginTop: 5,
                    paddingHorizontal: 10,
                }}>
                    <View
                        style={{
                            width: "100%",
                            // elevation: 2,
                            flexDirection: "row",
                            backgroundColor: "#c7cee1",
                            paddingVertical: 7,
                            paddingHorizontal: 5,
                            borderRadius: 5,
                            gap: 5
                        }}>

                        <View
                            style={{
                                width: "30%",
                                height: 115,
                                borderRadius: 7,
                                elevation: 4,
                                backgroundColor: "#fff",
                            }}>

                            <Image
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                                source={require('../assets/user.jpg')}
                                resizeMode="contain"
                            />

                        </View>

                        <View style={{ width: "67%", }}>

                            <View style={{ alignItems: "center" }}>
                                <Text style={{
                                    fontSize: responsiveFontSize(1.9),
                                    color: "#172647",
                                    borderRadius: 5,
                                    fontWeight: "900",
                                    textDecorationLine: "underline",
                                    // marginBottom: 5 
                                }}>
                                    {route.params.data} Technician
                                </Text>
                            </View>

                            <View style={{
                                // paddingLeft: 15,
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 5
                            }}>
                                <Icon
                                    name="user"
                                    style={{ fontSize: responsiveFontSize(1.5), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.6), color: "#172647", borderRadius: 5, fontWeight: "500", paddingLeft: 5 }}>
                                    Pollab Kumar
                                </Text>
                            </View>


                            <View style={{
                                // paddingLeft: 15,
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 5
                            }}>
                                <MaterialCommunityIcons
                                    name="card-account-details-star-outline"
                                    style={{ fontSize: responsiveFontSize(1.6), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />

                                <Text style={{ fontSize: responsiveFontSize(1.6), color: "#172647", borderRadius: 5, fontWeight: "500", paddingLeft: 5 }}>
                                    4.3+ years
                                </Text>
                            </View>


                            <View style={{
                                // paddingLeft: 15,
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 5,
                                justifyContent: "space-between"
                            }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <MaterialIcons
                                        name="currency-rupee"
                                        style={{ fontSize: responsiveFontSize(1.6), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                    />

                                    <Text style={{ fontSize: responsiveFontSize(1.6), color: "#000", borderRadius: 5, fontWeight: "500", paddingLeft: 5 }}>
                                        500
                                    </Text>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#d7dff2", paddingRight: 10, borderRadius: 5 }}>
                                    <Star
                                        name="star"
                                        style={{ fontSize: responsiveFontSize(1.6), color: "#000", padding: 5, borderRadius: 50 }}
                                    />

                                    <Text style={{ fontSize: responsiveFontSize(1.6), color: "#000", borderRadius: 5, fontWeight: "500", }}>
                                        4.5
                                    </Text>
                                </View>
                            </View>

                            <TouchableOpacity
                                onPress={() => setopen(true)}
                                style={{ backgroundColor: "#172647", marginTop: 14, alignItems: "center", paddingVertical: 6, borderRadius: 5 }}>
                                <Text style={{ fontSize: responsiveFontSize(1.6), color: "#fff", fontWeight: "600" }}>
                                    Book Now
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>


                <View style={{
                    marginTop: 5,
                    paddingHorizontal: 10,
                }}>
                    <View
                        style={{
                            width: "100%",
                            // elevation: 2,
                            flexDirection: "row",
                            backgroundColor: "#c7cee1",
                            paddingVertical: 7,
                            paddingHorizontal: 5,
                            borderRadius: 5,
                            gap: 5
                        }}>

                        <View
                            style={{
                                width: "30%",
                                height: 115,
                                borderRadius: 7,
                                elevation: 4,
                                backgroundColor: "#fff",
                            }}>

                            <Image
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                                source={require('../assets/user.jpg')}
                                resizeMode="contain"
                            />

                        </View>

                        <View style={{ width: "67%", }}>

                            <View style={{ alignItems: "center" }}>
                                <Text style={{
                                    fontSize: responsiveFontSize(1.9),
                                    color: "#172647",
                                    borderRadius: 5,
                                    fontWeight: "900",
                                    textDecorationLine: "underline",
                                    // marginBottom: 5 
                                }}>
                                    {route.params.data} Technician
                                </Text>
                            </View>

                            <View style={{
                                // paddingLeft: 15,
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 5
                            }}>
                                <Icon
                                    name="user"
                                    style={{ fontSize: responsiveFontSize(1.5), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.6), color: "#172647", borderRadius: 5, fontWeight: "500", paddingLeft: 5 }}>
                                    Pollab Kumar
                                </Text>
                            </View>


                            <View style={{
                                // paddingLeft: 15,
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 5
                            }}>
                                <MaterialCommunityIcons
                                    name="card-account-details-star-outline"
                                    style={{ fontSize: responsiveFontSize(1.6), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />

                                <Text style={{ fontSize: responsiveFontSize(1.6), color: "#172647", borderRadius: 5, fontWeight: "500", paddingLeft: 5 }}>
                                    4+ years
                                </Text>
                            </View>


                            <View style={{
                                // paddingLeft: 15,
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 5,
                                justifyContent: "space-between"
                            }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <MaterialIcons
                                        name="currency-rupee"
                                        style={{ fontSize: responsiveFontSize(1.6), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                    />

                                    <Text style={{ fontSize: responsiveFontSize(1.6), color: "#000", borderRadius: 5, fontWeight: "500", paddingLeft: 5 }}>
                                        500
                                    </Text>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#d7dff2", paddingRight: 10, borderRadius: 5 }}>
                                    <Star
                                        name="star"
                                        style={{ fontSize: responsiveFontSize(1.6), color: "#000", padding: 5, borderRadius: 50 }}
                                    />

                                    <Text style={{ fontSize: responsiveFontSize(1.6), color: "#000", borderRadius: 5, fontWeight: "500", }}>
                                        4.5
                                    </Text>
                                </View>
                            </View>

                            <TouchableOpacity
                                onPress={() => setopen(true)}
                                style={{ backgroundColor: "#172647", marginTop: 14, alignItems: "center", paddingVertical: 6, borderRadius: 5 }}>
                                <Text style={{ fontSize: responsiveFontSize(1.6), color: "#fff", fontWeight: "600" }}>
                                    Book Now
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: 70 }}></View>
            </ScrollView>

            
            <Modal
                isVisible={open}
                onBackdropPress={() => setopen(false)}
                onSwipeComplete={() => setopen(false)}
                // swipeDirection={['down']}
                backdropOpacity={0.5}
                style={{ justifyContent: 'flex-end', margin: 0 }}>

                <View
                    style={{
                        // height: "auto",
                        height: "70%",
                        backgroundColor: "#fff",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: "100%",
                        borderTopLeftRadius: 18,
                        borderTopRightRadius: 18,
                        borderWidth: 0.55,
                        paddingHorizontal: 8,
                        alignItems: "center"
                    }}>
                    <TouchableOpacity
                        onPress={() => setopen(false)}
                        style={{
                            position: "absolute",
                            top: -45,
                            right: 6,
                            backgroundColor: 'rgba(164, 164, 164, 0.5)',
                            borderRadius: 50,
                            padding: 5
                        }}>
                        <Cross
                            name="cross"
                            style={{ color: "#d4d4d4", fontSize: responsiveFontSize(4), }}
                        />
                    </TouchableOpacity>

                    <ScrollView>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginTop: 17,
                                paddingHorizontal: 7,
                                alignItems: "center"
                            }}>
                            <View style={{}}>
                                <Text style={{ fontSize: responsiveFontSize(2.1), color: "#172647", fontWeight: "800" }}>
                                    Location availability.
                                </Text>
                            </View>

                            <TouchableOpacity
                                onPress={() => mainn()}
                                style={{ backgroundColor: "#c7cee1", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }}>
                                <Text style={{ fontSize: responsiveFontSize(1.6), color: "#172647", fontWeight: "500" }}>
                                    Change Location
                                </Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ marginTop: 10 }}>
                            <View style={{
                                flexDirection: "row",
                                backgroundColor: "#c7cee1",
                                elevation: 2,
                                paddingHorizontal: 5,
                                paddingVertical: 15,
                                borderRadius: 10
                            }}>
                                <View style={{ alignItems: "flex-start", paddingTop: 2 }}>
                                    <FontAwesome name="circle-o"
                                        style={{ color: "#000", fontSize: responsiveFontSize(1.9), }}
                                    />
                                </View>
                                <View style={{ paddingLeft: 5, alignItems: "flex-start" }}>
                                    <Text style={{ color: "#000", fontSize: responsiveFontSize(1.7), fontWeight: "500" }}>
                                        Sundarpur Path , Guwahati,7820145,Assam,Sundarpur Path , Guwahati,7820145,Assam
                                    </Text>

                                </View>
                            </View>
                        </View>


                        <View style={{ marginTop: 15, }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(2.5), fontWeight: "500" }}>
                                When's the technicians scheduled to arrive?
                            </Text>
                        </View>

                        {/* date */}
                        <View style={{ justifyContent: "center", marginTop: 5 }}>
                            <View style={{ width: "100%", flexDirection: "row", alignItems: "center", gap: 5, }}>

                                <LinearGradient colors={['#000', '#000']} style={{
                                    width: "20%",
                                    height: 100,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 10
                                }}>
                                    <TouchableOpacity onPress={() => handleDateSelection(currentDate)}>
                                        <Text style={{ color: "#fff", fontSize: responsiveFontSize(1.8), fontWeight: "500" }} >D{'\n'}A{'\n'}T{'\n'}E{'\n'}S</Text>
                                    </TouchableOpacity>
                                </LinearGradient>

                                <TouchableOpacity
                                    style={{ width: "25%", height: 100, borderRadius: 10, }}
                                    onPress={() => handleDateSelection(currentDate)}>
                                    <LinearGradient colors={[
                                        '#172647',
                                        '#1a304c',
                                        '#1e3951',
                                        '#224356',
                                        '#264d5b',
                                        '#2a565f',
                                        '#2e5f64'
                                    ]} style={{ width: "100%", height: 100, borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{ color: "#fff", fontSize: responsiveFontSize(2.5), fontWeight: "600" }}>{formatDateDay(currentDate)}</Text>
                                        <Text style={{ color: "#fff", fontSize: responsiveFontSize(2) }}>{formatDateMonth(currentDate)}</Text>
                                    </LinearGradient>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    style={{ width: "25%", height: 100, borderRadius: 10, }}
                                    onPress={() => handleDateSelection(nextDate1)}
                                >
                                    <LinearGradient colors={[

                                        '#172647',
                                        '#1a304c',
                                        '#1e3951',
                                        '#224356',
                                        '#264d5b',
                                        '#2a565f',
                                        '#2e5f64'
                                    ]} style={{ width: "100%", height: 100, borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                                        <TouchableOpacity onPress={() => handleDateSelection(nextDate1)}>
                                            <Text style={{ color: "#fff", fontSize: responsiveFontSize(2.5), fontWeight: "600" }}>{formatDateDay(nextDate1)}</Text>
                                            <Text style={{ color: "#fff", fontSize: responsiveFontSize(2) }}>{formatDateMonth(nextDate1)}</Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    style={{ width: "25%", height: 100, borderRadius: 10, }}
                                    onPress={() => handleDateSelection(nextDate2)}
                                >
                                    <LinearGradient colors={[

                                        '#172647',
                                        '#1a304c',
                                        '#1e3951',
                                        '#224356',
                                        '#264d5b',
                                        '#2a565f',
                                        '#2e5f64'
                                    ]} style={{ width: "100%", height: 100, borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                                        <TouchableOpacity onPress={() => handleDateSelection(nextDate2)}>
                                            <Text style={{ color: "#fff", fontSize: responsiveFontSize(2.5), fontWeight: "600" }}>{formatDateDay(nextDate2)}</Text>
                                            <Text style={{ color: "#fff", fontSize: responsiveFontSize(2) }}>{formatDateMonth(nextDate2)}</Text>
                                        </TouchableOpacity>
                                    </LinearGradient>

                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ marginTop: 5 }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(2), fontWeight: "400" }}>
                                Choose your preferred time slot.
                            </Text>
                        </View>

                        <View
                            style={{
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                flexDirection: "row",
                                gap: 6,
                                marginTop: 14,
                                marginBottom: 15
                            }}>
                            {
                                prefferedtimeslot.map((item) => {
                                    return (
                                        <TouchableOpacity style={{ width: "32%", backgroundColor: "#c7cee1", padding: 10, borderRadius: 10, alignItems: "center", }}>
                                            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "500" }}>
                                                {item.time}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>

                        {/* <TouchableOpacity
                            // onPress={() => setopen1(true)}
                            onPress={()=>navigation.navigate("PaymentDetail")}
                            style={{
                                backgroundColor: "#172647",
                                position:"absolute",
                                bottom: 1,
                                width: "100%",
                                alignItems: "center",
                                paddingVertical: 10
                            }}>
                            <Text style={{ color: "#fff" }}>
                                Process to Booking
                            </Text>
                        </TouchableOpacity> */}

                    </ScrollView>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("PaymentDetail")}
                            style={{
                                backgroundColor: "#172647",
                                width: "100%",
                                alignItems: "center",
                                paddingVertical: 10,
                                borderRadius: 20,
                                marginBottom: 15 
                            }}>
                            <Text style={{ color: "#fff" }}>
                                Process to Booking
                            </Text>
                        </TouchableOpacity>
                </View>
            </Modal>

            <Modal
                isVisible={open1}
                onBackdropPress={() => setopen1(false)}
                onSwipeComplete={() => setopen1(false)}
                // swipeDirection={['down']}
                backdropOpacity={0.5}
            // style={{ justifyContent: 'flex-end', margin: 0 }}
            >

                <View
                    style={{
                        height: 130,
                        backgroundColor: "#fff",
                        borderWidth: 0.55,
                        borderRadius: 10
                    }}>
                    <View style={{}}>
                        <View style={{
                            backgroundColor: '#172647',
                            borderRadius: 9,
                            width: "100%",
                            paddingVertical: 10,

                        }}>
                            <AntDesign
                                name="warning"
                                style={{
                                    fontSize: responsiveFontSize(3),
                                    alignSelf: "center"
                                }}
                            />
                        </View>

                        <View style={{ paddingHorizontal: 5 }}>
                            <Text style={{ color: "#000", fontSize: responsiveFontSize(2), }}>
                                User pays rupees 50 platform fee to become book technician .
                            </Text>
                        </View>

                        <View style={{ marginHorizontal: 50, marginTop: 10 }}>
                            <TouchableOpacity
                                onPress={() => mainfunction()}

                                style={{
                                    backgroundColor: '#172647',
                                    alignItems: "center",
                                    paddingVertical: 5,
                                    borderRadius: 20

                                }}>
                                <Text style={{ fontSize: responsiveFontSize(1.8), color: "#fff", fontWeight: "500" }}>
                                    Procedure for Payment
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>





                </View>
            </Modal>

            {locationmodal ? (
                <Modal animationType="slide" transparent={true} visible={true}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            // marginHorizontal: 20,
                        }}>
                        <View
                            style={{
                                backgroundColor: 'white',
                                borderRadius: 20,
                                padding: 20,
                                // alignItems: 'center',
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 4,
                                elevation: 5,
                                width: '100%',
                                height: 'auto',
                            }}>
                            <View style={{}}>
                                <Text
                                    style={{
                                        color: '#455a72',
                                        fontSize: 16,
                                    }}>
                                    Choose Your Current Location
                                </Text>
                            </View>

                            {show && show == true ? (
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        // height: '20%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <ActivityIndicator
                                        size="large"
                                        color="#000"
                                        animating={show}
                                    />
                                </View>
                            ) : (
                                // <ScrollView style={{ marginTop: 7 }}>
                                //     {addres &&
                                //         addres.map(item => {
                                //             return (
                                //                 <TouchableOpacity
                                //                     style={{ marginTop: 7, marginHorizontal: 5, }}>
                                //                     <Text
                                //                         style={{
                                //                             color: '#56575a',
                                //                             marginBottom: 13,
                                //                             // backgroundColor: '#becad8',
                                //                             backgroundColor: selectedItem === item ? '#ffc' : '#becad8',
                                //                             padding: 11,
                                //                             borderRadius: 12,
                                //                             fontSize: 15,
                                //                             elevation: 5
                                //                         }}>
                                //                         {item.formattedAddress}
                                //                     </Text>
                                //                 </TouchableOpacity>
                                //             );
                                //         })}

                                // </ScrollView>
                                <ScrollView style={{ marginTop: 7 }}>
                                    {addres &&
                                        addres.map((item, index) => {
                                            return (
                                                <TouchableOpacity
                                                    key={index}
                                                    style={{
                                                        marginTop: 7,
                                                        marginHorizontal: 5,
                                                        backgroundColor: selectedItem === item ? '#ffc' : '#becad8', // Conditional background color
                                                        borderRadius: 12,
                                                    }}
                                                    onPress={() => setSelectedItem(item)}
                                                >
                                                    <Text
                                                        style={{
                                                            color: '#56575a',
                                                            marginBottom: 13,
                                                            padding: 11,
                                                            fontSize: 15,
                                                        }}
                                                    >
                                                        {item.formattedAddress}
                                                    </Text>
                                                </TouchableOpacity>
                                            );
                                        })}
                                </ScrollView>
                            )}


                            <View
                                style={{ width: '100%', flexDirection: 'row', paddingTop: 15 }}>


                                <TouchableOpacity
                                    onPress={() => setlocationmodal(false)}
                                    style={{ width: '50%', }}
                                >
                                    <LinearGradient
                                        colors={['#5b7797', '#506884', '#3d5065', '#283442',]}
                                        style={{

                                            borderRadius: 20,
                                        }}>
                                        <TouchableOpacity activeOpacity={0.7}
                                            onPress={() => setlocationmodal(false)}
                                        >
                                            <Text
                                                style={{
                                                    color: '#fff',
                                                    textAlign: 'center',
                                                    padding: 8,
                                                    borderRightColor: '#fff',
                                                    borderRightWidth: 1,
                                                    fontSize: 15,
                                                }}>
                                                Cancel
                                            </Text>
                                        </TouchableOpacity>
                                    </LinearGradient>

                                </TouchableOpacity>



                                <TouchableOpacity
                                    onPress={() => setlocationmodal(false)}
                                    style={{ width: '50%', }}
                                >
                                    <LinearGradient
                                        colors={['#5b7797', '#506884', '#3d5065', '#283442',]}
                                        style={{
                                            // width: '50%',
                                            borderRadius: 20,
                                        }}>
                                        <TouchableOpacity
                                            onPress={() => setlocationmodal(false)}
                                            activeOpacity={0.7}

                                        >
                                            <Text
                                                style={{
                                                    color: '#fff',
                                                    textAlign: 'center',
                                                    padding: 8,
                                                    borderRightColor: '#fff',
                                                    borderRightWidth: 1,
                                                    fontSize: 15,
                                                }}>
                                                Submit
                                            </Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </View>
                </Modal>
            ) : null}
            <TabBar />
        </View>
    )
}

export default Vendorlist

const styles = StyleSheet.create({})