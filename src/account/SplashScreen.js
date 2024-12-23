import { StyleSheet, Text, View, ImageBackground, StatusBar, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
const SplashScreen = () => {
    return (
        <ImageBackground
            source={require('../assets/ss11.png')}
            style={styles.background}
        >
            <StatusBar
                animated={true}
                backgroundColor="transparent"
                translucent
            />
        </ImageBackground>
    )
}
export default SplashScreen
const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
