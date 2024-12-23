import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Register from './src/account/Register'
import ForgotPage from './src/account/ForgotPage'
import Login from './src/account/Login'
import SplashScreen from './src/account/SplashScreen'
import Dashboard from './src/screen/Dashboard'
import AuthStackNavigator from './src/navigation/Guestnavigation'

const App = () => {
  return (
    <AuthStackNavigator/>
  )
}

export default App

const styles = StyleSheet.create({})