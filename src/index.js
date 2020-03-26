import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App () {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Hello World </Text>
            <Text style={styles.text}> Aprendendo React-Native </Text>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159C1',
        justifyContent: "center"
        
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20

    },

});

