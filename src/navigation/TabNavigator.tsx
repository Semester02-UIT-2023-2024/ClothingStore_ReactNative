import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'

import CustomIcon from '../components/CustomIcon'
import { COLORS } from '../theme/theme'
import { BlurView } from '@react-native-community/blur'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ 
        tabBarHideOnKeyboard: true,
        headerShown:false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
            <BlurView overlayColor="" blurAmount={15} style={styles.BlurViewStyle} />
    ) }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({focused, color, size}) => (
                <MaterialIcons
                name="home"
                size={30}
                color={focused?COLORS.primaryOrangeHex:COLORS.primaryDarkGreyHex}
                style={{marginRight: 5}}
                />
            )
        }}  
        ></Tab.Screen>
        
        <Tab.Screen name="Cart" component={CartScreen} options={{
            tabBarIcon: ({focused, color, size}) => (
                <MaterialComunityIcons
                name="cart"
                size={30}
                color={focused?COLORS.primaryOrangeHex:COLORS.primaryDarkGreyHex}
                style={{marginRight: 5}}
                />
            )
        }} 
        ></Tab.Screen>
        <Tab.Screen name="Favorite" component={FavoritesScreen} options={{
            tabBarIcon: ({focused, color, size}) => (
                <MaterialComunityIcons
                name="heart"
                size={30}
                color={focused?COLORS.primaryOrangeHex:COLORS.primaryDarkGreyHex}
                style={{marginRight: 5}}
                />
            )
        }}
        ></Tab.Screen>
        {/* <Tab.Screen name="History" component={OrderHistoryScreen} options={{
            tabBarIcon: ({focused, color, size}) => (
                <MaterialComunityIcons
                name="bell"
                size={30}
                color={focused?COLORS.primaryOrangeHex:COLORS.primaryDarkGreyHex}
                style={{marginRight: 5}}
                />
            )
        }}
        ></Tab.Screen> */}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor:COLORS.primaryBlackRGBA,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
    },

    BlurViewStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
})

export default TabNavigator