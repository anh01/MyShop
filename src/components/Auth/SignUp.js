import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

class SignUp extends Component {
    render() {
        const {
            signInContainer, signInTextStyle, textInput, signInStyle
        } = styles;
        return (
            <View style={signInStyle}>
                <TextInput
                    style={textInput}
                    placeholder="Enter your name"
                />
                <TextInput
                    style={textInput}
                    placeholder="Enter your email"
                />
                <TextInput
                    style={textInput}
                    placeholder="Enter your Password"
                />
                <TextInput
                    style={textInput}
                    placeholder="Re-enter your Password"
                />
                <TouchableOpacity style={signInContainer}>
                    <Text style={signInTextStyle}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    textInput: {
        width: width - 80,
        height: 45,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20
    },
    signInTextStyle: {
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
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    }
});

export default SignUp;
