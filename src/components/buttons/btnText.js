import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default function BtnText(props) {
    return (
        <TouchableOpacity
            style={styles.container}
        >
            <Text>{props.text}</Text>
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
