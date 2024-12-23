import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Alert,
  Linking,
  ActivityIndicator
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import Modal from "react-native-modal";
import LocationIcon from 'react-native-vector-icons/dist/Ionicons';
import LocationClickedIcon from 'react-native-vector-icons/dist/MaterialIcons';
import CrossIcon from 'react-native-vector-icons/dist/Entypo';
import StarIcon from 'react-native-vector-icons/dist/AntDesign';
import RupeeIcon from 'react-native-vector-icons/dist/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { SliderBox } from "react-native-image-slider-box";
import appliance1 from '../assets/appliance1.png';
import Techniciansimage from '../assets/mechanic.png';
import cleaning from '../assets/cleaning.png';
import bathroomCleaning from '../assets/r2.jpg';
import HomeCleaning from '../assets/r1.jpg';
import basinrepair from '../assets/r3.jpg';
import carpenter from '../assets/carpenter.png';
import TabBar from '../common/TabBar';
import AcImage from '../assets/acrepair.jpg';
import Wasing from '../assets/wasing7.jpg';
import Refrigeratormage from '../assets/refrigerator1.jpg';
import carpaintermanImage from '../assets/carpainterman.jpg';
import plumbermanImage from '../assets/plumberman.jpg';
import electricianmanImage from '../assets/electricianman.jpg';
import Geocoder from 'react-native-geocoder';
import GetLocation from 'react-native-get-location';
const Dashboard = () => {
  const [appliance, setappliance] = useState(false)
  const [technicians, settechnicians] = useState(false)
  const [cleanings, setcleanings] = useState(false)
  const navigation = useNavigation();

  const appliancefunc = (id) => {
    if (id == 1) {
      setappliance(true)
    } else if (id == 2) {
      settechnicians(true)
    } else if (id == 3) {
      setcleanings(true)
    }
  }

  const renderItem = ({ item, index }) => {
    let imageSize = { width: 50, height: 50 }; // Default size

    // Adjust size based on id
    switch (item.id) {
      case 1:
        imageSize = { width: 35, height: 35 };
        break;
      case 2:
        imageSize = { width: 36, height: 36 };
        break;
      case 3:
        imageSize = { width: 30, height: 30 };
        break;
      case 4:
        imageSize = { width: 35, height: 35 };
        break;
      case 5:
        imageSize = { width: 10, height: 10 };
        break;
      default:
        imageSize = { width: 40, height: 40 };
    }

    return (
      <TouchableOpacity
        onPress={() => appliancefunc(item.id)}
        // onPress={() => appliancefunc(item.id)}
        style={{ marginRight: 10, marginTop: 7, justifyContent: "center", alignItems: "center", backgroundColor: '#fff', borderRadius: 70, }}>
        <View style={{
          backgroundColor: '#cbd6ee',
          height: 70,
          width: 70,
          alignItems: "center",
          borderRadius: 70,
          justifyContent: "center",
          // elevadtion: 1
        }}>
          <Image source={item.source} style={{ width: imageSize.width, height: imageSize.height, padding: 10, }} />
        </View>
        <Text style={{ color: "#000", fontSize: responsiveFontSize(1.4), fontWeight: "500", marginTop: 3, }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const recommendedrenderItem = ({ item, index }) => {
    let imageSize = { width: 50, height: 50 };

    switch (item.id) {
      case 1:
        imageSize = { width: "100%", height: "100%" };
        break;
      case 2:
        imageSize = { width: "100%", height: "100%" };
        break;
      case 3:
        imageSize = { width: "100%", height: "100%" };
        break;
      case 4:
        imageSize = { width: 35, height: 35 };
        break;
      case 5:
        imageSize = { width: 10, height: 10 };
        break;
      default:
        imageSize = { width: 40, height: 40 };
    }

    return (
      <View style={{ marginTop: 5 }}>
        <View
          // onPress={() => appliancefunc(item.id)}
          style={{
            marginRight: 10,
            justifyContent: "center",
            borderRadius: 3,
            width: 140,
            // paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: '#dee3ff',
            height: "auto",
            padding: 5

            // alignItems:"center"
          }}>


          <View style={{
            height: 100,
            width: 128,

          }}>

            <Image
              resizeMode="stretch"
              source={item.source} style={{ width: imageSize.width, height: imageSize.height, borderRadius: 3, alignSelf: "center" }} />

            <View style={{ flexDirection: "row", backgroundColor: "#fff", position: "absolute", top: 5, left: 3, paddingVertical: 2, paddingHorizontal: 5, borderRadius: 5 }}>
              <Text style={{ color: "#000", fontSize: responsiveFontSize(1.2) }}>
                4.8
              </Text>
              <StarIcon name="star" style={{ color: "#f5d759" }} />
            </View>
          </View>

          <View style={{ marginTop: 3, }}>
            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), fontWeight: "600", marginTop: 4 }}>
              {item.name}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4, }}>
            <RupeeIcon
              style={{ color: "#000", backgroundColor: '#dee3ff', fontSize: responsiveFontSize(1.3), padding: 3, borderRadius: 60, fontWeight: "600", }}
              name="currency-rupee" />
            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.6), fontWeight: "400", paddingLeft: 3 }}>
              {item.price}
            </Text>
          </View>


          <TouchableOpacity
            onPress={() => navigation.navigate("Vendorlist", { data: item.name })}
            style={{
              backgroundColor: '#dee3ff',
              paddingHorizontal: 5,
              alignItems: "center",
              borderRadius: 20,
              paddingVertical: 5,
              justifyContent: "center",
              marginTop: 5,
            }}>
            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.3), fontWeight: "600", }}>
              Select Vendors
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  };

  // 9969
  const appliancerecommendedrenderItem = ({ item, index }) => {
    let imageSize = { width: 50, height: 50 };

    switch (item.id) {
      case 1:
        imageSize = { width: "100%", height: "100%" };
        break;
      case 2:
        imageSize = { width: "100%", height: "100%" };
        break;
      case 3:
        imageSize = { width: "100%", height: "100%" };
        break;
      case 4:
        imageSize = { width: 35, height: 35 };
        break;
      case 5:
        imageSize = { width: 10, height: 10 };
        break;
      default:
        imageSize = { width: 40, height: 40 };
    }

    return (
      <View style={{ marginTop: 5 }}>
        <TouchableOpacity
          onPress={() =>  navigation.navigate(item.navigationscreen)}
          style={{
            marginRight: 10,
            borderRadius: 3,
            width: 140,
            height: 240,
          }}>
          <View style={{
            height: 200,
            width: "100%",

          }}>
            <Image
              resizeMode="cover"
              source={item.source} style={{ width: imageSize.width, height: imageSize.height, borderRadius: 3, }} />
          </View>
          <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), paddingLeft: 5, paddingTop: 5 }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const technicianscommendedrenderItem = ({ item, index }) => {
    let imageSize = { width: 50, height: 50 };

    switch (item.id) {
      case 1:
        imageSize = { width: "100%", height: "100%" };
        break;
      case 2:
        imageSize = { width: "100%", height: "100%" };
        break;
      case 3:
        imageSize = { width: "100%", height: "100%" };
        break;
      case 4:
        imageSize = { width: 35, height: 35 };
        break;
      case 5:
        imageSize = { width: 10, height: 10 };
        break;
      default:
        imageSize = { width: 40, height: 40 };
    }

    return (
      <View style={{ marginTop: 5 }}>
        <TouchableOpacity
          onPress={() =>navigation.navigate(item.navigationscreen)}
          style={{
            marginRight: 10,
            borderRadius: 3,
            width: 140,
            height: 240,
          }}>
          <View style={{
            height: 200,
            width: "100%",

          }}>

            <Image
              resizeMode="cover"
              source={item.source} style={{ width: imageSize.width, height: imageSize.height, borderRadius: 3, }} />
          </View>

          <Text style={{ color: "#000", fontSize: responsiveFontSize(1.8), paddingLeft: 5, paddingTop: 5 }}>
            {item.name}
          </Text>

        </TouchableOpacity>
      </View>
    );
  };

  const bannerimages = [
    require('../assets/banner1.jpg'),
    require('../assets/acbanner.jpg'),
    require('../assets/banner1.jpg'),
  ]

  const images = [
    { id: 1, source: appliance1, name: "Appliance Fix Service" },
    { id: 2, source: Techniciansimage, name: "Technicians" },
    { id: 3, source: cleaning, name: "Cleaning" },
    { id: 4, source: carpenter, name: "Carpenter" },

  ];

  const recomended = [
    { id: 1, source: HomeCleaning, name: "Home Cleaning", price: "500", },
    { id: 2, source: bathroomCleaning, name: "Bathroom Cleaning", price: "480" },
    { id: 3, source: basinrepair, name: "Basin Repair", price: "300" },
    // { id: 4, source: carpenter, name: "Carpenter" },

  ];

  const appliancerecomended = [
    { id: 1, source: AcImage, name: "AC Service && Repair", price: "500" ,navigationscreen:"AcDetails"},
    { id: 2, source: Refrigeratormage, name: "Refrigerator Repair", price: "480",navigationscreen:"RefrigatorDetails" },
    { id: 3, source: Wasing, name: "Washing Machine Repair", price: "300",navigationscreen:"Washingmachinedetails" },
    // { id: 4, source: carpenter, name: "Carpenter" },
  ];

  const techniciansimage = [
    { id: 1, source: electricianmanImage, name: "Electrician Repair", price:"500",navigationscreen:"Electriciansproduct" },
    { id: 2, source: plumbermanImage, name: "Plumber Repair", price:"300",navigationscreen:"PlumberProducts" },
    { id: 3, source: carpaintermanImage, name: "Carpainter Repair", price:"480",navigationscreen:"Electriciansproduct" },
    // { id: 4, source: carpenter, name: "Carpenter" },
  ];

  const acclickbutton = () => {
    setappliance(false)
    navigation.navigate("AcDetails")
  }
  const [show, setshow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [data, setdata] = useState('');
  const [data1, setdata1] = useState('');
  const [addres, setadd] = useState('');

  // location
  const mainn = async () => {
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
        const ressult = result1.slice(0, 1);
        // const ressult = result1.slice(0, 3);
        setadd(ressult);
      })
      .catch(err => console.log(err));
    console.log(addres && addres, 'check new address');
  }


  return (
    <View style={{ flex: 1, backgroundColor: '#172647' }}>
      <StatusBar
        animated={true}
        backgroundColor='#172647'
        translucent={false}
      />

      <ScrollView>

        <View style={{ paddingHorizontal: 15, marginVertical: 10 }}>

          <View style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
          }}>

            <TouchableOpacity 
            onPress={() => mainn()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: 'rgba(164, 164, 164, 0.5)',
              paddingHorizontal: 4,
              paddingVertical: 6,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 2,
              width: "62%"
            }}>
              <TouchableOpacity
                onPress={() => mainn()}
                style={{}}>
                {
                show && show ?
                  <View>
                    <ActivityIndicator
                      size="small"
                      color="#fff"
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        // backgroundColor: "#fff",
                        
                      }}
                      animating={show}
                    />
                  </View>
                  :
                  
                <LocationIcon
                  style={{ color: '#fff', fontSize: responsiveFontSize(3) }}
                  name="location-outline" />
                }

              </TouchableOpacity>
              {
                addres && addres.length > 0 ? (
                  addres.map((item, index) => {
                    console.log("565656", item.locality);
                    return (
                      <View key={index} style={{ paddingLeft: 4, width: "91%" }}>
                        <Text style={{ color: '#fff', fontSize: responsiveFontSize(1.5) }}>{item.locality}</Text>
                        <Text style={{ color: '#fff', fontSize: responsiveFontSize(1.5) }}>{item.formattedAddress}</Text>
                      </View>
                    );
                  })
                ) : (
                  <View style={{ paddingLeft: 4, width: "91%" }}>
                    <Text style={{ color: '#fff', fontSize: responsiveFontSize(1.5) }}>Choose Location</Text>
                  </View>

                )
              }

            </TouchableOpacity>

            <View style={{ width: "35%", alignItems: "flex-end" }}>
              <LocationClickedIcon
                style={{
                  color: '#fff',
                  fontSize: responsiveFontSize(3.2),
                  backgroundColor: 'rgba(164, 164, 164, 0.5)',
                  borderRadius: 70,
                  padding: 4
                }}
                name="notifications-none" />
            </View>
          </View>

          <View style={{ marginTop: 18 }}>
            <Text style={{ color: '#fff', fontSize: responsiveFontSize(2.5), fontWeight: "500" }}>Welcome , Pollab Kumar</Text>
          </View>
        </View>

        <View style={{
          flex: 2,
          backgroundColor: '#fff',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}>


          <View style={{ paddingHorizontal: 12, marginTop: 10, width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{}}>
              <Text style={{ color: '#000', fontSize: responsiveFontSize(2.2), fontWeight: "600" }}>Category</Text>
            </View>

            <View style={{}}>
              <Text style={{ color: '#000', fontSize: responsiveFontSize(1.6), fontWeight: "500", textDecorationLine: 'underline', textUnderlineOffset: 24 }}>See All</Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 10 }}>
            <FlatList
              data={images}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              horizontal
            />
          </View>

          <SliderBox
            images={bannerimages}
            imageLoadingColor="#e27e45"
            resizeMethod={'resize'}
            autoplay
            circleLoop
            resizeMode={'cover'}
            ImageComponentStyle={{ borderRadius: 5, marginTop: 27, backgroundColor: "#000", width: "96%", height: 165 }}
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

          <View style={{ paddingHorizontal: 10, marginTop: 5 }}>
            <Text style={{ color: "#000", fontSize: responsiveFontSize(2.2), fontWeight: "600" }}>
              Recommended
            </Text>
          </View>

          <View style={{ paddingHorizontal: 10 }}>
            <FlatList
              data={recomended}
              renderItem={recommendedrenderItem}
              keyExtractor={item => item.id.toString()}
              horizontal
            />
          </View>

          {/* Appliance Services */}
          <View style={{ paddingHorizontal: 10, marginTop: 13 }}>
            <Text style={{ color: "#000", fontSize: responsiveFontSize(2.2), fontWeight: "600" }}>
              Appliance Services
            </Text>
          </View>

          <View style={{ paddingHorizontal: 10, marginTop: 4 }}>
            <FlatList
              data={appliancerecomended}
              renderItem={appliancerecommendedrenderItem}
              keyExtractor={item => item.id.toString()}
              horizontal
            />
          </View>

          {/* Technicians */}
          <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
            <Text style={{ color: "#000", fontSize: responsiveFontSize(2.2), fontWeight: "600" }}>
              Technicians
            </Text>
          </View>

          <View style={{ paddingHorizontal: 10 }}>
            <FlatList
              data={techniciansimage}
              renderItem={technicianscommendedrenderItem}
              keyExtractor={item => item.id.toString()}
              horizontal
            />
          </View>

          <View style={{ height: 100 }}></View>
        </View>

        {/* appliance */}
        <Modal
          isVisible={appliance}
          onBackdropPress={() => setappliance(false)}
          onSwipeComplete={() => setappliance(false)}
          backdropOpacity={0.5}
          style={{ justifyContent: 'flex-end', margin: 0 }}
        >
          <View
            style={{
              height: "auto",
              backgroundColor: "#fff",
              position: "absolute",
              bottom: 0,
              right: 0,
              left: 0,
              width: "100%",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              // paddingHorizontal: 15,

            }}>
            <View style={{
              marginTop: 10,
              paddingVertical: 5,
              paddingHorizontal: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
              <View style={{}}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(2.7), fontWeight: "700" }}>Appliance Fix Services</Text>
              </View>
              <TouchableOpacity
                onPress={() => setappliance(false)}
                style={{}}>
                <CrossIcon
                  name="squared-cross"
                  style={{ color: "#000", fontSize: responsiveFontSize(2.5), borderRadius: 50 }}
                />
              </TouchableOpacity>
            </View>

            <View style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              gap: 5,
              flexWrap: "wrap",
              marginTop: 10,
              alignItems: "center",
              paddingTop: 5
            }}>
              <TouchableOpacity
                onPress={() => acclickbutton()}
                style={{ width: "32%", alignItems: "center", backgroundColor: "#f1f1f1", borderRadius: 5, paddingVertical: 6, elevation: 2, height: 90 }}>
                <View style={{}}>
                  <Image
                    style={{ width: 40, height: 40 }}
                    source={require("../assets/ac.png")}
                  />

                </View>
                <Text style={{ color: "#000", paddingTop: 2, fontSize: responsiveFontSize(1.7) }}>
                  Ac Service && Repair
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("ChimnyDetails")}
                style={{ height: 90, width: "32%", alignItems: "center", backgroundColor: "#f1f1f1", borderRadius: 5, paddingVertical: 6, elevation: 2 }}>
                <View style={{ paddingTop: 5 }}>
                  <Image
                    style={{ width: 35, height: 35 }}
                    source={require("../assets/chimney.png")}
                  />

                </View>
                <Text style={{ color: "#000", paddingTop: 6, fontSize: responsiveFontSize(1.7), alignSelf: "center" }}>
                  Chimney  Repair
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("RefrigatorDetails")}
                style={{ height: 90, width: "32%", alignItems: "center", backgroundColor: "#f1f1f1", borderRadius: 5, paddingVertical: 6, elevation: 2 }}>
                <View style={{ paddingTop: 5 }}>
                  <Image
                    style={{ width: 35, height: 35 }}
                    source={require("../assets/refrigerator.png")}
                  />

                </View>
                <Text style={{ color: "#000", paddingTop: 6, fontSize: responsiveFontSize(1.7), alignSelf: "center" }}>
                  Refrigerator Repair
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Washingmachinedetails")}
                style={{ height: 90, width: "32%", marginTop: 5, alignItems: "center", backgroundColor: "#f1f1f1", borderRadius: 5, paddingVertical: 6, elevation: 2 }}>
                <View style={{ paddingTop: 5 }}>
                  <Image
                    style={{ width: 35, height: 35 }}
                    source={require("../assets/washingmachine.png")}
                  />

                </View>
                <Text style={{ color: "#000", paddingTop: 6, fontSize: responsiveFontSize(1.7), alignSelf: "center" }}>
                  Washing Machine  Repair
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("WaterPurifiedDetails")}
                style={{ height: 90, width: "32%", marginTop: 5, alignItems: "center", backgroundColor: "#f1f1f1", borderRadius: 5, paddingVertical: 6, elevation: 2 }}>
                <View style={{ paddingTop: 5 }}>
                  <Image
                    style={{ width: 35, height: 35 }}
                    source={require("../assets/waterfilter.png")}
                  />

                </View>
                <Text style={{ color: "#000", paddingTop: 6, fontSize: responsiveFontSize(1.7), alignSelf: "center" }}>
                  Water Purifier  Repair
                </Text>
              </TouchableOpacity>

            </View>

            <View style={{ paddingBottom: 20 }}>
            </View>


          </View>
        </Modal>

        {/* Technicians */}
        <Modal
          isVisible={technicians}
          onBackdropPress={() => settechnicians(false)}
          onSwipeComplete={() => settechnicians(false)}
          backdropOpacity={0.5}
          style={{ justifyContent: 'flex-end', margin: 0 }}
        >
          <View
            style={{
              height: "auto",
              backgroundColor: "#fff",
              position: "absolute",
              bottom: 0,
              right: 0,
              left: 0,
              width: "100%",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              // paddingHorizontal: 15,

            }}>

            <View style={{
              marginTop: 10,
              paddingVertical: 5,
              paddingHorizontal: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
              <View style={{}}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(2.4), fontWeight: "700" }}>Electrician,Plumber && Carpainter</Text>
              </View>
              <TouchableOpacity
                onPress={() => settechnicians(false)}
                style={{}}>
                <CrossIcon
                  name="squared-cross"
                  style={{ color: "#000", fontSize: responsiveFontSize(2.5), }}
                />
              </TouchableOpacity>
            </View>

            <View style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              gap: 5,
              flexWrap: "wrap",
              marginTop: 10,
              alignItems: "center",
              paddingTop: 5
            }}>




              <TouchableOpacity
                onPress={() => navigation.navigate(" ")}
                style={{ height: 90, width: "32%", alignItems: "center", backgroundColor: "#f1f1f1", borderRadius: 5, paddingVertical: 6, elevation: 2 }}>
                <View style={{ paddingTop: 5 }}>
                  <Image
                    style={{ width: 35, height: 35 }}
                    source={require("../assets/electriciannn.png")}
                  />

                </View>
                <Text style={{ color: "#000", paddingTop: 6, fontSize: responsiveFontSize(1.7), alignSelf: "center" }}>
                  Electrician
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("PlumberProducts")}
                style={{ height: 90, width: "32%", alignItems: "center", backgroundColor: "#f1f1f1", borderRadius: 5, paddingVertical: 6, elevation: 2 }}>
                <View style={{ paddingTop: 9 }}>
                  <Image
                    style={{ width: 29, height: 29 }}
                    source={require("../assets/tap.png")}
                  />

                </View>
                <Text style={{ color: "#000", paddingTop: 6, fontSize: responsiveFontSize(1.7), alignSelf: "center" }}>
                  Plumber
                </Text>
              </TouchableOpacity>

              <View style={{ height: 90, width: "32%", marginTop: 5, alignItems: "center", backgroundColor: "#f1f1f1", borderRadius: 5, paddingVertical: 6, elevation: 2 }}>
                <View style={{ paddingTop: 5 }}>
                  <Image
                    style={{ width: 35, height: 35 }}
                    source={require("../assets/toolbox.png")}
                  />

                </View>
                <Text style={{ color: "#000", paddingTop: 6, fontSize: responsiveFontSize(1.7), alignSelf: "center" }}>
                  Carpainter
                </Text>
              </View>



            </View>

            <View style={{ paddingBottom: 10 }}>
            </View>


          </View>
        </Modal>

        {/* Cleaning */}
        <Modal
          isVisible={cleanings}
          onBackdropPress={() => setcleanings(false)}
          onSwipeComplete={() => setcleanings(false)}
          backdropOpacity={0.5}
          style={{ justifyContent: 'flex-end', margin: 0 }}
        >
          <View
            style={{
              height: "auto",
              backgroundColor: "#fff",
              position: "absolute",
              bottom: 0,
              right: 0,
              left: 0,
              width: "100%",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              // paddingHorizontal: 15,

            }}>
            <View style={{
              marginTop: 10,
              paddingVertical: 5,
              paddingHorizontal: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
              <View style={{}}>
                <Text style={{ color: "#000", fontSize: responsiveFontSize(2.4), fontWeight: "700" }}>Cleaning</Text>
              </View>
              <TouchableOpacity
                onPress={() => setcleanings(false)}
                style={{}}>
                <CrossIcon
                  name="squared-cross"
                  style={{ color: "#000", fontSize: responsiveFontSize(2.9), }}
                />
              </TouchableOpacity>
            </View>

            <View style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              gap: 5,
              flexWrap: "wrap",
              marginTop: 1,
              alignItems: "center",
              paddingTop: 5
            }}>




              <View style={{ height: 90, width: "32%", alignItems: "center", backgroundColor: "#f1f1f1", borderRadius: 5, paddingVertical: 6, elevation: 2 }}>
                <View style={{ paddingTop: 5 }}>
                  <Image
                    style={{ width: 35, height: 35 }}
                    source={require("../assets/bathroom.png")}
                  />

                </View>
                <Text style={{ color: "#000", paddingTop: 6, fontSize: responsiveFontSize(1.7), alignSelf: "center" }}>
                  Bathroom  cleaning
                </Text>
              </View>

              <View style={{ height: 90, width: "32%", alignItems: "center", backgroundColor: "#f1f1f1", borderRadius: 5, paddingVertical: 6, elevation: 2 }}>
                <View style={{ paddingTop: 9 }}>
                  <Image
                    style={{ width: 35, height: 35 }}
                    source={require("../assets/gardener.png")}
                  />

                </View>
                <Text style={{ color: "#000", paddingTop: 6, fontSize: responsiveFontSize(1.7), alignSelf: "center" }}>
                  Garden Cleaning
                </Text>
              </View>


            </View>

            <View style={{ paddingBottom: 10 }}>
            </View>


          </View>
        </Modal>

      </ScrollView>
      
      <TabBar />
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})