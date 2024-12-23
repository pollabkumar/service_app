import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView, } from 'react-native'
import React from 'react'
import BackIcon from 'react-native-vector-icons/dist/Entypo';
import StarIcon from 'react-native-vector-icons/dist/AntDesign';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { SliderBox } from "react-native-image-slider-box";
const WaterPurifiedDetails = () => {
    const bannerimages = [
        require('../assets/acbanner1.jpg'),
        require('../assets/acbanner2.jpg'),
        require('../assets/banner1.jpg'),
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
                        Water Purifier services && Repair
                    </Text>
                </View>
            </View>

            <ScrollView>

                <SliderBox
                    images={bannerimages}
                    imageLoadingColor="#e27e45"
                    // dotColor="#F29D38"
                    resizeMethod={'resize'}
                    dotStyle={{ width: 30, height: 4, marginRight: 0, marginLeft: 0 }}
                    autoplay
                    circleLoop
                    resizeMode={'cover'}
                    ImageComponentStyle={{ borderRadius: 5, marginTop: 2, backgroundColor: "#000", width: "96%", height: 165 }}
                    inactiveDotColor="#aeaeae"
                    sliderBoxHeight={120}
                    paginationBoxStyle={{
                        position: "relative",
                        bottom: 0,
                        padding: 0,
                        alignItems: "center",
                        alignSelf: "center",
                        justifyContent: "center",
                    }}
                />

                <View style={{ marginHorizontal: 10 }}>

                    {/* Install & Uninstall */}

                    <View style={{ width: "100%" }}>
                        <Text
                            style={{
                                color: "#000",
                                fontSize: responsiveFontSize(2.7),
                                fontWeight: "800"
                            }}>
                            Install & Uninstall
                        </Text>
                    </View>


                    <View style={{ width: "100%", backgroundColor: "#fff", elevation: 1, borderRadius: 5 }}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                //  marginTop: 10
                                paddingHorizontal: 7,
                                paddingVertical: 10
                            }}>

                            <View style={{ width: "60%" }}>
                                <View style={{ flexDirection: "row", }}>
                                    <StarIcon name="star" style={{ color: "#000", fontSize: responsiveFontSize(1.5), }} />
                                    <Text style={{
                                        color: "#525252",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                        paddingLeft: 4

                                    }}>
                                        4.7(1k reviews)
                                    </Text>
                                </View>

                                <View style={{ marginTop: 3 }}>
                                    <Text style={{
                                        color: "#000",
                                        fontSize: responsiveFontSize(2),
                                        fontWeight: "800"
                                    }}>
                                        Water Purifier Installation
                                    </Text>
                                </View>

                                <View style={{ marginTop: 3 }}>
                                    <Text style={{
                                        color: "#525252",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                    }}>
                                        Installation fee starts at ₹500
                                    </Text>
                                </View>

                                <View style={{ marginTop: 5 }}>

                                    <Text style={{
                                        color: "#000",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                        lineHeight: responsiveFontSize(1.1) * 2,
                                    }}>

                                        {'\u2022'} Install indoor & outdoor units, includes complimentary gas check.
                                    </Text>
                                    <Text style={{
                                        color: "#000",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                        paddingTop: 5,
                                        lineHeight: responsiveFontSize(1.1) * 2,
                                    }}>

                                        {'\u2022'} Additional expenses may apply for spare parts procurement.
                                    </Text>
                                </View>

                                <TouchableOpacity style={{
                                    backgroundColor: "#172647",
                                    marginTop: 9,
                                    paddingVertical: 5,
                                    borderRadius: 50,
                                    alignItems: "center",
                                    width: "90%",
                                    // elevation: 1
                                }}>
                                    <Text style={{
                                        color: "#fff",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "500",
                                    }}>Select Technician</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: "40%" }}>
                                <View style={{ width: "100%", height: 120, }}>
                                    <Image
                                        source={require('../assets/water12.jpg')}
                                        style={{ width: "100%", height: "100%", borderRadius: 5 }}
                                    // resizeMode="contain"
                                    />
                                </View>
                            </View>

                        </View>

                    </View>

                    <View style={{ width: "100%", backgroundColor: "#fff", elevation: 2, borderRadius: 5, marginTop: 5 }}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",

                                paddingHorizontal: 7,
                                paddingVertical: 10
                            }}>

                            <View style={{ width: "60%" }}>
                                <View style={{ flexDirection: "row", }}>
                                    <StarIcon name="star" style={{ color: "#000", fontSize: responsiveFontSize(1.5), }} />
                                    <Text style={{
                                        color: "#525252",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                        paddingLeft: 4

                                    }}>
                                        4.7(1k reviews)
                                    </Text>
                                </View>

                                <View style={{ marginTop: 3 }}>
                                    <Text style={{
                                        color: "#000",
                                        fontSize: responsiveFontSize(2),
                                        fontWeight: "800"
                                    }}>
                                        Water Purifier Uninstall
                                    </Text>
                                </View>

                                <View style={{ marginTop: 3 }}>
                                    <Text style={{
                                        color: "#525252",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                    }}>
                                        Uninstallation fee starts at ₹399
                                    </Text>
                                </View>

                                <View style={{ marginTop: 5 }}>

                                    <Text style={{
                                        color: "#000",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                        lineHeight: responsiveFontSize(1.1) * 2,
                                    }}>

                                        {'\u2022'} Uninstall both indoor and outdoor units
                                    </Text>

                                </View>

                                <TouchableOpacity style={{
                                    backgroundColor: "#172647",
                                    marginTop: 9,
                                    paddingVertical: 5,
                                    borderRadius: 50,
                                    alignItems: "center",
                                    width: "90%",
                                    // elevation: 1
                                }}>
                                    <Text style={{
                                        color: "#fff",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "500",
                                    }}>Select Technician</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: "40%" }}>
                                <View style={{ width: "100%", height: 120, }}>
                                    <Image
                                        source={require('../assets/water12.jpg')}
                                        style={{ width: "100%", height: "100%", borderRadius: 5 }}
                                        resizeMode="cover"
                                    />
                                </View>
                            </View>

                        </View>

                    </View>

                    {/* Other Services */}
                    <View style={{ width: "100%", marginTop: 10 }}>
                        <Text
                            style={{
                                color: "#000",
                                fontSize: responsiveFontSize(2.7),
                                fontWeight: "800"
                            }}>
                            Other Services
                        </Text>
                    </View>

                    <View style={{ width: "100%", backgroundColor: "#fff", elevation: 2, borderRadius: 5, marginTop: 5 }}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                paddingHorizontal: 7,
                                paddingVertical: 10
                            }}>

                            <View style={{ width: "60%" }}>
                                <View style={{ flexDirection: "row", }}>
                                    <StarIcon name="star" style={{ color: "#000", fontSize: responsiveFontSize(1.5), }} />
                                    <Text style={{
                                        color: "#525252",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                        paddingLeft: 4

                                    }}>
                                        4.7(1k reviews)
                                    </Text>
                                </View>

                                <View style={{ marginTop: 3 }}>
                                    <Text style={{
                                        color: "#000",
                                        fontSize: responsiveFontSize(2),
                                        fontWeight: "800"
                                    }}>
                                        Water Purifier full Checkup
                                    </Text>
                                </View>

                                <View style={{ marginTop: 3 }}>
                                    <Text style={{
                                        color: "#525252",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                    }}>
                                        Uninstallation fee starts at ₹399
                                    </Text>
                                </View>

                                <View style={{ marginTop: 5 }}>

                                    <Text style={{
                                        color: "#000",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                        lineHeight: responsiveFontSize(1.1) * 2,
                                    }}>

                                        {'\u2022'} Install indoor & outdoor units, includes complimentary gas check.
                                    </Text>
                                    <Text style={{
                                        color: "#000",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                        paddingTop: 5,
                                        lineHeight: responsiveFontSize(1.1) * 2,
                                    }}>

                                        {'\u2022'} Additional expenses may apply for spare parts procurement.
                                    </Text>
                                </View>

                                <TouchableOpacity style={{
                                    backgroundColor: "#172647",
                                    marginTop: 9,
                                    paddingVertical: 5,
                                    borderRadius: 50,
                                    alignItems: "center",
                                    width: "90%",
                                    // elevation: 1
                                }}>
                                    <Text style={{
                                        color: "#fff",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "500",
                                    }}>Select Technician</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: "40%" }}>
                                <View style={{ width: "100%", height: 120, }}>
                                    <Image
                                        source={require('../assets/water32.jpg')}
                                        style={{ width: "100%", height: "100%", borderRadius: 5 }}
                                        resizeMode="cover"
                                    />
                                </View>
                            </View>

                        </View>

                    </View>

                    <View style={{ width: "100%", backgroundColor: "#fff", elevation: 1, borderRadius: 5 }}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                //  marginTop: 10
                                paddingHorizontal: 7,
                                paddingVertical: 10
                            }}>

                            <View style={{ width: "60%" }}>
                                <View style={{ flexDirection: "row", }}>
                                    <StarIcon name="star" style={{ color: "#000", fontSize: responsiveFontSize(1.5), }} />
                                    <Text style={{
                                        color: "#525252",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                        paddingLeft: 4

                                    }}>
                                        4.7(1k reviews)
                                    </Text>
                                </View>

                                <View style={{ marginTop: 3 }}>
                                    <Text style={{
                                        color: "#000",
                                        fontSize: responsiveFontSize(2),
                                        fontWeight: "800"
                                    }}>
                                        Water Purifier Repair
                                    </Text>
                                </View>

                                <View style={{ marginTop: 3 }}>
                                    <Text style={{
                                        color: "#525252",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                    }}>
                                        Installation fee starts at ₹500
                                    </Text>
                                </View>

                                <View style={{ marginTop: 5 }}>

                                    <Text style={{
                                        color: "#000",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                        lineHeight: responsiveFontSize(1.1) * 2,
                                    }}>

                                        {'\u2022'} Install indoor & outdoor units, includes complimentary gas check.
                                    </Text>
                                    <Text style={{
                                        color: "#000",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "400",
                                        paddingTop: 5,
                                        lineHeight: responsiveFontSize(1.1) * 2,
                                    }}>

                                        {'\u2022'} Additional expenses may apply for spare parts procurement.
                                    </Text>
                                </View>

                                <TouchableOpacity style={{
                                    backgroundColor: "#172647",
                                    marginTop: 9,
                                    paddingVertical: 5,
                                    borderRadius: 50,
                                    alignItems: "center",
                                    width: "90%",
                                    // elevation: 1
                                }}>
                                    <Text style={{
                                        color: "#fff",
                                        fontSize: responsiveFontSize(1.5),
                                        fontWeight: "500",
                                    }}>Select Technician</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: "40%" }}>
                                <View style={{ width: "100%", height: 120, }}>
                                    <Image
                                        source={require('../assets/water1.jpg')}
                                        style={{ width: "100%", height: "100%", borderRadius: 5 }}
                                        resizeMode="stretch"
                                    />
                                </View>
                            </View>

                        </View>

                    </View>


                </View>

            </ScrollView>

        </View>
    )
}

export default WaterPurifiedDetails

const styles = StyleSheet.create({})