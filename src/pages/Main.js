import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';

import logo from '../assets/logo.png';


export default function Main() {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo}/>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    text: {
        fontWeight: 'bold',
    },



});