import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

class ShippingInfo extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#B7E5D5' }}>
                <TouchableOpacity onPress={this.goBack.bind(this)}>
                    <Text>Back to Main menu</Text>
                </TouchableOpacity>
                <Text>Shipping Info Component</Text>
            </View>
        );
    }
}

export default ShippingInfo;
