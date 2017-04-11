import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import profile from '../../../media/temp/profile.jpg';

class Menu extends Component {
    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTH' });
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
                <TouchableOpacity style={buttonStyle}>
                    <Text style={textStyle}>Order History</Text>    
                </TouchableOpacity> 
                <TouchableOpacity style={buttonStyle}>
                    <Text style={textStyle}>Change Info</Text>    
                </TouchableOpacity>    
                <TouchableOpacity style={buttonStyle}>
                    <Text style={textStyle}>Shipping Address</Text>    
                </TouchableOpacity> 
                <TouchableOpacity style={buttonStyle}>
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
