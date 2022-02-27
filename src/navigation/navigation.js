import React from "react";
import {StyleSheet, View} from 'react-native';
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StatusBar} from 'expo-status-bar';

// screens
import {Home} from '../screens';

import {icons} from "../constants";
import Star from "../assets/icons/star.svg";

const Stack = createNativeStackNavigator();

export default function NavBar() {
    return (
        <NavigationContainer>
            <StatusBar/>
            <View style={styles.container}>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name={"Home"}
                        component={Home}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name={"Group"}
                        component={Home}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 35,
        backgroundColor: "#F5F5F5",
        height: "100%"
    },
})
