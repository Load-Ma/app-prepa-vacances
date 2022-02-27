import React from "react";
import {TouchableOpacity, Image, View, Text, StyleSheet, FlatList} from 'react-native';

import {images} from "../constants"

import Settings from "../assets/icons/settings.svg"

import GroupCard from "../components/cards/groupCard";
import GroupCardPopup from "../components/popups/groupCardPopup";

const GROUP = [
    {
        id: 1,
        name: "Les vacanciers",
        voyageurs: 7,
        more: 4,
        groupPicture: images.cartoonManGrey,
        pdp1: images.cartoonWomanBlue,
        pdp2: images.cartoonManPink,
        pdp3: images.cartoonWomanPurple,
    },
    {
        id: 2,
        name: "Les vacanciers",
        voyageurs: 7,
        more: 4,
        groupPicture: images.cartoonManGrey,
        pdp1: images.cartoonWomanBlue,
        pdp2: images.cartoonManPink,
        pdp3: images.cartoonWomanPurple,
    },
    {
        id: 3,
        name: "Les vacanciers",
        voyageurs: 7,
        more: 4,
        groupPicture: images.cartoonManGrey,
        pdp1: images.cartoonWomanBlue,
        pdp2: images.cartoonManPink,
        pdp3: images.cartoonWomanPurple,
    },
    {
        id: 4,
        name: "Les vacanciers",
        voyageurs: 7,
        more: 4,
        groupPicture: images.cartoonManGrey,
        pdp1: images.cartoonWomanBlue,
        pdp2: images.cartoonManPink,
        pdp3: images.cartoonWomanPurple,
    },
    {
        id: 5,
        name: "Les vacanciers",
        voyageurs: 7,
        more: 4,
        groupPicture: images.cartoonManGrey,
        pdp1: images.cartoonWomanBlue,
        pdp2: images.cartoonManPink,
        pdp3: images.cartoonWomanPurple,
    },
    {
        id: 6,
        name: "Les vacanciers",
        voyageurs: 7,
        more: 4,
        groupPicture: images.cartoonManGrey,
        pdp1: images.cartoonWomanBlue,
        pdp2: images.cartoonManPink,
        pdp3: images.cartoonWomanPurple,
    },
    {
        id: 7,
        name: "Les vacanciers",
        voyageurs: 7,
        more: 4,
        groupPicture: images.cartoonManGrey,
        pdp1: images.cartoonWomanBlue,
        pdp2: images.cartoonManPink,
        pdp3: images.cartoonWomanPurple,
    },
];

export default function Home() {

    const renderGroup = ({item}) => {
        return (
            <GroupCard
                group={item}
            />
        )
    }

    return (
        <View style={styles.page}>
            <View
                style={styles.header}
            >
                <TouchableOpacity style={styles.settingsBtn} activeOpacity={0.6}>
                    <Settings width={25} height={25} color={"#6C6C6C"}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileBtn} activeOpacity={0.6}>
                    <Text style={styles.profileText} numberOfLines={1}>
                        Hugo Gautier
                    </Text>
                    <Image
                        style={styles.profileImage}
                        source={images.cartoonManPink}
                    />
                </TouchableOpacity>
            </View>

            <FlatList
                contentContainerStyle={{flexGrow: 1}}
                ListHeaderComponent={<Text style={styles.title}>Groupes</Text>}
                style={styles.body}
                data={GROUP}
                renderItem={renderGroup}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        zIndex: 1,
    },
    settingsBtn: {
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    },
    profileBtn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#fff",
        padding: 10,
        maxWidth: 173,
        shadowColor: "rgba(0,0,0,0.5)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    profileText: {
        maxWidth: 110,
    },
    profileImage: {
        marginLeft: 8,
        width: 45,
        height: 45,
        borderRadius: 50,
    },
    body: {
        backgroundColor: "#F5F5F5",
        paddingBottom: 25,
        paddingLeft: 15,
        paddingRight: 15,
        width: "100%",
    },
    title: {
        width: "100%",
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 109,
        paddingLeft: 20,
        marginBottom: 30,
    },
});
