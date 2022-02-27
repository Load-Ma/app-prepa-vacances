import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import Star from "../../assets/icons/star.svg"
import MoreV from "../../assets/icons/more-vertical.svg"
import Chat from "../../assets/icons/message-square.svg"
import Bell from "../../assets/icons/bell.svg"

import {images} from "../../constants"
import GroupCardPopup from "../popups/groupCardPopup";


export default function GroupCard({group}) {
    let fillColor;
    if (group.favorite) fillColor="#ffd700";
    return (
        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.6}
        >
            <View style={styles.header}>
                <View style={styles.groupInfo}>
                    <Image
                        style={styles.groupPicture}
                        source={group.groupPicture/* || images.default */} // todo - ajouter une photo par défault pour toutes les images
                    />
                    <View style={styles.groupName}>
                        <Text style={styles.name} numberOfLines={1}>{group.name}</Text>
                        <Text style={styles.info}>{group.voyageurs} voyageurs</Text>
                    </View>
                </View>
                <View style={styles.icons}>
                    <TouchableOpacity>
                        <Star style={styles.iconLeft18} height={24} width={24} color={"#ffd700"} fill={{fillColor}}/>
                    </TouchableOpacity>
                    <GroupCardPopup>
                        <MoreV height={24} width={24} color={"#000"}/>
                    </GroupCardPopup>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.groupNotif}>
                    <View style={styles.icon}>
                        <Chat height={23} width={23} color={"#000"}/>
                    </View>
                    <View style={styles.icon}>
                        <Bell height={23} width={23} color={"#000"}/>
                    </View>
                </View>
                <View style={styles.groupMembers}>
                    <Image
                        style={styles.profilePicture}
                        source={group.pdp1}
                    />
                    <Image
                        style={styles.profilePicture}
                        source={group.pdp2}
                    />
                    <Image
                        style={styles.profilePicture}
                        source={group.pdp3}
                    />
                    {group.more !== undefined ? (
                        <View style={styles.profilePicture}>
                            <Text>+{group.more}</Text>
                        </View>
                    ) : null}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        marginBottom: 20,
        padding: 10,
        borderRadius: 20,
        backgroundColor: "#fff",
        shadowColor: "rgba(0,0,0,0.5)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    groupInfo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    groupPicture: {
        marginRight: 10,
        width: 75,
        height: 75,
        borderRadius: 73,
    },
    groupName: {
        display: "flex",
        flexDirection: "column",
    },
    name: {
        maxWidth: 180,
        fontSize: 20,
    },
    info: {
        fontSize: 13,
        color: "#6C6C6C",
    },
    icons: {
        marginTop: -15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    iconLeft18: {
        marginRight: 18
    },
    body: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        padding: 10,
    },
    groupNotif: {
        display: "flex",
        flexDirection: "row",
    },
    icon: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 4,
        padding: 10,
        borderRadius: 35,
        shadowColor: "rgba(0,0,0,0.2)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: "#fff",
    },
    groupMembers: {
        display: "flex",
        flexDirection: "row",
    },
    profilePicture: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: -5,
        width: 40,
        height: 40,
        borderRadius: 59,
        backgroundColor: "#fff",
    },
});
