import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image,
    TouchableOpacity, Dimensions
} from 'react-native';
import logo from '../../media/appIcon/ic_logo.png';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = { signIn: true };
    }
    render() {
        const {
            wrapper, main, header, controller, textLogo, controllerLeft, controllerRight
        } = styles;

        const SignInJSX = <SignIn />;
        const SignUpJSX = <SignUp />;

        const { signIn } = this.state;
        const styleSignIn = signIn ? { color: '#39C48C', fontWeight: '600' } : { color: '#DADADA' };
        const styleSignUp = !signIn ? { color: '#39C48C', fontWeight: '600' } : { color: '#DADADA' };
        const mainJSX = signIn ? SignInJSX : SignUpJSX;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <Text style={textLogo}>Wearing a Dress</Text>
                    <Image source={logo} style={{ height: 30, width: 30 }} />
                </View>
                <View style={main}>
                    {mainJSX}
                    <View style={controller}>
                        <TouchableOpacity style={controllerLeft} onPress={() => this.setState({ ...this.state, signIn: true })}>
                            <Text style={[{ fontFamily: 'Avenir' }, styleSignIn]}>SIGN IN</Text>
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#39C48C', flex: 0.02 }}></View>
                        <TouchableOpacity style={controllerRight} onPress={() => this.setState({ ...this.state, signIn: false })}>
                            <Text style={[{ fontFamily: 'Avenir' }, styleSignUp]}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
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
        backgroundColor: '#39C48C',
        padding: 10
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        flex: 9,
        marginHorizontal: 30,
        alignItems: 'center'
    },
    controller: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#fff',
        height: 45,
        marginBottom: 20
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
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
        borderRadius: 20,
        marginBottom: 20
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

