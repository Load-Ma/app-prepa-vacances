import React from 'react';
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default function BtnIcon(props) {
    return (
        <TouchableOpacity
            style={styles.container}
        >
            {props.icon}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#242424",
        padding: 10,
        borderRadius: 14,
    },
});
