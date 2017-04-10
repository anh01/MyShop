import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import profile from '../../../media/temp/profile.jpg';

class Menu extends Component {
    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTH' });
    }
    render() {
        return (
            <View style={styles.menuContainer}>
                <View style={{ padding: 20 }}>
                    <Image source={profile} style={{ width: 100, height: 100, borderRadius: 50 }} />
                </View>  
                <View style={{ marginBottom: 130 }}>
                    <Text style={{ color: '#fff', fontFamily: 'Avenir', fontSize: 15 }}>Pham Truong Dang Khoa</Text>
                </View>  
                <TouchableOpacity style={{ alignSelf: 'stretch', borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#fff', padding: 15 }}>
                    <Text style={{ color: '#fff' }}>Order History</Text>    
                </TouchableOpacity> 
                <TouchableOpacity style={{ alignSelf: 'stretch', borderBottomWidth: 1, borderColor: '#fff', padding: 15 }}>
                    <Text style={{ color: '#fff' }}>Change Info</Text>    
                </TouchableOpacity>    
                <TouchableOpacity style={{ alignSelf: 'stretch', borderBottomWidth: 1, borderColor: '#fff', padding: 15 }}>
                    <Text style={{ color: '#fff' }}>Shipping Address</Text>    
                </TouchableOpacity> 
                <TouchableOpacity style={{ alignSelf: 'stretch', borderBottomWidth: 1, borderColor: '#fff', padding: 15 }}>
                    <Text style={{ color: '#fff' }}>Sign out</Text>    
                </TouchableOpacity>      
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuContainer: {
        backgroundColor: '#002B36',
        flex: 1,
        alignItems: 'center'
    }
});

export default Menu;
