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
const bgImage = require('../../../assets/images/SignIn.png');

class SignIn extends Component {
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
                            <ScrollView style={{flex: 1, padding: 20}}>
                                {/* HEADER */}
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <MaterialIcons name={'chevron-left'} size={30} color={'white'} />
                                </TouchableOpacity>

                                {/* SOME MESSAGE */}
                                <Text style={{fontSize: 40, color: 'white', marginVertical: 80}}>{'Welcome\nBack'}</Text>

                                {/* FORM */}
                                <TextInput
                                    style={{
                                        ...styles.inputStyle,
                                    }}
                                    placeholder={'Email'}
                                    placeholderTextColor={'grey'}></TextInput>

                                <TextInput
                                    style={{
                                        ...styles.inputStyle,
                                        marginTop: 50,
                                    }}
                                    placeholder={'Password'}
                                    placeholderTextColor={'grey'}></TextInput>

                                <View style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 30, color: theme.colors.primaryCol1, marginVertical: 50}}>Sign in</Text>
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
                                    <TouchableOpacity style={{...styles.textBtn}} onPress={() => this.props.navigation.navigate('SignUp')}>
                                        <Text style={{...styles.textBtnLabel}}>Sign up</Text>
                                    </TouchableOpacity>
                                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                                        <TouchableOpacity style={{...styles.textBtn}}>
                                            <Text style={{...styles.textBtnLabel}}>Forgot Password</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ScrollView>
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
        color: 'black',
        width: '100%',
        marginTop: 100,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 0.5,
        paddingBottom: 15,
    },
    textBtn: {
        borderBottomColor: theme.colors.primaryCol1,
        borderBottomWidth: 1,
        marginVertical: 50,
    },
    textBtnLabel: {
        fontSize: 20,
        color: theme.colors.primaryCol1,
    },
});

export default SignIn;
