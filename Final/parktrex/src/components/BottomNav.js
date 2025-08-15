import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const BottomNav = ({ activeTab, onTabPress }) => {
    return (
        <View style={styles.bottomNav}>
            <TouchableOpacity
                style={styles.tabButton}
                onPress={() => onTabPress('home')}
                activeOpacity={0.7}
            >
                <Text style={[styles.tabIcon, activeTab === 'home' && styles.activeTabIcon]}>
                    {activeTab === 'home' ? '🏠' : '🏠'}
                </Text>
                <Text style={[styles.tabLabel, activeTab === 'home' && styles.activeTabLabel]}>
                    Home
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.tabButton}
                onPress={() => onTabPress('favorites')}
                activeOpacity={0.7}
            >
                <Text style={[styles.tabIcon, activeTab === 'favorites' && styles.activeTabIcon]}>
                    {activeTab === 'favorites' ? '❤️' : '🤍'}
                </Text>
                <Text style={[styles.tabLabel, activeTab === 'favorites' && styles.activeTabLabel]}>
                    Favorites
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomNav: {
        backgroundColor: '#000',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#333',
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    tabLabel: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
    activeTabLabel: {
        color: '#ADDC67',
        fontWeight: '600',
    },
    tabIcon: {
        fontSize: 28,
    },
    activeTabIcon: {
        color: '#ADDC67',
    },
});

export default BottomNav;
