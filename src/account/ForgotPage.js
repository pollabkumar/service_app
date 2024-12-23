
import { StyleSheet, Text, View, ImageBackground, StatusBar, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Email from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
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
            Forgot Your Password
            </Text>
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
                  <MaterialIcons name="mobile-screen-share"
                    style={{
                      marginRight: 2,
                      fontSize: responsiveFontSize(2.3),
                      paddingBottom: 0,
                      color: "#9e9e9e",

                    }}
                  />

                </View>
                <TextInput
                  placeholder="Enter OTP *"
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
                <MaterialCommunityIcons name="lock-check-outline"
                    style={{
                      marginRight: 2,
                      fontSize: responsiveFontSize(2.3),
                      paddingBottom: 0,
                      color: "#9e9e9e",

                    }}
                  />
                </View>
                <TextInput
                  placeholder="Enter New Password *"
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
              Submit
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
              Return to login screen  ?
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



// import { StyleSheet, Text, View, ImageBackground, StatusBar, TextInput, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// import Email from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// import PasswordIcon from 'react-native-vector-icons/dist/AntDesign';
// import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// import {
//   responsiveHeight,
//   responsiveWidth,
//   responsiveFontSize
// } from "react-native-responsive-dimensions";
// const ForgotPage = () => {
//   return (
//     <ImageBackground
//       source={require('../assets/login1221.png')}
//       style={styles.background}
//     >
//       <StatusBar
//         animated={true}
//         backgroundColor="transparent"
//         translucent
//       />
//          <View style={{ height: "50%", }}>
//         <View style={{ marginTop: "33%", alignItems:"flex-end",paddingRight:15}}>
//           <Text style={{ fontSize: responsiveFontSize(3.3), fontWeight: "500", color: "#fff",alignItems:"flex-start" }}>
//             Forgot Password
//           </Text>
//           <Text style={{ fontSize: responsiveFontSize(1.8), paddingLeft: 7, color: "#fff",paddingTop:1}}>
//           Create New Password Here
//           </Text>
//         </View>
//       </View>
//       <View style={{ height: "50%", paddingTop: 16, marginHorizontal: 15 }}>
      
//         <View style={{ marginTop:"15%" }}>
//           <View style={{ width: "100%", borderBottomWidth: 0.55, paddingBottom: 5 ,borderColor:"#6d71c1"}}>
//             <Text style={{ color: '#050b94', fontSize: responsiveFontSize(2), marginBottom: -6,fontWeight:"500" }}>Email *</Text>


//             <View style={{ alignItems: 'center' }}>
//               <View style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
              
//                 width: '100%',
//                 justifyContent: 'center',
        
//                 marginBottom: -15,
//               }}>
//               <View style={{borderRightWidth:.35,borderColor:"#000",paddingRight:4}}>
//                 <Email name="email-edit-outline"
//                   style={{
//                     marginRight: 2,
//                     fontSize: responsiveFontSize(2.3),
//                     paddingBottom: 0,
//                     color:"#3e4190",
                   
//                   }}
//                    />

//               </View>
//                 <TextInput
//                   placeholder="Enter email address *"
//                   placeholderTextColor={'#3e4190'}
//                   style={{
//                     flex: 1,
//                     color: "#000",
//                     fontSize: responsiveFontSize(1.8),
//                     paddingLeft:5
                    
//                   }}
//                 />
//               </View>
//             </View>
//           </View>
//         </View>

//         <View style={{ marginTop: 25 }}>
//           <View style={{ width: "100%", borderBottomWidth: 0.55, paddingBottom: 5,borderColor:"#6d71c1" }}>
//             <Text style={{ color: '#050b94', fontSize: responsiveFontSize(2), marginBottom: -6,fontWeight:"500" }}>Enter OTP*</Text>
//             <View style={{ alignItems: 'center' }}>
//               <View style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 width: '100%',
//                 justifyContent: 'center',
//                 marginBottom: -15,
//               }}>
//               <View style={{borderRightWidth:.35,borderColor:"#000",paddingRight:4}}>
//                 <MaterialIcons name="mobile-screen-share"
//                   style={{
//                     marginRight: 2,
//                     fontSize: responsiveFontSize(2.3),
//                     paddingBottom: 0,
//                     color:"#3e4190",
                   
//                   }}
//                    />

//               </View>

//                 <TextInput
//                   placeholder="Enter Your 6 Digit OTP *"
//                   placeholderTextColor={'#3e4190'}
//                   style={{
//                     flex: 1,
//                     color: "#000",
//                     fontSize: responsiveFontSize(1.8),
//                     paddingLeft:5
                    
//                   }}
//                 />

//               </View>
//             </View>
//           </View>
//         </View>

//         <View style={{ marginTop: 25 }}>
//           <View style={{ width: "100%", borderBottomWidth: 0.55, paddingBottom: 5,borderColor:"#6d71c1" }}>
//             <Text style={{ color: '#050b94', fontSize: responsiveFontSize(2), marginBottom: -6,fontWeight:"500" }}>Enter New Password*</Text>
//             <View style={{ alignItems: 'center' }}>
//               <View style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 width: '100%',
//                 justifyContent: 'center',
//                 marginBottom: -15,
//               }}>
//               <View style={{borderRightWidth:.35,borderColor:"#000",paddingRight:4}}>
//                 <MaterialCommunityIcons name="lock-check-outline"
//                   style={{
//                     marginRight: 2,
//                     fontSize: responsiveFontSize(2.3),
//                     paddingBottom: 0,
//                     color:"#3e4190",
                   
//                   }}
//                    />

//               </View>

//                 <TextInput
//                   placeholder="Enter New Password *"
//                   placeholderTextColor={'#3e4190'}
//                   style={{
//                     flex: 1,
//                     color: "#000",
//                     fontSize: responsiveFontSize(1.8),
//                     paddingLeft:5
                    
//                   }}
//                 />

//               </View>
//             </View>
//           </View>
//         </View>

//         {/* button */}
//         <TouchableOpacity
//           style={{
//             fontSize: responsiveFontSize(2),
//             backgroundColor: "#050b94",
//             paddingVertical: 9,
//             alignItems: "center",
//             marginTop: 25,
//             borderRadius: 7,
//             elevation: 3,
           
//           }}>
//           <Text style={{ fontSize: responsiveFontSize(2), color: "#fff", fontWeight: "800",}}>
//             Submit 
//           </Text>
//         </TouchableOpacity>


//        {/* dont have an acount */}
//        <View style={{ marginTop:5, alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
//           <View>
//             <Text style={{
//               fontSize: responsiveFontSize(1.7),
//               color: "#414598",
//               borderColor: "#6d71c1",

//               fontWeight: "500"
//             }}>
//               Already have account ?
//             </Text>
//           </View>

//           <TouchableOpacity style={{ marginLeft: 5 }}>
//             <Text style={{
//               borderBottomWidth: 0.5,
//               paddingBottom: 2,
//               fontSize: responsiveFontSize(1.8),
//               color: "#414598",
//               fontWeight: "600",
//               borderColor:"#414598"
//             }}>Sign In
//             </Text>

//           </TouchableOpacity>
//         </View>

//       </View>
//     </ImageBackground>
//   )
// }

// export default ForgotPage

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     // #050b94
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// })

