import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, Image } from 'react-native';
import global from '../../../../global';
import logo from '../../../../../media/appIcon/ic_logo.png';

export default class Checkout extends Component {
    render() {
        const {
            wrapper, main, header, textLogo, textInput
        } = styles;
        return (
            <View style={wrapper}>
                <View style={main}>
                    <TextInput
                        style={textInput}
                        placeholder="Enter your email"
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your Password"
                    />
                    <Text style={{ color: '#FFF', fontFamily: 'Avenir' }}>Forgot your password</Text>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#2ABB9C',
        padding: 10
    },
    header: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        flex: 4,
        marginHorizontal: 30,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    controller: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#fff',
        height: 45
    },
    textLogo: {
        color: '#FFFFFF',
        fontSize: 30,
        fontFamily: 'Avenir',
        marginRight: 10
    },
    controllerLeft: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        margin: 10,
        marginRight: 0,
        justifyContent: 'center',
        flex: 1
    },
    controllerRight: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        margin: 10,
        marginLeft: 0,
        justifyContent: 'center',
        flex: 1
    },
    textInput: {
        width: width - 80,
        height: 45,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20
    },
    signInTexStyle: {
        color: '#FFF', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20
    },
    signInContainer: {
        borderColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    }
});


// onPress={() => { 
//         global.goToHome(); 
//         this.props.navigator.pop();
//     }}