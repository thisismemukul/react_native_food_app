import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home, Search,Cart } from '../screens';
const homeName = 'Home';
const profileName = 'Search';
const cartName = 'Cart';

import {COLORS} from "../constants";

const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen
//                 name="Home"
//                 component={Home}
//                 options={{
//                     tabBarIcon: ({ focused }) => {
//                         <Ionicons style={{ tintColor: focused ? "yellow" : "red" }} name="home-outline" size="4" color="red" />;
//                     }
//                 }}
//             />
//             <Tab.Screen name="Search" component={Search} />
//         </Tab.Navigator>
//     )
// }
const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;
                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === profileName) {
                        iconName = focused ? 'search' : 'search-outline';
                    }else if (rn === cartName) {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                tabBarShowLabel:false,
                tabBarStyle:{backgroundColor:COLORS.white,borderTopWidth:0,borderTopColor:"transparent"},
                tabBarInactiveTintColor:COLORS.lightDark,
            })}
            tabBarOptions={{
                activeTintColor: COLORS.dark,
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 10 },
                style: { padding: 10, height: 70, backgroundColor: "green", elivation: 0 }
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
    )
}

export default TabNavigator;