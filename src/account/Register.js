

import { StyleSheet, Text, View, ImageBackground, StatusBar, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Email from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import UserIcon from 'react-native-vector-icons/dist/AntDesign';
import PasswordIcon from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const Register = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../assets/login1221.png')}
      style={styles.background}
    >
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        translucent
      />
      <View style={{ height: "50%", }}>

      </View>

      <View style={{
        height: "50%",
        //  paddingTop: 20,
        backgroundColor: '#fff',
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45,
        marginHorizontal: 15
      }}>

        <View style={{ marginTop: "5%", }}>
          <View style={{ flexDirection: "row", paddingTop: 5, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "#11192d", fontSize: responsiveFontSize(2.8), fontWeight: "800" }}>
              Hi,
            </Text>
            <Text style={{ color: "#182033", fontSize: responsiveFontSize(2.8), fontWeight: "800" }}>
              Welcome
            </Text>
          </View>

          <View style={{ paddingTop: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "300" }}>
              Sign Up Your Account
            </Text>
          </View>
        </View>

        {/* User name  */}
        <View style={{ marginTop: "7%", alignItems: "center" }}>
          <View style={{ width: "95%", borderBottomWidth: 0.55, paddingBottom: 5, borderColor: "#fff", }}>
            <View style={{ alignItems: 'center', }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'center',
                marginBottom: -15,
                backgroundColor: "#f3f3f3",
                borderRadius: 50,
                paddingHorizontal: 17,
                elevation: 5
              }}>
                <View style={{ borderRightWidth: .35, borderColor: "#fff", paddingRight: 5 }}>
                  <UserIcon name="user"
                    style={{
                      marginRight: 2,
                      fontSize: responsiveFontSize(2.3),
                      paddingBottom: 0,
                      color: "#9e9e9e",

                    }}
                  />

                </View>
                <TextInput
                  placeholder="Enter Your Name*"
                  placeholderTextColor={'#9e9e9e'}
                  style={{
                    flex: 1,
                    color: "#9e9e9e",
                    fontSize: responsiveFontSize(1.8),
                    paddingLeft: 5,


                  }}
                />
              </View>
            </View>
          </View>
        </View>



        {/* email */}
        <View style={{ marginTop: "7%", alignItems: "center" }}>
          <View style={{ width: "95%", borderBottomWidth: 0.55, paddingBottom: 5, borderColor: "#fff", }}>
            <View style={{ alignItems: 'center', }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'center',
                marginBottom: -15,
                backgroundColor: "#f3f3f3",
                borderRadius: 50,
                paddingHorizontal: 17,
                elevation: 5
              }}>
                <View style={{ borderRightWidth: .35, borderColor: "#fff", paddingRight: 5 }}>
                  <Email name="email-edit-outline"
                    style={{
                      marginRight: 2,
                      fontSize: responsiveFontSize(2.3),
                      paddingBottom: 0,
                      color: "#9e9e9e",

                    }}
                  />

                </View>
                <TextInput
                  placeholder="Enter Email Address *"
                  placeholderTextColor={'#9e9e9e'}
                  style={{
                    flex: 1,
                    color: "#9e9e9e",
                    fontSize: responsiveFontSize(1.8),
                    paddingLeft: 5,


                  }}
                />
              </View>
            </View>
          </View>
        </View>

        {/* password */}
        <View style={{ marginTop: "7%", alignItems: "center" }}>
          <View style={{ width: "95%", borderBottomWidth: 0.55, paddingBottom: 5, borderColor: "#fff", }}>

            <View style={{ alignItems: 'center', }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'center',
                marginBottom: -15,
                backgroundColor: "#f3f3f3",
                borderRadius: 50,
                paddingHorizontal: 17,
                elevation: 5
              }}>
                <View style={{ borderRightWidth: .35, borderColor: "#fff", paddingRight: 5 }}>
                  <PasswordIcon name="unlock"
                    style={{
                      marginRight: 2,
                      fontSize: responsiveFontSize(2.3),
                      paddingBottom: 0,
                      color: "#9e9e9e",

                    }}
                  />

                </View>
                <TextInput
                  placeholder="Enter Password *"
                  placeholderTextColor={'#9e9e9e'}
                  style={{
                    flex: 1,
                    color: "#000",
                    fontSize: responsiveFontSize(1.8),
                    paddingLeft: 5,


                  }}
                />
              </View>
            </View>
          </View>
        </View>

        {/* button */}
        <View style={{
          marginTop: "7%",
          marginHorizontal: 15
        }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              fontSize: responsiveFontSize(2),
              backgroundColor: "#172647",
              paddingVertical: 13,
              alignItems: "center",
              marginTop: 15,
              borderRadius: 50,
              elevation: 3,

            }}>
            <Text style={{ fontSize: responsiveFontSize(2), color: "#fff", fontWeight: "800", }}>
              Sign Up
            </Text>
          </TouchableOpacity>

        </View>


        {/* dont have an acount */}
        <View style={{ marginTop: 9, alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
          <View>
            <Text style={{
              fontSize: responsiveFontSize(1.7),
              color: "#cacaca",
              borderColor: "#cacaca",

              fontWeight: "500"
            }}>
              Already Have An Acount ?
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{ marginLeft: 5 }}>
            <Text style={{
              borderBottomWidth: 0.5,
              paddingBottom: 2,
              fontSize: responsiveFontSize(1.8),
              color: "#172647",
              fontWeight: "600",
              borderColor: "#172647"
            }}>Sign In</Text>

          </TouchableOpacity>
        </View>

      </View>


    </ImageBackground>
  )
}

export default Register

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    // #050b94
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

