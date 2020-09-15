/* Libraries */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    SafeAreaView,
    Platform,
    ScrollView,
    Dimensions,
    ImageBackground,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from 'react-native';

// ICON IMPORT
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// THEME IMPORT
import * as theme from '../../Constants/theme';

// HELPER IMPORT
import Helper from '../../Constants/helper';

// CONSTANTS
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const bgImage = require('../../../assets/images/SignUp.png');

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        headerShown: false,
    };

    // LIFECYCLE METHODS
    componentDidMount = () => {};
    // END LIFECYCLE METHODS

    // UTILITY FUNCTIONS
    // END UTILITY FUNCTIONS

    // RENDERING FUNCTIONS
    render() {
        return (
            <ImageBackground source={bgImage} style={{height: '100%', width: '100%'}}>
                <SafeAreaView style={{flex: 1}}>
                    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={{flex: 1, padding: 20}}>
                                {/* HEADER */}
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <MaterialIcons name={'chevron-left'} size={30} color={'white'} />
                                </TouchableOpacity>

                                {/* SOME MESSAGE */}
                                <Text style={{fontSize: 40, color: 'white', marginTop: 80, marginBottom: 40}}>{'Create\nAccount'}</Text>

                                {/* FORM */}
                                <TextInput
                                    style={{
                                        ...styles.inputStyle,
                                        marginTop: 20,
                                    }}
                                    placeholder={'Name'}
                                    placeholderTextColor={'white'}></TextInput>

                                <TextInput
                                    style={{
                                        ...styles.inputStyle,
                                    }}
                                    placeholder={'Email'}
                                    placeholderTextColor={'white'}></TextInput>

                                <TextInput
                                    style={{
                                        ...styles.inputStyle,
                                    }}
                                    placeholder={'Password'}
                                    placeholderTextColor={'white'}></TextInput>

                                <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
                                    <Text style={{fontSize: 30, color: 'white', marginVertical: 50}}>Sign up</Text>
                                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                                        <TouchableOpacity
                                            style={{
                                                height: 70,
                                                width: 70,
                                                borderRadius: 40,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: theme.colors.primaryCol1,
                                            }}>
                                            <MaterialIcons name={'arrow-forward'} size={30} color={'white'} />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                                    <TouchableOpacity style={{...styles.textBtn}} onPress={() => this.props.navigation.navigate('SignIn')}>
                                        <Text style={{...styles.textBtnLabel}}>Sign in</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </ImageBackground>
        );
    }
    // END RENDERING FUNCTIONS
}

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 20,
        color: 'white',
        width: '100%',
        marginTop: 50,
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
        paddingBottom: 15,
    },
    textBtn: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginVertical: 50,
    },
    textBtnLabel: {
        fontSize: 20,
        color: 'white',
    },
});

export default SignUp;
