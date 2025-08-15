import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';
import SearchScreen from './SearchScreen';
import FavoriteScreen from './FavoriteScreen';
import ActivityCreateScreen from './ActivityCreateScreen';
import ActivityEditScreen from './ActivityEditScreen';
import ActivityViewScreen from './ActivityViewScreen';
import ParkViewScreen from './ParkViewScreen';

const MainScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('home');
    const [currentScreen, setCurrentScreen] = useState('main');
    const [screenParams, setScreenParams] = useState({});

    const handleTabPress = (tab) => {
        setActiveTab(tab);
        setCurrentScreen('main');
    };

    const navigateToScreen = (screen, params = {}) => {
        setCurrentScreen(screen);
        setScreenParams(params);
    };

    const goBack = () => {
        if (currentScreen !== 'main') {
            setCurrentScreen('main');
            setScreenParams({});
        }
    };

    const goBackToFavorites = () => {
        setCurrentScreen('main');
        setActiveTab('favorites');
        setScreenParams({});
    };

    const renderContent = () => {
        switch (currentScreen) {
            case 'main':
                switch (activeTab) {
                    case 'home':
                        return <SearchScreen navigation={{ ...navigation, navigate: navigateToScreen }} />;
                    case 'favorites':
                        return <FavoriteScreen navigation={{ ...navigation, navigate: navigateToScreen }} />;
                    default:
                        return <SearchScreen navigation={{ ...navigation, navigate: navigateToScreen }} />;
                }
            case 'ActivityCreate':
                return <ActivityCreateScreen navigation={{ ...navigation, navigate: navigateToScreen, goBack: goBackToFavorites }} />;
            case 'ActivityEdit':
                return <ActivityEditScreen navigation={{ ...navigation, navigate: navigateToScreen, goBack: goBackToFavorites }} id={screenParams.id} />;
            case 'ActivityView':
                return <ActivityViewScreen navigation={{ ...navigation, navigate: navigateToScreen, goBack: goBackToFavorites }} id={screenParams.id} />;
            case 'ParkView':
                return <ParkViewScreen navigation={{ ...navigation, navigate: navigateToScreen, goBack }} parkCode={screenParams.parkCode} parkName={screenParams.parkName} />;
            default:
                return <SearchScreen navigation={{ ...navigation, navigate: navigateToScreen }} />;
        }
    };

    const renderTopBar = () => {
        if (currentScreen === 'main') {
            return <TopBar />;
        } else {
            return (
                <View style={styles.customTopBar}>
                    <TouchableOpacity onPress={goBack} style={styles.backButton}>
                        <Text style={styles.backButtonText}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.customTitle}>
                        {currentScreen === 'ActivityCreate' ? 'Add Park' :
                            currentScreen === 'ActivityEdit' ? 'Edit Park' :
                                currentScreen === 'ActivityView' ? 'View Park' :
                                    currentScreen === 'ParkView' ? screenParams.parkName || 'Park Details' : 'Park Details'}
                    </Text>
                    <View style={styles.placeholder} />
                </View>
            );
        }
    };

    return (
        <View style={styles.container}>
            {renderTopBar()}
            <View style={styles.content}>
                {renderContent()}
            </View>
            {currentScreen === 'main' && <BottomNav activeTab={activeTab} onTabPress={handleTabPress} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
    },
    customTopBar: {
        backgroundColor: '#ADDC67',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 50,
        paddingHorizontal: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    backButton: {
        padding: 5,
    },
    backButtonText: {
        fontSize: 24,
        color: '#000',
    },
    customTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        flex: 1,
        textAlign: 'center',
    },
    placeholder: {
        width: 34,
    },
});

export default MainScreen;
