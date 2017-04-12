import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

class OrderHistory extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <TouchableOpacity onPress={this.goBack.bind(this)}>
                    <Text>Back to Main menu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default OrderHistory;
