import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Platform, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// ICONS IMPORT
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// THEME IMPORT
import * as theme from '../Constants/theme';

const Header = (props) => {
    return (
        <View style={{backgroundColor: 'white'}}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[theme.colors.themeCol1, theme.colors.themeCol2]} style={styles.linearGradient}>
                <SafeAreaView style={{flex: 1, justifyContent: 'flex-end'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', padding: theme.appDims.boundary, paddingBottom: 20}}>
                        {props.back && (
                            <TouchableOpacity style={{...styles.circleContainer, marginRight: 10}} onPress={() => props.navigation.goBack()}>
                                <MaterialCommunityIcons name={'arrow-left'} size={25} color={'white'} />
                            </TouchableOpacity>
                        )}
                        {props.left}
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>{props.right}</View>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        ...Platform.select({
            ios: {
                height: 120,
            },
            android: {
                height: 100,
            },
        }),
    },
    circleContainer: {
        height: 45,
        width: 45,
        borderRadius: 25,
        backgroundColor: 'rgba(255,255,255,0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Header;
