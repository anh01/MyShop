import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import profile from '../../../media/temp/profile.png';

class Menu extends Component {
    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTH' });
    }

    gotoOrder() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDER' });
    }

    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'USER_INFO' });
    }

    gotoShippingInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'SHIPPING_INFO' });
    }

    render() {
        const { buttonStyle, textStyle } = styles;
        return (
            <View style={styles.menuContainer}>
                <View style={{ padding: 20 }}>
                    <Image source={profile} style={{ width: 100, height: 100, borderRadius: 50 }} />
                </View>  
                <View style={{ marginBottom: 130 }}>
                    <Text style={[textStyle, { color: '#fff' }]}>Pham Truong Dang Khoa</Text>
                </View>  
                <TouchableOpacity style={buttonStyle} onPress={this.gotoOrder.bind(this)}>
                    <Text style={textStyle}>Order History</Text>    
                </TouchableOpacity> 
                <TouchableOpacity style={buttonStyle} onPress={this.gotoChangeInfo.bind(this)}>
                    <Text style={textStyle}>Change Info</Text>    
                </TouchableOpacity>    
                <TouchableOpacity style={buttonStyle} onPress={this.gotoShippingInfo.bind(this)}>
                    <Text style={textStyle}>Change Shipping</Text>    
                </TouchableOpacity> 
                <TouchableOpacity style={buttonStyle} onPress={this.gotoAuthentication.bind(this)}>
                    <Text style={textStyle}>Sign out</Text>    
                </TouchableOpacity>      
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuContainer: {
        backgroundColor: '#2ABB9C',
        flex: 1,
        alignItems: 'center',
        borderRightWidth: 3,
        borderColor: '#FFF'
    },
    buttonStyle: {
         alignSelf: 'stretch', 
         backgroundColor: '#fff', 
         padding: 15,
         borderRadius: 10,
         margin: 5
    },
    textStyle: {
        fontFamily: 'Avenir', 
        fontSize: 15,
        color: '#2ABB9C'
    }
});

export default Menu;
