import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../account/Login';
import Dashboard from '../screen/Dashboard';
import ForgotPage from '../account/ForgotPage';
import SplashScreen from '../account/SplashScreen';
import Electriciansproduct from '../screen/Electriciansproduct';
import AcDetails from '../screen/AcDetails';
import ChimnyDetails from '../screen/ChimnyDetails';
import RefrigatorDetails from '../screen/RefrigatorDetails';
import Washingmachinedetails from '../screen/Washingmachinedetails';
import WaterPurifiedDetails from '../screen/WaterPurifiedDetails';
import PlumberProducts from '../screen/PlumberProducts';
import Vendorlist from '../screen/Vendorlist';
import ThankYoupage from '../screen/ThankYoupage';
import Register from '../account/Register';
import PaymentDetail from '../screen/PaymentDetail';
import BookingPage from '../screen/BookingPage';
import Electricianproductdetails from '../screen/Electricianproductdetails';
import CompletedVendorList from '../screen/CompletedVendorList';
import RejectedBooking from '../screen/RejectedBooking';
import PaymentPage from '../screen/PaymentPage';


const AuthStackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Electriciansproduct" component={Electriciansproduct} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="PaymentPage" component={PaymentPage} />
        <Stack.Screen name="RejectedBooking" component={RejectedBooking} />
        <Stack.Screen name="BookingPage" component={BookingPage} />
        <Stack.Screen name="CompletedVendorList" component={CompletedVendorList} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PaymentDetail" component={PaymentDetail} />
        <Stack.Screen name="Electricianproductdetails" component={Electricianproductdetails} />
        <Stack.Screen name="ThankYoupage" component={ThankYoupage} />
        <Stack.Screen name="Vendorlist" component={Vendorlist} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="ForgotPage" component={ForgotPage} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="PlumberProducts" component={PlumberProducts} />
        <Stack.Screen name="WaterPurifiedDetails" component={WaterPurifiedDetails} />
        <Stack.Screen name="Washingmachinedetails" component={Washingmachinedetails} />
        <Stack.Screen name="RefrigatorDetails" component={RefrigatorDetails} />
        <Stack.Screen name="ChimnyDetails" component={ChimnyDetails} />
        <Stack.Screen name="AcDetails" component={AcDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackNavigator;
