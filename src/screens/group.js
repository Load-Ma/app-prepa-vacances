import React from "react";
import { TouchableOpacity, View, Text } from 'react-native';
import Star from "../assets/icons/star.svg";

export default function Group() {
    return (
        <View>
            <Text>Group</Text>
            <Star height={25} width={25} color={"black"}/>
        </View>
    );
}
