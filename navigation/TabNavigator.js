import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home, Details, Profile, Search, Cart } from '../screens';
const homeName = 'Home';
const searchName = 'Search';
const cartName = 'Cart';
const profileName = 'Profile';

import { COLORS } from "../constants";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home2" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
}
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
                    } else if (rn === searchName) {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (rn === cartName) {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (rn == profileName) {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: COLORS.white, borderTopWidth: 0, borderTopColor: "transparent", padding: 0, paddingBottom: 10 },
                tabBarInactiveTintColor: COLORS.lightDark,
                tabBarStyle: {
                    padding: 10, height: 70, elivation: 0
                },
                tabBarActiveTintColor: COLORS.dark,
                tabBarInactiveTintColor: 'grey',
                tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} options={({ route }) => ({
                tabBarStyle: {
                    display: getTabBarVisibility(route),
                },
            })} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
};
const getTabBarVisibility = route => {
    // console.log(route);
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    // console.log(routeName);

    if (routeName == 'Details') {
        return 'none';
    }
    return 'flex';
};

export default TabNavigator;