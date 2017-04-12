import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

class ChangeInfo extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#5B4287' }}>
                <TouchableOpacity onPress={this.goBack.bind(this)}>
                    <Text>Back to Main menu</Text>
                </TouchableOpacity>
                <Text>Change Info Component</Text>
            </View>
        );
    }
}

export default ChangeInfo;
