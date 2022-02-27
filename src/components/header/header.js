import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from "react-native"

import {COLORS, SIZES} from '../../constants';

import BtnIcon from "../buttons/btnIcon";

export default function Header(props) {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <BtnIcon
                    icon={props.btnLeft}
                />
            </View>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.item}>
                <BtnIcon
                    icon={props.btnRight}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        marginTop: -4,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        elevation: 5,
    },
    title: {
        fontSize: SIZES.h2,
        color: COLORS.theme_orange.titleColor,
        fontWeight: "bold"
    },
    item: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    icons: {
        color: "#000",
    },
});
