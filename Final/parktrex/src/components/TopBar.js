import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TopBar = () => {
    return (
        <View style={styles.topBar}>
            <Text style={styles.title}>ParkTrex</Text>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: '#ADDC67',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        paddingHorizontal: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default TopBar;
