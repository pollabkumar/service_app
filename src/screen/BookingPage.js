import { StyleSheet, Text, View, StatusBar, Image, Linking, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import BackIcon from 'react-native-vector-icons/dist/Entypo';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import {
  responsiveFontSize
} from "react-native-responsive-dimensions";
import TabBar from '../common/TabBar'
const BookingPage = () => {
  const navigation = useNavigation();
  const dialCall = () => {

    Linking.openURL(`tel:${9523568412}`);
  };
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
              Booking List
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("CompletedVendorList")}
          style={{
            backgroundColor: 'rgba(164, 164, 164, 0.5)',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 80
          }}>
          <Text style={{ fontSize: responsiveFontSize(1.5), color: "#fff", fontWeight: "500" }}>
            Previous Bookings
          </Text>
        </TouchableOpacity>

      </View>

      <ScrollView>

        <View style={{ marginHorizontal: 8, marginTop: 4 }}>
          <View style={{ width: "100%", backgroundColor: "#d7dff2", padding: 15, flexDirection: "row", borderRadius: 10 }}>

            {/* Image Section */}
            <View style={{ width: "30%", overflow: "hidden", }}>
              <Image
                source={require('../assets/ac2.jpg')}
                style={{ height: 115, width: "100%", borderRadius: 10, }}
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
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                <MaterialCommunityIcons
                  name="card-account-details-star-outline"
                  style={{ fontSize: responsiveFontSize(1.8), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                />
                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                  4.5+ years
                </Text>
              </View>

              {/* Service Name */}
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>

                <Icon
                  name="briefcase"
                  style={{ fontSize: responsiveFontSize(1.8), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                />
                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                  AC Installation
                </Text>
              </View>

              {/* Service Name */}
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5, justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                  <Feather
                    name="phone-call"
                    style={{ fontSize: responsiveFontSize(1.8), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                  />
                  <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                    9523568412
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => dialCall()}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#4CAF50",
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    // borderRadius:5
                  }}>
                  <Text style={{ fontSize: responsiveFontSize(1.6), color: "#fff", fontWeight: "500", }}>
                    call now
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Pending Button */}
              <TouchableOpacity
                style={{
                  backgroundColor: "#172647",
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  borderRadius: 5,
                  marginTop: 10,
                  alignItems: "center"
                }}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}> Booking confirmed</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: 8, marginTop: 4 }}>
          <View style={{ width: "100%", backgroundColor: "#d7dff2", padding: 15, flexDirection: "row", borderRadius: 10 }}>

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
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                <MaterialCommunityIcons
                  name="card-account-details-star-outline"
                  style={{ fontSize: responsiveFontSize(1.8), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                />
                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                  4.5+ years
                </Text>
              </View>

              {/* Service Name */}
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>

                <Icon
                  name="briefcase"
                  style={{ fontSize: responsiveFontSize(1.8), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                />
                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                  AC Installation
                </Text>
              </View>

              {/* Pending Button */}
              <TouchableOpacity
                style={{
                  backgroundColor: "#172647",
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  borderRadius: 5,
                  marginTop: 10,
                  alignItems: "center"
                }}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>Pending</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: 8, marginTop: 4 }}>
          <View style={{ width: "100%", backgroundColor: "#d7dff2", padding: 15, flexDirection: "row", borderRadius: 10 }}>

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
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                <MaterialCommunityIcons
                  name="card-account-details-star-outline"
                  style={{ fontSize: responsiveFontSize(1.8), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                />
                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                  4.5+ years
                </Text>
              </View>

              {/* Service Name */}
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>

                <Icon
                  name="briefcase"
                  style={{ fontSize: responsiveFontSize(1.8), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                />
                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                  AC Installation
                </Text>
              </View>

              {/* Pending Button */}
              <TouchableOpacity
                style={{
                  backgroundColor: "#172647",
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  borderRadius: 5,
                  marginTop: 10,
                  alignItems: "center"
                }}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>Pending</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>

        <View style={{ marginBottom: 70 }}>
        </View>
      </ScrollView>

      <TabBar />

    </View>
  )
}

export default BookingPage

const styles = StyleSheet.create({})