import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    Linking,
    ActivityIndicator
} from 'react-native'
import React, { useState, useEffect } from 'react'
import BackIcon from 'react-native-vector-icons/dist/Entypo';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Cross from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

import LinearGradient from 'react-native-linear-gradient';
import {
    responsiveFontSize
} from "react-native-responsive-dimensions";
import TabBar from '../common/TabBar'
import { Rating } from 'react-native-ratings';
import Modal from "react-native-modal";
import Geocoder from 'react-native-geocoder';
import GetLocation, {
    Location,
    LocationError,
    LocationErrorCode,
} from 'react-native-get-location';
const RejectedBooking = () => {
    const [show, setshow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');
    const [data, setdata] = useState('');
    const [data1, setdata1] = useState('');
    const [addres, setadd] = useState('');
    const [locationmodal, setlocationmodal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [open, setopen] = useState(false)
    const [ratingmodelopen, setratingmodelopen] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null);
    const navigation = useNavigation();

    const mainfunction = () => {
        setopen(false)
        // setopen1(false)
        navigation.navigate("ThankYoupage")
    }

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

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <StatusBar
                animated={true}
                backgroundColor='#172647'
                translucent={false}
            />

            <View style={{
                width: "100%",
                backgroundColor: '#172647',
                paddingVertical: 12,
                paddingHorizontal: 12,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"

            }}>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ backgroundColor: "rgba(164, 164, 164, 0.5)", width: 25, height: 25, alignItems: "center", justifyContent: "center", borderRadius: 90 }}>
                        <BackIcon name="chevron-thin-left"
                            style={{ fontSize: responsiveFontSize(2), color: "#fff" }}
                        />
                    </View>
                    <View style={{ paddingLeft: 5 }}>
                        <Text style={{ fontSize: responsiveFontSize(2), color: "#fff" }}>
                        Denied Bookings
                        </Text>
                    </View>
                </View>
            </View>

            <ScrollView>
                <View style={{ marginHorizontal: 8, marginTop: 4 }}>
                    <View style={{ width: "100%", backgroundColor: "#d7dff2", padding: 10, flexDirection: "row", borderRadius: 10 }}>

                        {/* Image Section */}
                        <View style={{ width: "30%", height: 115, borderRadius: 10, overflow: "hidden" }}>
                            <Image
                                source={require('../assets/ac2.jpg')}
                                style={{ height: "100%", width: "100%" }}
                                resizeMode="cover"
                            />

                        </View>

                        {/* Details Section */}
                        <View style={{ width: "70%", paddingLeft: 10 }}>
                            {/* Name */}
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Icon
                                    name="user-o"
                                    style={{
                                        fontSize: responsiveFontSize(1.8),
                                        color: "#172647",
                                        backgroundColor: "#d7dff2", padding: 5, borderRadius: 50
                                    }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                                    Pollab Kumar
                                </Text>
                            </View>

                            {/* Experience */}
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
                                <MaterialCommunityIcons
                                    name="card-account-details-star-outline"
                                    style={{ fontSize: responsiveFontSize(1.8), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                                    4.5+ years
                                </Text>
                            </View>

                            {/* Service Name */}
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>

                                <Icon
                                    name="briefcase"
                                    style={{ fontSize: responsiveFontSize(1.8), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                                    AC Installation
                                </Text>
                            </View>

                            {/*price*/}
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
                                <MaterialIcons
                                    name="currency-rupee"
                                    style={{ fontSize: responsiveFontSize(2), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                                    500
                                </Text>
                            </View>

                            {/* Status and Action Buttons */}
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 10,
                                width: "100%",
                                // backgroundColor:"red",

                            }}>


                                {/* Book Now */}
                                <TouchableOpacity
                                    onPress={() => setopen(true)}
                                    style={{
                                        backgroundColor: "#172647",
                                        paddingVertical: 8,
                                        paddingHorizontal: 15,
                                        borderRadius: 5,
                                        alignItems: "center",
                                        width: "100%",
                                        marginLeft: 4
                                    }}>
                                    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: responsiveFontSize(1.7) }}>Schedule Again</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginHorizontal: 8, marginTop: 4 }}>
                    <View style={{ width: "100%", backgroundColor: "#d7dff2", padding: 10, flexDirection: "row", borderRadius: 10 }}>

                        {/* Image Section */}
                        <View style={{ width: "30%", height: 115, borderRadius: 10, overflow: "hidden" }}>
                            <Image
                                source={require('../assets/ac2.jpg')}
                                style={{ height: "100%", width: "100%" }}
                                resizeMode="cover"
                            />

                        </View>

                        {/* Details Section */}
                        <View style={{ width: "70%", paddingLeft: 10 }}>
                            {/* Name */}
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Icon
                                    name="user-o"
                                    style={{
                                        fontSize: responsiveFontSize(1.8),
                                        color: "#172647",
                                        backgroundColor: "#d7dff2", padding: 5, borderRadius: 50
                                    }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                                    Pollab Kumar
                                </Text>
                            </View>

                            {/* Experience */}
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
                                <MaterialCommunityIcons
                                    name="card-account-details-star-outline"
                                    style={{ fontSize: responsiveFontSize(1.8), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                                    4.5+ years
                                </Text>
                            </View>

                            {/* Service Name */}
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>

                                <Icon
                                    name="briefcase"
                                    style={{ fontSize: responsiveFontSize(1.8), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                                    AC Installation
                                </Text>
                            </View>

                            {/*price*/}
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
                                <MaterialIcons
                                    name="currency-rupee"
                                    style={{ fontSize: responsiveFontSize(2), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                                    500
                                </Text>
                            </View>

                            {/* Status and Action Buttons */}
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 10,
                                width: "100%",
                                // backgroundColor:"red",

                            }}>


                                {/* Book Now */}
                                <TouchableOpacity
                                    onPress={() => setopen(true)}
                                    style={{
                                        backgroundColor: "#172647",
                                        paddingVertical: 8,
                                        paddingHorizontal: 15,
                                        borderRadius: 5,
                                        alignItems: "center",
                                        width: "100%",
                                        marginLeft: 4
                                    }}>
                                    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: responsiveFontSize(1.7) }}>Schedule Again</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginHorizontal: 8, marginTop: 4 }}>
                    <View style={{ width: "100%", backgroundColor: "#d7dff2", padding: 10, flexDirection: "row", borderRadius: 10 }}>

                        {/* Image Section */}
                        <View style={{ width: "30%", height: 115, borderRadius: 10, overflow: "hidden" }}>
                            <Image
                                source={require('../assets/ac2.jpg')}
                                style={{ height: "100%", width: "100%" }}
                                resizeMode="cover"
                            />

                        </View>

                        {/* Details Section */}
                        <View style={{ width: "70%", paddingLeft: 10 }}>
                            {/* Name */}
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Icon
                                    name="user-o"
                                    style={{
                                        fontSize: responsiveFontSize(1.8),
                                        color: "#172647",
                                        backgroundColor: "#d7dff2", padding: 5, borderRadius: 50
                                    }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                                    Pollab Kumar
                                </Text>
                            </View>

                            {/* Experience */}
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
                                <MaterialCommunityIcons
                                    name="card-account-details-star-outline"
                                    style={{ fontSize: responsiveFontSize(1.8), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                                    4.5+ years
                                </Text>
                            </View>

                            {/* Service Name */}
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>

                                <Icon
                                    name="briefcase"
                                    style={{ fontSize: responsiveFontSize(1.8), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                                    AC Installation
                                </Text>
                            </View>

                            {/*price*/}
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
                                <MaterialIcons
                                    name="currency-rupee"
                                    style={{ fontSize: responsiveFontSize(2), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                                    500
                                </Text>
                            </View>

                            {/* Status and Action Buttons */}
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 10,
                                width: "100%",
                                // backgroundColor:"red",

                            }}>


                                {/* Book Now */}
                                <TouchableOpacity
                                    onPress={() => setopen(true)}
                                    style={{
                                        backgroundColor: "#172647",
                                        paddingVertical: 8,
                                        paddingHorizontal: 15,
                                        borderRadius: 5,
                                        alignItems: "center",
                                        width: "100%",
                                        marginLeft: 4
                                    }}>
                                    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: responsiveFontSize(1.7) }}>Schedule Again</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginHorizontal: 8, marginTop: 4 }}>
                    <View style={{ width: "100%", backgroundColor: "#d7dff2", padding: 10, flexDirection: "row", borderRadius: 10 }}>

                        {/* Image Section */}
                        <View style={{ width: "30%", height: 115, borderRadius: 10, overflow: "hidden" }}>
                            <Image
                                source={require('../assets/ac2.jpg')}
                                style={{ height: "100%", width: "100%" }}
                                resizeMode="cover"
                            />

                        </View>

                        {/* Details Section */}
                        <View style={{ width: "70%", paddingLeft: 10 }}>
                            {/* Name */}
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Icon
                                    name="user-o"
                                    style={{
                                        fontSize: responsiveFontSize(1.8),
                                        color: "#172647",
                                        backgroundColor: "#d7dff2", padding: 5, borderRadius: 50
                                    }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                                    Pollab Kumar
                                </Text>
                            </View>

                            {/* Experience */}
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
                                <MaterialCommunityIcons
                                    name="card-account-details-star-outline"
                                    style={{ fontSize: responsiveFontSize(1.8), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                                    4.5+ years
                                </Text>
                            </View>

                            {/* Service Name */}
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>

                                <Icon
                                    name="briefcase"
                                    style={{ fontSize: responsiveFontSize(1.8), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                                    AC Installation
                                </Text>
                            </View>

                            {/*price*/}
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
                                <MaterialIcons
                                    name="currency-rupee"
                                    style={{ fontSize: responsiveFontSize(2), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                                />
                                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                                    500
                                </Text>
                            </View>

                            {/* Status and Action Buttons */}
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 10,
                                width: "100%",
                                // backgroundColor:"red",

                            }}>


                                {/* Book Now */}
                                <TouchableOpacity
                                    onPress={() => setopen(true)}
                                    style={{
                                        backgroundColor: "#172647",
                                        paddingVertical: 8,
                                        paddingHorizontal: 15,
                                        borderRadius: 5,
                                        alignItems: "center",
                                        width: "100%",
                                        marginLeft: 4
                                    }}>
                                    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: responsiveFontSize(1.7) }}>Schedule Again</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </View>


                <View style={{ marginBottom: 70 }}>
                </View>
            </ScrollView>

            <TabBar />

            {
                ratingmodelopen ? (
                    <Modal animationType="slide" transparent={true} visible={true}>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginHorizontal: 20,
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
                                    <Text style={{ color: "#172647", fontSize: responsiveFontSize(1.50), }}>Rate Your Celestial Experience: Review and Share Your Insights with Our Astrologer!</Text>
                                </View>


                                <Rating
                                    type='custom'
                                    // ratingImage={WATER_IMAGE}
                                    ratingColor="#172647"
                                    showRating={true}
                                    ratingTextColor='#172647'
                                    ratingBackgroundColor='#fff'
                                    ratingCount={5}
                                    imageSize={35}
                                    // tintColor="red" 
                                    // size={10}
                                    review
                                    fractions={1}
                                    jumpValue={0.5}

                                    // startingValue={reviewstore && reviewstore} 22
                                    // onStartRating={ratingg => console.log(`inital : ${ratingg}`)}
                                    // onFinishRating={ value => setreviewstore(value)} 22
                                    // onSwipeRating={value => setreviewstore(value)}
                                    // imageSize={30}
                                    containerStyle={{ width: 140 }}
                                    style={{ paddingVertical: 10, marginRight: 5 }}
                                />
                                {/* {
                                      errormsg && errormsg ?
                                      <View style={{}}>
                                      <Text style={{ color: "red", fontSize: responsiveFontSize(1.50), paddingTop: 2 }}>
                                          {errormsg && errormsg.rating}
                                      </Text>
                                  </View>
                                  :
                                  "" 
                      } */}

                                <View style={{ width: '95%' }}>
                                    <Text style={{ color: '#000', fontSize: responsiveFontSize(2) }}>
                                        Remark
                                    </Text>

                                    <TextInput
                                        placeholder="Write Something"
                                        placeholderTextColor={'#6F7074'}
                                        onChangeText={(text) => setremark(text)}
                                        style={{
                                            width: '100%',
                                            borderBottomWidth: 0.29,
                                            borderBottomColor: "#a1bdc8",
                                            marginTop: 5,

                                            padding: 0,
                                            fontSize: responsiveFontSize(1.85),
                                            color: '#000',
                                            fontWeight: '300',
                                        }}
                                    />
                                </View>

                                <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 15, gap: 5 }}>

                                    <TouchableOpacity
                                        onPress={() => setratingmodelopen(false)}
                                        style={{ width: "50%", borderWidth: 1, alignItems: "center", paddingVertical: 7, borderRadius: 6, borderColor: "#172647" }}>
                                        <Text style={{ color: "#172647", alignItems: "center", fontSize: responsiveFontSize(1.85), }}>
                                            Cancel
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => setratingmodelopen(false)}
                                        style={{ width: "50%", alignItems: "center", paddingVertical: 7, borderRadius: 6, backgroundColor: "#172647" }}>
                                        <Text style={{ color: "#fff", alignItems: "center", fontSize: responsiveFontSize(1.85), fontWeight: "500" }}>
                                            Submit
                                        </Text>
                                    </TouchableOpacity>
                                </View>


                            </View>
                        </View>
                    </Modal>
                ) : null
            }

            {/* book now */}
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

            {
                locationmodal ? (
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
                ) : null
            }

        </View>
    )
}

export default RejectedBooking

const styles = StyleSheet.create({})
