import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RazorpayCheckout from 'react-native-razorpay';
const PaymentPage = () => {
    const Razorpaykey_id = "rzp_test_eokIf1I0YOhokh"
    const Razorpaykey_secret = "rzp_test_1j2EPLNHZ9vHaY,AVB0oXeO60Fc5D9z1fQhccXx"
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
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
        });

    }
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity 
            onPress={()=>handlepayment()}
            style={{backgroundColor:"green",paddingVertical:10}}>
                <Text>PaymentPage</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PaymentPage

const styles = StyleSheet.create({})